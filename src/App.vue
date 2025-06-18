<template>
  <div id="app" :class="{ 'telegram-app': isTelegramWebApp }">
    <LoadingScreen v-if="currentScreen === 'loading'"/>
    <EmotionSelect 
      v-else-if="currentScreen === 'emotion'"
      @emotion-selected="handleEmotionSelect"
    />
    <MainScreen
      v-else-if="currentScreen === 'main'"
      @open-settings="openSettings"
    />
    <!-- ...можно добавить модалку настроек по флагу showSettings... -->
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import EmotionSelect from './components/EmotionSelect.vue'
import MainScreen from './components/MainScreen.vue'
import { isTelegram, initTelegram } from './utils/telegram'

export default {
  name: 'App',
  components: {
    LoadingScreen,
    EmotionSelect,
    MainScreen
  },
  data() {
    return {
      currentScreen: 'loading',
      selectedEmotion: null,
      isTelegramWebApp: false,
      showSettings: false
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
    openSettings() {
      this.showSettings = true;
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
