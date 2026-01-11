<template>
  <div class="main-screen" :style="dynamicBackgroundStyle">
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
      <transition name="expand-fade" appear>
        <span
            v-if="currentEmotion"
            class="soul-text"
            :style="soulTextStyle"
            key="phrase"
        >
          {{ getRandomPhrase(currentEmotion) }}
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
import { dbService } from '@/services/dbService'
import { jsonStorageService } from '@/services/jsonStorageService'
import { getTelegramUserId } from '@/utils/telegram'
import { useEmotionStore } from '@/services/emotionStore'
import { useSoulStyle } from '@/services/useSoulStyle'
import { watch, computed } from 'vue'
import scenes from '../../scenes.js'

const STORY_ALLOWED_IDS = ['434205137', '115339643', '128388657', '488646763']
const ADMIN_IDS = [...STORY_ALLOWED_IDS]

const peleStory = (() => {
  // Берём тексты сцен в порядке объявления
  const steps = Object.values(scenes)
    .map(scene => scene?.text || '')
    .filter(text => Boolean(text?.trim()))

  return {
    id: 'pele',
    title: 'Плёзы Пеле',
    duration: `${steps.length} шагов`,
    tagline: 'Большая история о Пеле и Лейле',
    steps
  }
})()

export default {
  name: 'MainScreen',
  setup() {
    const emotionStore = useEmotionStore()
    const { imageSrc, backgroundStyle, buttonColor } = useSoulStyle(emotionStore.selectedEmotionId)

    // Create computed that also sets CSS custom property
    const dynamicBackgroundStyleWithVar = computed(() => {
      const style = backgroundStyle.value
      if (style && style.background) {
        document.documentElement.style.setProperty('--app-background', style.background)
      }
      return style
    })

    const dynamicButtonColor = computed(() => {
      return buttonColor.value
    })

    const soulTextStyle = computed(() => {
      return {
        color: emotionStore.selectedEmotionId === 5 ? 'white' : '#333'
      }
    })

    return { 
      emotionStore, 
      soulImageSrc: imageSrc, 
      dynamicBackgroundStyle: dynamicBackgroundStyleWithVar,
      dynamicButtonColor,
      soulTextStyle
    }
  },
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
      dateDiagnostics: null,
      showStoriesModal: false,
      selectedStory: null,
      storyStep: 0,
      progressMessage: '',
      stories: [peleStory]
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

    // Watch for emotion store changes to update local current emotion
    watch(() => this.emotionStore.selectedEmotionId, (newEmotionId) => {
      if (newEmotionId && newEmotionId !== this.currentEmotion) {
        this.currentEmotion = newEmotionId
        console.log('🔍 MainScreen: Emotion updated from store:', newEmotionId)
      }
    })
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
              // Синхронизируем emotion store с текущей эмоцией
              this.emotionStore.setEmotion(todayEmotion.emotion)
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
    },

    openStories() {
      if (!this.canSeeStories) return
      this.showStoriesModal = true
    },

    closeStories() {
      this.showStoriesModal = false
      this.selectedStory = null
      this.storyStep = 0
      this.progressMessage = ''
    },

    selectStory(story) {
      this.selectedStory = story
      this.loadProgress()
    },

    closeStory() {
      this.selectedStory = null
      this.storyStep = 0
      this.progressMessage = ''
    },

    nextStep() {
      if (this.selectedStory && this.storyStep < this.selectedStory.steps.length - 1) {
        this.storyStep++
      }
    },

    prevStep() {
      if (this.selectedStory && this.storyStep > 0) {
        this.storyStep--
      }
    },

    saveProgress() {
      if (!this.selectedStory) return
      const key = `story-progress-${this.selectedStory.id}`
      localStorage.setItem(key, String(this.storyStep))
      this.progressMessage = 'Прогресс сохранён'
      setTimeout(() => { this.progressMessage = '' }, 2000)
    },

    loadProgress() {
      if (!this.selectedStory) return
      const key = `story-progress-${this.selectedStory.id}`
      const saved = localStorage.getItem(key)
      if (saved !== null) {
        const step = Number(saved)
        if (!Number.isNaN(step)) {
          this.storyStep = Math.min(Math.max(step, 0), this.selectedStory.steps.length - 1)
          this.progressMessage = 'Прогресс загружен'
          setTimeout(() => { this.progressMessage = '' }, 2000)
          return
        }
      }
      this.storyStep = 0
    },

    getStoryProgress(story) {
      if (!story || !story.steps?.length) return '0%'
      const key = `story-progress-${story.id}`
      const saved = localStorage.getItem(key)
      const total = story.steps.length
      const current = saved !== null ? Math.min(Math.max(Number(saved), 0), total - 1) : -1
      const percent = Math.round(((current + 1) / total) * 100)
      return `${Math.max(percent, 0)}%`
    }
  },
  computed: {
    canSeeStories() {
      return STORY_ALLOWED_IDS.includes(String(this.telegramId || ''))
    },
    currentStoryStep() {
      if (!this.selectedStory) return ''
      return this.selectedStory.steps[this.storyStep] || ''
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
  flex-wrap: nowrap;
  justify-content: space-evenly;
  position: relative;
  transition: background 0.5s ease-in-out;
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

.expand-fade-enter-active,
.expand-fade-leave-active {
  transition: max-height 3.0s ease, opacity 0.6s ease;
  overflow: hidden;
}

.expand-fade-enter-from,
.expand-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-fade-enter-to,
.expand-fade-leave-from {
  max-height: 500px; /* pick something taller than your longest phrase */
  opacity: 1;
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
</style>
