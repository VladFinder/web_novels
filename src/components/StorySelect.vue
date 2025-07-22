<template>
  <div class="menu-overlay">
    <div class="menu-content">
      <h2>Выберите историю</h2>
      <div v-for="story in stories" :key="story.id" class="story-card">
        <div class="close-btn" @click="$emit('close')">×</div>
        <h2>{{ story.title }}</h2>
        <img :src="story.cover" alt="cover" class="story-cover" />
        <p>{{ story.description }}</p>
        <p>Количество глав: {{ story.chaptersCount }}</p>
        <button class="menu-button" @click="$emit('select', story)">Читать</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stories: Array
});
</script>

<style scoped>
.menu-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1000;
}
.menu-content {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  padding: 24px;
  min-width: 320px;
  max-width: 400px;
  width: 90vw;
  text-align: center;
}
.story-card {
  background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  padding: 18px;
  margin-bottom: 24px;
  position: relative;
}
.story-cover {
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  margin-bottom: 16px;
  object-fit: contain;
  background: #fff;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  background: #fff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.menu-button {
  background: #f48fb1;
  color: #222;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 10px;
  box-shadow: 0 2px 8px #f48fb1;
  border: none;
  cursor: pointer;
}
</style> 