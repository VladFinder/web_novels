<template>
  <div id="app" :class="{ 'telegram-app': isTelegramWebApp }">
    <LoadingScreen v-if="currentScreen === 'loading'"/>
    <EmotionSelect 
      v-else-if="currentScreen === 'emotion'"
      @emotion-selected="handleEmotionSelect"
    />
    <div v-else class="content">
      <p>Выбранная эмоция: {{ selectedEmotion }}</p>
    </div>
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import EmotionSelect from './components/EmotionSelect.vue'
import { emotionsService } from './services/emotionsService'
import { isTelegram, initTelegram } from './utils/telegram'

export default {
  name: 'App',
  components: {
    LoadingScreen,
    EmotionSelect
  },
  data() {
    return {
      currentScreen: 'loading',
      selectedEmotion: null,
      emotions: [],
      isTelegramWebApp: false
    }
  },
  mounted() {
    this.isTelegramWebApp = isTelegram();
    if (this.isTelegramWebApp) {
      initTelegram();
    }
    setTimeout(() => {
      this.currentScreen = 'emotion'
    }, 2000)
  },
  methods: {
    async handleEmotionSelect(emotionId) {
      this.selectedEmotion = emotionId;
      this.currentScreen = 'main';
    },
    
    async loadEmotions() {
      try {
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1); // Загружаем эмоции за последний месяц
        const emotions = await emotionsService.getEmotions(startDate, new Date());
        this.emotions = emotions;
      } catch (error) {
        console.error('Failed to load emotions:', error);
      }
    }
  }
}
</script>

<style>
* {
  font-family: 'Mulish', sans-serif;
}

#app {
  text-align: center;
  margin-top: 60px;
}

.content {
  margin: 20px;
  padding: 20px;
  border: 2px solid #42b983;
}

h1 {
  margin: 20px;
  padding: 20px;
  border: 2px solid #42b983;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background-color: #f8f9fa;
  padding: 20px;
  margin-bottom: 20px;
}

.telegram-app {
  max-width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
