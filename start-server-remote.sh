#!/bin/bash

echo "🚀 Запуск JSON сервера на удаленной машине..."

# Данные сервера
REMOTE_SERVER="37.140.192.181"
REMOTE_USER="u3076779"
REMOTE_PASSWORD="T6YJqgT2R5cN9w3E"
REMOTE_PATH="/var/www/u3076779/data/www/ikiteam.ru/server"

echo "📦 Копируем package.json на сервер..."
sshpass -p "${REMOTE_PASSWORD}" scp server/package.json ${REMOTE_USER}@${REMOTE_SERVER}:${REMOTE_PATH}/

echo "🛑 Останавливаем старый процесс..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "pkill -f json-server.js || true"

echo "🔧 Устанавливаем зависимости..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "cd ${REMOTE_PATH} && npm install"

echo "🚀 Запускаем сервер..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "cd ${REMOTE_PATH} && nohup npm start > server.log 2>&1 &"

echo "⏳ Ждем запуска сервера..."
sleep 5

echo "✅ Проверяем статус сервера..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "ps aux | grep json-server"

echo "🌐 Проверяем доступность API..."
curl -I http://${REMOTE_SERVER}:3001/api/emotions/today/test

echo "📋 Логи сервера:"
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "tail -10 ${REMOTE_PATH}/server.log"

echo "🎉 Сервер запущен!"
echo "📋 API доступен по адресу: http://${REMOTE_SERVER}:3001/api" 