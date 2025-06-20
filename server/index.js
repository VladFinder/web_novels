const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Создание пользователя
app.post('/api/users', async (req, res) => {
  try {
    const { telegramId } = req.body;
    await pool.execute(
      'INSERT IGNORE INTO users (telegram_id) VALUES (?)',
      [telegramId]
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/user/validate', async (req, res) => {
  try {
    const { decrypted_tg_id } = req.body;
    console.log(decrypted_tg_id);
    res.json({ success: true, receivedId: decrypted_tg_id });
  } catch (error) {
    console.error('Error validating user:', error);
  }
})

// Сохранение эмоции
app.post('/api/emotions', async (req, res) => {
  try {
    const { telegramId, emotion, timestamp } = req.body;
    await pool.execute(
      'INSERT INTO emotions (telegram_id, emotion, created_at) VALUES (?, ?, ?)',
      [telegramId, emotion, new Date(timestamp)]
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving emotion:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение эмоций пользователя
app.get('/api/emotions', async (req, res) => {
  try {
    const { telegramId, startDate, endDate } = req.query;
    const [rows] = await pool.execute(
      'SELECT * FROM emotions WHERE telegram_id = ? AND created_at BETWEEN ? AND ?',
      [telegramId, new Date(startDate), new Date(endDate)]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error getting emotions:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error('Server error:', err);
  }
});
