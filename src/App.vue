<template>
  <div id="app">
    <StorySelect
      v-if="currentView === 'storySelect'"
      :stories="stories"
      @select="selectStory"
      @close="currentView = 'menu'"
    />
    <StoryReader
      v-else-if="currentView === 'storyRead'"
      :story="selectedStory"
      :currentScene="currentStoryScene"
      :history="storyHistory"
      @next="nextChapter"
      @prev="prevChapter"
      @back="backToStories"
    />
    <div v-else id="startMenu">
      <h1>Визуальная новелла</h1>
      <button class="menu-button" @click="openStorySelect">Истории</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StorySelect from './components/StorySelect.vue';
import StoryReader from './components/StoryReader.vue';
import peleScenes from './stories/pele.js';

const stories = [
  {
    id: 'pele',
    title: 'Слёзы Пеле',
    description: 'История о вечной дружбе, бесконечной любви, вере, предательстве, и поиске себя.',
    cover: '/cover/1.jpg',
    scenes: peleScenes,
    startScene: 'menu',
    chaptersCount: Object.keys(peleScenes).length
  }
];

const currentView = ref('menu');
const selectedStory = ref(null);
const currentStoryScene = ref(null);
const storyHistory = ref([]);

function openStorySelect() {
  currentView.value = 'storySelect';
}
function selectStory(story) {
  selectedStory.value = story;
  currentView.value = 'storyRead';
  storyHistory.value = [story.startScene];
  currentStoryScene.value = story.startScene;
}
function nextChapter() {
  const scene = selectedStory.value.scenes[currentStoryScene.value];
  if (scene && scene.choices && scene.choices.length > 0) {
    goToScene(scene.choices[0].nextScene);
  }
}
function prevChapter() {
  if (storyHistory.value.length > 1) {
    storyHistory.value.pop();
    currentStoryScene.value = storyHistory.value[storyHistory.value.length - 1];
  }
}
function goToScene(sceneId) {
  currentStoryScene.value = sceneId;
  storyHistory.value.push(sceneId);
}
function backToStories() {
  currentView.value = 'storySelect';
  selectedStory.value = null;
  currentStoryScene.value = null;
  storyHistory.value = [];
}
</script>

<style>
@import './style.css';
</style>
