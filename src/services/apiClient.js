import { db } from '@/firebase';
import {
  doc, getDoc, setDoc, getDocs, updateDoc,
  collection, query, orderBy, startAt, endAt,
  documentId, arrayUnion
} from 'firebase/firestore';
import { toDateString } from '@/utils/dates';

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// -------- Пользователи --------

export const ensureUser = async (telegramId, login) => {
  const id = String(telegramId);
  const ref = doc(db, 'users', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    const now = new Date().toISOString();
    await setDoc(ref, { telegramId: id, login: login || id, createdAt: now, updatedAt: now });
  }
  return (await getDoc(ref)).data();
};

export const getApiUrl = () => 'firebase';

// -------- Эмоции --------

export const saveEmotion = async ({ telegramId, emotion, note = '', date, username }) => {
  const id = String(telegramId);
  const dateStr = date || toDateString(new Date());
  const ref = doc(db, 'emotions', id, 'dates', dateStr);
  const data = {
    emotion,
    note,
    username: username || 'Пользователь',
    timestamp: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  await setDoc(ref, data);
  return data;
};

export const getEmotionByDate = async (telegramId, date) => {
  const id = String(telegramId);
  const dateStr = toDateString(date);
  const snap = await getDoc(doc(db, 'emotions', id, 'dates', dateStr));
  if (!snap.exists()) return null;
  return { ...snap.data(), date: dateStr };
};

export const hasEmotionOnDate = async (telegramId, date) => {
  const emotion = await getEmotionByDate(telegramId, date);
  return Boolean(emotion);
};

export const getEmotionsRange = async (telegramId, startDate, endDate) => {
  const id = String(telegramId);
  const start = toDateString(startDate);
  const end = toDateString(endDate);
  const q = query(
    collection(db, 'emotions', id, 'dates'),
    orderBy(documentId()),
    startAt(start),
    endAt(end)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ ...d.data(), date: d.id }));
};

// -------- Мысли --------

export const saveThought = async ({ telegramId, text, date }) => {
  const id = String(telegramId);
  const dateStr = date ? toDateString(date) : toDateString(new Date());
  const ref = doc(db, 'thoughts', id, 'dates', dateStr);
  const thought = {
    id: Date.now().toString(),
    text,
    timestamp: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { items: arrayUnion(thought) });
  } else {
    await setDoc(ref, { items: [thought] });
  }
  return thought;
};

export const getThoughtsByDate = async (telegramId, date) => {
  const id = String(telegramId);
  const dateStr = toDateString(date);
  const snap = await getDoc(doc(db, 'thoughts', id, 'dates', dateStr));
  if (!snap.exists()) return [];
  return snap.data().items || [];
};

// -------- Истории --------

export const getStories = async () => {
  const snap = await getDocs(collection(db, 'stories'));
  return snap.docs.map(d => d.data());
};

export const getStory = async (id) => {
  const snap = await getDoc(doc(db, 'stories', id));
  if (!snap.exists()) throw new ApiError('Story not found', 404);
  return snap.data();
};

export const saveStory = async (story) => {
  await setDoc(doc(db, 'stories', story.id), story);
  return story;
};

export const getStoryProgress = async (telegramId, storyId) => {
  const snap = await getDoc(doc(db, 'storyProgress', `${telegramId}_${storyId}`));
  if (!snap.exists()) return null;
  return snap.data();
};

export const saveStoryProgress = async ({ telegramId, storyId, stepIndex, flags }) => {
  const data = {
    telegramId: String(telegramId),
    storyId,
    stepIndex,
    flags,
    updatedAt: new Date().toISOString()
  };
  await setDoc(doc(db, 'storyProgress', `${telegramId}_${storyId}`), data);
  return data;
};

export const uploadFile = async (filename, base64) => {
  const response = await fetch('/api/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, data: base64 })
  });
  return response.json();
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
