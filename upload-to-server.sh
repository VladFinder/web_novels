#!/bin/bash

# Скрипт для загрузки файлов на сервер

SERVER_IP="37.140.192.181"
SERVER_USER="u3076779"
SERVER_PATH="/var/www/u3076779/data/www/37.140.192.181"

echo "=== Загрузка файлов на сервер ==="

# Список файлов для загрузки
FILES=(
    "api.php"
    ".htaccess"
    "test-proxy.html"
    "deploy-php-proxy.sh"
    "QUICK_SETUP.md"
    "server/json-server.js"
    "server/package.json"
)

echo "Загружаем файлы на сервер..."

# Создаем папку server на сервере если её нет
ssh $SERVER_USER@$SERVER_IP "mkdir -p $SERVER_PATH/server"

# Загружаем основные файлы
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "Загружаем: $file"
        scp "$file" "$SERVER_USER@$SERVER_IP:$SERVER_PATH/$file"
    else
        echo "⚠️  Файл не найден: $file"
    fi
done

echo ""
echo "=== Загрузка завершена ==="
echo ""
echo "Теперь на сервере выполните:"
echo "  ssh $SERVER_USER@$SERVER_IP"
echo "  cd $SERVER_PATH"
echo "  chmod +x deploy-php-proxy.sh"
echo "  ./deploy-php-proxy.sh"
echo ""
echo "Или выполните команду прямо отсюда:"
echo "  ssh $SERVER_USER@$SERVER_IP 'cd $SERVER_PATH && chmod +x deploy-php-proxy.sh && ./deploy-php-proxy.sh'" 