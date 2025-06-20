<template>
  <div class="emotion-select">
    <h1 class="title">Как ты себя чувствуешь?</h1>
    <div class="glass-container">
      <div class="emotions-grid">
        <div v-for="emotion in emotions" 
             :key="emotion.id" 
             class="emotion-item"
             @click="selectEmotion(emotion.id)">
          <img :src="emotion.icon" :alt="emotion.name">
          <span class="emotion-name">{{ emotion.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dbService } from '../services/dbService'
import { getTelegramUserId } from '../utils/telegram'

export default {
  name: 'EmotionSelect',
  data() {
    return {
      telegramId: null,
      emotions: [
        { id: 1, name: 'Радостно', icon: require('../assets/emotions/Радость.png') },
        { id: 2, name: 'Грустно', icon: require('../assets/emotions/Грусть.png') },
        { id: 3, name: 'Спокойно', icon: require('../assets/emotions/Спокойно.png') },
        { id: 4, name: 'Тревожно', icon: require('../assets/emotions/Тревога.png') },
        { id: 5, name: 'Раздражённо', icon: require('../assets/emotions/Раздражение.png') },
        { id: 6, name: 'Мечтательно', icon: require('../assets/emotions/Мечтательность.png') }
      ]
    }
  },
  mounted() {
    this.telegramId = getTelegramUserId()
    if (!this.telegramId) {
      console.warn('Telegram ID not found')
    }
  },
  methods: {
    async selectEmotion(id) {
      try {
        // if (!this.telegramId) {
        //   throw new Error('Telegram ID is required')
        // }
        // await dbService.saveUser(this.telegramId)
        // await dbService.saveEmotion(this.telegramId, {
        //   emotion: id,
        //   timestamp: new Date()
        // })
        // Просто переключаем экран
        this.$emit('emotion-selected', id)
      } catch (error) {
        console.error('Failed to save emotion:', error)
      }
    }
  }
}
</script>

<style scoped>
.emotion-select {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(48.34% 48.34% at 50% 51.66%, #DAF8FF 29.33%, #F2C0FF 75%, #FB8DFF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-family: 'Mulish', sans-serif;
  font-size: 40px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 100;
}

.glass-container {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 75%;
  max-width: 800px;
}

.emotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(115px, 6fr));
  gap: 5vw;
  place-items: center;
}

.emotion-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.emotion-item:hover {
  transform: scale(1.05);
}

.emotion-item img {
  width: 35vw;
  max-width: 170px;
  min-width: 80px;
  height: 25vw;
  max-height: 140px;
  min-height: 64px;
  object-fit: cover;
  border-radius: 16px;
  overflow: visible;
}

.emotion-name {
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  color: #333;
}
</style>
