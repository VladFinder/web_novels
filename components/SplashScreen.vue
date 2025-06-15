<!-- filepath: /Users/vladfinder/Documents/web_novels/components/SplashScreen.vue -->
<template>
  <div class="splash-screen">
    <img src="@/assets/logo.png" alt="Логотип" class="logo" />
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const progress = ref(0);
const router = useRouter();

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 5;
    } else {
      clearInterval(interval);
      router.push('/mood');
    }
  }, 40);
});
</script>

<style scoped>
.splash-screen { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
.logo { width: 120px; margin-bottom: 32px; }
.progress-bar { width: 200px; height: 8px; background: #eee; border-radius: 4px; }
.progress { height: 100%; background: #4caf50; border-radius: 4px; transition: width 0.2s; }
</style>