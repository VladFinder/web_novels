<template>
  <div class="menu-overlay">
    <div class="menu-content" style="max-width: 700px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <button @click="$emit('back')" class="back-btn">← К историям</button>
        <span class="chapter-num">Глава {{ chapterNum }}</span>
      </div>
      <h2>{{ story.title }}</h2>
      <div v-if="scene">
        <div class="chapter-text">{{ scene.text }}</div>
        <div class="nav-btns">
          <button @click="prevChapter" :disabled="history.length <= 1" class="nav-btn">Назад</button>
          <button @click="nextChapter" :disabled="!scene.choices || scene.choices.length === 0" class="nav-btn">Дальше</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  story: Object,
  currentScene: String,
  history: Array
});
const emit = defineEmits(['go', 'prev', 'next', 'back']);
const scene = computed(() => props.story?.scenes?.[props.currentScene] || null);
const chapterNum = computed(() => props.history.length);
function nextChapter() {
  if (scene.value && scene.value.choices && scene.value.choices.length > 0) {
    emit('next');
  }
}
function prevChapter() {
  if (props.history.length > 1) {
    emit('prev');
  }
}
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
  max-width: 700px;
  width: 90vw;
  text-align: left;
}
.chapter-num {
  font-size: 1.1rem;
  color: #bbb;
}
.chapter-text {
  min-height: 120px;
  font-size: 1.2rem;
  margin-bottom: 18px;
  text-align: left;
  white-space: pre-line;
}
.nav-btns {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}
.nav-btn {
  background: #8ec5fc;
  color: #222;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 6px 18px;
  border: none;
  cursor: pointer;
}
.back-btn {
  background: #f48fb1;
  color: #222;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 6px 18px;
  border: none;
  cursor: pointer;
  margin-bottom: 12px;
}
</style> 