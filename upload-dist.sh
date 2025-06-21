#!/bin/bash

# Скрипт для загрузки дистрибутива на сервер

SERVER_IP="37.140.192.181"
SERVER_USER="u3076779"
SERVER_PATH="/var/www/u3076779/data/www/ikiteam.ru"

echo "=== Загрузка дистрибутива на сервер ==="

# Проверяем, что папка dist существует
if [ ! -d "dist" ]; then
    echo "❌ Папка dist не найдена. Сначала выполните: npm run build"
    exit 1
fi

echo "Загружаем файлы из папки dist..."

# Создаем резервную копию старого сайта
echo "Создаем резервную копию..."
ssh $SERVER_USER@$SERVER_IP "cd $SERVER_PATH && tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz index.html css js img 2>/dev/null || true"

# Загружаем все файлы из dist
echo "Загружаем новые файлы..."
scp -r dist/* $SERVER_USER@$SERVER_IP:$SERVER_PATH/

# Проверяем, что файлы загрузились
echo "Проверяем загрузку..."
ssh $SERVER_USER@$SERVER_IP "ls -la $SERVER_PATH/index.html"

echo ""
echo "=== Загрузка завершена ==="
echo ""
echo "Ваш сайт доступен по адресу: https://ikiteam.ru"
echo ""
echo "Для проверки API: https://ikiteam.ru/test-proxy.html"
echo ""
echo "Если что-то пошло не так, восстановите из резервной копии:"
echo "  ssh $SERVER_USER@$SERVER_IP 'cd $SERVER_PATH && tar -xzf backup-*.tar.gz'" 