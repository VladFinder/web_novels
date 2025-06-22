#!/bin/bash

# Данные сервера
SERVER="u3076779@37.140.192.181"
REMOTE_DIR="/var/www/u3076779/data/www/ikiteam.ru"
PASSWORD="T6YJqgT2R5cN9w3E"

echo "Загружаем измененные файлы на сервер..."

# Создаем папки на сервере
echo "Создаем папки на сервере..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no $SERVER "mkdir -p $REMOTE_DIR/css $REMOTE_DIR/img"

# Загружаем основные файлы
echo "Загружаем index.html..."
sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no dist/index.html $SERVER:$REMOTE_DIR/

echo "Загружаем JS файлы..."
sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no dist/*.js $SERVER:$REMOTE_DIR/

echo "Загружаем CSS файлы..."
sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no dist/css/* $SERVER:$REMOTE_DIR/css/

echo "Загружаем изображения..."
# sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no dist/img/* $SERVER:$REMOTE_DIR/img/

echo "Загрузка завершена!" 