<!-- filepath: /Users/vladfinder/Documents/web_novels/components/MoodCalendar.vue -->
<template>
  <div>
    <h2>Календарь настроения</h2>
    <ul>
      <li v-for="entry in moods" :key="entry.date">
        {{ entry.date }} — {{ entry.mood }}
      </li>
    </ul>
    <button @click="goBack">Назад</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAllMoods } from '../services/moodService';
import { useRouter } from 'vue-router';

const moods = ref([]);
const router = useRouter();

onMounted(async () => {
  moods.value = await getAllMoods('testuser');
});

function goBack() {
  router.push('/main');
}
</script>