<template>
  <div class="calendar-screen" :style="dynamicBackgroundStyle">
  <div class="calendar-container">
      <!-- Кнопка назад -->
      <button class="back-btn" @click="$emit('back')" :style="soulTextStyle">Назад</button>
      
    <div class="calendar">
      <div class="calendar-header">
          <button @click="previousMonth" class="nav-btn" :style="soulTextStyle">&lt;</button>
          <h2 :style="soulTextStyle">{{ currentMonthName }} {{ currentYear }}</h2>
          <button @click="nextMonth" class="nav-btn" :style="soulTextStyle">&gt;</button>
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
              'has-emotion': day.emotion,
              'future-date': day.isFutureDate
            }"
            @click="showEmotionDetails(day)"
          >
          <span class="date">{{ day.dayNumber }}</span>
            <img 
              v-if="day.emotion" 
              :src="getMiniEmotionIcon(day.emotion)" 
              :alt="getEmotionName(day.emotion)"
              class="emotion-icon-mini"
              @error="handleImageError"
              @load="handleImageLoad"
            >
          </div>
        </div>
      </div>
      
      <!-- Секция заметок -->
      <div class="notes-section">
        <h3></h3>
        <div class="note-input-container">
      <textarea 
        v-model="dailyNote"
          placeholder="Напишешь пару слов о сегодняшнем дне?"
            class="note-textarea"
            rows="4"
      ></textarea>
          <button @click="saveNote" class="save-note-btn" :disabled="isSavingNote" :style="{ background: dynamicButtonColor }">
            {{ isSavingNote ? 'Сохранение...' : 'Сохранить заметку' }}
          </button>
        </div>
        <p v-if="noteSaved" class="note-saved">Ваши мысли сохранены!</p>
      </div>
      
      <!-- Модальное окно с деталями эмоции -->
      <div v-if="selectedDay" class="emotion-modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3>{{ formatDate(selectedDay.date) }}</h3>
          
          <!-- Предупреждение для будущих дат -->
          <div v-if="selectedDay.isFutureDate" class="future-warning">
            <p class="warning-text">Живи настоящим, не забегай в будущее</p>
          </div>
          
          <div class="emotion-details">
            <!-- Показываем эмоцию только для прошедших и текущих дат -->
            <template v-if="!selectedDay.isFutureDate">
              <img :src="getEmotionIcon(selectedDay.emotion)" :alt="getEmotionName(selectedDay.emotion)" class="emotion-icon-large">
              <p class="emotion-name">{{ getEmotionName(selectedDay.emotion) }}</p>
              <p v-if="selectedDay.username" class="username">@{{ selectedDay.username }}</p>
              <div v-if="selectedDay.note" class="note-display">
                <h4>Заметка:</h4>
                <p class="emotion-note">{{ selectedDay.note }}</p>
              </div>
              <div v-if="selectedDay.thoughts && selectedDay.thoughts.length > 0" class="thoughts-display">
                <h4>Заметки за день:</h4>
                <div v-for="thought in selectedDay.thoughts" :key="thought.id" class="thought-item">
                  <p class="thought-text">{{ thought.text }}</p>
                  <p class="thought-time">{{ formatTime(thought.timestamp) }}</p>
                </div>
              </div>
            </template>
          </div>
          <button @click="closeModal" class="close-btn" :style="{ background: dynamicButtonColor }">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jsonStorageService } from '@/services/jsonStorageService'
import { getTelegramUserId } from '@/utils/telegram'
import { useEmotionStore } from '@/services/emotionStore'
import { useSoulStyle } from '@/services/useSoulStyle'
import { computed } from 'vue'

export default {
  name: 'EmotionCalendar',
  setup() {
    const emotionStore = useEmotionStore()
    console.log('🔍 EmotionCalendar: emotionStore:', emotionStore)
    console.log('🔍 EmotionCalendar: selectedEmotionId:', emotionStore.selectedEmotionId)

    const {backgroundStyle, buttonColor } = useSoulStyle(emotionStore.selectedEmotionId)
    console.log('🔍 EmotionCalendar: backgroundStyle:', backgroundStyle)

    // Create computed that also sets CSS custom property
    const dynamicBackgroundStyle = computed(() => {
      const style = backgroundStyle.value
      console.log('🔍 EmotionCalendar: computed style:', style)
      console.log('🔍 EmotionCalendar: selectedEmotionId in computed:', emotionStore.selectedEmotionId)

      if (style && style.background) {
        console.log('🔍 EmotionCalendar: Setting CSS property:', style.background)
        document.documentElement.style.setProperty('--app-background', style.background)
      } else {
        console.log('🔍 EmotionCalendar: No style or background found')
      }
      return style
    })

    const dynamicButtonColor = computed(() => {
      return buttonColor.value
    })

    const soulTextStyle = computed(() => {
      return {
        color: emotionStore.selectedEmotionId === 5 ? 'white' : '#333'
      }
    })

    console.log('🔍 EmotionCalendar: dynamicBackgroundStyle value:', dynamicBackgroundStyle.value)

    return { 
      emotionStore, 
      dynamicBackgroundStyle,
      dynamicButtonColor,
      soulTextStyle
    }
  },
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
      
      console.log('🔍 Генерируем календарь для:', year, month)
      console.log('🔍 Текущие эмоции:', this.emotions)
      console.log('🔍 Количество эмоций в массиве:', this.emotions.length)
      
      // Первый день месяца
      const firstDay = new Date(year, month, 1)

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
        
        // Создаем дату в локальном времени, чтобы избежать проблем с часовыми поясами
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const dateStr = `${year}-${month}-${day}`
        
        const emotionObj = this.getEmotionForDate(dateStr)
        
        console.log('🔍 Проверяем дату:', dateStr, 'эмоция:', emotionObj ? emotionObj.emotion : 'нет')
        
        const dayData = {
          date: dateStr,
          dayNumber: date.getDate(),
          isCurrentMonth: date.getMonth() === this.currentDate.getMonth(),
          isToday: date.getTime() === today.getTime(),
          isFutureDate: date > today,
          isPastDate: date < today,
          emotion: emotionObj ? emotionObj.emotion : null,
          note: emotionObj ? emotionObj.note : null,
          username: emotionObj ? emotionObj.username : null,
          timestamp: emotionObj ? emotionObj.timestamp : null
        }
        
        // Отладочная информация для конкретных дат
        if (date.getDate() === 21 || date.getDate() === 22 || date.getDate() === 23) {
          console.log('🔍 День', date.getDate(), 'дата:', dateStr, 'эмоция:', emotionObj ? emotionObj.emotion : 'нет')
        }
        
        days.push(dayData)
      }
      
      console.log('🔍 Сгенерировано дней:', days.length)
      const daysWithEmotions = days.filter(day => day.emotion)
      console.log('🔍 Дней с эмоциями:', daysWithEmotions.length)
      console.log('🔍 Дни с эмоциями:', daysWithEmotions.map(d => `${d.date}: ${d.emotion}`))
      
      return days
    },
  },
  async mounted() {
    console.log('🔍 EmotionCalendar mounted')
    console.log('🔍 Компонент загружен, начинаем загрузку эмоций')
    await this.loadEmotions()
    console.log('🔍 Эмоции загружены, компонент готов')
  },
  methods: {
    getEmotionForDate(dateStr) {
      // Возвращаем весь объект эмоции, если есть
      const emotion = this.emotions.find(emotion => emotion.date === dateStr) || null
      if (emotion) {
        console.log('🔍 Найдена эмоция для даты', dateStr, ':', emotion)
      }
      return emotion
    },
    
    async loadEmotions() {
      try {
        let telegramId = getTelegramUserId()
        if (!telegramId) {
          console.warn('Telegram ID не найден, используем тестовый ID')
          // Для тестирования используем последний debug ID
          telegramId = 'debug_user_1750544735820'
        }
        
        console.log('🔍 Загружаем эмоции для ID:', telegramId)
        console.log('🔍 Текущая дата календаря:', this.currentDate)
        console.log('🔍 Месяц календаря:', this.currentDate.getMonth(), '(0-январь, 5-июнь)')
        
        // Загружаем эмоции за текущий месяц
        const startDateObj = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)
        const endDateObj = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0)
        const startYear = startDateObj.getFullYear();
        const startMonth = String(startDateObj.getMonth() + 1).padStart(2, '0');
        const startDay = String(startDateObj.getDate()).padStart(2, '0');
        const startDate = `${startYear}-${startMonth}-${startDay}`;
        const endYear = endDateObj.getFullYear();
        const endMonth = String(endDateObj.getMonth() + 1).padStart(2, '0');
        const endDay = String(endDateObj.getDate()).padStart(2, '0');
        const endDate = `${endYear}-${endMonth}-${endDay}`;
        const loadedEmotions = await jsonStorageService.getUserEmotions(telegramId, startDate, endDate)
        console.log('🔍 Загружены эмоции:', loadedEmotions)
        console.log('🔍 Количество эмоций:', loadedEmotions.length)
        console.log('🔍 Тип данных:', typeof loadedEmotions)
        console.log('🔍 Это массив?', Array.isArray(loadedEmotions))
        
        // Проверяем, есть ли эмоции на конкретные даты
        if (Array.isArray(loadedEmotions)) {
          loadedEmotions.forEach(emotion => {
            console.log('🔍 Эмоция на', emotion.date, ':', emotion.emotion, 'Заметка:', emotion.note)
          })
          this.emotions = loadedEmotions
        } else {
          console.warn('⚠️ Эмоции не являются массивом:', loadedEmotions)
          this.emotions = []
        }
        
        console.log('🔍 this.emotions после загрузки:', this.emotions)
        console.log('🔍 Количество эмоций в this.emotions:', this.emotions.length)
        
        // Принудительно обновляем календарь
        this.$forceUpdate()
        
        // Дополнительная проверка через setTimeout
        setTimeout(() => {
          console.log('🔍 Проверка через 1 секунду - this.emotions:', this.emotions)
          console.log('🔍 Проверка через 1 секунду - количество:', this.emotions.length)
        }, 1000)
        
      } catch (error) {
        console.error('❌ Ошибка загрузки эмоций:', error)
        this.emotions = []
      }
    },
    
    getEmotionIcon(emotionId) {
      const iconMap = {
        1: require('../assets/emotions/joy.png'),
        2: require('../assets/emotions/sadness.png'),
        3: require('../assets/emotions/calm.png'),
        4: require('../assets/emotions/anxiety.png'),
        5: require('../assets/emotions/irritation.png'),
        6: require('../assets/emotions/dreaminess.png')
      }
      return iconMap[emotionId] || require('../assets/emotions/default.png')
    },
    
    getEmotionName(emotionId) {
      return this.emotionNames[emotionId] || 'Эмоция не выбрана'
    },
    
    async showEmotionDetails(day) {
      console.log('🔍 showEmotionDetails вызван для дня:', day)
      console.log('🔍 День месяца:', day.dayNumber, 'Дата:', day.date)
      
      // Загружаем мысли для этой даты
      try {
        let telegramId = getTelegramUserId()
        if (!telegramId) {
          telegramId = 'debug_user_1750544735820'
        }
        
        console.log('🔍 Загружаем мысли для даты:', day.date)
        day.thoughts = await jsonStorageService.getThoughtsByDate(telegramId, day.date)
        console.log('🔍 Загружены мысли:', day.thoughts)
        
        // Загружаем эмоцию для этой даты
        const emotionData = await jsonStorageService.getEmotionByDate(telegramId, day.date)
        console.log('🔍 Найденные данные эмоции:', emotionData)
        
        if (emotionData) {
          day.emotion = emotionData.emotion
          day.username = emotionData.username
          day.note = emotionData.note
          console.log('🔍 Эмоция загружена:', day.emotion, 'Заметка:', day.note)
        }
        
        // Создаем копию объекта дня, чтобы избежать мутации исходного объекта
        this.selectedDay = {
          ...day,
          date: day.date // Убеждаемся, что дата передается правильно
        }
        console.log('🔍 Модальное окно открыто для дня:', this.selectedDay)
        
      } catch (error) {
        console.error('❌ Ошибка загрузки данных для модального окна:', error)
        // Все равно показываем модальное окно
        this.selectedDay = { ...day }
      }
    },
    
    closeModal() {
      this.selectedDay = null
    },
    
    formatDate(dateStr) {
      // Создаем дату в локальном времени, чтобы избежать проблем с часовыми поясами
      const [year, month, day] = dateStr.split('-').map(Number)
      const date = new Date(year, month - 1, day) // month - 1 потому что месяцы в JS начинаются с 0
      
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
        
        console.log('🔍 saveNote вызван')
        console.log('🔍 dailyNote:', this.dailyNote)
        
        if (!this.dailyNote.trim()) {
          console.log('🔍 Пустая заметка, не сохраняем')
          return
        }
        
        // Проверяем, есть ли эмоция на сегодня (используем локальное время)
        const now = new Date()
        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const day = String(now.getDate()).padStart(2, '0')
        const today = `${year}-${month}-${day}`
        
        console.log('🔍 Сегодняшняя дата:', today)
        
        //const todayEmotion = await jsonStorageService.getEmotionByDate(telegramId, today)

        //Не позволяет сохранять заметку, если не выбрана эмоция
        //TODO: @VladFinder удалить?
        /* if (!todayEmotion) {
          throw new Error('Сначала выберите эмоцию на сегодня')
        } */
        
        // Сохраняем заметку как мысль (чтобы не перезаписывалась)
        const result = await jsonStorageService.saveThought(telegramId, this.dailyNote, today)
        console.log('🔍 Результат сохранения заметки:', result)
        
        // Обновляем данные
        await this.loadEmotions()
        
        this.dailyNote = ''
        this.noteSaved = true
        
        console.log('🔍 Заметка успешно сохранена')
        
        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
          this.noteSaved = false
        }, 3000)
        
      } catch (error) {
        console.error('❌ Ошибка сохранения заметки:', error)
        alert(`Ошибка сохранения заметки: ${error.message}`)
      } finally {
        this.isSavingNote = false
      }
    },
    
    async saveThought() {
      console.log('🔍 saveThought вызван')
      console.log('🔍 dailyThought:', this.dailyThought)
      
      if (!this.dailyThought.trim()) {
        console.log('🔍 Пустая мысль, не сохраняем')
        return
      }
      
      this.isSavingThought = true
      this.thoughtSaved = false
      
      try {
        let telegramId = getTelegramUserId()
        if (!telegramId) {
          telegramId = 'debug_user_1750544735820'
        }
        
        console.log('🔍 Сохраняем мысль для ID:', telegramId)
        console.log('🔍 Текст мысли:', this.dailyThought)
        
        // Сохраняем мысли
        const result = await jsonStorageService.saveThought(telegramId, this.dailyThought)
        console.log('🔍 Результат сохранения:', result)
        
        // Обновляем данные
        await this.loadEmotions()
        
        this.dailyThought = ''
        this.thoughtSaved = true
        
        console.log('🔍 Мысль успешно сохранена')
        
        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
          this.thoughtSaved = false
        }, 3000)
        
      } catch (error) {
        console.error('❌ Ошибка сохранения мыслей:', error)
        alert(`Ошибка сохранения мыслей: ${error.message}`)
      } finally {
        this.isSavingThought = false
      }
    },
    
    getMiniEmotionIcon(emotionId) {
      console.log('🔍 getMiniEmotionIcon вызван с ID:', emotionId)
      const miniIconMap = {
        1: require('../assets/emotions/mini_joy.png'),
        2: require('../assets/emotions/mini_sadness.png'),
        3: require('../assets/emotions/mini_calm.png'),
        4: require('../assets/emotions/mini_anxiety.png'),
        5: require('../assets/emotions/mini_irritation.png'),
        6: require('../assets/emotions/mini_dreaminess.png')
      }
      const iconPath = miniIconMap[emotionId] || ''
      console.log('🔍 Путь к мини-иконке:', iconPath)
      return iconPath
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
        alert('Ошибка сохранения заметки: ' + e.message);
      } finally {
        this.isSavingModalThought = false;
      }
    },
    
    handleImageError(event) {
      console.error('❌ Ошибка загрузки изображения:', event.target.src)
    },
    
    handleImageLoad(event) {
      console.log('🔍 Изображение загружено:', event.target.src)
    }
  }
}
</script>

<style scoped>
.calendar-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
  transition: background 0.5s ease-in-out;
}

.back-btn {
  align-self: flex-start;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.calendar-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  /* min-height: 100vh; */
  overflow-y: auto;
  /* width: 100%; */
}

.calendar {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
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
  gap: 4px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  background: rgba(255, 255, 255, 1);
  min-height: 40px;
  min-width: 40px;
}

.calendar-day:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.calendar-day.other-month {
  opacity: 0.2;
  cursor: not-allowed;
  pointer-events: none;
}

.calendar-day.other-month:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: none;
}

/* .calendar-day.future-date {
  opacity: 0.8;
  cursor: pointer;
} */

.calendar-day.future-date:hover {
  background: rgba(255, 193, 7, 0.2);
}

.calendar-day.has-emotion {
  /* background: rgba(76, 175, 80, 0.2); */
  /* border: 2px solid #4caf50; */
}

.calendar-day.today {
  border: 2px solid #FF7DBB;
  background: linear-gradient(90deg, #fff0fa 60%, #ffe6f7 100%);
  box-shadow: 0 0 8px 2px #ffb6e6;
  z-index: 2;
}

.calendar-day .date {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 2px;
  line-height: 1;
}

.emotion-icon-mini {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  bottom: 2px;
  right: 2px;
  transition: transform 0.2s;
  z-index: 2;
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
  max-height: 80vh;
  overflow-y: auto;
}

.modal-content h3 {
  margin: 0 0 20px 0;
  font-family: 'Mulish', sans-serif;
  color: #333;
  font-size: 20px;
}

/* Предупреждение для будущих дат */
.future-warning {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.warning-text {
  margin: 0;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
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
  background: linear-gradient(135deg, #667eea, #764ba2);  
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

.notes-section h3 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
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
.note-textarea::placeholder {
  font-size: 18px;
}

.save-note-btn {
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
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid red;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.thoughts-section h3 {
  color: red;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
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
  margin-top: 20px;
  text-align: left;
}

.modal-thought-input textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
  resize: vertical;
}

.modal-thought-input button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s;
}

.modal-thought-input button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.username {
  font-size: 14px;
  color: #666;
  font-style: italic;
  margin: 0 0 15px 0;
}

/* Адаптивность для телефонов */
@media (max-width: 480px) {
  .calendar-container {
    padding: 10px;
  }
  
  .calendar {
    padding: 15px;
  }
  
  .calendar-header h2 {
    font-size: 20px;
  }
  
  .calendar-day {
    min-height: 35px;
    min-width: 35px;
    padding: 2px;
  }
  
  .calendar-day .date {
    font-size: 12px;
  }
  
  .emotion-icon-mini {
    width: 14px;
    height: 14px;
    bottom: 1px;
    right: 1px;
  }
  
  .weekday {
    font-size: 12px;
    padding: 8px 0;
  }
}

@media (max-width: 360px) {
  .calendar-day {
    min-height: 30px;
    min-width: 30px;
  }
  
  .calendar-day .date {
    font-size: 11px;
  }
  
  .emotion-icon-mini {
    width: 12px;
    height: 12px;
  }
}
</style>
