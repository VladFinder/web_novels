import { db } from  './firebase'; // Предполагается, что вы используете Firebase для хранения данных

const API_URL =  'https://ikiteam.ru/api';

export const dbService = {
  // Создание или обновление пользователя
  async saveUser(telegramId) {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ telegramId })
      });
      return response.json();
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  },

  // Сохранение эмоции
  async saveEmotion(telegramId, { emotion, note, timestamp }) {
    return fetch(`${API_URL}/emotions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ telegramId, emotion, note, timestamp })
    });
  },

  // Получение эмоций пользователя
  async getUserEmotions(telegramId, startDate, endDate) {
    const params = new URLSearchParams({
      telegramId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    })
    const response = await fetch(`${API_URL}/emotions?${params}`)
    return await response.json()
  },

  // Получение пользователя
  async getUser(telegramId) {
    const response = await fetch(`${API_URL}/users/${telegramId}`);
    if (!response.ok) throw new Error('User not found');
    return await response.json();
  },

  async saveEmotion(telegramId, data) {
    // Сохраняем эмоцию в подколлекцию "emotions" пользователя
    await db.collection('users')
      .doc(String(telegramId))
      .collection('emotions')
      .add(data)
  }
};
