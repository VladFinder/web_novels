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
        <button @click="goToCalendar" class="calendar-btn">Посмотреть календарь</button>
        <button @click="goToMain" class="close-btn">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import { jsonStorageService } from '../services/jsonStorageService'
import { getTelegramUserId } from '../utils/telegram'

export default {
  name: 'EmotionSelect',
  data() {
    return {
      telegramId: null,
      telegramUsername: null,
      isLoading: false,
      emotionAlreadySelected: false,
      selectedEmotion: null,
      emotions: [
        { id: 1, name: 'Радостно', icon: require('../assets/emotions/Радость.png') },
        { id: 2, name: 'Грустно', icon: require('../assets/emotions/Грусть.png') },
        { id: 3, name: 'Спокойно', icon: require('../assets/emotions/Спокойно.png') },
        { id: 4, name: 'Тревожно', icon: require('../assets/emotions/Тревога.png') },
        { id: 5, name: 'Раздражённо', icon: require('../assets/emotions/Раздражение.png') },
        { id: 6, name: 'Мечтательно', icon: require('../assets/emotions/Мечтательность.png') }
      ]
    }
  },
  async mounted() {
    console.log('🔍 EmotionSelect mounted');
    console.log('🔍 Telegram WebApp:', window.Telegram?.WebApp);
    console.log('🔍 Telegram user:', window.Telegram?.WebApp?.initDataUnsafe?.user);
    
    this.telegramId = getTelegramUserId()
    this.telegramUsername = this.getTelegramUsername()
    
    console.log('🔍 Telegram ID:', this.telegramId);
    console.log('🔍 Telegram Username:', this.telegramUsername);
    
    if (!this.telegramId) {
      console.warn('⚠️ Telegram ID not found');
      // Для отладки используем тестовый ID
      this.telegramId = 'debug_user_' + Date.now();
      console.log('🔍 Using debug Telegram ID:', this.telegramId);
    }
    
    // Проверяем, была ли уже сохранена эмоция на сегодня
    console.log('🔍 Checking if emotion already selected for today...');
    this.emotionAlreadySelected = await jsonStorageService.hasEmotionToday(this.telegramId)
    console.log('🔍 Emotion already selected:', this.emotionAlreadySelected);
    
    if (this.emotionAlreadySelected) {
      // Получаем выбранную эмоцию
      const today = new Date().toISOString().split('T')[0]
      this.selectedEmotion = await jsonStorageService.getEmotionByDate(this.telegramId, today)
      console.log('🔍 Selected emotion:', this.selectedEmotion);
    }
  },
  methods: {
    getTelegramUsername() {
      return window.Telegram?.WebApp?.initDataUnsafe?.user?.username || 
             window.Telegram?.WebApp?.initDataUnsafe?.user?.first_name || 
             'Пользователь'
    },
    
    async selectEmotion(id) {
      console.log('🔍 selectEmotion called with id:', id);
      console.log('🔍 Current state:', {
        isLoading: this.isLoading,
        telegramId: this.telegramId,
        telegramUsername: this.telegramUsername
      });
      
      if (this.isLoading) {
        console.log('🔍 Already loading, ignoring click');
        return; // Предотвращаем множественные клики
      }
      
      this.isLoading = true;
      console.log('🔍 Set loading to true');
      
      try {
        let telegramId = getTelegramUserId();
        console.log('🔍 Got Telegram ID from function:', telegramId);
        
        if (!telegramId) {
          console.warn('⚠️ Telegram ID not found in function');
          // Используем ID из компонента
          telegramId = this.telegramId;
          console.log('🔍 Using Telegram ID from component:', telegramId);
        }
        
        const note = '';
        const timestamp = new Date().toISOString();
        
        const emotionData = {
          telegramId,
          telegramUsername: this.telegramUsername,
          emotion: id, 
          note, 
          timestamp 
        };
        
        console.log('🔍 Saving emotion data:', emotionData);
        
        const result = await jsonStorageService.saveEmotion(telegramId, {
          emotion: id,
          note,
          timestamp,
          username: this.telegramUsername
        });
        
        console.log('✅ Emotion successfully saved:', result);
        this.emotionAlreadySelected = true;
        this.selectedEmotion = { emotion: id, note, timestamp, username: this.telegramUsername };
        this.$emit('emotion-selected', id);
        
      } catch (error) {
        console.error('❌ Error saving emotion:', error);
        console.error('❌ Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        
        // Проверяем, если это ошибка о том, что эмоция уже сохранена
        if (error.message.includes('Эмоция на сегодня уже сохранена')) {
          console.log('🔍 Emotion already saved, updating component state');
          // Обновляем состояние компонента
          this.emotionAlreadySelected = true;
          // Получаем сохраненную эмоцию
          const today = new Date().toISOString().split('T')[0];
          this.selectedEmotion = await jsonStorageService.getEmotionByDate(telegramId, today);
          alert('Эмоция на сегодня уже сохранена. Завтра сможете выбрать новую эмоцию!');
        } else {
          alert(`Ошибка сохранения эмоции: ${error.message}`);
        }
      } finally {
        console.log('🔍 Set loading to false');
        this.isLoading = false;
      }
    },
    
    getSelectedEmotionIcon() {
      if (!this.selectedEmotion) return '';
      const emotion = this.emotions.find(e => e.id === this.selectedEmotion.emotion);
      return emotion ? emotion.icon : '';
    },
    
    getSelectedEmotionName() {
      if (!this.selectedEmotion) return '';
      const emotion = this.emotions.find(e => e.id === this.selectedEmotion.emotion);
      return emotion ? emotion.name : '';
    },
    
    goToCalendar() {
      this.$emit('navigate', 'calendar');
    },
    
    goToMain() {
      this.$emit('navigate', 'main');
    }
  }
}
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
  grid-template-columns: repeat(auto-fit, minmax(115px, 6fr));
  gap: 5vw;
  place-items: center;
}

.emotion-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.emotion-item:hover {
  transform: scale(1.05);
}

.emotion-item img {
  width: 35vw;
  max-width: 170px;
  min-width: 80px;
  height: 25vw;
  max-height: 140px;
  min-height: 64px;
  object-fit: cover;
  border-radius: 16px;
  overflow: visible;
}

.emotion-name {
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  color: #333;
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
  object-fit: cover;
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
</style>
