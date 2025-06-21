#!/bin/bash

# Скрипт для тестирования API

echo "🧪 Тестирование API..."

API_URL="http://94.103.13.116:3001/api"

echo "1. Проверка доступности сервера..."
curl -I ${API_URL}/emotions/today/test

echo ""
echo "2. Тест сохранения эмоции..."
curl -X POST ${API_URL}/emotions \
  -H "Content-Type: application/json" \
  -d '{
    "telegramId": "test123",
    "emotion": 1,
    "note": "Тестовая заметка",
    "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%S.000Z)'",
    "username": "test_user"
  }'

echo ""
echo "3. Тест получения эмоций..."
curl "${API_URL}/emotions?telegramId=test123&startDate=2024-01-01&endDate=2024-12-31"

echo ""
echo "✅ Тестирование завершено!" 