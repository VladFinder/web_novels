#!/bin/bash

echo "Попытка загрузки файлов на сервер..."

# Проверяем доступность сервера
echo "Проверяем доступность сервера..."
if curl -s -o /dev/null -w "%{http_code}" http://37.140.192.181:3001/api/emotions | grep -q "400\|200"; then
    echo "✅ Сервер доступен"
else
    echo "❌ Сервер недоступен"
    exit 1
fi

# Пробуем разные способы подключения
echo "Пробуем подключение через SSH..."

# Способ 1: Обычное SSH
if ssh -o ConnectTimeout=5 u3076779@37.140.192.181 "echo 'test'" 2>/dev/null; then
    echo "✅ SSH подключение работает"
    echo "Загружаем файлы..."
    scp -r dist/* u3076779@37.140.192.181:/var/www/u3076779/data/www/ikiteam.ru/
    scp server/json-server.js u3076779@37.140.192.181:/home/u3076779/
    ssh u3076779@37.140.192.181 "cd /home/u3076779 && pm2 restart json-server || node json-server.js"
    echo "✅ Файлы загружены и сервер перезапущен"
    exit 0
fi

# Способ 2: SSH с другими опциями
echo "Пробуем SSH с другими опциями..."
if ssh -o ConnectTimeout=10 -o ServerAliveInterval=60 u3076779@37.140.192.181 "echo 'test'" 2>/dev/null; then
    echo "✅ SSH подключение работает с дополнительными опциями"
    echo "Загружаем файлы..."
    scp -r dist/* u3076779@37.140.192.181:/var/www/u3076779/data/www/ikiteam.ru/
    scp server/json-server.js u3076779@37.140.192.181:/home/u3076779/
    ssh u3076779@37.140.192.181 "cd /home/u3076779 && pm2 restart json-server || node json-server.js"
    echo "✅ Файлы загружены и сервер перезапущен"
    exit 0
fi

echo "❌ Не удалось подключиться к серверу"
echo "Попробуйте подключиться вручную и выполнить:"
echo "1. scp -r dist/* u3076779@37.140.192.181:/var/www/u3076779/data/www/ikiteam.ru/"
echo "2. scp server/json-server.js u3076779@37.140.192.181:/home/u3076779/"
echo "3. ssh u3076779@37.140.192.181 'cd /home/u3076779 && pm2 restart json-server'" 