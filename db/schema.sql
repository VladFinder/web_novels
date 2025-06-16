CREATE DATABASE IF NOT EXISTS web_novels;
USE web_novels;

CREATE TABLE users (
    telegram_id VARCHAR(50) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE emotions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telegram_id VARCHAR(50),
    emotion VARCHAR(50),
    note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (telegram_id) REFERENCES users(telegram_id)
);
