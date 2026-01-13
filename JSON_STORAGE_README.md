# Хранилище эмоций / API

Данные теперь лежат на Express API (`server/json-server.js`), а не в `localStorage`. Фронтенд работает через единый клиент `src/services/apiClient.js`.

## Мини-спека API
- `POST /api/users` — создать/обновить пользователя `{ telegramId, login }`.
- `GET /api/users/:telegramId` — получить пользователя.
- `POST /api/emotions` — сохранить эмоцию `{ telegramId, emotion, note?, date?, username? }` (одна эмоция на дату).
- `GET /api/emotions?telegramId&startDate&endDate` — диапазон эмоций.
- `GET /api/emotions/:telegramId/:date` — эмоция на дату.
- `POST /api/thoughts` — сохранить мысль `{ telegramId, thought, date? }`.
- `GET /api/thoughts/:telegramId/:date` — мысли за дату.

Файлы эмоций лежат в `server/data/<telegramId>/<yyyy-mm-dd>.json`, мысли — в `server/data/emotions.json` (ключ `user_thoughts`).

## Примеры использования (фронт)
```js
import { ensureUser, saveEmotion, getEmotionByDate, getEmotionsRange, saveThought } from '@/services/apiClient';
import { todayString } from '@/utils/dates';

const telegramId = '123';
await ensureUser(telegramId, 'login');

await saveEmotion({ telegramId, emotion: 3, date: todayString(), username: 'user' });
const today = await getEmotionByDate(telegramId, todayString());
const all = await getEmotionsRange(telegramId, '2000-01-01', '2100-12-31');

await saveThought({ telegramId, text: 'Мысль за сегодня', date: todayString() });
```

## Ключевые файлы
- `src/services/apiClient.js` — все методы API и обработка ошибок.
- `src/utils/dates.js` — нормализация дат к `YYYY-MM-DD`.
- `src/utils/telegram.js` — безопасное получение Telegram ID (fallback для dev).

Устаревший `jsonStorageService.js` удалён: пользуемся только `apiClient`.
