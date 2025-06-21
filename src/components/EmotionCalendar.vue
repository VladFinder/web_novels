<template>
  <div class="calendar-container">
    <div class="calendar">
      <div class="calendar-header">
        <h2>{{ currentMonth }}</h2>
      </div>
      <div class="calendar-grid">
        <div v-for="day in days" :key="day.date" class="calendar-day">
          <span class="date">{{ day.dayNumber }}</span>
          <img v-if="day.emotion" :src="getEmotionIcon(day.emotion)" class="emotion-icon">
        </div>
      </div>
    </div>
    <div class="note-section">
      <textarea 
        v-model="dailyNote"
        placeholder="Напишите о своём дне..."
        @change="saveNote"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { dbService } from '../services/dbService'

export default {
  data() {
    return {
      currentMonth: '',
      days: [],
      dailyNote: '',
      emotions: null
    }
  },
  async mounted() {
    await this.loadEmotions()
    this.initializeCalendar()
  },
  methods: {
    async loadEmotions() {
      const startDate = new Date()
      startDate.setDate(1)
      const endDate = new Date()
      endDate.setMonth(endDate.getMonth() + 1, 0)
      
      this.emotions = await dbService.getUserEmotions(
        this.$route.params.telegramId,
        startDate,
        endDate
      )
    },
    getEmotionIcon(emotion) {
      return require(`../assets/emotions/${emotion}.svg`)
    },
    async saveNote() {
      await dbService.saveNote(
        this.$route.params.telegramId,
        new Date(),
        this.dailyNote
      )
    },
    async selectEmotion(id) {
      try {
        const note = this.note || ''; // если есть поле note в data
        await dbService.saveEmotion(this.telegramId, {
          emotion: id,
          note,
          timestamp: new Date()
        });
        this.$emit('emotion-selected', id)
      } catch (error) {
        console.error('Failed to save emotion:', error)
      }
    }
  }
}
</script>

<style scoped>
.calendar-container {
  padding: 20px;
}

.calendar {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

.emotion-icon {
  width: 20px;
  height: 20px;
}

.note-section {
  margin-top: 20px;
}

textarea {
  width: 100%;
  height: 100px;
  border-radius: 12px;
  padding: 10px;
  font-family: 'Mulish', sans-serif;
}
</style>
