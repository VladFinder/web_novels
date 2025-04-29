/**
 * Основной файл приложения визуальной новеллы
 * Использует модули для управления сценами, сохранениями и аудио
 */
import scenes from './scenes.js';
import SaveManager from './saveManager.js';
import AudioManager from './audioManager.js';

const app = Vue.createApp({
    data() {
        return {
            // Текущее состояние игры
            currentScene: "menu",
            currentBackground: "assets/images/backgrounds/start.jpg", // Убедитесь, что путь правильный
            currentCharacters: [],
            
            // Состояние меню
            isMainMenuOpen: false,
            isSaveMenuOpen: false,
            isLoadMenuOpen: false,
            isSettingsOpen: false,
            
            // Настройки
            audioVolume: 1,
            
            // Сцены и менеджеры
            scenes: scenes,
            saveManager: null,
            audioManager: null,
            
            // Слоты сохранений
            saveSlots: Array(8).fill(null),

            // Объект для хранения тегов и их значений
            tags: {},

            // Объект для хранения условий
            conditions: {}
        };
    },
    methods: {
        /**
         * Загружает сцену по её идентификатору
         * @param {string} sceneId - Идентификатор сцены
         */
        loadScene(sceneId) {
            const scene = this.scenes[sceneId];
            if (!scene) {
                console.error(`Сцена "${sceneId}" не найдена`);
                return;
            }

            this.currentScene = sceneId;

            // Обработка фона/видео
            if (scene.video) {
                console.log('Загрузка видео:', scene.video);
                // Сбрасываем фон, если есть видео
                this.currentBackground = null;
                
                // Перезапускаем видео при смене сцены
                this.$nextTick(() => {
                    const video = document.querySelector('#videoBackground video');
                    if (video) {
                        video.load();
                        video.play().catch(error => {
                            console.log("Ошибка воспроизведения видео:", error);
                        });
                    }
                });
            } else {
                console.log('Загрузка фона:', scene.background);
                this.currentBackground = scene.background || "assets/images/backgrounds/default.jpg";
            }

            this.currentCharacters = scene.characters || [];
            
            // Воспроизведение аудио, если оно есть в сцене
            if (scene.audio) {
                this.audioManager.play(scene.audio);
            }
        },
        
        /**
         * Обрабатывает выбор игрока
         * @param {Object} choice - Объект выбора
         */
        makeChoice(choice) {
            // Добавляем теги, если они есть в выборе
            if (choice.tags) {
                Object.entries(choice.tags).forEach(([tagName, value]) => {
                    this.addTag(tagName, value);
                });
            }

            // Переходим к следующей сцене
            if (choice.nextScene) {
                this.loadScene(choice.nextScene);
            }
        },
        
        // Методы для игрового меню
        toggleMainMenu() {
            this.isMainMenuOpen = !this.isMainMenuOpen;
            
            // Приостанавливаем/возобновляем аудио при открытии/закрытии меню
            if (this.isMainMenuOpen) {
                this.audioManager.pause();
            } else {
                this.audioManager.resume();
            }
        },
        
        closeMainMenu() {
            this.isMainMenuOpen = false;
            this.audioManager.resume();
        },
        
        returnToStartMenu() {
            this.isMainMenuOpen = false;
            this.loadScene("menu");
        },
        
        // Методы для сохранений
        openSaveMenu() {
            this.isMainMenuOpen = false; // Закрываем главное меню
            this.isSaveMenuOpen = true;
        },
        
        closeSaveMenu() {
            this.isSaveMenuOpen = false;
        },
        
        saveToSlot(slotIndex) {
            const gameState = {
                scene: this.currentScene,
                background: this.currentBackground,
                characters: this.currentCharacters
            };
            
            const success = this.saveManager.saveToSlot(slotIndex, gameState);
            
            if (success) {
                this.saveSlots = this.saveManager.getAllSaveSlots();
                this.closeSaveMenu();
                alert(`Сохранено в слот ${slotIndex + 1}`);
            } else {
                alert('Ошибка при сохранении игры');
            }
        },
        
        // Методы для загрузки
        openLoadMenu() {
            this.isMainMenuOpen = false; // Закрываем главное меню
            this.isLoadMenuOpen = true;
            this.loadSaveSlots();
        },
        
        closeLoadMenu() {
            this.isLoadMenuOpen = false;
        },
        
        loadSaveSlot(slotIndex) {
            const saveData = this.saveManager.loadFromSlot(slotIndex);
            
            if (saveData) {
                this.loadScene(saveData.scene);
                this.closeLoadMenu();
            } else {
                alert('Не удалось загрузить сохранение');
            }
        },
        
        loadSaveSlots() {
            this.saveSlots = this.saveManager.getAllSaveSlots();
        },
        
        // Настройки
        openSettings() {
            this.isMainMenuOpen = false; // Закрываем главное меню
            this.isSettingsOpen = true;
        },
        
        closeSettings() {
            this.isSettingsOpen = false;
        },
        
        /**
         * Обновляет громкость аудио
         * @param {Event} event - Событие изменения громкости
         */
        updateVolume(event) {
            const volume = parseFloat(event.target.value);
            this.audioVolume = volume;
            this.audioManager.setVolume(volume);
        },
        
        /**
         * Инициализирует менеджеры и загружает начальную сцену
         */
        initializeGame() {
            // Инициализация менеджеров
            this.saveManager = new SaveManager(8);
            this.audioManager = new AudioManager();
            
            // Загрузка сохранений
            this.loadSaveSlots();
            
            // Установка громкости
            this.audioManager.setVolume(this.audioVolume);
            
            // Загрузка начальной сцены
            this.loadScene(this.currentScene);
        },
        
        /**
         * Форматирует текст, заменяя \n на <br>
         * @param {string} text - Текст для форматирования
         * @returns {string} - Отформатированный текст
         */
        formatText(text) {
            return text.replace(/\n/g, '<br>');
        },

        /**
         * Добавляет или обновляет значение тега
         * @param {string} tagName - Имя тега
         * @param {number} value - Значение для добавления
         */
        addTag(tagName, value = 1) {
            if (!this.tags[tagName]) {
                this.tags[tagName] = 0;
            }
            this.tags[tagName] += value;
            console.log(`Тег ${tagName} обновлен: ${this.tags[tagName]}`);
        },

        /**
         * Проверяет условие по тегам
         * @param {Object} condition - Объект с условиями
         * @returns {boolean} - Результат проверки
         */
        checkCondition(condition) {
            if (!condition) return true;
            
            for (const [tagName, requiredValue] of Object.entries(condition)) {
                const currentValue = this.tags[tagName] || 0;
                if (currentValue < requiredValue) return false;
            }
            return true;
        },

        /**
         * Получает доступные выборы с учетом условий
         * @returns {Array} - Массив доступных выборов
         */
        getAvailableChoices() {
            const currentScene = this.scenes[this.currentScene];
            if (!currentScene || !currentScene.choices) return [];

            return currentScene.choices.filter(choice => this.checkCondition(choice.condition));
        }
    },
    mounted() {
        // // Добавляем версию в URL
        const currentUrl = window.location.href;
        const versionedUrl = `${currentUrl}?v=${Date.now()}`;
        tg.openUrl(versionedUrl);
    }
});

app.mount("#app");