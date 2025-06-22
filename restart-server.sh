#!/bin/bash

echo "=== Перезапуск сервера ==="

# Остановка сервера
echo "1. Останавливаем сервер..."
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "pkill -f 'node json-server.js'"

# Пауза
echo "2. Ждем завершения процессов..."
sleep 3

# Запуск сервера
echo "3. Запускаем сервер..."
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && nohup node json-server.js > server.log 2>&1 &"

# Пауза для запуска
echo "4. Ждем запуска..."
sleep 3

# Проверка статуса
echo "5. Проверяем статус сервера..."
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "ps aux | grep json-server"

# Тест API
echo "6. Тестируем API..."
curl -s -X GET "https://ikiteam.ru/api/emotions/test_user/2025-06-22" | head -c 50

echo -e "\n=== Перезапуск завершен! ===" 