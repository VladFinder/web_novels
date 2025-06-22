# JSON Storage для эмоций

## Описание

Вместо Firebase теперь используется локальное хранение данных в `localStorage` браузера. Это простое и надежное решение, которое не требует настройки серверной части.

## Как это работает

### 1. Сохранение эмоций
- Эмоции сохраняются в `localStorage` браузера
- Каждый пользователь может сохранить только одну эмоцию в день
- Данные структурированы по Telegram ID пользователя и дате

### 2. Структура данных
```javascript
{
  "user_emotions": {
    "123456789": {  // Telegram ID пользователя
      "2024-01-15": {  // Дата в формате YYYY-MM-DD
        "emotion": 1,  // ID эмоции (1-6)
        "note": "",    // Заметка (пока не используется)
        "timestamp": "2024-01-15T10:30:00.000Z",
        "createdAt": "2024-01-15T10:30:00.000Z"
      },
      "2024-01-16": {
        "emotion": 3,
        "note": "",
        "timestamp": "2024-01-16T09:15:00.000Z",
        "createdAt": "2024-01-16T09:15:00.000Z"
      }
    }
  }
}
```

## Компоненты

### 1. EmotionSelect.vue
- Позволяет выбрать эмоцию
- Проверяет, не была ли уже сохранена эмоция на сегодня
- Показывает индикацию загрузки
- Обрабатывает ошибки

### 2. EmotionCalendar.vue
- Отображает календарь с эмоциями
- Позволяет переключаться между месяцами
- Показывает детали эмоции при клике
- Выделяет сегодняшний день и дни с эмоциями

### 3. EmotionStats.vue
- Показывает статистику эмоций
- Фильтры по периодам (неделя/месяц/год)
- Визуализация в виде столбчатой диаграммы

## API сервиса

### jsonStorageService

#### Методы:

**`saveEmotion(telegramId, { emotion, note, timestamp })`**
- Сохраняет эмоцию пользователя
- Проверяет, не была ли уже сохранена эмоция на сегодня
- Возвращает `{ success: true, id: "userId_date" }`

**`getUserEmotions(telegramId, startDate, endDate)`**
- Получает эмоции пользователя за период
- Возвращает массив эмоций, отсортированный по дате

**`hasEmotionToday(telegramId)`**
- Проверяет, была ли уже сохранена эмоция на сегодня
- Возвращает `true/false`

**`getEmotionByDate(telegramId, date)`**
- Получает эмоцию на конкретную дату
- Возвращает объект эмоции или `null`

**`getEmotionStats(telegramId, startDate, endDate)`**
- Получает статистику эмоций за период
- Возвращает объект с количеством каждой эмоции

## Преимущества

✅ **Простота** - не требует настройки базы данных
✅ **Надежность** - данные хранятся локально в браузере
✅ **Быстродействие** - мгновенный доступ к данным
✅ **Офлайн работа** - работает без интернета
✅ **Приватность** - данные не покидают устройство пользователя

## Ограничения

⚠️ **Локальное хранение** - данные привязаны к браузеру
⚠️ **Ограниченный объем** - localStorage имеет лимиты
⚠️ **Нет синхронизации** - данные не синхронизируются между устройствами

## Использование

### 1. Выбор эмоции
```javascript
// В компоненте
const result = await jsonStorageService.saveEmotion(telegramId, {
  emotion: 1,
  note: '',
  timestamp: new Date().toISOString()
});
```

### 2. Получение эмоций за месяц
```javascript
const startDate = new Date(2024, 0, 1); // 1 января
const endDate = new Date(2024, 0, 31);  // 31 января
const emotions = await jsonStorageService.getUserEmotions(telegramId, startDate, endDate);
```

### 3. Проверка на сегодня
```javascript
const hasToday = jsonStorageService.hasEmotionToday(telegramId);
if (hasToday) {
  console.log('Эмоция на сегодня уже сохранена');
}
```

## Эмоции

| ID | Название | Иконка |
|----|----------|--------|
| 1  | Радостно | Радость.png |
| 2  | Грустно  | Грусть.png |
| 3  | Спокойно | Спокойно.png |
| 4  | Тревожно | Тревога.png |
| 5  | Раздражённо | Раздражение.png |
| 6  | Мечтательно | Мечтательность.png |

## Миграция с Firebase

Если у вас есть данные в Firebase, их можно экспортировать и импортировать:

```javascript
// Экспорт из Firebase
const firebaseData = await firebaseService.getUserData(telegramId);

// Импорт в JSON storage
jsonStorageService.importUserData(telegramId, firebaseData);
```

## Отладка

### Просмотр данных в браузере
```javascript
// В консоли браузера
console.log(JSON.parse(localStorage.getItem('user_emotions')));
```

### Очистка данных
```javascript
// Очистить все данные
localStorage.removeItem('user_emotions');

// Очистить данные конкретного пользователя
const data = JSON.parse(localStorage.getItem('user_emotions'));
delete data[telegramId];
localStorage.setItem('user_emotions', JSON.stringify(data));
``` 