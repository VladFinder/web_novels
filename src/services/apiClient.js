import { toDateString } from '@/utils/dates';

const fallbackBase =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api'
    : '/api';

const API_BASE = process.env.VUE_APP_API_URL || fallbackBase;

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const request = async (path, options = {}) => {
  const { body, headers, ...rest } = options;
  const response = await fetch(`${API_BASE}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {})
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    let details = '';
    try {
      const data = await response.json();
      details = data?.error || data?.message || '';
    } catch {
      // ignore
    }
    throw new ApiError(details || response.statusText, response.status);
  }

  if (response.status === 204) {
    return null;
  }

  try {
    return await response.json();
  } catch {
    return null;
  }
};

export const getApiUrl = () => API_BASE;

export const ensureUser = async (telegramId, login) => {
  try {
    return await request(`/users/${telegramId}`);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      await request('/users', {
        method: 'POST',
        body: { telegramId, login: login || telegramId }
      });
      return request(`/users/${telegramId}`);
    }
    throw error;
  }
};

export const saveEmotion = async ({ telegramId, emotion, note = '', date, username }) =>
  request('/emotions', {
    method: 'POST',
    body: {
      telegramId,
      emotion,
      note,
      date: date || toDateString(new Date()),
      username: username || 'Пользователь'
    }
  });

export const getEmotionByDate = async (telegramId, date) => {
  try {
    return await request(`/emotions/${telegramId}/${toDateString(date)}`);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }
    throw error;
  }
};

export const hasEmotionOnDate = async (telegramId, date) => {
  const emotion = await getEmotionByDate(telegramId, date);
  return Boolean(emotion);
};

export const getEmotionsRange = async (telegramId, startDate, endDate) =>
  request(`/emotions?${new URLSearchParams({
    telegramId: String(telegramId),
    startDate: toDateString(startDate),
    endDate: toDateString(endDate)
  }).toString()}`);

export const saveThought = async ({ telegramId, text, date }) =>
  request('/thoughts', {
    method: 'POST',
    body: {
      telegramId,
      thought: text,
      date: date ? toDateString(date) : undefined
    }
  });

export const getThoughtsByDate = async (telegramId, date) => {
  try {
    return await request(`/thoughts/${telegramId}/${toDateString(date)}`);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return [];
    }
    throw error;
  }
};

export const apiClient = {
  getApiUrl,
  ensureUser,
  saveEmotion,
  getEmotionByDate,
  hasEmotionOnDate,
  getEmotionsRange,
  saveThought,
  getThoughtsByDate
};
