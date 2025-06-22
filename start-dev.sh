#!/bin/bash

echo "🚀 Запуск проекта в режиме разработки..."

# Проверяем, установлены ли зависимости Vue.js
if [ ! -d "node_modules" ]; then
    echo "📦 Устанавливаем зависимости Vue.js..."
    npm install
fi

# Проверяем, установлены ли зависимости сервера
if [ ! -d "server/node_modules" ]; then
    echo "📦 Устанавливаем зависимости JSON сервера..."
    cd server
    npm install
    cd ..
fi

echo "🌐 Запускаем Vue.js приложение на http://localhost:8080"
echo "📋 JSON API доступен на http://37.140.192.181:3001/api"
echo ""
echo "💡 Для остановки нажмите Ctrl+C"
echo ""

# Запускаем Vue.js приложение
npm run serve 