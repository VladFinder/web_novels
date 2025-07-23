<template>
  <div class="main-screen">
    <video class="bg-video" autoplay loop muted playsinline>
      <source src="/dev/spok.MP4" type="video/mp4" />
      Ваш браузер не поддерживает видео фон.
    </video>
    <div class="user-login" v-if="username && username !== telegramId">
      Привет, @{{ username }}!
    </div>
    
    <!-- Кнопка диагностики (только для админов) -->
    <button 
      v-if="isAdmin" 
      class="debug-toggle-btn" 
      @click="toggleDebugInfo"
      :title="showDebugInfo ? 'Скрыть диагностику' : 'Показать диагностику'"
    >
      🔧
    </button>
    
    <!-- Отладочная информация о времени -->
    <div v-if="showDebugInfo && isAdmin" class="debug-time-info">
      <div class="debug-header">
        <strong>🔍 Диагностика времени</strong>
        <button class="close-debug" @click="toggleDebugInfo">✕</button>
      </div>
      
      <div class="time-section">
        <h4>📅 Клиентское время</h4>
        <div class="time-item">
          <strong>Локальное время:</strong> {{ clientTime }}
        </div>
        <div class="time-item">
          <strong>Часовой пояс:</strong> {{ timezone }}
        </div>
        <div class="time-item">
          <strong>UTC offset:</strong> {{ utcOffset }}ч
        </div>
        <div class="time-item">
          <strong>Unix timestamp:</strong> {{ unixTimestamp }}
        </div>
        <div class="time-item">
          <strong>ISO строка:</strong> {{ isoString }}
        </div>
      </div>
      
      <div class="time-section">
        <h4>🎯 Проверка эмоций</h4>
        <div class="time-item">
          <strong>Дата для проверки:</strong> {{ emotionCheckDate }}
        </div>
        <div class="time-item">
          <strong>Эмоция на сегодня:</strong> 
          <span :class="hasEmotionToday ? 'status-ok' : 'status-error'">
            {{ hasEmotionToday ? '✅ Есть' : '❌ Нет' }}
          </span>
        </div>
        <div class="time-item">
          <strong>Telegram ID:</strong> {{ telegramId }}
        </div>
        <div class="time-item">
          <strong>API URL:</strong> {{ apiUrl }}
        </div>
      </div>
      
      <div class="time-section">
        <h4>🌐 Сетевая информация</h4>
        <div class="time-item">
          <strong>User Agent:</strong> {{ userAgent }}
        </div>
        <div class="time-item">
          <strong>Язык браузера:</strong> {{ browserLanguage }}
        </div>
        <div class="time-item">
          <strong>Разрешение экрана:</strong> {{ screenResolution }}
        </div>
      </div>
      
      <div class="time-section">
        <h4>📊 Последние запросы</h4>
        <div v-for="(log, index) in requestLogs" :key="index" class="log-item">
          <div class="log-time">{{ log.time }}</div>
          <div class="log-message">{{ log.message }}</div>
        </div>
        <div v-if="requestLogs.length === 0" class="no-logs">
          Нет запросов
        </div>
      </div>
      
      <div class="time-section">
        <h4>🗓️ Все даты с эмоциями</h4>
        <div v-if="emotionDates.length === 0">Нет эмоций</div>
        <div v-else>
          <div v-for="date in emotionDates" :key="date" class="time-item">{{ date }}</div>
        </div>
      </div>
      
      <div class="time-section">
        <h4>📝 Последний payload при сохранении эмоции</h4>
        <div v-if="lastEmotionPayload">
          <pre>{{ lastEmotionPayload }}</pre>
        </div>
        <div v-else>
          Нет данных
        </div>
      </div>
      
      <div class="time-section">
        <h4>🧩 user_emotions[userId] (diagnostics)</h4>
        <div v-if="diagnostics">
          <pre>{{ diagnostics }}</pre>
        </div>
        <div v-else>
          Нет данных
        </div>
      </div>
      
      <div class="time-section">
        <h4>🔎 Диагностика сравнения дат</h4>
        <div v-if="dateDiagnostics">
          <div><strong>Дата для проверки:</strong> {{ dateDiagnostics.date }}</div>
          <div><strong>Ключи (даты) пользователя:</strong></div>
          <div style="max-height:100px;overflow:auto;font-size:12px;background:#f7f7f7;padding:4px 8px;border-radius:6px;">
            <span v-for="k in dateDiagnostics.keys" :key="k">{{ k }}<span v-if="k !== dateDiagnostics.keys[dateDiagnostics.keys.length-1]">, </span></span>
          </div>
          <div><strong>hasEmotion:</strong> <span :style="{color: dateDiagnostics.hasEmotion ? 'green' : 'red'}">{{ dateDiagnostics.hasEmotion }}</span></div>
        </div>
        <div v-else>
          Нет данных
        </div>
      </div>
    </div>
    
    <button class="settings-btn" @click="$emit('open-settings')">
      <!-- <img src="../assets/settings.svg" alt="Настройки" /> -->
    </button>
    <div class="glass-container">
      <span class="soul-text">
        {{ currentEmotion ? getRandomPhrase(currentEmotion) : 'Выбери эмоцию на сегодня' }}
      </span>
    </div>
    <div class="soul-image">
      <img src="../assets/soul.png" alt="Soul" />
    </div>
    <div class="buttons-row">
      <button class="btn calendar" @click="$emit('open-calendar')">
        Календарь настроения
      </button>
      <button class="btn stories" disabled>
        Скоро тут будут истории
      </button>
    </div>
  </div>
</template>

<script>
import { dbService } from '../services/dbService'
import { jsonStorageService } from '../services/jsonStorageService'
import { getTelegramUserId } from '../utils/telegram'

export default {
  name: 'MainScreen',
  data() {
    return {
      username: null,
      clientTime: '',
      timezone: '',
      utcOffset: '',
      emotionCheckDate: '',
      hasEmotionToday: false,
      unixTimestamp: '',
      isoString: '',
      telegramId: '',
      apiUrl: '',
      userAgent: '',
      browserLanguage: '',
      screenResolution: '',
      showDebugInfo: false,
      requestLogs: [],
      isAdmin: false,
      currentEmotion: null,
      emotionPhrases: {
        1: [ // Радостно (счастливый)
          "Лучшее уже происходит с тобой.",
          "Солнце внутри тебя — оно не гаснет.",
          "Каждый день полон новых открытий.",
          "Счастье — в деталях, ты это знаешь.",
          "Лучи внутри тебя нашли выход.",
          "Ты на своей волне. И она — золотая.",
          "Свет, который ты чувствуешь, — твой собственный.",
          "Жизнь прекрасна и у меня есть все время!",
          "Я становлюсь лучшей версией себя.",
          "Меня достаточно.",
          "Я наслаждаюсь этим моментом!",
          "Я отлично справляюсь!",
          "Лучшее уже происходит со мной.",
          "Солнце внутри меня — оно не гаснет.",
          "Каждый день полон новых открытий.",
          "Счастье — в деталях, я это знаю.",
          "Лучи внутри меня нашли выход.",
          "Я на своей волне. И она — золотая.",
          "Свет, который я чувствую, — мой собственный.",
          "Сегодня мне по плечу больше, чем я думаю.",
          "Пока другие думают — я делаю. Вперёд.",
          "Я покоряю те вершины, которые раньше казались слишком высокими. Это уже победа.",
          "Я чувствую, как жизнь улыбается мне в ответ.",
          "Я — в потоке, и всё складывается естественно.",
          "Моё сердце распахнуто навстречу радости.",
          "Я принимаю счастье без страха и сомнений.",
          "Каждый миг — возможность насладиться светом.",
          "Я позволяю себе сиять без повода.",
          "Моё счастье — не случайность, а внутренняя весна."
        ],
        2: [ // Грустно (грустный)
          "Ты имеешь право грустить. Это тоже часть исцеления.",
          "Даже самые тихие слёзы поливают ростки силы.",
          "Печаль — не враг, а спутник, который когда-нибудь уйдёт.",
          "Иногда нужно просто посидеть рядом с собой.",
          "Ты не один(а), даже когда кажется иначе.",
          "Если слишком много на уме — я могу поплакать. Как облака, ставшие тяжелыми, разверзаются дождем.",
          "Я не несу старые чувства в новый день, я освобождаюсь от них.",
          "Одна плохая глава не означает, что моя история окончена. Я всегда могу перевернуть страницу.",
          "Я — не то, что со мной происходит. Я — тот, кем я выбираю стать.",
          "Старыми ключами не открыть новых дверей.",
          "Иногда рост ощущается как потеря.",
          "Через грусть я отпускаю прошлое.",
          "Я могу позволить себе маленькую радость.",
          "Я имею право грустить. Это тоже часть исцеления.",
          "Даже самые тихие слёзы поливают ростки силы.",
          "Печаль — не враг, а спутник, который когда-нибудь уйдёт.",
          "Иногда нужно просто посидеть рядом с собой.",
          "Я не одна/один, даже когда кажется иначе.",
          "Я не сломан(а). Я просто устал(а). Это лечится заботой.",
          "Даже если сегодня всё кажется тяжёлым — я уже внутри этого дня, и я иду.",
          "Никто не требует от меня подвигов.",
          "Грусть — как тень: она исчезает, когда выходит солнце.",
          "Я обнимаю себя нежно, даже в печали.",
          "Я разрешаю себе быть уязвимым — это тоже сила.",
          "Мои слёзы знают путь к облегчению.",
          "Я не должен(на) быть сильным всё время.",
          "Я ценю тишину внутри, даже если она грустная.",
          "Сердце зашивает себя в собственном ритме.",
          "Я не тороплю своё исцеление."
        ],
        3: [ // Спокойно (спокойный)
          "Мир внутри — твоя гавань.",
          "Сейчас — достаточно.",
          "Ты дышишь, значит ты дома.",
          "Покой — не пустота, а полнота.",
          "Ничего не нужно добавлять к этому моменту.",
          "Чем я спокойнее, тем яснее моя мысль.",
          "Мир внутри — моя гавань.",
          "Сейчас — достаточно.",
          "Я дышу, значит, я дома.",
          "Покой — не пустота, а полнота.",
          "Ничего не нужно добавлять к этому моменту.",
          "Сегодняшний день может быть мягким. Я позволяю себе расслабиться.",
          "Я свечусь, когда не спешу.",
          "В тишине я слышу свою истину.",
          "Моё дыхание — мой якорь в настоящем.",
          "Я наедине с собой — и мне хорошо.",
          "Сейчас всё так, как должно быть.",
          "Спокойствие даёт мне силу двигаться с ясностью.",
          "Мир вокруг отражает мой внутренний лад.",
          "Мне не нужно спешить — я уже пришёл(ла).",
          "Тишина внутри — это не пустота, а место силы.",
          "Спокойствие — это не апатия."
        ],
        4: [ // Тревожно (тревожный)
          "Вдох. Выдох. Ты уже справляешься.",
          "Ничто не требует срочности, кроме заботы о себе.",
          "Ты не обязан(а) знать всё наперёд.",
          "Покой начинается с принятия.",
          "Дыши. Ты в безопасности.",
          "Я — не мысли в моей голове. Я — тот, кто их слушает.",
          "День, когда я посадил семя — это не день, когда я съем плод.",
          "Мое направление куда важнее, чем моя скорость.",
          "Я понимаю, что переживания не изменят ситуацию.",
          "Мне не обязательно уметь что-то, чтобы получать удовольствие от процесса.",
          "Холодная вода не согреется, пока я откладываю прыжок.",
          "Я думаю лишь о том, что подвластно моему контролю.",
          "Браться за дело, которого боишься — проявление отваги.",
          "Вдох. Выдох. Я уже справляюсь.",
          "Ничто не требует срочности, кроме заботы о себе.",
          "Я не обязан(а) знать всё наперёд.",
          "Покой начинается с принятия.",
          "Я дышу. Я в безопасности.",
          "Моя тревога не говорит правду — она просто хочет защитить меня.",
          "Я справился и раньше. Сегодня — не исключение.",
          "Позволь себе не знать, что будет дальше. Сейчас — уже достаточно.",
          "Я делаю шаг за шагом. Этого достаточно.",
          "Мне не нужно всё контролировать, чтобы быть в порядке.",
          "Я разрешаю себе не знать ответа прямо сейчас.",
          "Моя тревога — не я. Я — больше, чем она.",
          "Я учусь быть с собой, даже в штормах.",
          "Мир не рухнет, если я замедлюсь.",
          "Я могу создавать острова покоя в океане волнений.",
          "Сейчас — это всё, что у меня есть. И этого достаточно."
        ],
        5: [ // Раздражённо (злой)
          "Твоя злость — сигнал, а не вина.",
          "Ты имеешь право на границы.",
          "Сила — в том, чтобы выбрать, как отвечать.",
          "Злость может стать топливом для перемен.",
          "Чувствовать — не значит разрушать.",
          "Моя злость — сигнал, а не вина.",
          "Я имею право на границы.",
          "Сила — в том, чтобы выбрать, как отвечать.",
          "Злость может стать топливом для перемен.",
          "Чувствовать — не значит разрушать.",
          "Я признаю свою злость и выбираю, как выразить её мудро.",
          "Мои чувства — не ошибка. Это мой опыт.",
          "Я не обязан(а) сдерживаться, я учусь выражаться бережно.",
          "Я могу остановиться и выбрать другой путь.",
          "Я уважаю свои пределы и позволяю другим знать об этом.",
          "Моя энергия — в моих руках.",
          "Я могу быть сильным(ой) и мягким(ой) одновременно.",
          "Я — не буря, я — небо, в котором она прошла."
        ],
        6: [ // Мечтательно (мечтательный)
          "Мечты — это обещания, шепчущие из будущего.",
          "Внутри тебя — целые миры.",
          "Ты создан(а) для прекрасного.",
          "Небо не предел, когда ты закрываешь глаза.",
          "Каждая мечта начинается с чувства.",
          "Я нахожу свое отражение в искусстве.",
          "Мечты — это обещания, шепчущие из будущего.",
          "Внутри меня — целые миры.",
          "Я создан(а) для прекрасного.",
          "Небо не предел, когда я закрываю глаза.",
          "Каждая мечта начинается с чувства.",
          "Я заглядываю в будущее с любопытством.",
          "Мои мечты — как звёзды: ведут меня к цели.",
          "Я верю в того, кем могу стать.",
          "Я творец своей жизни.",
          "Во мне живёт волшебник, творящий смысл из тишины.",
          "Я позволяю себе строить замки на облаках.",
          "Мои мечты — мой внутренний компас.",
          "Я слышу музыку будущего, даже в будничном шуме."
        ]
      },
      emotionDates: [],
      lastEmotionPayload: null,
      diagnostics: null,
      dateDiagnostics: null
    }
  },
  watch: {
    emotionCheckDate(newDate) {
      const telegramId = this.telegramId;
      if (telegramId && newDate) {
        const apiUrl = jsonStorageService.getApiUrl();
        fetch(`${apiUrl}/emotions/diagnostics/${telegramId}/${newDate}`)
          .then(res => res.ok ? res.json() : { error: 'Нет диагностики' })
          .then(diag => { this.dateDiagnostics = diag; })
          .catch(() => { this.dateDiagnostics = { error: 'Ошибка получения диагностики' }; });
      }
    }
  },
  async mounted() {
    const ADMIN_IDS = ['488646763', '115339643', '128388657', '434205137'];
    const telegramId = getTelegramUserId()
    this.telegramId = telegramId || 'Не найден'
    
    if (telegramId) {
      try {
        // Сначала пытаемся получить пользователя
        let user = null;
        try {
          user = await dbService.getUser(telegramId)
          console.log('🔍 Загруженный пользователь:', user)
        } catch (error) {
          console.log('🔍 Пользователь не найден, создаем нового')
          // Если пользователь не найден, создаем его
          await dbService.saveUser(telegramId, 'vladfinder')
          user = await dbService.getUser(telegramId)
        }
        
        if (user) {
          this.username = user.login || user.telegramId || telegramId
          this.isAdmin = ADMIN_IDS.includes(String(telegramId))
          console.log('🔍 Username:', this.username, '| Telegram ID:', telegramId, '| isAdmin:', this.isAdmin)
        } else {
          this.username = telegramId
          this.isAdmin = ADMIN_IDS.includes(String(telegramId))
        }
      } catch (e) {
        console.error('Ошибка получения логина:', e)
        this.username = telegramId
        this.isAdmin = ADMIN_IDS.includes(String(telegramId))
      }
    }
    
    this.apiUrl = jsonStorageService.getApiUrl()
    this.userAgent = navigator.userAgent.substring(0, 50) + '...'
    this.browserLanguage = navigator.language || 'Не определен'
    this.screenResolution = `${screen.width}x${screen.height}`
    
    this.updateTimeInfo()
    setInterval(() => {
      this.updateTimeInfo()
    }, 1000)
    
    await this.checkEmotionToday()
    this.interceptRequests()
    
    // Получаем все даты с эмоциями для диагностики
    if (telegramId) {
      try {
        const apiUrl = jsonStorageService.getApiUrl();
        const response = await fetch(`${apiUrl}/emotions?telegramId=${telegramId}&startDate=2000-01-01&endDate=2100-12-31`);
        if (response.ok) {
          const emotions = await response.json();
          this.emotionDates = emotions.map(e => e.date).sort();
        } else {
          this.emotionDates = ['Ошибка получения дат'];
        }
      } catch (e) {
        this.emotionDates = ['Ошибка получения дат'];
      }
    }
    
    if (window.lastEmotionPayload) {
      this.lastEmotionPayload = JSON.stringify(window.lastEmotionPayload, null, 2);
    }
    window.addEventListener('emotion-saved', () => {
      this.lastEmotionPayload = JSON.stringify(window.lastEmotionPayload, null, 2);
    });
    
    // Получаем диагностику user_emotions[userId]
    if (telegramId) {
      try {
        const apiUrl = jsonStorageService.getApiUrl();
        const response = await fetch(`${apiUrl}/diagnostics/${telegramId}`);
        if (response.ok) {
          const diag = await response.json();
          this.diagnostics = JSON.stringify(diag, null, 2);
        } else {
          this.diagnostics = 'Нет диагностики';
        }
      } catch (e) {
        this.diagnostics = 'Ошибка получения диагностики';
      }
    }
  },
  methods: {
    getRandomPhrase(emotionId) {
      const phrases = this.emotionPhrases[emotionId] || this.emotionPhrases[1];
      return phrases[Math.floor(Math.random() * phrases.length)];
    },
    
    updateTimeInfo() {
      const now = new Date()
      this.clientTime = now.toLocaleString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      this.utcOffset = (-now.getTimezoneOffset() / 60).toFixed(1)
      this.unixTimestamp = Math.floor(now.getTime() / 1000)
      this.isoString = now.toISOString()
      
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      this.emotionCheckDate = `${year}-${month}-${day}`
    },
    
    async checkEmotionToday() {
      try {
        const telegramId = getTelegramUserId()
        if (telegramId) {
          this.hasEmotionToday = await jsonStorageService.hasEmotionToday(telegramId)
          this.addRequestLog(`Проверка эмоции на ${this.emotionCheckDate}: ${this.hasEmotionToday ? 'найдена' : 'не найдена'}`)
          
          // Если есть эмоция на сегодня, получаем её и устанавливаем фразу
          if (this.hasEmotionToday) {
            const todayEmotion = await jsonStorageService.getEmotionByDate(telegramId, this.emotionCheckDate)
            if (todayEmotion && todayEmotion.emotion) {
              this.currentEmotion = todayEmotion.emotion
            }
          }
        }
      } catch (error) {
        console.error('Ошибка проверки эмоции на сегодня:', error)
        this.hasEmotionToday = false
        this.addRequestLog(`Ошибка проверки эмоции: ${error.message}`)
      }
    },
    
    toggleDebugInfo() {
      this.showDebugInfo = !this.showDebugInfo
    },
    
    addRequestLog(message) {
      const now = new Date()
      const time = now.toLocaleTimeString('ru-RU')
      this.requestLogs.unshift({ time, message })
      if (this.requestLogs.length > 10) {
        this.requestLogs = this.requestLogs.slice(0, 10)
      }
    },
    
    interceptRequests() {
      const originalFetch = window.fetch
      window.fetch = async (...args) => {
        const url = args[0]
        const method = args[1]?.method || 'GET'
        try {
          const response = await originalFetch(...args)
          this.addRequestLog(`${method} ${url} - ${response.status}`)
          return response
        } catch (error) {
          this.addRequestLog(`${method} ${url} - Ошибка: ${error.message}`)
          throw error
        }
      }
    }
  }
}
</script>

<style scoped>
.main-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(48.34% 48.34% at 50% 51.66%, #DAF8FF 29.33%, #F2C0FF 75%, #FB8DFF 100%);
  flex-wrap: nowrap;
  justify-content: space-evenly;
  position: relative;
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

.glass-container{
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
  width: auto;
  box-sizing: border-box;
}

.settings-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  width: 40px;
  height: 40px;
  padding: 0;
}

.settings-btn img {
  width: 32px;
  height: 32px;
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

.buttons-row {
  display: flex;
  flex-direction: row;
  gap: 4vw;
  justify-content: center;
  margin-top: 6vw;
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
}

.btn.calendar {
  background: rgba(255, 125, 187, 1);
  color: white;
  box-shadow: 0 4px 15px rgba(82, 82, 82, 0.25);
  transition: all 0.2s;
}

.btn.calendar:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(82, 82, 82, 0.35);
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

.debug-toggle-btn {
  position: absolute;
  top: 24px;
  left: 24px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 15;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.debug-toggle-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.debug-time-info {
  position: absolute;
  top: 80px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 20px;
  font-size: 13px;
  font-family: 'Courier New', monospace;
  z-index: 10;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.debug-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.close-debug {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-debug:hover {
  color: #333;
}

.time-section {
  margin-bottom: 20px;
}

.time-section h4 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}

.time-item {
  margin-bottom: 6px;
  line-height: 1.4;
  word-break: break-all;
}

.time-item:last-child {
  margin-bottom: 0;
}

.time-item strong {
  color: #333;
  font-weight: 600;
}

.status-ok {
  color: #28a745;
  font-weight: 600;
}

.status-error {
  color: #dc3545;
  font-weight: 600;
}

.log-item {
  margin-bottom: 8px;
  padding: 6px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-size: 12px;
}

.log-time {
  color: #666;
  font-size: 11px;
  margin-bottom: 2px;
}

.log-message {
  color: #333;
  word-break: break-all;
}

.no-logs {
  color: #999;
  font-style: italic;
  text-align: center;
  padding: 10px;
}

@media (max-width: 600px) {
  .debug-time-info {
    font-size: 11px;
    padding: 15px;
    max-width: 300px;
    left: 10px;
    right: 10px;
  }
  
  .debug-toggle-btn {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
}

.soul-text {
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  color: #333;
  line-height: 1.4;
  text-align: center;
  margin: 0;
  white-space: pre-line;
}
</style>