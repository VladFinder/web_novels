#!/bin/bash

# Скрипт для настройки удаленного сервера

echo "🔧 Настройка удаленного сервера для JSON API..."

# Данные сервера
REMOTE_SERVER="37.140.192.181"
REMOTE_USER="u3076779"
REMOTE_PASSWORD="T6YJqgT2R5cN9w3E"
REMOTE_PATH="/home/u3076779/data/www/ikiteam.ru/server"

echo "📁 Создаем папку на сервере..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "mkdir -p ${REMOTE_PATH}"

echo "📦 Копируем файлы сервера..."
sshpass -p "${REMOTE_PASSWORD}" rsync -avz server/ ${REMOTE_USER}@${REMOTE_SERVER}:${REMOTE_PATH}/

echo "🔧 Устанавливаем зависимости на сервере..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} << 'EOF'
    cd /home/u3076779/emotions-server
    npm install
    echo "Зависимости установлены"
EOF

echo "🚀 Запускаем сервер в фоне..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} << 'EOF'
    cd /home/u3076779/emotions-server
    nohup node json-server.js > server.log 2>&1 &
    echo "Сервер запущен в фоне"
EOF

echo "⏳ Ждем запуска сервера..."
sleep 5

echo "✅ Проверяем статус сервера..."
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "ps aux | grep json-server"

echo "🌐 Проверяем доступность API..."
curl -I http://${REMOTE_SERVER}:3001/api/emotions/today/test

echo "📋 Логи сервера:"
sshpass -p "${REMOTE_PASSWORD}" ssh ${REMOTE_USER}@${REMOTE_SERVER} "tail -10 /home/u3076779/emotions-server/server.log"

echo "🎉 Настройка завершена!"
echo "📋 API доступен по адресу: http://${REMOTE_SERVER}:3001/api"
echo "📁 Файл данных: /home/u3076779/emotions-server/data/emotions.json" 