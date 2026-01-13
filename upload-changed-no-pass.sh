#!/bin/bash

set -euo pipefail

SSH_USER="${SSH_USER:-deploy}"
SERVER_HOST="${SERVER_HOST:-your.server.com}"
REMOTE_DIR="${REMOTE_DIR:-/home/c/commano5/iki.commandc.ru/public_html}"

SSH_TARGET="${SSH_USER}@${SERVER_HOST}"

echo "Загружаем измененные файлы на сервер ${SSH_TARGET}..."

echo "Создаем папки на сервере..."
ssh -o StrictHostKeyChecking=no "$SSH_TARGET" "mkdir -p $REMOTE_DIR/css $REMOTE_DIR/img"

echo "Загружаем index.html..."
scp -o StrictHostKeyChecking=no dist/index.html "$SSH_TARGET:$REMOTE_DIR/"

echo "Загружаем JS файлы..."
scp -o StrictHostKeyChecking=no dist/*.js "$SSH_TARGET:$REMOTE_DIR/"

echo "Загружаем CSS файлы..."
scp -o StrictHostKeyChecking=no dist/css/* "$SSH_TARGET:$REMOTE_DIR/css/"

echo "Загружаем изображения..."
# scp -o StrictHostKeyChecking=no dist/img/* "$SSH_TARGET:$REMOTE_DIR/img/"

echo "Загрузка завершена!"
