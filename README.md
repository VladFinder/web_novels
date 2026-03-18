# Web Novels

Мини веб-приложение под Telegram WebApp: выбор эмоции, ежедневные записи, календарь и тестовые «истории». Всё на Vue 3 + Pinia, хранение — лёгкий JSON API на Express.

## Требования
- Node.js LTS (v18/v20/v24) + npm.
- Доступ к API (по умолчанию `http://localhost:3001/api`, можно переопределить `VUE_APP_API_URL`).

## Запуск
### 1) API
```bash
cd server
npm install
npm start            # http://localhost:3001/api, данные в server/data/
```

### 2) Фронтенд
```bash
npm install
npm run serve        # dev-сервер http://localhost:8080 с прокси на /api
npm run build        # прод-сборка (dist для prod, dist-test для dev)
```

### Настройка API-адреса
Создать `.env.development` или `.env.production`:
```
# Для продакшена на iki.commandc.ru (API отдаётся по /api через nginx)
VUE_APP_API_URL="https://iki.commandc.ru/api"
```
Без переменной фронт использует `/api` (работает с dev-прокси из `vue.config.js` или с прод-прокси nginx на том же домене).

**Важно для CORS:** в проде либо держите API на том же домене через nginx-прокси `/api -> http://127.0.0.1:3001/api`, либо задайте `VUE_APP_API_URL` на точный домен API. Если фронт и API на разных доменах, в nginx добавьте заголовки `Access-Control-Allow-Origin`/`Methods`/`Headers` и ответ `204` на `OPTIONS`.

## Как устроено
- `src/constants/emotions.js` — единый справочник эмоций (иконки, градиенты, фразы).
- `src/services/apiClient.js` — клиент API: `ensureUser`, `saveEmotion`, `getEmotionByDate`, `getEmotionsRange`, `saveThought`, `getThoughtsByDate`.
- `src/utils/dates.js` и `src/utils/telegram.js` — безопасные даты и получение Telegram ID (есть локальный fallback для разработки).
- `src/services/useSoulStyle.js` — подбор фоновой темы/кнопок по выбранной эмоции.
- Компоненты:
  - `EmotionSelect.vue` — выбор эмоции, проверка «сегодня уже сохранено».
  - `MainScreen.vue` — приветствие, фраза под эмоцию, переход в календарь, модальные истории (для whitelisted ID).
  - `EmotionCalendar.vue` — месячный календарь, модалка с деталями эмоции и заметками, поле «мысль за сегодня».
  - `LoadingScreen.vue` — стартовый лоадер.
- `scenes.js` — тексты для тестовых историй (используется в модалке «Истории»).
- `server/json-server.js` — API-эндпоинты, данные лежат в `server/data/` (по одному JSON на пользователя/дату).
- `vue.config.js` — dev-прокси `/api -> http://localhost:3001`.

## Пользовательский флоу
1. Берём Telegram ID через `getSafeTelegramId` (если нет — сохраняем локальный debug ID).
2. `ensureUser` гарантирует наличие пользователя на сервере.
3. `EmotionSelect` проверяет `getEmotionByDate` на сегодня и даёт выбрать/показывает выбранное.
4. `MainScreen` подхватывает эмоцию, показывает случайную фразу и даёт перейти в календарь/истории.
5. `EmotionCalendar` тянет весь диапазон эмоций, подсвечивает календарь, показывает детали и сохраняет «мысли» за день.

## Полезные команды
- `npm run serve` — dev-фронтенд.
- `npm run build` — сборка фронта.
- `cd server && npm start` — API.

## Telegram WebApp
Скрипт `https://telegram.org/js/telegram-web-app.js` подключён в `public/index.html`. Для локальной разработки без Telegram есть `getSafeTelegramId` — он создаёт/читает ID из `localStorage`, чтобы API принимал запросы.
