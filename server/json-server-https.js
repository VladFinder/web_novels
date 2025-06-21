const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const https = require('https');

const app = express();
const PORT = 3001;
const HTTPS_PORT = 3443;

// Middleware
app.use(cors());
app.use(express.json());

// Путь к файлу с данными
const DATA_FILE = path.join(__dirname, 'data', 'emotions.json');

// Создаем папку data если её нет
async function ensureDataDirectory() {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  } catch (error) {
    console.log('Папка data уже существует');
  }
}

// Загрузка данных из файла
async function loadData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Если файл не существует, создаем пустую структуру
    return { user_emotions: {} };
  }
}

// Сохранение данных в файл
async function saveData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Инициализация сервера
async function initializeServer() {
  await ensureDataDirectory();
  
  // Создаем файл если его нет
  try {
    await fs.access(DATA_FILE);
  } catch (error) {
    await saveData({ user_emotions: {} });
    console.log('Создан новый файл данных');
  }
}

// API Routes

// Сохранение эмоции
app.post('/api/emotions', async (req, res) => {
  try {
    const { telegramId, emotion, note, timestamp, username } = req.body;
    
    if (!telegramId || !emotion) {
      return res.status(400).json({ error: 'Необходимы telegramId и emotion' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    const date = new Date(timestamp).toISOString().split('T')[0];

    // Проверяем, не была ли уже сохранена эмоция на сегодня
    if (data.user_emotions[userId] && data.user_emotions[userId][date]) {
      return res.status(400).json({ error: 'Эмоция на сегодня уже сохранена' });
    }

    // Инициализируем объект пользователя если его нет
    if (!data.user_emotions[userId]) {
      data.user_emotions[userId] = {};
    }

    // Сохраняем эмоцию
    data.user_emotions[userId][date] = {
      emotion,
      note: note || '',
      timestamp,
      username: username || 'Пользователь',
      createdAt: new Date().toISOString()
    };

    await saveData(data);
    
    console.log('Эмоция сохранена:', { userId, date, emotion, username });
    res.json({ success: true, id: `${userId}_${date}` });
    
  } catch (error) {
    console.error('Ошибка сохранения эмоции:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение эмоций пользователя за период
app.get('/api/emotions', async (req, res) => {
  try {
    const { telegramId, startDate, endDate } = req.query;
    
    if (!telegramId) {
      return res.status(400).json({ error: 'Необходим telegramId' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    const userEmotions = data.user_emotions[userId] || {};
    
    const emotions = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Перебираем все даты в диапазоне
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const dateStr = date.toISOString().split('T')[0];
      if (userEmotions[dateStr]) {
        emotions.push({
          id: `${userId}_${dateStr}`,
          date: dateStr,
          ...userEmotions[dateStr]
        });
      }
    }

    res.json(emotions.sort((a, b) => new Date(b.date) - new Date(a.date)));
    
  } catch (error) {
    console.error('Ошибка получения эмоций:', error);
    res.status(500).json({ error: error.message });
  }
});

// Обновление заметки
app.put('/api/emotions/note', async (req, res) => {
  try {
    const { telegramId, date, note } = req.body;
    
    if (!telegramId || !date) {
      return res.status(400).json({ error: 'Необходимы telegramId и date' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    const dateStr = new Date(date).toISOString().split('T')[0];
    
    if (!data.user_emotions[userId] || !data.user_emotions[userId][dateStr]) {
      return res.status(404).json({ error: 'Эмоция на эту дату не найдена' });
    }

    // Обновляем заметку
    data.user_emotions[userId][dateStr].note = note;
    data.user_emotions[userId][dateStr].updatedAt = new Date().toISOString();

    await saveData(data);
    
    console.log('Заметка обновлена:', { userId, date: dateStr, note });
    res.json({ success: true });
    
  } catch (error) {
    console.error('Ошибка обновления заметки:', error);
    res.status(500).json({ error: error.message });
  }
});

// Проверка наличия эмоции на сегодня
app.get('/api/emotions/today/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const data = await loadData();
    const userId = String(telegramId);
    const today = new Date().toISOString().split('T')[0];
    
    const hasEmotion = !!(data.user_emotions[userId] && data.user_emotions[userId][today]);
    res.json({ hasEmotion, emotion: hasEmotion ? data.user_emotions[userId][today] : null });
    
  } catch (error) {
    console.error('Ошибка проверки эмоции на сегодня:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение эмоции на конкретную дату
app.get('/api/emotions/:telegramId/:date', async (req, res) => {
  try {
    const { telegramId, date } = req.params;
    const data = await loadData();
    const userId = String(telegramId);
    const dateStr = new Date(date).toISOString().split('T')[0];
    
    const emotion = data.user_emotions[userId] && data.user_emotions[userId][dateStr];
    res.json(emotion || null);
    
  } catch (error) {
    console.error('Ошибка получения эмоции по дате:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение статистики эмоций
app.get('/api/emotions/stats/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const { startDate, endDate } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Необходимы startDate и endDate' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    const userEmotions = data.user_emotions[userId] || {};
    
    const stats = {};
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Подсчитываем эмоции
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const dateStr = date.toISOString().split('T')[0];
      if (userEmotions[dateStr]) {
        const emotion = userEmotions[dateStr].emotion;
        stats[emotion] = (stats[emotion] || 0) + 1;
      }
    }

    res.json(stats);
    
  } catch (error) {
    console.error('Ошибка получения статистики:', error);
    res.status(500).json({ error: error.message });
  }
});

// Экспорт данных пользователя
app.get('/api/export/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const data = await loadData();
    const userId = String(telegramId);
    
    const userData = data.user_emotions[userId] || {};
    res.json({ 
      telegramId: userId, 
      emotions: userData,
      exportDate: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Ошибка экспорта данных:', error);
    res.status(500).json({ error: error.message });
  }
});

// Импорт данных пользователя
app.post('/api/import/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const { emotions } = req.body;
    
    if (!emotions) {
      return res.status(400).json({ error: 'Необходимы данные для импорта' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    
    // Импортируем эмоции
    data.user_emotions[userId] = { ...data.user_emotions[userId], ...emotions };
    
    await saveData(data);
    
    console.log('Данные импортированы:', { userId, count: Object.keys(emotions).length });
    res.json({ success: true, imported: Object.keys(emotions).length });
    
  } catch (error) {
    console.error('Ошибка импорта данных:', error);
    res.status(500).json({ error: error.message });
  }
});

// Запуск сервера
async function startServer() {
  await initializeServer();
  
  // HTTP сервер
  app.listen(PORT, () => {
    console.log(`HTTP Server запущен на порту ${PORT}`);
    console.log(`Файл данных: ${DATA_FILE}`);
  });
  
  // HTTPS сервер
  try {
    const httpsOptions = {
      key: fsSync.readFileSync(path.join(__dirname, 'key.pem')),
      cert: fsSync.readFileSync(path.join(__dirname, 'cert.pem'))
    };
    
    https.createServer(httpsOptions, app).listen(HTTPS_PORT, () => {
      console.log(`HTTPS Server запущен на порту ${HTTPS_PORT}`);
      console.log(`API доступен по адресу: https://37.140.192.181:${HTTPS_PORT}/api`);
    });
  } catch (error) {
    console.error('Ошибка запуска HTTPS сервера:', error);
    console.log('Запускается только HTTP сервер');
  }
}

startServer(); 