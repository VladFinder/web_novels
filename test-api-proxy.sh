#!/bin/bash

echo "=== Тестирование API через PHP прокси ==="

# Тест 1: GET запрос
echo "1. Тестируем GET запрос..."
curl -s -X GET "https://ikiteam.ru/api/emotions/test_user/2025-06-22"
echo -e "\n"

# Тест 2: POST запрос для эмоции
echo "2. Тестируем POST запрос для эмоции..."
curl -s -X POST "https://ikiteam.ru/api/emotions" \
  -H "Content-Type: application/json" \
  -d '{"telegramId": "test_user_'$(date +%s)'", "emotion": 1, "username": "Test User"}'
echo -e "\n"

# Тест 3: POST запрос для мысли
echo "3. Тестируем POST запрос для мысли..."
curl -s -X POST "https://ikiteam.ru/api/thoughts" \
  -H "Content-Type: application/json" \
  -d '{"telegramId": "test_user_'$(date +%s)'", "thought": "Тестовая мысль '$(date +%s)'"}'
echo -e "\n"

# Тест 4: Проверка статистики
echo "4. Тестируем GET запрос статистики..."
curl -s -X GET "https://ikiteam.ru/api/emotions/stats/test_user_$(date +%s)?startDate=2025-06-01&endDate=2025-06-30"
echo -e "\n"

echo "=== Тестирование завершено ===" 