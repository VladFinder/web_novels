#!/bin/bash

set -euo pipefail

SSH_USER="${SSH_USER:-deploy}"
SERVER_HOST="${SERVER_HOST:-your.server.com}"
SSH_PASSWORD="${SSH_PASSWORD:-}"
REMOTE_DIR="${REMOTE_DIR:-/home/c/commano5/iki.commandc.ru/public_html}"
REMOTE_SERVER_DIR="${REMOTE_SERVER_DIR:-$REMOTE_DIR/server}"
API_TEST_URL="${API_TEST_URL:-https://iki.commandc.ru/api/emotions/test_user/2025-06-22}"

SSH_BASE_CMD=(-o StrictHostKeyChecking=no "${SSH_USER}@${SERVER_HOST}")
if [ -n "$SSH_PASSWORD" ]; then
  SSH_BASE_CMD=(sshpass -p "$SSH_PASSWORD" ssh "${SSH_BASE_CMD[@]}")
else
  SSH_BASE_CMD=(ssh "${SSH_BASE_CMD[@]}")
fi

echo "=== Перезапуск сервера на ${SERVER_HOST} ==="

echo "1. Останавливаем сервер..."
"${SSH_BASE_CMD[@]}" "pkill -f 'node json-server.js'" || true

echo "2. Ждем завершения процессов..."
sleep 3

echo "3. Запускаем сервер..."
"${SSH_BASE_CMD[@]}" "cd ${REMOTE_SERVER_DIR} && nohup node json-server.js > server.log 2>&1 &"

echo "4. Ждем запуска..."
sleep 3

echo "5. Проверяем статус сервера..."
"${SSH_BASE_CMD[@]}" "ps aux | grep json-server"

echo "6. Тестируем API (${API_TEST_URL})..."
curl -s -X GET "$API_TEST_URL" | head -c 80 || true

echo -e "\n=== Перезапуск завершен! ==="
