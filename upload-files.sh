#!/bin/bash

set -euo pipefail

SERVER_HOST="${SERVER_HOST:-your.server.com}"
SSH_USER="${SSH_USER:-deploy}"
REMOTE_WEB_DIR="${REMOTE_WEB_DIR:-/home/c/commano5/iki.commandc.ru/public_html}"
REMOTE_SERVER_DIR="${REMOTE_SERVER_DIR:-/home/c/commano5/iki.commandc.ru/public_html/server}"
API_HEALTH_URL="${API_HEALTH_URL:-http://127.0.0.1:3001/api/emotions}"

TARGET="${SSH_USER}@${SERVER_HOST}"

echo "Попытка загрузки файлов на сервер ${TARGET}..."

echo "Проверяем доступность API (${API_HEALTH_URL})..."
if ! curl -s -o /dev/null -w "%{http_code}" "$API_HEALTH_URL" | grep -q "400\|200"; then
  echo "❌ Сервер недоступен по ${API_HEALTH_URL}"
  exit 1
fi
echo "✅ Сервер доступен"

echo "Пробуем подключение через SSH..."
if ssh -o ConnectTimeout=10 "$TARGET" "echo 'ssh ok'" 2>/dev/null; then
  echo "✅ SSH подключение работает"
  echo "Загружаем фронтенд..."
  scp -r dist/* "$TARGET:$REMOTE_WEB_DIR/"
  echo "Загружаем серверный js..."
  scp server/json-server.js "$TARGET:$REMOTE_SERVER_DIR/"
  echo "Перезапускаем json-server..."
  ssh "$TARGET" "cd $REMOTE_SERVER_DIR && pm2 restart json-server || node json-server.js"
  echo "✅ Файлы загружены и сервер перезапущен"
  exit 0
fi

echo "❌ Не удалось подключиться к серверу"
echo "Попробуйте подключиться вручную и выполнить:"
echo "1. scp -r dist/* ${TARGET}:${REMOTE_WEB_DIR}/"
echo "2. scp server/json-server.js ${TARGET}:${REMOTE_SERVER_DIR}/"
echo "3. ssh ${TARGET} 'cd ${REMOTE_SERVER_DIR} && pm2 restart json-server || node json-server.js'"
