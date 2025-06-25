const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Создание пользователя
app.post('/api/users', async (req, res) => {
  try {
    const { telegramId, login } = req.body;
    await pool.execute(
      'INSERT IGNORE INTO users (telegram_id, login) VALUES (?, ?) ON DUPLICATE KEY UPDATE login = ?',
      [telegramId, login || telegramId, login || telegramId]
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/users/validate', async (req, res) => {
  const { decrypted_tg_id } = req.body;
  res.json({ success: true, receivedId: decrypted_tg_id });
})

// Сохранение эмоции
app.post('/api/emotions', async (req, res) => {
  try {
    const { telegramId, emotion, note, timestamp } = req.body;
    console.log(req.body)
    await pool.execute(
      'INSERT INTO emotions (telegram_id, emotion, note, created_at) VALUES (?, ?, ?, ?)',
      [telegramId, emotion, note, new Date(timestamp)]
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

app.get('/api/users/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE telegram_id = ?',
      [telegramId]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log('=== THIS IS MY SERVER ===');
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error('Server error:', err);
  }
});
