# Серверное решение для хранения эмоций

Express-сервер (`server/json-server.js`) хранит эмоции и мысли в JSON на диске. Один эндпоинт — один простой файл, без БД.

## Архитектура
```
server/
├── json-server.js       # основной сервер
├── data/                # данные пользователей
│   ├── <telegramId>/<yyyy-mm-dd>.json   # эмоции по дням
│   └── emotions.json (user_thoughts)    # мысли/заметки
└── package.json
```

## API
- `POST /api/users` — создать/обновить пользователя `{ telegramId, login }`.
- `GET /api/users/:telegramId` — получить пользователя.
- `POST /api/emotions` — сохранить эмоцию `{ telegramId, emotion, note?, date?, username? }` (одна эмоция на дату).
- `GET /api/emotions?telegramId&startDate&endDate` — получить эмоции диапазона.
- `GET /api/emotions/:telegramId/:date` — эмоция на дату.
- `POST /api/thoughts` — сохранить мысль `{ telegramId, thought, date? }`.
- `GET /api/thoughts/:telegramId/:date` — мысли на дату.

Все маршруты уже подключены к фронту через `src/services/apiClient.js`.

## Запуск
```bash
cd server
npm install
npm start           # по умолчанию слушает 3001, базовый путь /api
```

Если нужен HTTPS/другой хост: используйте переменные `PORT` и `HOST` при запуске или оберните в собственный reverse-proxy (пример конфигов в `nginx*.conf`).

## 🔧 Конфигурация:

### Изменение порта сервера
В `server/json-server.js`:
```javascript
const PORT = 3001; // Измените на нужный порт
```

### Изменение URL API
В `src/services/jsonStorageService.js`:
```javascript
const API_URL = 'http://localhost:3001/api'; // Измените на ваш сервер
```

## 📱 Пользовательский опыт:

### День 1 (первый выбор):
1. Пользователь открывает приложение
2. Видит экран выбора эмоций
3. Выбирает эмоцию → сохраняется на сервере с именем
4. Перенаправляется на календарь

### День 1 (после выбора):
1. Пользователь открывает приложение
2. Видит экран с выбранной эмоцией
3. Нажимает "Посмотреть календарь" → переходит к календарю
4. В календаре может добавить заметку через кнопку "Сохранить заметку"

### Просмотр заметок:
1. Пользователь кликает на дату с эмоцией в календаре
2. Открывается модальное окно с деталями
3. Показывается эмоция, имя пользователя и заметка

## 🔄 Миграция в базу данных:

Данные легко перенести в любую БД:

### MySQL/PostgreSQL
```sql
CREATE TABLE emotions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  telegram_id VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  emotion INT NOT NULL,
  note TEXT,
  username VARCHAR(100),
  timestamp DATETIME,
  created_at DATETIME,
  updated_at DATETIME,
  UNIQUE KEY unique_user_date (telegram_id, date)
);
```

### MongoDB
```javascript
db.emotions.insertMany([
  {
    telegramId: "123456789",
    date: "2024-01-15",
    emotion: 1,
    note: "Отличный день!",
    username: "john_doe",
    timestamp: new Date("2024-01-15T10:30:00.000Z"),
    createdAt: new Date("2024-01-15T10:30:00.000Z"),
    updatedAt: new Date("2024-01-15T15:45:00.000Z")
  }
]);
```

## 🚀 Преимущества решения:

✅ **Постоянное хранение** - данные не теряются при перезагрузке
✅ **Синхронизация** - работает между устройствами через Telegram ID
✅ **Масштабируемость** - легко перенести в базу данных
✅ **Простота** - JSON файл легко читать и отлаживать
✅ **Надежность** - серверная валидация данных
✅ **Безопасность** - данные хранятся на сервере

## 🔍 Отладка:

### Просмотр данных на сервере
```bash
cat server/data/emotions.json
```

### Проверка API
```bash
curl http://localhost:3001/api/emotions/today/123456789
```

### Логи сервера
Сервер выводит все операции в консоль для отладки. 
