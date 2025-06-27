#!/bin/bash

# Данные сервера
SERVER="u3076779@37.140.192.181"
REMOTE_DIR="/var/www/u3076779/data/www/ikiteam.ru"

echo "Загружаем измененные файлы на сервер..."

# Создаем папки на сервере
echo "Создаем папки на сервере..."
ssh -o StrictHostKeyChecking=no $SERVER "mkdir -p $REMOTE_DIR/css $REMOTE_DIR/img"

# Загружаем основные файлы
echo "Загружаем index.html..."
scp -o StrictHostKeyChecking=no dist/index.html $SERVER:$REMOTE_DIR/

echo "Загружаем JS файлы..."
scp -o StrictHostKeyChecking=no dist/*.js $SERVER:$REMOTE_DIR/

echo "Загружаем CSS файлы..."
scp -o StrictHostKeyChecking=no dist/css/* $SERVER:$REMOTE_DIR/css/

echo "Загружаем изображения..."
# scp -o StrictHostKeyChecking=no dist/img/* $SERVER:$REMOTE_DIR/img/

echo "Загрузка завершена!"