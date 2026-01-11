# Web Novels

Две части в одном репо:
- Web-приложение (Vue 3 + Pinia) для выбора эмоций в Telegram WebApp.
- Мини-демо визуальной новеллы на RenJS, собранное как статика.

## Требования
- Node.js (LTS, подходит v18/v20/v24) + npm.
- Запущенный API по умолчанию `http://localhost:3001/api` (можно переопределить `VUE_APP_API_URL`).

## Установка и запуск фронтенда
```bash
# один раз в сессии: подхватить nvm (если нужно)
export NVM_DIR="$HOME/.nvm"; source "$NVM_DIR/nvm.sh"; nvm use 24

cd /Users/vladzyranov/Documents/Проекты/web_novels
npm install
npm run serve           # dev-сервер на http://localhost:8080

# прод-сборка (артефакты в dist-test из vue.config.js)
npm run build
```

### Конфигурация API
- По умолчанию запросы идут на `/api` с прокси на `http://localhost:3001`.
- Переопределить базовый URL: создать `.env.development` или `.env.production` с `VUE_APP_API_URL="https://your-api-host/api"`.

## RenJS демо (визуальная новелла)
- Файл: `public/vn/index.html` (использует CDN renjs@3.5.0).
- Ассеты: сейчас с CDN; можно заменить на локальные файлы в `public/vn/`.
- Запуск в dev: `npm run serve`, открыть http://localhost:8080/vn/.
- Расширение: выносите сценарий/ассеты в отдельные JS/JSON внутри `public/vn/` и подключайте в `index.html`.

## Бэкенд (Node/Express)
- Код: `server/`.
- API: `POST /api/emotions`, `GET /api/emotions`, `POST /api/users`, `GET /api/users/:telegramId`.
- Запуск (в новой сессии не забыть `source ~/.nvm/nvm.sh && nvm use 24`):
  ```bash
  cd server
  npm install
  npm start   # слушает 3001
  ```
- База: MySQL, схема в `db/schema.sql` (проверь подключение в `server/db.js`).

## Что ещё
- Статика и тестовые файлы из старой визуальной новеллы удалены.
- Неиспользуемые зависимости (vuex/router/crypto) убраны из `package.json`.
