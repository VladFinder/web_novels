<template>
  <div class="calendar-container">
    <div class="calendar">
      <div class="calendar-header">
        <button @click="previousMonth" class="nav-btn">&lt;</button>
        <h2>{{ currentMonthName }} {{ currentYear }}</h2>
        <button @click="nextMonth" class="nav-btn">&gt;</button>
      </div>
      
      <div class="weekdays">
        <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
      </div>
      
      <div class="calendar-grid">
        <div 
          v-for="day in calendarDays" 
          :key="day.date" 
          class="calendar-day"
          :class="{ 
            'other-month': !day.isCurrentMonth,
            'today': day.isToday,
            'has-emotion': day.emotion
          }"
          @click="showEmotionDetails(day)"
        >
          <span class="date">{{ day.dayNumber }}</span>
          <img 
            v-if="day.emotion" 
            :src="getMiniEmotionIcon(day.emotion)" 
            :alt="getEmotionName(day.emotion)"
            class="emotion-icon-mini"
          >
        </div>
      </div>
    </div>
    
    <!-- Секция записи мыслей -->
    <div class="thoughts-section">
      <h3>Записать мысли</h3>
      <div class="thought-input-container">
        <textarea 
          v-model="dailyThought"
          placeholder="Напишите свои мысли о сегодняшнем дне..."
          class="thought-textarea"
          rows="4"
        ></textarea>
        <button @click="saveThought" class="save-thought-btn" :disabled="isSavingThought">
          {{ isSavingThought ? 'Сохранение...' : 'Записать мысли' }}
        </button>
      </div>
      <p v-if="thoughtSaved" class="thought-saved">Мысли записаны!</p>
    </div>
    
    <!-- Секция заметок -->
    <div class="notes-section">
      <h3>Заметки за день</h3>
      <div class="note-input-container">
      <textarea 
        v-model="dailyNote"
        placeholder="Напишите о своём дне..."
          class="note-textarea"
          rows="4"
      ></textarea>
        <button @click="saveNote" class="save-note-btn" :disabled="isSavingNote">
          {{ isSavingNote ? 'Сохранение...' : 'Сохранить заметку' }}
        </button>
      </div>
      <p v-if="noteSaved" class="note-saved">Заметка сохранена!</p>
    </div>
    
    <!-- Модальное окно с деталями эмоции -->
    <div v-if="selectedDay" class="emotion-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>{{ formatDate(selectedDay.date) }}</h3>
        <div class="emotion-details">
          <img :src="getEmotionIcon(selectedDay.emotion)" :alt="getEmotionName(selectedDay.emotion)" class="emotion-icon-large">
          <p class="emotion-name">{{ getEmotionName(selectedDay.emotion) }}</p>
          <p v-if="selectedDay.username" class="username">@{{ selectedDay.username }}</p>
          <div v-if="selectedDay.note" class="note-display">
            <h4>Заметка:</h4>
            <p class="emotion-note">{{ selectedDay.note }}</p>
          </div>
          <div v-if="selectedDay.thoughts && selectedDay.thoughts.length > 0" class="thoughts-display">
            <h4>Мысли за день:</h4>
            <div v-for="thought in selectedDay.thoughts" :key="thought.id" class="thought-item">
              <p class="thought-text">{{ thought.text }}</p>
              <p class="thought-time">{{ formatTime(thought.timestamp) }}</p>
            </div>
          </div>
          <!-- Добавить мысль -->
          <div class="modal-thought-input">
            <textarea v-model="modalThought" placeholder="Добавить мысль..." rows="2"></textarea>
            <button @click="addModalThought" :disabled="isSavingModalThought">{{ isSavingModalThought ? 'Сохранение...' : 'Добавить мысль' }}</button>
          </div>
          <p v-if="modalThoughtSaved" class="thought-saved">Мысль добавлена!</p>
        </div>
        <button @click="closeModal" class="close-btn">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import { jsonStorageService } from '../services/jsonStorageService'
import { getTelegramUserId } from '../utils/telegram'

export default {
  name: 'EmotionCalendar',
  data() {
    return {
      currentDate: new Date(),
      emotions: [],
      selectedDay: null,
      weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      emotionNames: {
        1: 'Радостно',
        2: 'Грустно', 
        3: 'Спокойно',
        4: 'Тревожно',
        5: 'Раздражённо',
        6: 'Мечтательно'
      },
      dailyNote: '',
      isSavingNote: false,
      noteSaved: false,
      dailyThought: '',
      isSavingThought: false,
      thoughtSaved: false,
      modalThought: '',
      isSavingModalThought: false,
      modalThoughtSaved: false
    }
  },
  computed: {
    currentMonthName() {
      const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ]
      return months[this.currentDate.getMonth()]
    },
    currentYear() {
      return this.currentDate.getFullYear()
    },
    calendarDays() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      
      // Первый день месяца
      const firstDay = new Date(year, month, 1)
      // Последний день месяца
      const lastDay = new Date(year, month + 1, 0)
      
      // Начало недели (понедельник)
      const startDate = new Date(firstDay)
      const dayOfWeek = firstDay.getDay()
      const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1
      startDate.setDate(firstDay.getDate() - daysToSubtract)
      
      const days = []
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      // Генерируем 42 дня (6 недель)
      for (let i = 0; i < 42; i++) {
        const date = new Date(startDate)
        date.setDate(startDate.getDate() + i)
        
        const dateStr = date.toISOString().split('T')[0]
        const emotion = this.getEmotionForDate(dateStr)
        
        days.push({
          date: dateStr,
          dayNumber: date.getDate(),
          isCurrentMonth: date.getMonth() === month,
          isToday: date.getTime() === today.getTime(),
          emotion: emotion ? emotion.emotion : null,
          note: emotion ? emotion.note : null,
          timestamp: emotion ? emotion.timestamp : null
        })
      }
      
      return days
    }
  },
  async mounted() {
    await this.loadEmotions()
  },
  methods: {
    async loadEmotions() {
      try {
        let telegramId = getTelegramUserId()
        if (!telegramId) {
          console.warn('Telegram ID не найден, используем тестовый ID')
          // Для тестирования используем последний debug ID
          telegramId = 'debug_user_1750544735820'
        }
        
        // Загружаем эмоции за текущий месяц
        const startDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)
        const endDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0)
        
        this.emotions = await jsonStorageService.getUserEmotions(telegramId, startDate, endDate)
        console.log('Загружены эмоции:', this.emotions)
      } catch (error) {
        console.error('Ошибка загрузки эмоций:', error)
      }
    },
    
    getEmotionForDate(dateStr) {
      return this.emotions.find(emotion => emotion.date === dateStr)
    },
    
    getEmotionIcon(emotionId) {
      const iconMap = {
        1: require('../assets/emotions/Радость.png'),
        2: require('../assets/emotions/Грусть.png'),
        3: require('../assets/emotions/Спокойно.png'),
        4: require('../assets/emotions/Тревога.png'),
        5: require('../assets/emotions/Раздражение.png'),
        6: require('../assets/emotions/Мечтательность.png')
      }
      return iconMap[emotionId] || ''
    },
    
    getEmotionName(emotionId) {
      return this.emotionNames[emotionId] || 'Неизвестно'
    },
    
    async showEmotionDetails(day) {
      if (day.emotion) {
        // Загружаем мысли для этой даты
        try {
          let telegramId = getTelegramUserId()
          if (!telegramId) {
            telegramId = 'debug_user_1750544735820'
          }
          day.thoughts = await jsonStorageService.getThoughtsByDate(telegramId, day.date)
        } catch (error) {
          console.error('Ошибка загрузки мыслей:', error)
          day.thoughts = []
        }
        this.selectedDay = day
      }
    },
    
    closeModal() {
      this.selectedDay = null
    },
    
    formatDate(dateStr) {
      const date = new Date(dateStr)
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
      }
      return date.toLocaleDateString('ru-RU', options)
    },
    
    formatTime(timestamp) {
      const date = new Date(timestamp)
      const options = { 
        hour: 'numeric', 
        minute: 'numeric'
      }
      return date.toLocaleTimeString('ru-RU', options)
    },
    
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1)
      this.loadEmotions()
    },
    
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1)
      this.loadEmotions()
    },
    
    async saveNote() {
      this.isSavingNote = true
      this.noteSaved = false
      
      try {
        let telegramId = getTelegramUserId()
        if (!telegramId) {
          telegramId = 'debug_user_1750544735820'
        }
        
        // Проверяем, есть ли эмоция на сегодня
        const today = new Date().toISOString().split('T')[0]
        const todayEmotion = await jsonStorageService.getEmotionByDate(telegramId, today)
        
        if (!todayEmotion) {
          throw new Error('Сначала выберите эмоцию на сегодня')
        }
        
        // Сохраняем заметку
        await jsonStorageService.updateNote(telegramId, today, this.dailyNote)
        
        // Обновляем данные
        await this.loadEmotions()
        
        this.dailyNote = ''
        this.noteSaved = true
        
        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
          this.noteSaved = false
        }, 3000)
        
      } catch (error) {
        console.error('Ошибка сохранения заметки:', error)
        alert(`Ошибка сохранения заметки: ${error.message}`)
      } finally {
        this.isSavingNote = false
      }
    },
    
    async saveThought() {
      this.isSavingThought = true
      this.thoughtSaved = false
      
      try {
        let telegramId = getTelegramUserId()
        if (!telegramId) {
          telegramId = 'debug_user_1750544735820'
        }
        
        // Сохраняем мысли
        await jsonStorageService.saveThought(telegramId, this.dailyThought)
        
        // Обновляем данные
        await this.loadEmotions()
        
        this.dailyThought = ''
        this.thoughtSaved = true
        
        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
          this.thoughtSaved = false
        }, 3000)
        
      } catch (error) {
        console.error('Ошибка сохранения мыслей:', error)
        alert(`Ошибка сохранения мыслей: ${error.message}`)
      } finally {
        this.isSavingThought = false
      }
    },
    
    getMiniEmotionIcon(emotionId) {
      const miniIconMap = {
        1: require('../assets/emotions/radost.png'),
        2: require('../assets/emotions/grust.png'),
        3: require('../assets/emotions/spokoino.png'),
        4: require('../assets/emotions/trevoga.png'),
        5: require('../assets/emotions/razdrazhenie.png'),
        6: require('../assets/emotions/mechta.png')
      }
      return miniIconMap[emotionId] || ''
    },
    
    async addModalThought() {
      if (!this.modalThought.trim()) return;
      this.isSavingModalThought = true;
      try {
        let telegramId = getTelegramUserId();
        if (!telegramId) {
          telegramId = 'debug_user_1750544735820';
        }
        await jsonStorageService.saveThought(telegramId, this.modalThought, this.selectedDay.date);
        // Обновить мысли в модалке
        this.selectedDay.thoughts = await jsonStorageService.getThoughtsByDate(telegramId, this.selectedDay.date);
        this.modalThought = '';
        this.modalThoughtSaved = true;
        setTimeout(() => { this.modalThoughtSaved = false; }, 2000);
      } catch (e) {
        alert('Ошибка сохранения мысли: ' + e.message);
      } finally {
        this.isSavingModalThought = false;
      }
    }
  }
}
</script>

<style scoped>
.calendar-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.calendar {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.calendar-header h2 {
  margin: 0;
  font-family: 'Mulish', sans-serif;
  font-size: 24px;
  color: #333;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}

.weekday {
  text-align: center;
  font-weight: bold;
  color: #666;
  font-size: 14px;
  padding: 10px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
}

.calendar-day:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.calendar-day.other-month {
  opacity: 0.3;
}

.calendar-day.today {
  background: rgba(255, 193, 7, 0.3);
  border: 2px solid #ffc107;
}

.calendar-day.has-emotion {
  background: rgba(76, 175, 80, 0.2);
  border: 2px solid #4caf50;
}

.calendar-day .date {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.emotion-icon-mini {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 2px;
  transition: transform 0.2s;
}

.calendar-day:hover .emotion-icon-mini {
  transform: scale(1.2);
}

/* Модальное окно */
.emotion-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 30px;
  border-radius: 20px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-content h3 {
  margin: 0 0 20px 0;
  font-family: 'Mulish', sans-serif;
  color: #333;
  font-size: 20px;
}

.emotion-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.emotion-icon-large {
  width: 120px;
  height: 120px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.emotion-name {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 15px 0;
  color: #333;
  font-family: 'Mulish', sans-serif;
}

.emotion-note {
  text-align: center;
  color: #666;
  font-style: italic;
  margin: 0;
  line-height: 1.5;
}

.close-btn {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

/* Секция заметок */
.notes-section {
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.note-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.note-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
}

.save-note-btn {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.save-note-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.note-saved {
  margin-top: 10px;
  color: #4caf50;
  font-weight: bold;
}

/* Секция заметок */
.note-display {
  margin-top: 20px;
  text-align: left;
}

.note-display h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Секция записи мыслей */
.thoughts-section {
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.thought-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.thought-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
}

.save-thought-btn {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.save-thought-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.thought-saved {
  margin-top: 10px;
  color: #4caf50;
  font-weight: bold;
}

/* Модальное окно */
.thoughts-display {
  margin-top: 20px;
  text-align: left;
}

.thought-item {
  margin-bottom: 10px;
}

.thought-text {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.thought-time {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.modal-thought-input {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal-thought-input textarea {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 6px;
  resize: none;
}

.modal-thought-input button {
  align-self: flex-end;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Mulish', sans-serif;
  transition: all 0.2s;
}

.modal-thought-input button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
