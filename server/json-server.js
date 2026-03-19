const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const fsSync = require('fs'); // Для sync-операций (чтение списка файлов)

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '127.0.0.1';
const UPLOAD_DIR = path.join(__dirname, 'uploads');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(UPLOAD_DIR));

// Путь к файлу с данными (users, thoughts, старый формат эмоций)
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
async function readEmotion(userId, date) {
  try {
    const raw = await fs.readFile(getEmotionFile(userId, date), 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
async function writeEmotion(userId, date, payload) {
  await fs.mkdir(getUserDir(userId), { recursive: true });
  await fs.writeFile(getEmotionFile(userId, date), JSON.stringify(payload, null, 2), 'utf8');
}
async function listEmotionDates(userId) {
  try {
    return fsSync.readdirSync(getUserDir(userId))
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''))
      .sort();
  } catch {
    return [];
  }
}
function normalizeDateString(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// --- Истории и прогресс историй ---
const STORIES_DIR = path.join(USER_DATA_DIR, 'stories');
const STORY_PROGRESS_DIR = path.join(USER_DATA_DIR, 'story_progress');

async function ensureStoryDirs() {
  await fs.mkdir(STORIES_DIR, { recursive: true });
  await fs.mkdir(STORY_PROGRESS_DIR, { recursive: true });
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
}

async function listStoriesMeta() {
  try {
    const files = (await fs.readdir(STORIES_DIR)).filter((f) => f.endsWith('.json'));
    const metas = [];
    for (const file of files) {
      const raw = await fs.readFile(path.join(STORIES_DIR, file), 'utf8');
      const story = JSON.parse(raw);
      metas.push({
        id: story.id || file.replace('.json', ''),
        title: story.title || 'История',
        tagline: story.tagline || '',
        duration: story.duration || `${story.steps?.length || 0} шагов`,
        updatedAt: story.updatedAt || null
      });
    }
    return metas;
  } catch {
    return [];
  }
}

async function readStory(storyId) {
  const filePath = path.join(STORIES_DIR, `${storyId}.json`);
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeStory(story) {
  if (!story?.id) throw new Error('Story id required');
  const filePath = path.join(STORIES_DIR, `${story.id}.json`);
  const payload = { ...story, updatedAt: new Date().toISOString() };
  await fs.writeFile(filePath, JSON.stringify(payload, null, 2), 'utf8');
  return payload;
}

function getStoryProgressPath(userId, storyId) {
  return path.join(STORY_PROGRESS_DIR, String(userId), `${storyId}.json`);
}

async function readStoryProgress(userId, storyId) {
  try {
    const raw = await fs.readFile(getStoryProgressPath(userId, storyId), 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeStoryProgress(userId, storyId, payload) {
  const dir = path.join(STORY_PROGRESS_DIR, String(userId));
  await fs.mkdir(dir, { recursive: true });
  const filePath = getStoryProgressPath(userId, storyId);
  await fs.writeFile(filePath, JSON.stringify(payload, null, 2), 'utf8');
  return payload;
}

async function seedDemoStory() {
  const demoPath = path.join(STORIES_DIR, 'demo.json');
  try {
    await fs.access(demoPath);
    return;
  } catch {
    const demo = {
      id: 'demo',
      title: 'Демо-история',
      tagline: 'Пример истории',
      duration: '3 шага',
      steps: [
        { id: 'step1', text: 'Привет! Это демо-история.' },
        { id: 'step2', text: 'Ты можешь добавить свои шаги на сервере.' },
        { id: 'step3', text: 'Сохранение прогресса хранится на сервере.' }
      ],
      updatedAt: new Date().toISOString()
    };
    await writeStory(demo);
  }
}

function sanitizeFilename(name) {
  return String(name || 'file')
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_+/g, '_');
}

app.post('/api/upload', async (req, res) => {
  try {
    const { filename, data } = req.body || {};
    if (!filename || !data) {
      return res.status(400).json({ error: 'filename и data обязательны' });
    }
    const safe = sanitizeFilename(filename);
    const finalName = `${Date.now()}_${safe}`;
    const base64 = String(data).replace(/^data:.+;base64,/, '');
    const buffer = Buffer.from(base64, 'base64');
    await fs.writeFile(path.join(UPLOAD_DIR, finalName), buffer);
    return res.json({ url: `/uploads/${finalName}` });
  } catch (error) {
    console.error('Ошибка загрузки файла', error);
    return res.status(500).json({ error: 'Ошибка загрузки файла' });
  }
});

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
    await fs.mkdir(getUserDir(userId), { recursive: true });
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
    const start = Array.isArray(startDate) ? startDate[0] : (startDate || '0000-01-01');
    const end = Array.isArray(endDate) ? endDate[0] : (endDate || '9999-12-31');

    const result = [];
    let cur = start;
    while (cur <= end) {
      const data = await readEmotion(userId, cur);
      if (data) {
        result.push({ id: `${userId}_${cur}`, date: cur, ...data });
      }
      const d = new Date(cur);
      d.setDate(d.getDate() + 1);
      cur = normalizeDateString(d);
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
    const data = await readEmotion(userId, date);
    if (!data) {
      return res.status(404).json({ error: 'Нет эмоции на эту дату' });
    }
    res.json({ id: `${userId}_${date}`, date, ...data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получение всех дат с эмоциями пользователя
app.get('/api/emotions/dates/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const userId = String(telegramId);
    const dates = await listEmotionDates(userId);
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
    const userId = String(telegramId);
    const existing = await readEmotion(userId, date);
    if (!existing) {
      return res.status(404).json({ error: 'Эмоция на эту дату не найдена' });
    }
    await writeEmotion(userId, date, { ...existing, note, updatedAt: new Date().toISOString() });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Проверка наличия эмоции на сегодня
app.get('/api/emotions/today/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const userId = String(telegramId);
    const today = new Date().toISOString().split('T')[0];
    
    const emotion = await readEmotion(userId, today);
    const hasEmotion = !!emotion;
    res.json({ hasEmotion, emotion: hasEmotion ? emotion : null });
    
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
    const userId = String(telegramId);
    const stats = {};
    const start = Array.isArray(startDate) ? startDate[0] : (startDate || '0000-01-01');
    const end = Array.isArray(endDate) ? endDate[0] : (endDate || '9999-12-31');
    let cur = start;
    while (cur <= end) {
      const em = await readEmotion(userId, cur);
      if (em && em.emotion !== undefined && em.emotion !== null) {
        const emotion = em.emotion;
        stats[emotion] = (stats[emotion] || 0) + 1;
      }
      const d = new Date(cur);
      d.setDate(d.getDate() + 1);
      cur = normalizeDateString(d);
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
    const userId = String(telegramId);
    
    const dates = await listEmotionDates(userId);
    const userData = {};
    for (const date of dates) {
      const val = await readEmotion(userId, date);
      if (val) userData[date] = val;
    }
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
    
    const userId = String(telegramId);
    
    if (!userData || typeof userData !== 'object') {
      return res.status(400).json({ error: 'Некорректные данные для импорта' });
    }
    for (const [date, payload] of Object.entries(userData)) {
      await writeEmotion(userId, date, payload);
    }
    
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
    const { telegramId } = req.params;
    const userId = String(telegramId);
    const dates = await listEmotionDates(userId);
    res.json({ userId, dates });
  } catch (error) {
    res.status(404).json({ error: 'Нет данных' });
  }
});

// Диагностика сравнения дат и ключей эмоций пользователя
app.get('/api/emotions/diagnostics/:telegramId/:date', async (req, res) => {
  try {
    const { telegramId, date } = req.params;
    const userId = String(telegramId);
    const keys = await listEmotionDates(userId);
    const hasEmotion = !!(await readEmotion(userId, date));
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
  ensureStoryDirs().then(seedDemoStory).catch((err) => console.error('Seed story error:', err));
  app.listen(PORT, HOST, () => {
    console.log(`JSON Server запущен на ${HOST}:${PORT}`);
    console.log(`Файл данных: ${DATA_FILE}`);
  });
}).catch(error => {
  console.error('Ошибка инициализации сервера:', error);
});

// -------- Истории --------

// Список историй (метаданные)
app.get('/api/stories', async (req, res) => {
  try {
    const metas = await listStoriesMeta();
    res.json(metas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получить историю по id
app.get('/api/stories/:id', async (req, res) => {
  try {
    const story = await readStory(req.params.id);
    if (!story) {
      return res.status(404).json({ error: 'История не найдена' });
    }
    res.json(story);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Создать/обновить историю (простая форма без авторизации)
app.post('/api/stories', async (req, res) => {
  try {
    const story = req.body;
    if (!story?.id) {
      return res.status(400).json({ error: 'id обязателен' });
    }
    const saved = await writeStory(story);
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Прогресс истории: получить
app.get('/api/story-progress/:telegramId/:storyId', async (req, res) => {
  try {
    const { telegramId, storyId } = req.params;
    const progress = await readStoryProgress(telegramId, storyId);
    if (!progress) return res.status(404).json({ error: 'Нет прогресса' });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Прогресс истории: сохранить
app.post('/api/story-progress', async (req, res) => {
  try {
    const { telegramId, storyId, stepIndex, flags } = req.body;
    if (!telegramId || !storyId) {
      return res.status(400).json({ error: 'telegramId и storyId обязательны' });
    }
    const payload = {
      telegramId: String(telegramId),
      storyId: String(storyId),
      stepIndex: Number(stepIndex) || 0,
      flags: Array.isArray(flags) ? flags : [],
      updatedAt: new Date().toISOString()
    };
    const saved = await writeStoryProgress(payload.telegramId, payload.storyId, payload);
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
