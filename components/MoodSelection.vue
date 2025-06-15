<!-- filepath: /Users/vladfinder/Documents/web_novels/components/MoodSelection.vue -->
<template>
  <div>
    <h2>Выберите настроение</h2>
    <div>
      <button v-for="m in moods" :key="m" @click="selectMood(m)">
        {{ m }}
      </button>
    </div>
    <div v-if="selectedMood">
      <p>Вы выбрали: {{ selectedMood }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { saveMood } from '../services/moodService';

const moods = ['happy', 'sad', 'angry', 'calm', 'excited', 'tired'];
const selectedMood = ref(null);
const router = useRouter();

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

async function selectMood(mood) {
  selectedMood.value = mood;
  await saveMood('testuser', getToday(), mood);
  setTimeout(() => {
    router.push('/main');
  }, 700);
}
</script>