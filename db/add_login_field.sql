-- Добавление поля login в таблицу users
USE web_novels;

-- Добавляем поле login, если его еще нет
ALTER TABLE users ADD COLUMN IF NOT EXISTS login VARCHAR(100);

-- Обновляем существующих пользователей, устанавливая telegram_id как login
UPDATE users SET login = telegram_id WHERE login IS NULL;

-- Делаем поле login обязательным (после заполнения)
ALTER TABLE users MODIFY COLUMN login VARCHAR(100) NOT NULL; 