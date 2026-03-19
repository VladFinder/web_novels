<template>
  <div class="main-screen" :style="dynamicBackgroundStyle">
    <video class="bg-video" autoplay loop muted playsinline>
      <source src="/dev/spok.MP4" type="video/mp4" />
    </video>

    <div class="user-login" v-if="displayName">
      Привет, {{ displayName }}!
    </div>

    <div class="glass-container">
      <transition name="expand-fade" appear>
        <span v-if="currentEmotion" class="soul-text" :style="{ color: soulTextColor }" key="phrase">
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

    <!-- ── Stories library modal (selection only) ── -->
    <div v-if="showStoriesModal && canSeeStories" class="stories-modal" @click="closeStories">
      <div class="stories-modal__content" @click.stop>
        <div class="stories-modal__header">
          <h3>Истории</h3>
          <button class="stories-modal__close" @click="closeStories">✕</button>
        </div>

        <div v-if="storiesLoading" class="stories-placeholder">Загрузка...</div>
        <div v-else-if="storiesError" class="stories-placeholder error">{{ storiesError }}</div>
        <div v-else-if="!stories.length" class="stories-placeholder">Историй пока нет</div>

        <div v-else class="stories-grid">
          <button
            v-for="story in stories"
            :key="story.id"
            class="story-cover"
            @click="selectStory(story)"
            :style="getCoverStyle(story)"
          >
            <div class="cover-gradient">
              <span v-if="story.duration" class="cover-duration">{{ story.duration }}</span>
              <div class="cover-title">{{ story.title }}</div>
              <div v-if="story.tagline" class="cover-tagline">{{ story.tagline }}</div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- ── Fullscreen story player (teleported to body) ── -->
    <teleport to="body">
      <transition name="player-enter">
        <div v-if="selectedStory" class="story-fullscreen">

          <!-- Crossfade background layers -->
          <div class="story-bg" :class="{ 'story-bg--on': activeBgLayer === 'a' }" :style="bgLayerAStyle"></div>
          <div class="story-bg" :class="{ 'story-bg--on': activeBgLayer === 'b' }" :style="bgLayerBStyle"></div>
          <div class="story-dim"></div>

          <!-- Top HUD -->
          <div class="story-hud">
            <button class="hud-btn" @click="closeStory">✕</button>
            <div class="hud-center">
              <div class="hud-title">{{ selectedStory.title }}</div>
              <div class="hud-bar">
                <div class="hud-bar-fill" :style="{ width: progressPercent + '%' }"></div>
              </div>
            </div>
            <button class="hud-btn" @click="showPlayerMenu = !showPlayerMenu">☰</button>
          </div>

          <!-- Scene area — tap to advance -->
          <div class="story-scene" @click="onSceneClick">
            <transition-group name="char-fade" tag="div" class="story-chars-wrap">
              <div
                v-for="(char, idx) in currentStepCharacters"
                :key="char.image + '|' + storyStep + '|' + idx"
                class="story-char"
                :style="getCharStyle(char)"
              >
                <img :src="char.image" alt="" draggable="false" />
              </div>
            </transition-group>
          </div>

          <!-- Bottom text panel -->
          <div class="story-panel" @click.stop>
            <p class="story-text" @click="onTextClick">
              {{ displayedText }}<span v-if="isTyping" class="type-cursor">▌</span>
            </p>

            <!-- Choices appear after typewriter finishes -->
            <transition name="choices-in">
              <div v-if="!isTyping && currentChoices.length" class="story-choices">
                <button
                  v-for="(choice, cidx) in currentChoices"
                  :key="cidx"
                  class="story-choice"
                  @click.stop="chooseChoice(choice)"
                >
                  {{ choice.text || 'Выбор ' + (cidx + 1) }}
                </button>
              </div>
            </transition>

            <!-- Tap-to-advance hint icon -->
            <div v-if="!isTyping && !currentChoices.length" class="tap-hint">▼</div>
          </div>

          <!-- Slide-up menu -->
          <transition name="menu-up">
            <div v-if="showPlayerMenu" class="player-menu-overlay" @click="showPlayerMenu = false">
              <div class="player-menu" @click.stop>
                <div class="player-menu-title">{{ selectedStory.title }}</div>
                <button class="pmenu-btn" @click="prevStep(); showPlayerMenu = false" :disabled="storyHistory.length <= 1">
                  ← Предыдущая сцена
                </button>
                <button class="pmenu-btn" @click="saveProgress(); showPlayerMenu = false">
                  💾 Сохранить прогресс
                </button>
                <button class="pmenu-btn" @click="loadProgress(); showPlayerMenu = false">
                  📂 Загрузить прогресс
                </button>
                <button class="pmenu-btn danger" @click="closeStory">
                  ✕ Выйти из истории
                </button>
                <div v-if="progressMessage" class="pmenu-msg">{{ progressMessage }}</div>
              </div>
            </div>
          </transition>

        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useEmotionStore } from '@/services/emotionStore';
import { useSoulStyle } from '@/services/useSoulStyle';
import { getEmotionPhrases } from '@/constants/emotions';
import { getSafeTelegramId, getTelegramUsername } from '@/utils/telegram';
import { getCharStyle } from '@/utils/storyUtils';
import {
  ensureUser,
  getEmotionByDate,
  getStories,
  getStoryProgress as fetchStoryProgress,
  saveStoryProgress
} from '@/services/apiClient';
import { todayString } from '@/utils/dates';

const STORY_ALLOWED_IDS = ['434205137', '115339643', '128388657', '488646763'];

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
    const storyHistory = ref([]);
    const progressMessage = ref('');
    const stories = ref([]);
    const currentEmotion = computed(() => emotionStore.selectedEmotionId);
    const currentPhrase = ref('');
    const storiesLoading = ref(false);
    const storiesError = ref('');

    // ── Player state ──────────────────────────────────────────────
    const displayedText = ref('');
    const isTyping = ref(false);
    const bgLayerA = ref({ url: '' });
    const bgLayerB = ref({ url: '' });
    const activeBgLayer = ref('a');
    const showPlayerMenu = ref(false);
    let typingTimer = null;

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
      } catch {}
    };

    onMounted(async () => {
      const id = getSafeTelegramId();
      telegramId.value = id;
      // Показываем ник сразу из Telegram (синхронно), не ждём сеть
      if (telegramUsername.value) username.value = telegramUsername.value;
      try {
        const user = await ensureUser(id, telegramUsername.value || id);
        username.value = user?.login || telegramUsername.value || user?.telegramId || '';
      } catch {
        username.value = telegramUsername.value || id;
      }
      await preloadTodayEmotion(id);
    });

    onUnmounted(() => {
      if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
    });

    // ── Stories loading (ленивая — только при открытии модала) ──────
    const loadStories = async () => {
      if (storiesLoading.value) return;
      storiesLoading.value = true;
      storiesError.value = '';
      try {
        const list = await getStories(); // уже содержит полные данные
        stories.value = Array.isArray(list) ? list.filter((s) => s?.steps?.length) : [];
      } catch (error) {
        storiesError.value = error.message || 'Ошибка загрузки историй';
      } finally {
        storiesLoading.value = false;
      }
    };

    // ── Modal ─────────────────────────────────────────────────────
    const openStories = () => {
      if (!canSeeStories.value) return;
      showStoriesModal.value = true;
      if (!stories.value.length) loadStories(); // загружаем при первом открытии
    };
    const closeStories = () => { showStoriesModal.value = false; closeStory(); };

    const selectStory = (story) => {
      selectedStory.value = story;
      storyHistory.value = story?.steps?.length ? [0] : [];
      showStoriesModal.value = false;
      loadProgress();
    };

    const closeStory = () => {
      if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
      selectedStory.value = null;
      storyStep.value = 0;
      progressMessage.value = '';
      displayedText.value = '';
      isTyping.value = false;
      showPlayerMenu.value = false;
    };

    // ── Navigation ────────────────────────────────────────────────
    const findStepIndexById = (id) => {
      if (!selectedStory.value?.steps) return -1;
      return selectedStory.value.steps.findIndex((s) => s.id === id);
    };

    const getNextIndexByGraph = () => {
      const step = currentStoryStep.value;
      if (!step) return -1;
      const firstChoice = Array.isArray(step.choices) && step.choices.length > 0
        ? step.choices.find((c) => c?.next) : null;
      if (firstChoice?.next) return findStepIndexById(firstChoice.next);
      return -1;
    };

    const nextStep = () => {
      const nextIdx = getNextIndexByGraph();
      if (nextIdx >= 0) {
        storyStep.value = nextIdx;
        storyHistory.value = [...storyHistory.value, nextIdx];
      }
    };

    const prevStep = () => {
      if (storyHistory.value.length > 1) {
        const updated = storyHistory.value.slice(0, -1);
        storyHistory.value = updated;
        storyStep.value = updated[updated.length - 1];
      }
    };

    const chooseChoice = (choice) => {
      const targetId = choice?.next;
      if (targetId) {
        const idx = findStepIndexById(targetId);
        if (idx >= 0) {
          storyStep.value = idx;
          storyHistory.value = [...storyHistory.value, idx];
          if (selectedStory.value) {
            saveStoryProgress({
              telegramId: telegramId.value,
              storyId: selectedStory.value.id,
              stepIndex: storyStep.value,
              flags: []
            }).catch(() => {});
          }
        }
      }
    };

    // ── Progress ──────────────────────────────────────────────────
    const saveProgress = async () => {
      if (!selectedStory.value) return;
      try {
        await saveStoryProgress({
          telegramId: telegramId.value,
          storyId: selectedStory.value.id,
          stepIndex: storyStep.value,
          flags: []
        });
        progressMessage.value = '✓ Прогресс сохранён';
      } catch (e) {
        progressMessage.value = 'Ошибка сохранения';
      } finally {
        setTimeout(() => { progressMessage.value = ''; }, 2000);
      }
    };

    const loadProgress = async () => {
      if (!selectedStory.value) return;
      try {
        const progress = await fetchStoryProgress(telegramId.value, selectedStory.value.id);
        if (progress && progress.stepIndex >= 0) {
          storyStep.value = Math.min(
            Math.max(Number(progress.stepIndex), 0),
            selectedStory.value.steps.length - 1
          );
          storyHistory.value = [storyStep.value];
          progressMessage.value = '✓ Прогресс загружен';
          setTimeout(() => { progressMessage.value = ''; }, 2000);
          return;
        }
      } catch {}
      storyStep.value = 0;
      storyHistory.value = selectedStory.value?.steps?.length ? [0] : [];
    };

    // ── Computed ──────────────────────────────────────────────────
    const canSeeStories = computed(() =>
      STORY_ALLOWED_IDS.includes(String(telegramId.value || ''))
    );

    const currentStoryStep = computed(() => {
      if (!selectedStory.value) return null;
      return selectedStory.value.steps?.[storyStep.value] || null;
    });

    const currentStoryStepText = computed(() => currentStoryStep.value?.text || '');
    const currentStepCharacters = computed(() => currentStoryStep.value?.characters || []);
    const currentChoices = computed(() => currentStoryStep.value?.choices || []);

    const progressPercent = computed(() => {
      if (!selectedStory.value?.steps?.length) return 0;
      return Math.round(((storyStep.value + 1) / selectedStory.value.steps.length) * 100);
    });

    const bgLayerAStyle = computed(() =>
      bgLayerA.value.url
        ? { backgroundImage: `url(${bgLayerA.value.url})` }
        : { backgroundColor: '#0f172a' }
    );
    const bgLayerBStyle = computed(() =>
      bgLayerB.value.url
        ? { backgroundImage: `url(${bgLayerB.value.url})` }
        : { backgroundColor: '#0f172a' }
    );

    const displayName = computed(() => {
      const name = username.value?.toString().trim();
      if (!name) return 'друг';
      if (name === telegramId.value?.toString() || name.startsWith('debug_')) return 'друг';
      return name.startsWith('@') ? name : `@${name}`;
    });

    // ── Typewriter ────────────────────────────────────────────────
    const startTypewriter = (text) => {
      if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
      displayedText.value = '';
      isTyping.value = true;
      if (!text) { isTyping.value = false; return; }
      let i = 0;
      typingTimer = setInterval(() => {
        displayedText.value = text.slice(0, ++i);
        if (i >= text.length) {
          clearInterval(typingTimer);
          typingTimer = null;
          isTyping.value = false;
        }
      }, 28);
    };

    const skipTypewriter = () => {
      if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
      displayedText.value = currentStoryStepText.value;
      isTyping.value = false;
    };

    watch(currentStoryStepText, (text) => { startTypewriter(text); });

    // ── Background crossfade ──────────────────────────────────────
    const switchBg = (newUrl) => {
      if (activeBgLayer.value === 'a') {
        bgLayerB.value = { url: newUrl };
        activeBgLayer.value = 'b';
      } else {
        bgLayerA.value = { url: newUrl };
        activeBgLayer.value = 'a';
      }
    };

    watch(currentStoryStep, (step) => { switchBg(step?.bg || ''); });

    // ── Tap interactions ──────────────────────────────────────────
    const onSceneClick = () => {
      if (isTyping.value) { skipTypewriter(); return; }
      if (!currentChoices.value.length) nextStep();
    };

    const onTextClick = () => {
      if (isTyping.value) skipTypewriter();
    };

    // ── Story cover art ───────────────────────────────────────────
    const COVER_GRADIENTS = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    ];

    const getCoverStyle = (story) => {
      const bg = story.steps?.[0]?.bg;
      if (bg) return { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' };
      const idx = (story.id?.charCodeAt(0) || 0) % COVER_GRADIENTS.length;
      return { background: COVER_GRADIENTS[idx] };
    };

    const getStoryProgressText = (story) => {
      if (!story?.steps?.length) return '0%';
      const total = story.steps.length;
      const currentIndex = story.id === selectedStory.value?.id ? storyStep.value : -1;
      return `${Math.max(Math.round(((currentIndex + 1) / total) * 100), 0)}%`;
    };

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
      storyHistory,
      stories,
      progressMessage,
      storiesLoading,
      storiesError,
      openStories,
      closeStories,
      selectStory,
      closeStory,
      nextStep,
      prevStep,
      saveProgress,
      loadProgress,
      getStoryProgress: getStoryProgressText,
      canSeeStories,
      currentStoryStep,
      currentStoryStepText,
      currentStepCharacters,
      currentChoices,
      progressPercent,
      bgLayerAStyle,
      bgLayerBStyle,
      activeBgLayer,
      displayedText,
      isTyping,
      showPlayerMenu,
      onSceneClick,
      onTextClick,
      getCharStyle,
      getCoverStyle,
      chooseChoice,
      getNextIndexByGraph,
      telegramId,
    };
  }
};
</script>

<style scoped>
/* ── Main screen ─────────────────────────────────────────────────── */
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
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}

.user-login {
  margin-top: 12px;
  font-size: 18px;
  color: #333;
  font-family: 'Mulish', sans-serif;
  font-weight: 500;
}

.glass-container {
  background: rgba(255,255,255,0.2);
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
.soul-image img { width: 80vw; height: auto; }

.soul-text {
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  margin: 0;
  white-space: pre-line;
}
.soul-text.muted { color: #444; opacity: 0.8; }

.expand-fade-enter-active, .expand-fade-leave-active {
  transition: max-height 3s ease, opacity 0.6s ease;
  overflow: hidden;
}
.expand-fade-enter-from, .expand-fade-leave-to { max-height: 0; opacity: 0; }
.expand-fade-enter-to, .expand-fade-leave-from { max-height: 500px; opacity: 1; }

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
  box-shadow: 0 4px 15px rgba(82,82,82,0.25);
  transition: all 0.2s;
}
.btn.calendar:hover { transform: translateY(-2px); }
.btn.stories {
  background: rgba(255,255,255,0.85);
  color: #333;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  transition: all 0.2s;
}
.btn.stories:hover { transform: translateY(-2px); }
.btn:disabled { opacity: 0.7; cursor: not-allowed; }

/* ── Stories library modal ───────────────────────────────────────── */
.stories-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 20;
  padding: 0;
  box-sizing: border-box;
}

.stories-modal__content {
  width: min(520px, 100%);
  max-height: 88vh;
  background: #fff;
  border-radius: 24px 24px 0 0;
  padding: 20px 20px 32px;
  box-shadow: 0 -8px 40px rgba(0,0,0,0.2);
  color: #111;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.stories-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.stories-modal__header h3 { margin: 0; font-size: 20px; font-weight: 800; }
.stories-modal__close {
  background: #f1f5f9;
  border: none;
  font-size: 16px;
  width: 32px; height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}

.stories-placeholder {
  text-align: center;
  color: #6b7280;
  padding: 32px 0;
  font-size: 15px;
}
.stories-placeholder.error { color: #ef4444; }

/* ── Story cover cards grid (Choices-style) ──────────────────────── */
.stories-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.story-cover {
  position: relative;
  border: none;
  border-radius: 16px;
  aspect-ratio: 3/4;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s, box-shadow 0.2s;
}
.story-cover:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0,0,0,0.25);
}
.story-cover:active { transform: scale(0.98); }

.cover-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px;
  color: #fff;
  text-align: left;
}
.cover-duration {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: 0.8;
  margin-bottom: 4px;
  display: block;
}
.cover-title {
  font-size: 15px;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 4px;
}
.cover-tagline {
  font-size: 11px;
  opacity: 0.8;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Fullscreen player ───────────────────────────────────────────── */
.story-fullscreen {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #0f172a;
}

/* Background crossfade layers */
.story-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.6s ease;
  will-change: opacity;
}
.story-bg--on { opacity: 1; }

/* Subtle dark overlay for text readability */
.story-dim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 40%, transparent 55%, rgba(0,0,0,0.5) 100%);
  pointer-events: none;
}

/* Top HUD */
.story-hud {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px 8px;
}
.hud-btn {
  flex-shrink: 0;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  border: none;
  color: #fff;
  font-size: 16px;
  width: 38px; height: 38px;
  border-radius: 50%;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s;
}
.hud-btn:hover { background: rgba(0,0,0,0.6); }

.hud-center { flex: 1; min-width: 0; }
.hud-title {
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
}
.hud-bar {
  height: 3px;
  background: rgba(255,255,255,0.25);
  border-radius: 2px;
  overflow: hidden;
}
.hud-bar-fill {
  height: 100%;
  background: #fff;
  border-radius: 2px;
  transition: width 0.4s ease;
}

/* Scene / tap area */
.story-scene {
  flex: 1;
  position: relative;
  cursor: pointer;
}
.story-chars-wrap {
  position: absolute;
  inset: 0;
}
.story-char {
  position: absolute;
}
.story-char img {
  width: 100%;
  height: auto;
  display: block;
  user-select: none;
}

/* Character fade animation */
.char-fade-enter-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.char-fade-leave-active { transition: opacity 0.25s ease; }
.char-fade-enter-from { opacity: 0; transform: translateY(12px); }
.char-fade-leave-to { opacity: 0; }

/* Text panel */
.story-panel {
  position: relative;
  z-index: 10;
  padding: 0 16px 24px;
  min-height: 130px;
}

.story-text {
  margin: 0 0 12px;
  color: #fff;
  font-size: 17px;
  line-height: 1.6;
  text-shadow: 0 1px 6px rgba(0,0,0,0.6);
  font-family: 'Mulish', sans-serif;
  white-space: pre-wrap;
}

.type-cursor {
  display: inline-block;
  animation: blink 0.7s step-end infinite;
  color: rgba(255,255,255,0.8);
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Choices */
.story-choices {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.story-choice {
  padding: 13px 18px;
  border-radius: 14px;
  border: 1.5px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, transform 0.15s, border-color 0.15s;
}
.story-choice:hover {
  background: rgba(255,255,255,0.22);
  border-color: rgba(255,255,255,0.5);
  transform: translateX(4px);
}
.story-choice:active { transform: translateX(2px) scale(0.99); }

.choices-in-enter-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.choices-in-enter-from { opacity: 0; transform: translateY(8px); }

/* Tap hint */
.tap-hint {
  color: rgba(255,255,255,0.5);
  font-size: 13px;
  text-align: right;
  animation: float 1.8s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

/* Player menu */
.player-menu-overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: flex-end;
}
.player-menu {
  width: 100%;
  background: #fff;
  border-radius: 24px 24px 0 0;
  padding: 20px 16px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.player-menu-title {
  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 4px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
}
.pmenu-btn {
  padding: 14px 16px;
  border: none;
  border-radius: 12px;
  background: #f8fafc;
  color: #1e293b;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}
.pmenu-btn:hover { background: #f1f5f9; }
.pmenu-btn:disabled { opacity: 0.4; cursor: default; }
.pmenu-btn.danger { color: #ef4444; }
.pmenu-btn.danger:hover { background: #fef2f2; }
.pmenu-msg {
  text-align: center;
  color: #10b981;
  font-size: 13px;
  font-weight: 600;
  padding: 4px;
}

/* Player enter/leave animation */
.player-enter-enter-active { transition: opacity 0.3s ease; }
.player-enter-leave-active { transition: opacity 0.2s ease; }
.player-enter-enter-from, .player-enter-leave-to { opacity: 0; }

/* Menu slide up */
.menu-up-enter-active { transition: opacity 0.2s ease; }
.menu-up-leave-active { transition: opacity 0.15s ease; }
.menu-up-enter-from, .menu-up-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .glass-container { padding: 20px 28px; }
  .buttons-row { bottom: 40px; }
  .btn { font-size: 16px; padding: 12px 20px; }
  .story-text { font-size: 16px; }
  .stories-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
}
</style>
