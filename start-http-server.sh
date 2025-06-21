#!/bin/bash

# Скрипт для запуска HTTP JSON сервера

echo "Запуск HTTP JSON сервера..."

# Переходим в папку сервера
cd server

# Проверяем, установлен ли Node.js
if ! command -v node &> /dev/null; then
    echo "Ошибка: Node.js не установлен"
    exit 1
fi

# Проверяем, установлены ли зависимости
if [ ! -d "node_modules" ]; then
    echo "Установка зависимостей..."
    npm install
fi

# Запускаем HTTP сервер
echo "Запуск сервера на порту 3001..."
node json-server.js 