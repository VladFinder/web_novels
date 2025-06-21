// import { collection, addDoc, getDocs, query, where, doc, setDoc } from 'firebase/firestore';
// import { db } from '../firebase/config';

const API_URL = 'https://ikiteam.ru/api';

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
  async saveEmotion(telegramId, emotionData) {
    try {
      const response = await fetch(`${API_URL}/emotions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telegramId,
          emotion: emotionData.emotion,
          timestamp: emotionData.timestamp
        })
      });
      return response.json();
    } catch (error) {
      console.error('Error saving emotion:', error);
      throw error;
    }
  },

  // Получение эмоций пользователя
  async getUserEmotions(telegramId, startDate, endDate) {
    try {
      const response = await fetch(
        `${API_URL}/emotions?telegramId=${telegramId}&startDate=${startDate}&endDate=${endDate}`
      );
      return response.json();
    } catch (error) {
      console.error('Error getting emotions:', error);
      throw error;
    }
  },

  // Получение пользователя
  async getUser(telegramId) {
    const response = await fetch(`${API_URL}/users/${telegramId}`);
    if (!response.ok) throw new Error('User not found');
    return await response.json();
  }
};
