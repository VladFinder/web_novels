<template>
  <div id="app">
    <LoadingScreen v-if="currentScreen === 'loading'" />
    <EmotionSelect v-else-if="currentScreen === 'emotion'" @emotion-selected="handleEmotionSelect" />
    <MainScreen
      v-else-if="currentScreen === 'main'"
      @open-settings="openSettings"
      @open-calendar="openCalendar"
    />
    <CalendarScreen v-else-if="currentScreen === 'calendar'" @back="backToMain" />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import EmotionSelect from './components/EmotionSelect.vue'
import MainScreen from './components/MainScreen.vue'
import CalendarScreen from './components/CalendarScreen.vue'

export default {
  name: 'App',
  components: {
    LoadingScreen,
    EmotionSelect,
    MainScreen,
    CalendarScreen
  },
  data() {
    return {
      currentScreen: 'loading',
      selectedEmotion: null,
      showSettings: false
    }
  },
  methods: {
    handleEmotionSelect(emotionId) {
      this.selectedEmotion = emotionId;
      this.currentScreen = 'main';
    },
    openSettings() {
      this.showSettings = true;
    },
    openCalendar() {
      this.currentScreen = 'calendar';
    },
    backToMain() {
      this.currentScreen = 'main';
    }
  },
  mounted() {
    setTimeout(() => {
      this.currentScreen = 'emotion'
    }, 2000)
  }
}
</script>

<style>
* {
  font-family: 'Mulish', sans-serif;
}

html, body, #app {
  /* width: 100%; */
  height: 100%;
  overflow-x: hidden; /* только горизонтальный скролл запрещён */
  position: static;
  overscroll-behavior: auto;
  touch-action: auto;
}

#app {
  text-align: center;
}

.content {
  margin: 20px;
  padding: 20px;
  border: 2px solid #42b983;
}

h1 {
  margin: 20px;
  padding: 20px;
  /* border: 2px solid #42b983; */
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
