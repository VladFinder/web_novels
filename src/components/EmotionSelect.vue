<template>
  <div v-if="!emotionAlreadySelected" class="emotion-select">
    <h1 class="title">Как ты себя чувствуешь?</h1>
    <div class="glass-container">
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
        <p>Сохраняем эмоцию...</p>
      </div>
      <div class="emotions-grid">
        <div v-for="emotion in emotions" 
             :key="emotion.id" 
             class="emotion-item"
             :class="{ 'disabled': isLoading }"
             @click="selectEmotion(emotion.id)">
          <img :src="emotion.icon" :alt="emotion.name">
          <span class="emotion-name">{{ emotion.name }}</span>
        </div>
      </div>
      <div class="skip-button-container">
        <button @click="goToMain" class="skip-btn" :disabled="isLoading">
          Пропустить
        </button>
      </div>
    </div>
  </div>
  <div v-else class="emotion-already-selected">
    <div class="selected-emotion-card">
      <h2>Сегодня ты уже выбрал эмоцию</h2>
      <div class="selected-emotion">
        <img :src="getSelectedEmotionIcon()" :alt="getSelectedEmotionName()" class="emotion-icon-large">
        <p class="emotion-name">{{ getSelectedEmotionName() }}</p>
      </div>
      <p class="message">Завтра сможешь выбрать новую эмоцию!</p>
      <div class="buttons-container">
        <button @click="goToCalendar" class="calendar-btn">Календарь настроения</button>
        <button @click="goToMain" class="close-btn">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import { EMOTIONS, getEmotionIcon, getEmotionName } from '@/constants/emotions';
import { useEmotionStore } from '@/services/emotionStore';
import { ensureUser, getEmotionByDate, saveEmotion, ApiError } from '@/services/apiClient';
import { todayString } from '@/utils/dates';
import { getSafeTelegramId } from '@/utils/telegram';

export default {
  name: 'EmotionSelect',
  setup() {
    const emotionStore = useEmotionStore();
    return { emotionStore };
  },
  data() {
    return {
      telegramId: '',
      telegramUsername: '',
      isLoading: false,
      emotionAlreadySelected: false,
      selectedEmotion: null,
      emotions: EMOTIONS
    };
  },
  async mounted() {
    this.telegramId = getSafeTelegramId();
    this.telegramUsername = this.getTelegramUsername();
    try {
      await ensureUser(this.telegramId, this.telegramUsername);
    } catch (error) {
      console.error('Не удалось инициализировать пользователя:', error);
    }
    await this.checkExistingEmotion();
  },
  methods: {
    getTelegramUsername() {
      return (
        window.Telegram?.WebApp?.initDataUnsafe?.user?.username ||
        window.Telegram?.WebApp?.initDataUnsafe?.user?.first_name ||
        'Пользователь'
      );
    },
    async checkExistingEmotion() {
      const today = todayString();
      try {
        const existing = await getEmotionByDate(this.telegramId, today);
        if (existing) {
          this.emotionStore.setEmotion(existing.emotion);
          this.selectedEmotion = existing;
          this.emotionAlreadySelected = true;
        }
      } catch (error) {
        console.error('Ошибка проверки эмоции на сегодня:', error);
      }
    },
    async selectEmotion(id) {
      if (this.isLoading) return;
      this.isLoading = true;
      const today = todayString();
      try {
        await saveEmotion({
          telegramId: this.telegramId,
          emotion: id,
          note: '',
          date: today,
          username: this.telegramUsername
        });
        this.emotionStore.setEmotion(id);
        this.selectedEmotion = { emotion: id, date: today, username: this.telegramUsername };
        this.emotionAlreadySelected = true;
        this.$emit('emotion-selected', id);
      } catch (error) {
        if (error instanceof ApiError && error.status === 400) {
          await this.checkExistingEmotion();
          alert('Эмоция на сегодня уже сохранена.');
        } else {
          alert(`Ошибка сохранения эмоции: ${error.message || 'Неизвестная ошибка'}`);
        }
      } finally {
        this.isLoading = false;
      }
    },
    getSelectedEmotionIcon() {
      return this.selectedEmotion ? getEmotionIcon(this.selectedEmotion.emotion) : '';
    },
    getSelectedEmotionName() {
      return this.selectedEmotion ? getEmotionName(this.selectedEmotion.emotion) : '';
    },
    goToCalendar() {
      this.$emit('navigate', 'calendar');
    },
    goToMain() {
      this.$emit('navigate', 'main');
    }
  }
};
</script>

<style scoped>
.emotion-select {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(48.34% 48.34% at 50% 51.66%, #DAF8FF 29.33%, #F2C0FF 75%, #FB8DFF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-family: 'Mulish', sans-serif;
  font-size: 40px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 100;
}

.glass-container {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 75%;
  max-width: 800px;
}

.emotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  place-items: center;
  width: 100%;
  max-width: 100%;
}

.emotion-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;
  max-width: 150px;
}

.emotion-item:hover {
  transform: scale(1.05);
}

.emotion-item img {
  width: 130%;
  max-width: 130px;
  min-width: 80px;
  height: auto;
  max-height: 120px;
  min-height: 64px;
  object-fit: cover;
  border-radius: 16px;
  overflow: visible;
}

.emotion-name {
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  color: #333;
  text-align: center;
  word-wrap: break-word;
  max-width: 100%;
  line-height: 1.2;
}

.skip-button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.skip-btn {
  background: rgba(255, 255, 255, 0.3);
  color: #666;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 12px 24px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Mulish', sans-serif;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}

.skip-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.4);
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skip-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Стили для экрана уже выбранной эмоции */
.emotion-already-selected {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(48.34% 48.34% at 50% 51.66%, #DAF8FF 29.33%, #F2C0FF 75%, #FB8DFF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.selected-emotion-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.selected-emotion-card h2 {
  font-family: 'Mulish', sans-serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 100;
}

.selected-emotion {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.emotion-icon-large {
  width: 120px;
  height: 120px;
  border-radius: 20px;
  object-fit: contain;
  margin-bottom: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.selected-emotion .emotion-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  font-family: 'Mulish', sans-serif;
}

.message {
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.calendar-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Mulish', sans-serif;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.calendar-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.close-btn {
  background: rgba(255, 255, 255, 0.3);
  color: #333;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Mulish', sans-serif;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* Медиа-запросы для мобильных устройств */
@media (max-width: 768px) {
  .title {
    font-size: 32px;
    margin-bottom: 30px;
  }
  
  .glass-container {
    padding: 30px 20px;
    width: 90%;
  }
  
  .emotions-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .emotion-item {
    max-width: 120px;
  }
  
  .emotion-item img {
    max-width: 100px;
    max-height: 100px;
  }
  
  .emotion-name {
    font-size: 14px;
  }
  
  /* Стили для экрана уже выбранной эмоции */
  .selected-emotion-card {
    padding: 30px 20px;
    width: 95%;
  }
  
  .selected-emotion-card h2 {
    font-size: 20px;
    margin-bottom: 25px;
  }
  
  .emotion-icon-large {
    width: 100px;
    height: 100px;
  }
  
  .selected-emotion .emotion-name {
    font-size: 20px;
  }
  
  .message {
    font-size: 14px;
    margin-bottom: 25px;
  }
  
  .buttons-container {
    gap: 15px;
  }
  
  .calendar-btn, .close-btn {
    padding: 15px 30px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }
  
  .glass-container {
    padding: 25px 15px;
    width: 95%;
  }
  
  .emotions-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .emotion-item {
    max-width: 110px;
  }
  
  .emotion-item img {
    max-width: 140px;
    max-height: 115px;
  }
  
  .emotion-name {
    font-size: 13px;
  }
  
  /* Стили для экрана уже выбранной эмоции */
  .selected-emotion-card {
    padding: 25px 15px;
    width: 98%;
  }
  
  .selected-emotion-card h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .emotion-icon-large {
    width: 80px;
    height: 80px;
  }
  
  .selected-emotion .emotion-name {
    font-size: 18px;
  }
  
  .message {
    font-size: 13px;
    margin-bottom: 20px;
  }
  
  .buttons-container {
    flex-direction: column;
    gap: 10px;
  }
  
  .calendar-btn, .close-btn {
    padding: 15px 30px;
    font-size: 16px;
    width: 100%;
  }
}
</style>
