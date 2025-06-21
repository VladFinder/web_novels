# Быстрая настройка PHP прокси

## Проблема
Telegram WebApp блокирует HTTP запросы из HTTPS страницы.

## Решение
PHP прокси на том же домене перенаправляет запросы на локальный HTTP сервер.

## Что нужно сделать на сервере:

### 1. Загрузить файлы
Убедитесь, что на сервере есть:
- `api.php` - PHP прокси
- `.htaccess` - правила перенаправления  
- `server/json-server.js` - HTTP сервер

### 2. Запустить развертывание
```bash
chmod +x deploy-php-proxy.sh
./deploy-php-proxy.sh
```

### 3. Проверить работу
Откройте: `https://37.140.192.181/test-proxy.html`

## Как это работает:
- Клиент делает запрос на `https://37.140.192.181/api/emotions`
- `.htaccess` перенаправляет на `api.php`
- `api.php` проксирует на `http://localhost:3001/api/emotions`
- HTTP сервер отвечает через PHP прокси обратно клиенту

## Если не работает:
1. Проверьте логи: `sudo journalctl -u emotions-api -f`
2. Перезапустите сервер: `sudo systemctl restart emotions-api`
3. Проверьте статус: `sudo systemctl status emotions-api` 