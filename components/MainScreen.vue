<!-- filepath: /Users/vladfinder/Documents/web_novels/components/MainScreen.vue -->
<template>
  <div>
    <h1>Главный экран</h1>
    <button @click="goToCalendar">Календарь настроения</button>
    <button @click="goToStories">Истории</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goToCalendar() {
  router.push('/calendar');
}
function goToStories() {
  router.push('/stories');
}
</script>