<template>
  <div class="calendar-screen" :style="dynamicBackgroundStyle" @click="blurInput">
    <button class="back-btn"  @click="$emit('back')" :style="soulTextStyle">Назад</button>
    <div class="calendar-header">
      <button class="nav-btn" @click="prevMonth" :disabled="isMinMonth">&lt;</button>
      <span class="month-title">{{ monthName }} {{ currentYear }}</span>
      <button class="nav-btn" @click="nextMonth" :disabled="isMaxMonth">&gt;</button>
    </div>
    <div class="calendar-grid">
      <div class="calendar-day calendar-day-header" v-for="day in weekDays" :key="day">{{ day }}</div>
      <div
        v-for="n in firstDayOfWeek"
        :key="'empty-' + n"
        class="calendar-day empty"
      ></div>
      <div
        v-for="day in daysInMonth"
        :key="day"
        class="calendar-day"
      >
        {{ day }}
      </div>
    </div>
    <div class="note-container" @click.stop>
      <textarea
        class="note-input"
        v-model="note"
        placeholder="Напишешь пару слов о сегодняшнем дне?"
        rows="3"
        ref="noteInput"
        @blur="onBlur"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { useEmotionStore } from '@/services/emotionStore'
import { useSoulStyle } from '@/services/useSoulStyle'
import { computed } from 'vue'

const START_YEAR = 2025
const START_MONTH = 5 // июнь (0-январь, 5-июнь)
const START_DAY = 1

export default {
  name: 'CalendarScreen',
  setup() {
    const emotionStore = useEmotionStore()
    const {backgroundStyle, buttonColor} = useSoulStyle(emotionStore.selectedEmotionId)

    // Create computed that also sets CSS custom property
    const dynamicBackgroundStyle = computed(() => {
      const style = backgroundStyle.value
      if (style && style.background) {
        document.documentElement.style.setProperty('--app-background', style.background)
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

    return { 
      emotionStore, 
      dynamicBackgroundStyle,
      dynamicButtonColor,
      soulTextStyle
    }
  },
  data() {
    const today = new Date()
    const minMonth = START_MONTH
    const minYear = START_YEAR
    const maxMonth = today.getMonth()
    const maxYear = today.getFullYear()
    return {
      currentMonth: maxMonth,
      currentYear: maxYear,
      minMonth,
      minYear,
      weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      note: '',
      isInputFocused: false
    }
  },
  computed: {
    monthName() {
      return [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ][this.currentMonth]
    },
    daysInMonth() {
      const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
      // Если выбран июнь 2025, начинаем с 1 числа
      if (this.currentYear === START_YEAR && this.currentMonth === START_MONTH) {
        return Array.from({ length: days - START_DAY + 1 }, (_, i) => i + START_DAY)
      }
      return Array.from({ length: days }, (_, i) => i + 1)
    },
    firstDayOfWeek() {
      // Определяем день недели первого дня месяца (Пн=0, Вс=6)
      let first = new Date(this.currentYear, this.currentMonth, 
        (this.currentYear === START_YEAR && this.currentMonth === START_MONTH) ? START_DAY : 1
      ).getDay()
      first = (first + 6) % 7 // Переводим так, чтобы Пн=0
      return first
    },
    isMinMonth() {
      return this.currentYear === this.minYear && this.currentMonth === this.minMonth
    },
    isMaxMonth() {
      const today = new Date()
      return this.currentYear === today.getFullYear() && this.currentMonth === today.getMonth()
    }
  },
  methods: {
    prevMonth() {
      if (this.isMinMonth) return
      if (this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    },
    nextMonth() {
      if (this.isMaxMonth) return
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    blurInput() {
      if (this.isInputFocused) {
        this.$refs.noteInput.blur();
      }
    },
    onBlur() {
      this.isInputFocused = false;
    }
  },
  watch: {
    note() {
      // Можно добавить автоскролл к textarea при вводе, если нужно
    }
  }
}
</script>

<style scoped>
.calendar-screen {
  width: -webkit-fill-available;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden; /* запретить скролл всей странице */
  transition: background 0.5s ease-in-out;
}
.back-btn {
  color: black;
  align-self: flex-start;
  margin-left: 24px;
  margin-bottom: 24px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: #fff;
  font-size: 16px;
  cursor: pointer;
}
.calendar-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.month-title {
  font-size: 24px;
  font-weight: 600;
  font-family: 'Mulish', sans-serif;
}
.nav-btn {
  color: black;
  background: #fff;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: background 0.2s;
}
.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 40px);
  gap: 8px;
  background: rgba(255,255,255,0.2);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}
.calendar-day {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  color: #333;
  background: rgba(255,255,255,0.7);
  border-radius: 8px;
}
.calendar-day-header {
  background: none;
  font-weight: bold;
  color: #444;
}
.empty {
  background: none;
  pointer-events: none;
}
.note-container {
  margin-top: 32px;
  width: 90%;
  max-width: 400px;
  min-height: 60px;
  border-radius: 12px;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.note-input {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-family: 'Mulish', sans-serif;
  background: transparent;
  resize: none;
  outline: none;
}
</style>