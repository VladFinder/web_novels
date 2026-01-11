// Сервис для сохранения эмоций через JSON сервер
class JsonStorageService {
  constructor() {
    const fallback = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/api'
      : '/api';
    // Позволяем переопределять базовый URL через переменную окружения
    this.apiUrl = process.env.VUE_APP_API_URL || fallback;
    this.userId = null;
  }

  // Функция для получения API URL
  getApiUrl() {
    return this.apiUrl;
  }

  // Сохранение эмоции пользователя
  async saveEmotion(telegramId, { emotion, note, timestamp, username }) {
    try {
      const apiUrl = this.getApiUrl();
      const payload = { telegramId, emotion, note, date: timestamp, username };
      window.lastEmotionPayload = payload; // Для диагностики
      console.log('Отправляем запрос на сервер:', `${apiUrl}/emotions`);
      console.log('Данные:', payload);
      
      const response = await fetch(`${apiUrl}/emotions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Получен ответ от сервера:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Ошибка сервера:', errorData);
        throw new Error(errorData.error || `Ошибка сохранения эмоции (${response.status})`);
      }

      const result = await response.json();
      console.log('Эмоция успешно сохранена на сервере:', result);
      return result;
    } catch (error) {
      console.error('Ошибка сохранения эмоции:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Ошибка подключения к серверу. Проверьте интернет-соединение.');
      }
      throw error;
    }
  }

  // Получение эмоций пользователя за период
  async getUserEmotions(telegramId, startDate, endDate) {
    try {
      const apiUrl = this.getApiUrl();
      const params = new URLSearchParams({
        telegramId: String(telegramId),
        startDate,
        endDate
      });

      const url = `${apiUrl}/emotions?${params}`;
      console.log('🔍 Отправляем запрос на:', url);
      console.log('🔍 Параметры:', { telegramId, startDate, endDate });

      const response = await fetch(url);
      
      console.log('🔍 Получен ответ:', response.status, response.statusText);
      
      if (!response.ok) {
        const error = await response.json();
        console.error('❌ Ошибка сервера:', error);
        throw new Error(error.error || 'Ошибка получения эмоций');
      }

      const data = await response.json();
      console.log('🔍 Получены данные от сервера:', data);
      console.log('🔍 Количество эмоций:', data.length);
      console.log('🔍 Тип данных:', typeof data);
      console.log('🔍 Это массив?', Array.isArray(data));
      
      return data;
    } catch (error) {
      console.error('❌ Ошибка получения эмоций:', error);
      throw error;
    }
  }

  // Получение эмоции на конкретную дату
  async getEmotionByDate(telegramId, date) {
    try {
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/emotions/${telegramId}/${date}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        const error = await response.json();
        throw new Error(error.error || 'Ошибка получения эмоции');
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка получения эмоции по дате:', error);
      return null;
    }
  }

  // Проверка, была ли уже сохранена эмоция на сегодня
  async hasEmotionToday(telegramId) {
    try {
      const apiUrl = this.getApiUrl();
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const today = `${year}-${month}-${day}`;
      const response = await fetch(`${apiUrl}/emotions/${telegramId}/${today}`);
      if (!response.ok) {
        return false;
      }
      const result = await response.json();
      return !!result; // true если эмоция есть, false если null
    } catch (error) {
      return false;
    }
  }

  // Обновление заметки к эмоции
  async updateNote(telegramId, date, note) {
    try {
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/emotions/note`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ telegramId, date, note })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка обновления заметки');
      }

      const result = await response.json();
      console.log('Заметка успешно обновлена на сервере:', result);
      return result;
    } catch (error) {
      console.error('Ошибка обновления заметки:', error);
      throw error;
    }
  }

  // Получение статистики эмоций
  async getEmotionStats(telegramId, startDate, endDate) {
    try {
      const apiUrl = this.getApiUrl();
      const params = new URLSearchParams({
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      });

      const response = await fetch(`${apiUrl}/emotions/stats/${telegramId}?${params}`);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка получения статистики');
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка получения статистики:', error);
      throw error;
    }
  }

  // Экспорт данных пользователя
  async exportUserData(telegramId) {
    try {
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/export/${telegramId}`);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка экспорта данных');
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка экспорта данных:', error);
      throw error;
    }
  }

  // Импорт данных пользователя
  async importUserData(telegramId, data) {
    try {
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/import/${telegramId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка импорта данных');
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка импорта данных:', error);
      throw error;
    }
  }

  // Сохранение мысли/записи
  async saveThought(telegramId, thought, date = null) {
    try {
      const apiUrl = this.getApiUrl();
      const response = await fetch(`${apiUrl}/thoughts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          telegramId, 
          thought, 
          date,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка сохранения мысли');
      }

      const result = await response.json();
      console.log('Мысль успешно сохранена:', result);
      return result;
    } catch (error) {
      console.error('Ошибка сохранения мысли:', error);
      throw error;
    }
  }

  // Получение мыслей за период
  async getUserThoughts(telegramId, startDate, endDate) {
    try {
      const apiUrl = this.getApiUrl();
      const params = new URLSearchParams({
        telegramId: String(telegramId),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      });

      const response = await fetch(`${apiUrl}/thoughts?${params}`);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка получения мыслей');
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка получения мыслей:', error);
      throw error;
    }
  }

  // Получение мыслей на конкретную дату
  async getThoughtsByDate(telegramId, date) {
    try {
      const apiUrl = this.getApiUrl();
      const dateStr = new Date(date).toISOString().split('T')[0];
      const response = await fetch(`${apiUrl}/thoughts/${telegramId}/${dateStr}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        const error = await response.json();
        throw new Error(error.error || 'Ошибка получения мыслей');
      }

      return await response.json();
    } catch (error) {
      console.error('Ошибка получения мыслей по дате:', error);
      return [];
    }
  }
}

export const jsonStorageService = new JsonStorageService(); 
