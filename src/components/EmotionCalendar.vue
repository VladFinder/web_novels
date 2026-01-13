<template>
  <div class="calendar-screen" :style="dynamicBackgroundStyle">
    <div class="calendar-container">
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
              today: day.isToday,
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
            >
          </div>
        </div>
      </div>

      <div class="notes-section">
        <h3>Записать мысль за сегодня</h3>
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

      <div v-if="selectedDay" class="emotion-modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3>{{ formatDate(selectedDay.date) }}</h3>

          <div v-if="selectedDay.isFutureDate" class="future-warning">
            <p class="warning-text">Живи настоящим, не забегай в будущее</p>
          </div>

          <div class="emotion-details">
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
import { computed } from 'vue';
import { getMiniEmotionIcon, getEmotionIcon, getEmotionName } from '@/constants/emotions';
import { useEmotionStore } from '@/services/emotionStore';
import { useSoulStyle } from '@/services/useSoulStyle';
import { getSafeTelegramId } from '@/utils/telegram';
import { getEmotionsRange, getEmotionByDate, getThoughtsByDate, saveThought } from '@/services/apiClient';
import { formatRuDate, formatRuTime, toDateString, todayString } from '@/utils/dates';

export default {
  name: 'EmotionCalendar',
  setup() {
    const emotionStore = useEmotionStore();
    const { backgroundStyle, buttonColor, textColor } = useSoulStyle(emotionStore.selectedEmotionId);

    const dynamicBackgroundStyle = computed(() => {
      const style = backgroundStyle.value;
      if (style?.background) {
        document.documentElement.style.setProperty('--app-background', style.background);
      }
      return style;
    });

    const dynamicButtonColor = computed(() => buttonColor.value);
    const soulTextStyle = computed(() => ({
      color: textColor.value || '#333'
    }));

    return {
      dynamicBackgroundStyle,
      dynamicButtonColor,
      soulTextStyle
    };
  },
  data() {
    return {
      telegramId: '',
      currentDate: new Date(),
      emotions: [],
      selectedDay: null,
      weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      dailyNote: '',
      isSavingNote: false,
      noteSaved: false
    };
  },
  computed: {
    currentMonthName() {
      const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ];
      return months[this.currentDate.getMonth()];
    },
    currentYear() {
      return this.currentDate.getFullYear();
    },
    calendarDays() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const startDate = new Date(firstDay);
      const dayOfWeek = firstDay.getDay();
      const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
      startDate.setDate(firstDay.getDate() - daysToSubtract);

      const days = [];
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      for (let i = 0; i < 42; i += 1) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const dateStr = toDateString(date);
        const emotionObj = this.getEmotionForDate(dateStr);

        days.push({
          date: dateStr,
          dayNumber: date.getDate(),
          isCurrentMonth: date.getMonth() === this.currentDate.getMonth(),
          isToday: date.getTime() === today.getTime(),
          isFutureDate: date > today,
          emotion: emotionObj ? emotionObj.emotion : null,
          note: emotionObj ? emotionObj.note : null,
          username: emotionObj ? emotionObj.username : null
        });
      }

      return days;
    }
  },
  async mounted() {
    this.telegramId = getSafeTelegramId();
    await this.loadEmotions();
  },
  methods: {
    getEmotionForDate(dateStr) {
      return this.emotions.find((emotion) => emotion.date === dateStr) || null;
    },
    async loadEmotions() {
      try {
        const loadedEmotions = await getEmotionsRange(this.telegramId, '2000-01-01', '2100-12-31');
        this.emotions = Array.isArray(loadedEmotions)
          ? loadedEmotions.sort((a, b) => a.date.localeCompare(b.date))
          : [];
      } catch (error) {
        console.error('Ошибка загрузки эмоций:', error);
        this.emotions = [];
      }
    },
    getEmotionIcon,
    getEmotionName,
    getMiniEmotionIcon,
    async showEmotionDetails(day) {
      try {
        const thoughts = await getThoughtsByDate(this.telegramId, day.date);
        const emotionData = await getEmotionByDate(this.telegramId, day.date);
        this.selectedDay = {
          ...day,
          emotion: emotionData?.emotion ?? day.emotion,
          username: emotionData?.username ?? day.username,
          note: emotionData?.note ?? day.note,
          thoughts
        };
      } catch (error) {
        console.error('Ошибка загрузки данных дня:', error);
        this.selectedDay = { ...day, thoughts: [] };
      }
    },
    closeModal() {
      this.selectedDay = null;
    },
    formatDate(dateStr) {
      return formatRuDate(dateStr);
    },
    formatTime(timestamp) {
      return formatRuTime(timestamp);
    },
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    },
    async saveNote() {
      if (!this.dailyNote.trim()) return;
      this.isSavingNote = true;
      this.noteSaved = false;
      try {
        await saveThought({
          telegramId: this.telegramId,
          text: this.dailyNote,
          date: todayString()
        });
        this.dailyNote = '';
        this.noteSaved = true;
        setTimeout(() => {
          this.noteSaved = false;
        }, 3000);
        await this.loadEmotions();
      } catch (error) {
        alert(`Ошибка сохранения заметки: ${error.message || 'Неизвестная ошибка'}`);
      } finally {
        this.isSavingNote = false;
      }
    }
  }
};
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

.calendar-day.future-date:hover {
  background: rgba(255, 193, 7, 0.2);
}

.calendar-day.today {
  border: 2px solid #ff7dbb;
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

.note-display {
  margin-top: 20px;
  text-align: left;
}

.note-display h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

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

.username {
  font-size: 14px;
  color: #666;
  font-style: italic;
  margin: 0 0 15px 0;
}

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
