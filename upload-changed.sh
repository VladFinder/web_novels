#!/bin/bash

set -euo pipefail

SSH_USER="${SSH_USER:-deploy}"
SERVER_HOST="${SERVER_HOST:-your.server.com}"
REMOTE_DIR="${REMOTE_DIR:-/home/c/commano5/iki.commandc.ru/public_html}"
SSH_PASSWORD="${SSH_PASSWORD:-}"

SSH_TARGET="${SSH_USER}@${SERVER_HOST}"

if [ -n "$SSH_PASSWORD" ]; then
  SSH_CMD=(sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no "$SSH_TARGET")
  SCP_CMD=(sshpass -p "$SSH_PASSWORD" scp -o StrictHostKeyChecking=no)
else
  SSH_CMD=(ssh -o StrictHostKeyChecking=no "$SSH_TARGET")
  SCP_CMD=(scp -o StrictHostKeyChecking=no)
fi

echo "Загружаем измененные файлы на сервер ${SSH_TARGET}..."

echo "Создаем папки на сервере..."
"${SSH_CMD[@]}" "mkdir -p $REMOTE_DIR/css $REMOTE_DIR/img"

echo "Загружаем index.html..."
"${SCP_CMD[@]}" dist/index.html "$SSH_TARGET:$REMOTE_DIR/"

echo "Загружаем JS файлы..."
"${SCP_CMD[@]}" dist/*.js "$SSH_TARGET:$REMOTE_DIR/"

echo "Загружаем CSS файлы..."
"${SCP_CMD[@]}" dist/css/* "$SSH_TARGET:$REMOTE_DIR/css/"

echo "Загружаем изображения..."
# "${SCP_CMD[@]}" dist/img/* "$SSH_TARGET:$REMOTE_DIR/img/"

echo "Загрузка завершена!"
