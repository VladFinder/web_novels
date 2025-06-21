# Настройка PHP Прокси для API

## Проблема
Telegram WebApp работает только через HTTPS, но наш API сервер использует HTTP. Это создает проблему "mixed content" - браузер блокирует HTTP запросы из HTTPS страницы.

## Решение
Используем PHP прокси на том же домене, который будет перенаправлять запросы на локальный HTTP сервер.

## Шаги настройки

### 1. Загрузить файлы на сервер
Убедитесь, что на сервере есть файлы:
- `api.php` - PHP прокси
- `.htaccess` - правила перенаправления
- `server/json-server.js` - HTTP API сервер

### 2. Запустить HTTP сервер
```bash
# На сервере в папке проекта
cd server
npm install
node json-server.js
```

Сервер должен запуститься на порту 3001.

### 3. Проверить работу
Откройте в браузере: `https://37.140.192.181/test-proxy.html`

### 4. Настроить автозапуск сервера
Создать systemd сервис:

```bash
sudo nano /etc/systemd/system/emotions-api.service
```

Содержимое:
```ini
[Unit]
Description=Emotions API Server
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/your/project/server
ExecStart=/usr/bin/node json-server.js
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Запустить:
```bash
sudo systemctl daemon-reload
sudo systemctl enable emotions-api
sudo systemctl start emotions-api
```

### 5. Проверить статус
```bash
sudo systemctl status emotions-api
```

## Структура запросов

Теперь все API запросы идут через:
- `https://37.140.192.181/api/emotions` - вместо `http://37.140.192.181:3001/api/emotions`

PHP прокси автоматически перенаправляет их на локальный сервер.

## Отладка

Если что-то не работает:

1. Проверьте, что HTTP сервер запущен:
```bash
curl http://localhost:3001/api/emotions/today/test
```

2. Проверьте логи PHP:
```bash
tail -f /var/log/apache2/error.log
```

3. Проверьте логи Node.js сервера:
```bash
sudo journalctl -u emotions-api -f
```

## Альтернативные решения

Если PHP прокси не работает, можно:

1. Использовать Cloudflare для бесплатного SSL
2. Настроить nginx как reverse proxy
3. Получить бесплатный SSL сертификат от Let's Encrypt 