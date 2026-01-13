const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const fsSync = require('fs'); // Для sync-операций (чтение списка файлов)

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '127.0.0.1';

// Middleware
app.use(cors());
app.use(express.json());

// Путь к файлу с данными
const DATA_FILE = path.join(__dirname, 'data', 'emotions.json');

// После сохранения эмоции, сохраняем user_emotions[userId] в diagnostics.json
const DIAG_FILE = path.join(__dirname, 'data', 'diagnostics.json');
async function saveDiagnostics(userId, userEmotions) {
  await fs.writeFile(DIAG_FILE, JSON.stringify({ userId, userEmotions }, null, 2), 'utf8');
}

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
    return { user_emotions: {}, users: {} };
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
    await saveData({ user_emotions: {}, users: {} });
    console.log('Создан новый файл данных');
  }
}

// --- Новый способ: хранение эмоций по файлам ---
const USER_DATA_DIR = path.join(__dirname, 'data');
function getUserDir(userId) {
  return path.join(USER_DATA_DIR, String(userId));
}
function getEmotionFile(userId, date) {
  return path.join(getUserDir(userId), `${date}.json`);
}

// API Routes

// Создание или обновление пользователя
app.post('/api/users', async (req, res) => {
  try {
    const { telegramId, login } = req.body;
    
    console.log('Получен запрос на создание пользователя:', { telegramId, login });
    
    if (!telegramId) {
      return res.status(400).json({ error: 'Необходим telegramId' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    
    // Сохраняем или обновляем пользователя
    data.users[userId] = {
      telegramId: userId,
      login: login || userId,
      createdAt: (data.users[userId] && data.users[userId].createdAt) || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await saveData(data);
    
    console.log('Пользователь сохранен:', { userId, login: data.users[userId].login });
    res.json({ success: true, user: data.users[userId] });
    
  } catch (error) {
    console.error('Ошибка сохранения пользователя:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение пользователя
app.get('/api/users/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const data = await loadData();
    const userId = String(telegramId);
    
    const user = data.users[userId];
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
    
  } catch (error) {
    console.error('Ошибка получения пользователя:', error);
    res.status(500).json({ error: error.message });
  }
});

// Сохранение эмоции
app.post('/api/emotions', async (req, res) => {
  try {
    const { telegramId, emotion, note, timestamp, username, date } = req.body;
    if (!telegramId || emotion === undefined || emotion === null) {
      return res.status(400).json({ error: 'Необходимы telegramId и emotion' });
    }
    const userId = String(telegramId);
    const realDate = date || timestamp || new Date().toISOString().split('T')[0];
    const userDir = getUserDir(userId);
    await fs.mkdir(userDir, { recursive: true });
    const filePath = getEmotionFile(userId, realDate);
    // Если файл уже есть — не даём перезаписать
    try {
      await fs.access(filePath);
      return res.status(400).json({ error: 'Эмоция на эту дату уже сохранена' });
    } catch {}
    const record = {
      emotion: Number(emotion),
      note: note || '',
      timestamp: timestamp || new Date().toISOString(),
      username: username || 'Пользователь',
      createdAt: new Date().toISOString()
    };
    await fs.writeFile(filePath, JSON.stringify(record, null, 2), 'utf8');
    res.json({ success: true, id: `${userId}_${realDate}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получение эмоций пользователя за период
app.get('/api/emotions', async (req, res) => {
  try {
    const { telegramId, startDate, endDate } = req.query;
    const userId = String(Array.isArray(telegramId) ? telegramId[0] : telegramId);
    if (!userId) return res.status(400).json({ error: 'Необходим telegramId' });
    const userDir = getUserDir(userId);
    let result = [];
    // Перебираем даты в диапазоне
    let cur = Array.isArray(startDate) ? startDate[0] : startDate;
    const end = Array.isArray(endDate) ? endDate[0] : endDate;
    while (cur <= end) {
      const filePath = getEmotionFile(userId, cur);
      try {
        const raw = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(raw);
        result.push({ id: `${userId}_${cur}`, date: cur, ...data });
      } catch {}
      // Следующий день
      const d = new Date(cur);
      d.setDate(d.getDate() + 1);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      cur = `${year}-${month}-${day}`;
    }
    res.json(result.sort((a, b) => a.date.localeCompare(b.date)));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получение эмоции за конкретную дату
app.get('/api/emotions/:telegramId/:date', async (req, res) => {
  try {
    const { telegramId, date } = req.params;
    const userId = String(telegramId);
    const filePath = getEmotionFile(userId, date);
    try {
      const raw = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(raw);
      res.json({ id: `${userId}_${date}`, date, ...data });
    } catch {
      res.status(404).json({ error: 'Нет эмоции на эту дату' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получение всех дат с эмоциями пользователя
app.get('/api/emotions/dates/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const userId = String(telegramId);
    const userDir = getUserDir(userId);
    let dates = [];
    try {
      dates = fsSync.readdirSync(userDir)
        .filter(f => f.endsWith('.json'))
        .map(f => f.replace('.json', ''));
    } catch {}
    res.json(dates.sort());
  } catch (error) {
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
    const dateStr = date; // plain string
    if (!data.user_emotions[userId] || !data.user_emotions[userId][dateStr]) {
      return res.status(404).json({ error: 'Эмоция на эту дату не найдена' });
    }
    data.user_emotions[userId][dateStr].note = note;
    data.user_emotions[userId][dateStr].updatedAt = new Date().toISOString();
    await saveData(data);
    res.json({ success: true });
  } catch (error) {
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

// Получение статистики эмоций
app.get('/api/emotions/stats/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const { startDate, endDate } = req.query;
    const data = await loadData();
    const userId = String(telegramId);
    const userEmotions = data.user_emotions[userId] || {};
    const stats = {};
    let cur = startDate;
    while (cur <= endDate) {
      if (userEmotions[cur]) {
        const emotion = userEmotions[cur].emotion;
        stats[emotion] = (stats[emotion] || 0) + 1;
      }
      const d = new Date(cur);
      d.setDate(d.getDate() + 1);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      cur = `${year}-${month}-${day}`;
    }
    res.json(stats);
  } catch (error) {
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
    res.json(userData);
    
  } catch (error) {
    console.error('Ошибка экспорта данных:', error);
    res.status(500).json({ error: error.message });
  }
});

// Импорт данных пользователя
app.post('/api/import/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const userData = req.body;
    
    const data = await loadData();
    const userId = String(telegramId);
    
    data.user_emotions[userId] = userData;
    await saveData(data);
    
    res.json({ success: true });
    
  } catch (error) {
    console.error('Ошибка импорта данных:', error);
    res.status(500).json({ error: error.message });
  }
});

// Сохранение мысли/записи
app.post('/api/thoughts', async (req, res) => {
  try {
    const { telegramId, date, thought, timestamp } = req.body;
    
    console.log('Получен запрос на сохранение мысли:', { telegramId, date, thought, timestamp });
    
    if (!telegramId || !thought) {
      console.error('Отсутствуют обязательные поля:', { telegramId, thought });
      return res.status(400).json({ error: 'Необходимы telegramId и thought' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    const dateStr = date || new Date().toISOString().split('T')[0];
    
    console.log('Обработанные данные мысли:', { userId, dateStr, thought });
    
    // Инициализируем структуру для мыслей если её нет
    if (!data.user_thoughts) {
      data.user_thoughts = {};
    }
    if (!data.user_thoughts[userId]) {
      data.user_thoughts[userId] = {};
    }
    if (!data.user_thoughts[userId][dateStr]) {
      data.user_thoughts[userId][dateStr] = [];
    }

    // Добавляем новую мысль
    const newThought = {
      id: `${userId}_${dateStr}_${Date.now()}`,
      text: String(thought),
      timestamp: timestamp || new Date().toISOString(),
      createdAt: new Date().toISOString()
    };

    data.user_thoughts[userId][dateStr].push(newThought);
    await saveData(data);
    
    console.log('Мысль сохранена:', { userId, date: dateStr, thought: newThought });
    res.json({ success: true, thought: newThought });
    
  } catch (error) {
    console.error('Ошибка сохранения мысли:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение мыслей за период
app.get('/api/thoughts', async (req, res) => {
  try {
    const { telegramId, startDate, endDate } = req.query;
    
    if (!telegramId) {
      return res.status(400).json({ error: 'Необходим telegramId' });
    }

    const data = await loadData();
    const userId = String(telegramId);
    const userThoughts = (data.user_thoughts && data.user_thoughts[userId]) || {};
    
    const thoughts = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Перебираем все даты в диапазоне
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const dateStr = date.toISOString().split('T')[0];
      if (userThoughts[dateStr] && userThoughts[dateStr].length > 0) {
        thoughts.push({
          date: dateStr,
          thoughts: userThoughts[dateStr]
        });
      }
    }

    res.json(thoughts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    
  } catch (error) {
    console.error('Ошибка получения мыслей:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение мыслей на конкретную дату
app.get('/api/thoughts/:telegramId/:date', async (req, res) => {
  try {
    const { telegramId, date } = req.params;
    const data = await loadData();
    const userId = String(telegramId);
    const dateStr = new Date(date).toISOString().split('T')[0];
    
    const thoughts = (data.user_thoughts && data.user_thoughts[userId] && data.user_thoughts[userId][dateStr]) || [];
    res.json(thoughts);
    
  } catch (error) {
    console.error('Ошибка получения мыслей по дате:', error);
    res.status(500).json({ error: error.message });
  }
});

// Эндпоинт для получения диагностики по userId
app.get('/api/diagnostics/:telegramId', async (req, res) => {
  try {
    const diag = await fs.readFile(DIAG_FILE, 'utf8');
    res.type('application/json').send(diag);
  } catch (error) {
    res.status(404).json({ error: 'Нет диагностики' });
  }
});

// Диагностика сравнения дат и ключей эмоций пользователя
app.get('/api/emotions/diagnostics/:telegramId/:date', async (req, res) => {
  try {
    const { telegramId, date } = req.params;
    const data = await loadData();
    const userId = String(telegramId);
    const keys = Object.keys(data.user_emotions[userId] || {});
    const hasEmotion = !!(data.user_emotions[userId] && data.user_emotions[userId][date]);
    res.json({
      date,
      keys,
      hasEmotion
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Запуск сервера
initializeServer().then(() => {
  app.listen(PORT, HOST, () => {
    console.log(`JSON Server запущен на ${HOST}:${PORT}`);
    console.log(`Файл данных: ${DATA_FILE}`);
  });
}).catch(error => {
  console.error('Ошибка инициализации сервера:', error);
}); 
