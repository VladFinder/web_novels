const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.DB_USER || 'your_db_user',
  password: process.env.DB_PASSWORD || 'your_db_password',
  database: process.env.DB_NAME || 'your_db_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
