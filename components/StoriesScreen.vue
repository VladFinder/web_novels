<!-- filepath: /Users/vladfinder/Documents/web_novels/components/StoriesScreen.vue -->
<template>
  <div>
    <h2>Истории</h2>
    <p>Здесь будут ваши истории.</p>
    <button @click="goBack">Назад</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goBack() {
  router.push('/main');
}
</script>