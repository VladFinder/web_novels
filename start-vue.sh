#!/bin/bash

echo "🚀 Запуск Vue.js приложения..."

# Проверяем, установлены ли зависимости
if [ ! -d "node_modules" ]; then
    echo "📦 Устанавливаем зависимости Vue.js..."
    npm install
fi

echo "🌐 Запускаем Vue.js приложение на http://localhost:8080"
echo "📋 JSON API доступен на http://37.140.192.181:3001/api"
echo ""
echo "💡 Для остановки нажмите Ctrl+C"
echo ""

# Запускаем Vue.js приложение
npm run serve 