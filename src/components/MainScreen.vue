<template>
  <div class="main-screen" :style="dynamicBackgroundStyle">
    <video class="bg-video" autoplay loop muted playsinline>
      <source src="/dev/spok.MP4" type="video/mp4" />
      Ваш браузер не поддерживает видео фон.
    </video>

    <div class="user-login" v-if="displayName">
      Привет, {{ displayName }}!
    </div>

    <div class="glass-container">
      <transition name="expand-fade" appear>
        <span
          v-if="currentEmotion"
          class="soul-text"
          :style="{ color: soulTextColor }"
          key="phrase"
        >
          {{ currentPhrase }}
        </span>
        <span v-else class="soul-text muted" key="placeholder">
          Выбери эмоцию, чтобы мы настроились.
        </span>
      </transition>
    </div>

    <div class="soul-image">
      <img :src="soulImageSrc" alt="soul-image" />
    </div>

    <div class="buttons-row">
      <button class="btn calendar" :style="{ background: dynamicButtonColor }" @click="$emit('open-calendar')">
        Календарь настроения
      </button>
      <button v-if="canSeeStories" class="btn stories" @click="openStories">
        Истории
      </button>
    </div>

    <div v-if="showStoriesModal && canSeeStories" class="stories-modal" @click="closeStories">
      <div class="stories-modal__content" @click.stop>
        <div class="stories-modal__header">
          <h3>Истории</h3>
          <button class="stories-modal__close" @click="closeStories">✕</button>
        </div>
        <template v-if="!selectedStory">
          <p class="stories-modal__hint">Выбери историю — это тестовые карточки с примерами.</p>
          <div class="stories-list">
            <button
              v-for="story in stories"
              :key="story.id"
              class="story-card"
              @click="selectStory(story)"
            >
              <div class="story-card__title">{{ story.title }}</div>
              <div class="story-card__meta">
                {{ story.duration }}
                <span class="story-card__progress">{{ getStoryProgress(story) }}</span>
              </div>
              <div class="story-card__desc">{{ story.tagline }}</div>
            </button>
          </div>
        </template>

        <template v-else>
          <div class="story-player">
            <div class="story-player__header">
              <div>
                <div class="story-player__title">{{ selectedStory.title }}</div>
                <div class="story-player__meta">{{ selectedStory.duration }}</div>
              </div>
              <button class="stories-modal__close" @click="closeStory">✕</button>
            </div>
            <div class="story-player__body">
              <p>{{ currentStoryStep }}</p>
            </div>
            <div class="story-player__controls">
              <button class="story-nav" :disabled="storyStep === 0" @click="prevStep">Назад</button>
              <div class="story-progress">{{ storyStep + 1 }} / {{ selectedStory.steps.length }}</div>
              <button class="story-nav" :disabled="storyStep === selectedStory.steps.length - 1" @click="nextStep">Далее</button>
            </div>
            <div class="story-savebar">
              <button class="story-nav ghost" @click="saveProgress">Сохранить</button>
              <button class="story-nav ghost" @click="loadProgress">Загрузить</button>
              <span class="story-progress-message">{{ progressMessage }}</span>
            </div>
            <button class="story-exit" @click="closeStory">Закрыть историю</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import { useEmotionStore } from '@/services/emotionStore';
import { useSoulStyle } from '@/services/useSoulStyle';
import { getEmotionPhrases } from '@/constants/emotions';
import { getSafeTelegramId, getTelegramUsername } from '@/utils/telegram';
import { ensureUser, getEmotionByDate } from '@/services/apiClient';
import { todayString } from '@/utils/dates';
import scenes from '../../scenes.js';

const STORY_ALLOWED_IDS = ['434205137', '115339643', '128388657', '488646763'];
const peleStory = (() => {
  const steps = Object.values(scenes)
    .map((scene) => scene?.text || '')
    .filter((text) => Boolean(text?.trim()));

  return {
    id: 'pele',
    title: 'Плёзы Пеле',
    duration: `${steps.length} шагов`,
    tagline: 'Большая история о Пеле и Лейле',
    steps
  };
})();

export default {
  name: 'MainScreen',
  setup() {
    const emotionStore = useEmotionStore();
    const username = ref('');
    const telegramId = ref('');
    const telegramUsername = ref(getTelegramUsername() || '');
    const showStoriesModal = ref(false);
    const selectedStory = ref(null);
    const storyStep = ref(0);
    const progressMessage = ref('');
    const stories = ref([peleStory]);
    const currentEmotion = computed(() => emotionStore.selectedEmotionId);
    const currentPhrase = ref('');

    const { imageSrc, backgroundStyle, buttonColor, textColor } = useSoulStyle(currentEmotion);

    const dynamicBackgroundStyle = computed(() => {
      const style = backgroundStyle.value;
      if (style?.background) {
        document.documentElement.style.setProperty('--app-background', style.background);
      }
      return style;
    });

    const dynamicButtonColor = computed(() => buttonColor.value);
    const soulTextColor = computed(() => textColor.value || '#333');

    const updatePhrase = (emotionId) => {
      const phrases = getEmotionPhrases(emotionId) || [];
      currentPhrase.value = phrases.length
        ? phrases[Math.floor(Math.random() * phrases.length)]
        : '';
    };

    watch(currentEmotion, (id) => updatePhrase(id), { immediate: true });

    const preloadTodayEmotion = async (userId) => {
      try {
        const today = todayString();
        const todayEmotion = await getEmotionByDate(userId, today);
        if (todayEmotion?.emotion) {
          emotionStore.setEmotion(todayEmotion.emotion);
          updatePhrase(todayEmotion.emotion);
        }
      } catch (error) {
        console.error('Ошибка получения эмоции на сегодня:', error);
      }
    };

    onMounted(async () => {
      const id = getSafeTelegramId();
      telegramId.value = id;
      try {
        const user = await ensureUser(id, telegramUsername.value || id);
        username.value = user?.login || telegramUsername.value || user?.telegramId || '';
      } catch {
        username.value = telegramUsername.value || id;
      }
      await preloadTodayEmotion(id);
    });

    const openStories = () => {
      if (!canSeeStories.value) return;
      showStoriesModal.value = true;
    };

    const closeStories = () => {
      showStoriesModal.value = false;
      closeStory();
    };

    const selectStory = (story) => {
      selectedStory.value = story;
      loadProgress();
    };

    const closeStory = () => {
      selectedStory.value = null;
      storyStep.value = 0;
      progressMessage.value = '';
    };

    const nextStep = () => {
      if (selectedStory.value && storyStep.value < selectedStory.value.steps.length - 1) {
        storyStep.value += 1;
      }
    };

    const prevStep = () => {
      if (selectedStory.value && storyStep.value > 0) {
        storyStep.value -= 1;
      }
    };

    const saveProgress = () => {
      if (!selectedStory.value) return;
      const key = `story-progress-${selectedStory.value.id}`;
      localStorage.setItem(key, String(storyStep.value));
      progressMessage.value = 'Прогресс сохранён';
      setTimeout(() => {
        progressMessage.value = '';
      }, 2000);
    };

    const loadProgress = () => {
      if (!selectedStory.value) return;
      const key = `story-progress-${selectedStory.value.id}`;
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        const step = Number(saved);
        if (!Number.isNaN(step)) {
          storyStep.value = Math.min(Math.max(step, 0), selectedStory.value.steps.length - 1);
          progressMessage.value = 'Прогресс загружен';
          setTimeout(() => {
            progressMessage.value = '';
          }, 2000);
          return;
        }
      }
      storyStep.value = 0;
    };

    const getStoryProgress = (story) => {
      if (!story || !story.steps?.length) return '0%';
      const key = `story-progress-${story.id}`;
      const saved = localStorage.getItem(key);
      const total = story.steps.length;
      const current = saved !== null ? Math.min(Math.max(Number(saved), 0), total - 1) : -1;
      const percent = Math.round(((current + 1) / total) * 100);
      return `${Math.max(percent, 0)}%`;
    };

    const canSeeStories = computed(() =>
      STORY_ALLOWED_IDS.includes(String(telegramId.value || ''))
    );

    const currentStoryStep = computed(() => {
      if (!selectedStory.value) return '';
      return selectedStory.value.steps[storyStep.value] || '';
    });

    const displayName = computed(() => {
      const name = username.value?.toString().trim();
      if (!name) return 'друг';
      if (name === telegramId.value?.toString() || name.startsWith('debug_')) return 'друг';
      return name.startsWith('@') ? name : `@${name}`;
    });

    return {
      username,
      displayName,
      dynamicBackgroundStyle,
      dynamicButtonColor,
      soulImageSrc: imageSrc,
      soulTextColor,
      currentEmotion,
      currentPhrase,
      showStoriesModal,
      selectedStory,
      storyStep,
      stories,
      progressMessage,
      openStories,
      closeStories,
      selectStory,
      closeStory,
      nextStep,
      prevStep,
      saveProgress,
      loadProgress,
      getStoryProgress,
      canSeeStories,
      currentStoryStep,
      telegramId
    };
  }
};
</script>

<style scoped>
.main-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  transition: background 0.5s ease-in-out;
  overflow: hidden;
}

.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 1;
  pointer-events: none;
}

.glass-container {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 30px 60px;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  max-width: calc(100% - 40px);
  min-width: 300px;
  box-sizing: border-box;
}

.soul-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.soul-image img {
  width: 80vw;
  height: auto;
}

.expand-fade-enter-active,
.expand-fade-leave-active {
  transition: max-height 3s ease, opacity 0.6s ease;
  overflow: hidden;
}

.expand-fade-enter-from,
.expand-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-fade-enter-to,
.expand-fade-leave-from {
  max-height: 500px;
  opacity: 1;
}

.buttons-row {
  display: flex;
  flex-direction: row;
  gap: 4vw;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 20px;
  position: absolute;
  bottom: 80px;
}

.btn {
  padding: 3vw 6vw;
  min-width: 120px;
  font-size: 4vw;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.btn.calendar {
  color: white;
  box-shadow: 0 4px 15px rgba(82, 82, 82, 0.25);
  transition: all 0.2s;
}

.btn.calendar:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(82, 82, 82, 0.35);
}

.btn.stories {
  background: rgba(255, 255, 255, 0.85);
  color: #333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
}

.btn.stories:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.user-login {
  margin-top: 12px;
  font-size: 18px;
  color: #333;
  font-family: 'Mulish', sans-serif;
  font-weight: 500;
}

.soul-text {
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  margin: 0;
  white-space: pre-line;
}

.soul-text.muted {
  color: #444;
  opacity: 0.8;
}

.stories-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: 16px;
  box-sizing: border-box;
}

.stories-modal__content {
  width: min(900px, 100%);
  height: min(90vh, 100%);
  background: rgba(255, 255, 255, 0.98);
  border-radius: 24px;
  padding: 20px 20px 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  color: #111;
  display: flex;
  flex-direction: column;
}

.stories-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.stories-modal__header h3 {
  margin: 0;
  font-size: 20px;
}

.stories-modal__close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
}

.stories-modal__hint {
  margin: 0 0 12px;
  color: #555;
  font-size: 14px;
}

.stories-list {
  display: grid;
  gap: 12px;
}

.story-card {
  width: 100%;
  text-align: left;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 12px;
  background: #fafafa;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}

.story-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.story-card__title {
  font-weight: 600;
  margin-bottom: 4px;
}

.story-card__meta {
  color: #666;
  font-size: 13px;
}

.story-card__progress {
  color: #2e8b57;
  font-weight: 700;
  margin-left: 8px;
}

.story-card__desc {
  color: #777;
  font-size: 13px;
  margin-top: 4px;
}

.story-player {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.story-player__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.story-player__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 2px;
}

.story-player__meta {
  color: #666;
  font-size: 13px;
}

.story-player__body {
  background: #f7f7f7;
  border: 1px solid #ececec;
  border-radius: 12px;
  padding: 16px;
  min-height: 50vh;
  max-height: 60vh;
  overflow-y: auto;
}

.story-player__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.story-nav {
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  background: #ff7dbb;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;
}

.story-nav.ghost {
  background: #ececec;
  color: #333;
}

.story-nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.story-progress {
  color: #555;
  font-size: 14px;
}

.story-savebar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.story-progress-message {
  color: #4caf50;
  font-size: 13px;
}

.story-exit {
  width: 100%;
  border: 1px solid #ddd;
  background: white;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.story-exit:hover {
  background: #f5f5f5;
}

@media (max-width: 600px) {
  .glass-container {
    padding: 20px 28px;
  }

  .buttons-row {
    bottom: 40px;
  }

  .btn {
    font-size: 16px;
    padding: 12px 20px;
  }
}
</style>
