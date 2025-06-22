<template>
  <div class="stats-container">
    <h2 class="stats-title">Статистика эмоций</h2>
    
    <div class="period-selector">
      <button 
        v-for="period in periods" 
        :key="period.value"
        @click="selectPeriod(period.value)"
        :class="{ active: selectedPeriod === period.value }"
        class="period-btn"
      >
        {{ period.label }}
      </button>
    </div>
    
    <div v-if="stats.length === 0" class="no-data">
      <p>Нет данных для отображения</p>
    </div>
    
    <div v-else class="stats-grid">
      <div 
        v-for="stat in stats" 
        :key="stat.emotion"
        class="stat-item"
      >
        <div class="emotion-info">
          <img :src="getEmotionIcon(stat.emotion)" :alt="getEmotionName(stat.emotion)" class="emotion-icon">
          <span class="emotion-name">{{ getEmotionName(stat.emotion) }}</span>
        </div>
        <div class="stat-bar">
          <div 
            class="bar-fill" 
            :style="{ width: getPercentage(stat.count, totalEmotions) + '%' }"
          ></div>
        </div>
        <span class="stat-count">{{ stat.count }}</span>
      </div>
    </div>
    
    <div class="summary">
      <p>Всего записей: {{ totalEmotions }}</p>
      <p>Период: {{ getPeriodLabel() }}</p>
    </div>
  </div>
</template>

<script>
import { jsonStorageService } from '../services/jsonStorageService'
import { getTelegramUserId } from '../utils/telegram'

export default {
  name: 'EmotionStats',
  data() {
    return {
      selectedPeriod: 'week',
      stats: [],
      periods: [
        { value: 'week', label: 'Неделя' },
        { value: 'month', label: 'Месяц' },
        { value: 'year', label: 'Год' }
      ],
      emotionNames: {
        1: 'Радостно',
        2: 'Грустно', 
        3: 'Спокойно',
        4: 'Тревожно',
        5: 'Раздражённо',
        6: 'Мечтательно'
      }
    }
  },
  computed: {
    totalEmotions() {
      return this.stats.reduce((sum, stat) => sum + stat.count, 0)
    }
  },
  async mounted() {
    await this.loadStats()
  },
  methods: {
    async loadStats() {
      try {
        const telegramId = getTelegramUserId()
        if (!telegramId) {
          console.warn('Telegram ID не найден')
          return
        }
        
        const { startDate, endDate } = this.getDateRange()
        const emotions = await jsonStorageService.getUserEmotions(telegramId, startDate, endDate)
        
        // Группируем эмоции по типу
        const emotionCounts = {}
        emotions.forEach(emotion => {
          const emotionId = emotion.emotion
          emotionCounts[emotionId] = (emotionCounts[emotionId] || 0) + 1
        })
        
        // Преобразуем в массив для отображения
        this.stats = Object.entries(emotionCounts)
          .map(([emotion, count]) => ({ emotion: parseInt(emotion), count }))
          .sort((a, b) => b.count - a.count)
        
      } catch (error) {
        console.error('Ошибка загрузки статистики:', error)
      }
    },
    
    getDateRange() {
      const now = new Date()
      const startDate = new Date(now)
      
      switch (this.selectedPeriod) {
        case 'week':
          startDate.setDate(now.getDate() - 7)
          break
        case 'month':
          startDate.setMonth(now.getMonth() - 1)
          break
        case 'year':
          startDate.setFullYear(now.getFullYear() - 1)
          break
      }
      
      return { startDate, endDate: now }
    },
    
    selectPeriod(period) {
      this.selectedPeriod = period
      this.loadStats()
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
    
    getPercentage(count, total) {
      if (total === 0) return 0
      return Math.round((count / total) * 100)
    },
    
    getPeriodLabel() {
      const period = this.periods.find(p => p.value === this.selectedPeriod)
      return period ? period.label : ''
    }
  }
}
</script>

<style scoped>
.stats-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.stats-title {
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
}

.period-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.period-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  transition: all 0.2s;
}

.period-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.period-btn.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: #667eea;
}

.no-data {
  text-align: center;
  padding: 40px;
  color: #666;
  font-style: italic;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.emotion-info {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 120px;
}

.emotion-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.emotion-name {
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.stat-bar {
  flex: 1;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 10px;
  transition: width 0.5s ease;
}

.stat-count {
  font-weight: bold;
  color: #333;
  min-width: 30px;
  text-align: center;
}

.summary {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.summary p {
  margin: 5px 0;
  color: #333;
  font-family: 'Mulish', sans-serif;
}
</style> 