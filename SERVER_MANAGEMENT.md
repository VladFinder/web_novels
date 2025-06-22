# Инструкция по управлению сервером

## Быстрые команды

### Проверка статуса сервера
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "ps aux | grep json-server"
```

### Остановка сервера
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "pkill -f 'node json-server.js'"
```

### Запуск сервера
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && nohup node json-server.js > server.log 2>&1 &"
```

### Перезапуск сервера
```bash
# Остановка
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "pkill -f 'node json-server.js'"

# Запуск
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && nohup node json-server.js > server.log 2>&1 &"
```

## Подробные инструкции

### 1. Проверка статуса сервера

**Команда:**
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "ps aux | grep json-server"
```

**Что показывает:**
- Если сервер запущен: увидите процесс `node json-server.js`
- Если сервер не запущен: увидите только команду `grep`

**Пример вывода (сервер запущен):**
```
u3076779 1525931  0.0  0.0 611864 45392 ?        Sl   12:48   0:00 node json-server.js
```

### 2. Остановка сервера

**Команда:**
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "pkill -f 'node json-server.js'"
```

**Что происходит:**
- Находит все процессы с именем `node json-server.js`
- Завершает их работу
- Сервер перестает отвечать на запросы

### 3. Запуск сервера

**Команда:**
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && nohup node json-server.js > server.log 2>&1 &"
```

**Что происходит:**
- Переходит в папку сервера
- Запускает Node.js сервер в фоновом режиме
- Логи сохраняются в файл `server.log`
- Сервер начинает отвечать на запросы

### 4. Перезапуск сервера

**Последовательность команд:**
```bash
# 1. Остановка
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "pkill -f 'node json-server.js'"

# 2. Проверка остановки (опционально)
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "ps aux | grep json-server"

# 3. Запуск
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && nohup node json-server.js > server.log 2>&1 &"

# 4. Проверка запуска
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "ps aux | grep json-server"
```

## Дополнительные команды

### Просмотр логов сервера
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && tail -20 server.log"
```

### Просмотр последних 50 строк логов
```bash
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && tail -50 server.log"
```

### Тестирование API
```bash
# Тест GET запроса
curl -X GET "https://ikiteam.ru/api/emotions/test_user/2025-06-22"

# Тест POST запроса
curl -X POST "https://ikiteam.ru/api/emotions" -H "Content-Type: application/json" -d '{"telegramId": "test_user_123", "emotion": 1, "username": "Test User"}'
```

## Структура сервера

```
/var/www/u3076779/data/www/ikiteam.ru/
├── server/
│   ├── json-server.js          # Основной файл сервера
│   ├── package.json            # Зависимости
│   ├── data/
│   │   └── emotions.json       # Файл с данными
│   └── server.log              # Логи сервера
├── api-proxy.php               # PHP прокси
├── .htaccess                   # Настройки перенаправления
└── index.html                  # Главная страница
```

## Устранение неполадок

### Сервер не запускается
1. Проверьте, что файл `json-server.js` существует
2. Проверьте права доступа к папке
3. Посмотрите логи: `tail -50 server.log`

### API не отвечает
1. Проверьте, что сервер запущен
2. Проверьте, что PHP прокси работает
3. Проверьте .htaccess настройки

### Ошибки в логах
1. Посмотрите логи сервера: `tail -50 server.log`
2. Проверьте права доступа к файлу данных
3. Убедитесь, что порт 3001 не занят

## Автоматический перезапуск

Для автоматического перезапуска сервера можно создать скрипт:

```bash
#!/bin/bash
echo "Перезапуск сервера..."

# Остановка
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "pkill -f 'node json-server.js'"

# Пауза
sleep 2

# Запуск
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "cd /var/www/u3076779/data/www/ikiteam.ru/server && nohup node json-server.js > server.log 2>&1 &"

# Проверка
sleep 3
sshpass -p "T6YJqgT2R5cN9w3E" ssh -o StrictHostKeyChecking=no u3076779@37.140.192.181 "ps aux | grep json-server"

echo "Перезапуск завершен!"
```

Сохраните как `restart-server.sh` и сделайте исполняемым: `chmod +x restart-server.sh` 