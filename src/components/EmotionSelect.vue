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
        { id: 1, name: 'Радостно', icon: require('../assets/emotions/happy.svg') },
        { id: 2, name: 'Грустно', icon: require('../assets/emotions/sad.svg') },
        { id: 3, name: 'Спокойно', icon: require('../assets/emotions/calm.svg') },
        { id: 4, name: 'Тревожно', icon: require('../assets/emotions/anxious.svg') },
        { id: 5, name: 'Раздражённо', icon: require('../assets/emotions/angry.svg') },
        { id: 6, name: 'Мечтательно', icon: require('../assets/emotions/tired.svg') }
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
        if (!this.telegramId) {
          throw new Error('Telegram ID is required')
        }
        
        // Сначала сохраняем пользователя
        await dbService.saveUser(this.telegramId)
        
        // Затем сохраняем эмоцию
        await dbService.saveEmotion(this.telegramId, {
          emotion: id,
          timestamp: new Date()
        })

        // Переходим на главный экран
        this.$router.push('/')
      } catch (error) {
        console.error('Failed to save emotion:', error)
      }
    }
  }
}
</script>

<style scoped>
.emotion-select {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(48.34% 48.34% at 50% 51.66%, #DAF8FF 29.33%, #F2C0FF 75%, #FB8DFF 100%);
}

.title {
  font-family: 'Mulish', sans-serif;
  font-size: 40px;
  color: #333;
  margin-bottom: 40px;
}

.glass-container {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
}

.emotions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
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
  width: 80px;
  height: 80px;
}

.emotion-name {
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  color: #333;
}
</style>
