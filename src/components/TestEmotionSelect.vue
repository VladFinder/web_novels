<template>
  <div class="test-emotion-select">
    <h1>🧪 Тест выбора эмоций (без Telegram)</h1>
    
    <div class="debug-info">
      <h3>Отладочная информация:</h3>
      <p><strong>Telegram ID:</strong> {{ telegramId }}</p>
      <p><strong>Username:</strong> {{ telegramUsername }}</p>
      <p><strong>Loading:</strong> {{ isLoading }}</p>
      <p><strong>Emotion already selected:</strong> {{ emotionAlreadySelected }}</p>
    </div>
    
    <div v-if="!emotionAlreadySelected" class="emotion-select">
      <h2>Как ты себя чувствуешь?</h2>
      <div class="emotions-grid">
        <div v-for="emotion in emotions" 
             :key="emotion.id" 
             class="emotion-item"
             :class="{ 'disabled': isLoading }"
             @click="selectEmotion(emotion.id)">
          <div class="emotion-icon">{{ emotion.icon }}</div>
          <span class="emotion-name">{{ emotion.name }}</span>
        </div>
      </div>
    </div>
    
    <div v-else class="emotion-already-selected">
      <h2>Сегодня ты уже выбрал эмоцию</h2>
      <div class="selected-emotion">
        <div class="emotion-icon-large">{{ getSelectedEmotionIcon() }}</div>
        <p class="emotion-name">{{ getSelectedEmotionName() }}</p>
      </div>
      <p>Завтра сможешь выбрать новую эмоцию!</p>
      <button @click="resetSelection" class="reset-btn">Сбросить выбор</button>
    </div>
    
    <div class="logs">
      <h3>Логи:</h3>
      <div class="log-container">
        <div v-for="(log, index) in logs" :key="index" :class="['log-entry', log.type]">
          {{ log.message }}
        </div>
      </div>
      <button @click="clearLogs" class="clear-logs-btn">Очистить логи</button>
    </div>
  </div>
</template>

<script>
import { jsonStorageService } from '../services/jsonStorageService'

export default {
  name: 'TestEmotionSelect',
  data() {
    return {
      telegramId: 'test_user_' + Date.now(),
      telegramUsername: 'TestUser',
      isLoading: false,
      emotionAlreadySelected: false,
      selectedEmotion: null,
      logs: [],
      emotions: [
        { id: 1, name: 'Радостно', icon: '😊' },
        { id: 2, name: 'Грустно', icon: '😢' },
        { id: 3, name: 'Спокойно', icon: '😌' },
        { id: 4, name: 'Тревожно', icon: '😰' },
        { id: 5, name: 'Раздражённо', icon: '😤' },
        { id: 6, name: 'Мечтательно', icon: '🤔' }
      ]
    }
  },
  async mounted() {
    this.log('🔍 TestEmotionSelect mounted');
    this.log('🔍 Telegram ID:', this.telegramId);
    this.log('🔍 Telegram Username:', this.telegramUsername);
    
    // Проверяем, была ли уже сохранена эмоция на сегодня
    this.log('🔍 Checking if emotion already selected for today...');
    this.emotionAlreadySelected = await jsonStorageService.hasEmotionToday(this.telegramId)
    this.log('🔍 Emotion already selected:', this.emotionAlreadySelected);
    
    if (this.emotionAlreadySelected) {
      // Получаем выбранную эмоцию
      const today = new Date().toISOString().split('T')[0]
      this.selectedEmotion = await jsonStorageService.getEmotionByDate(this.telegramId, today)
      this.log('🔍 Selected emotion:', this.selectedEmotion);
    }
  },
  methods: {
    log(message, data = null, type = 'info') {
      const logEntry = {
        message: data ? `${message} ${JSON.stringify(data, null, 2)}` : message,
        type,
        timestamp: new Date().toLocaleTimeString()
      };
      this.logs.unshift(logEntry);
      console.log(`[${logEntry.timestamp}] ${logEntry.message}`);
    },
    
    clearLogs() {
      this.logs = [];
    },
    
    async selectEmotion(id) {
      this.log('🔍 selectEmotion called with id:', id);
      this.log('🔍 Current state:', {
        isLoading: this.isLoading,
        telegramId: this.telegramId,
        telegramUsername: this.telegramUsername
      });
      
      if (this.isLoading) {
        this.log('🔍 Already loading, ignoring click');
        return;
      }
      
      this.isLoading = true;
      this.log('🔍 Set loading to true');
      
      try {
        const note = '';
        const timestamp = new Date().toISOString();
        
        const emotionData = {
          telegramId: this.telegramId,
          telegramUsername: this.telegramUsername,
          emotion: id, 
          note, 
          timestamp 
        };
        
        this.log('🔍 Saving emotion data:', emotionData);
        
        const result = await jsonStorageService.saveEmotion(this.telegramId, {
          emotion: id,
          note,
          timestamp,
          username: this.telegramUsername
        });
        
        this.log('✅ Emotion successfully saved:', result, 'success');
        this.emotionAlreadySelected = true;
        this.selectedEmotion = { emotion: id, note, timestamp, username: this.telegramUsername };
        
      } catch (error) {
        this.log('❌ Error saving emotion:', error, 'error');
        this.log('❌ Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        }, 'error');
        
        // Проверяем, если это ошибка о том, что эмоция уже сохранена
        if (error.message.includes('Эмоция на сегодня уже сохранена')) {
          this.log('🔍 Emotion already saved, updating component state');
          // Обновляем состояние компонента
          this.emotionAlreadySelected = true;
          // Получаем сохраненную эмоцию
          const today = new Date().toISOString().split('T')[0];
          this.selectedEmotion = await jsonStorageService.getEmotionByDate(this.telegramId, today);
          alert('Эмоция на сегодня уже сохранена. Завтра сможете выбрать новую эмоцию!');
        } else {
          alert(`Ошибка сохранения эмоции: ${error.message}`);
        }
      } finally {
        this.log('🔍 Set loading to false');
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
    
    resetSelection() {
      this.emotionAlreadySelected = false;
      this.selectedEmotion = null;
      this.log('🔍 Selection reset');
    }
  }
}
</script>

<style scoped>
.test-emotion-select {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.debug-info {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.emotions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.emotion-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.emotion-item:hover {
  border-color: #667eea;
  transform: scale(1.05);
}

.emotion-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.emotion-icon {
  font-size: 2em;
  margin-bottom: 8px;
}

.emotion-icon-large {
  font-size: 3em;
  margin-bottom: 15px;
}

.emotion-name {
  font-size: 14px;
  text-align: center;
}

.emotion-already-selected {
  text-align: center;
  padding: 30px;
  background: #e8f5e8;
  border-radius: 8px;
}

.reset-btn, .clear-logs-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 5px;
}

.logs {
  margin-top: 30px;
}

.log-container {
  max-height: 300px;
  overflow-y: auto;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 10px;
}

.log-entry {
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 12px;
}

.log-entry.info {
  background: #d1ecf1;
  color: #0c5460;
}

.log-entry.success {
  background: #d4edda;
  color: #155724;
}

.log-entry.error {
  background: #f8d7da;
  color: #721c24;
}
</style> 