#!/bin/bash

# Скрипт для тестирования API

echo "Тестируем API сервер..."

# Тест основного API
echo "1. Тест основного API:"
curl -k https://ikiteam.ru/api/emotions/debug_user_1750544735820/2025-06-21

echo -e "\n\n2. Тест мыслей:"
curl -k https://ikiteam.ru/api/thoughts/debug_user_1750544735820/2025-06-21

echo -e "\n\n3. Тест сохранения мысли:"
curl -k -X POST https://ikiteam.ru/api/thoughts \
  -H "Content-Type: application/json" \
  -d '{"telegramId": "debug_user_1750544735820", "thought": "Тестовая заметка", "date": "2025-06-21"}'

echo -e "\n\nТест завершен!" 