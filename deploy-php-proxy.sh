#!/bin/bash

# Скрипт для развертывания PHP прокси на сервере

echo "=== Развертывание PHP прокси для API ==="

# Проверяем, что мы на сервере
if [ ! -f "/etc/debian_version" ] && [ ! -f "/etc/redhat-release" ]; then
    echo "Этот скрипт должен выполняться на сервере"
    exit 1
fi

# Останавливаем старый HTTPS сервер если он запущен
echo "Останавливаем старый HTTPS сервер..."
sudo systemctl stop emotions-api-https 2>/dev/null || true

# Устанавливаем зависимости для Node.js сервера
echo "Устанавливаем зависимости..."
cd server
npm install

# Создаем systemd сервис для HTTP сервера
echo "Создаем systemd сервис..."
sudo tee /etc/systemd/system/emotions-api.service > /dev/null <<EOF
[Unit]
Description=Emotions API Server (HTTP)
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=$(pwd)
ExecStart=/usr/bin/node json-server.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

# Перезагружаем systemd и запускаем сервис
echo "Запускаем HTTP сервер..."
sudo systemctl daemon-reload
sudo systemctl enable emotions-api
sudo systemctl start emotions-api

# Проверяем статус
echo "Проверяем статус сервера..."
sleep 3
sudo systemctl status emotions-api --no-pager

# Проверяем, что сервер отвечает
echo "Проверяем доступность API..."
sleep 2
if curl -s http://localhost:3001/api/emotions/today/test > /dev/null; then
    echo "✅ HTTP сервер работает"
else
    echo "❌ HTTP сервер не отвечает"
    exit 1
fi

# Проверяем PHP прокси
echo "Проверяем PHP прокси..."
if curl -s -k https://37.140.192.181/api/emotions/today/test > /dev/null; then
    echo "✅ PHP прокси работает"
else
    echo "❌ PHP прокси не отвечает"
    echo "Проверьте файлы api.php и .htaccess"
fi

echo ""
echo "=== Развертывание завершено ==="
echo ""
echo "Для проверки откройте: https://37.140.192.181/test-proxy.html"
echo ""
echo "Команды для управления сервером:"
echo "  sudo systemctl status emotions-api"
echo "  sudo systemctl restart emotions-api"
echo "  sudo journalctl -u emotions-api -f" 