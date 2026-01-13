## Prod server runbook

Хост: `/home/c/commano5/iki.commandc.ru/public_html/server`  
Лог: `/home/c/commano5/iki.commandc.ru/public_html/api.log`  
Файл сервера: `json-server.js` (версия с раздельными файлами эмоций)

### Базовые команды
- Проверить лог: `tail -n 50 /home/c/commano5/iki.commandc.ru/public_html/api.log`
- Проверить живость: `curl "http://127.0.0.1:3001/api/emotions?telegramId=1"` (ожидаем 400/200)
- Старт/рестарт: `/home/c/commano5/iki.commandc.ru/public_html/server/start-server.sh`
- Остановить вручную: `pkill -f "node json-server.js"`

### Деплой обновления кода
```
cd /home/c/commano5/iki.commandc.ru/public_html/server
git pull
npm install           # при изменении зависимостей
./start-server.sh
```

### Автозапуск после ребута
Добавить в crontab пользователя:
```
crontab -e
@reboot /home/c/commano5/iki.commandc.ru/public_html/server/start-server.sh
```
Cron будет стартовать сервер на `127.0.0.1:3001` и писать лог в `api.log`.
