<template>
  <div id="app">
    <StoryEditor v-if="isEditor" />
    <LoadingScreen v-else-if="currentScreen === 'loading'" />
    <EmotionSelect v-else-if="currentScreen === 'emotion'" @emotion-selected="handleEmotionSelect" @navigate="handleNavigate" />
    <MainScreen v-else-if="currentScreen === 'main'" @open-calendar="openCalendar" />
    <EmotionCalendar v-else-if="currentScreen === 'calendar'" @back="backToMain" />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'
import EmotionSelect from './components/EmotionSelect.vue'
import MainScreen from './components/MainScreen.vue'
import EmotionCalendar from './components/EmotionCalendar.vue'
import StoryEditor from './components/StoryEditor.vue'

export default {
  name: 'App',
  components: {
    LoadingScreen,
    EmotionSelect,
    MainScreen,
    EmotionCalendar,
    StoryEditor
  },
  data() {
    return {
      currentScreen: 'loading',
      isEditor: window.location.pathname.includes('/editor')
    }
  },
  methods: {
    handleEmotionSelect(emotionId) {
      this.currentScreen = 'main';
    },
    handleNavigate(screen) {
      this.currentScreen = screen;
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
  margin: 0;
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
