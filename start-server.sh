#!/bin/bash

# Скрипт для запуска JSON сервера

echo "🚀 Запускаем JSON сервер для эмоций..."

# Переходим в папку сервера
cd server

# Проверяем, установлены ли зависимости
if [ ! -d "node_modules" ]; then
    echo "📦 Устанавливаем зависимости..."
    npm install
fi

# Запускаем сервер
echo "🌐 Запускаем сервер на порту 3001..."
npm start 