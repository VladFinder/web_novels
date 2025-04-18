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
<<<<<<< Updated upstream
            // Текущее состояние игры
            currentScene: "menu",
            currentBackground: "assets/images/backgrounds/start.jpg",
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
            saveSlots: Array(8).fill(null)
=======
            currentScene: "menu", // Начинаем с главного меню
            isSettingsOpen: false, // Флаг для открытия/закрытия настроек
            isSavesOpen: false, // Флаг для открытия/закрытия просмотра сохранений
            audioVolume: 1, // Громкость звука (по умолчанию 1)
            saves: [], // Массив сохранений
            scenes: {
                menu: {
                    text: "Главное меню",
                    background: "assets/images/backgrounds/menu.jpg",
                    characters: [],
                    choices: []
                },
                start: {
                    text: "Добро пожаловать! Выберите действие:",
                    background: "assets/images/backgrounds/start.jpg",
                    characters: [],
                    audio: "assets/audio/start.mp3",
                    choices: [
                        { text: "Начать игру", nextScene: "home" },
                        { text: "Выход", nextScene: "end" }
                    ]
                },
                home: {
                    text: "Осёл, пойдём кое что покажу",
                    background: "assets/images/backgrounds/home.jpg",
                    characters: [
                        { name: "Шрек", image: "assets/images/characters/shrek.png", position: "left" },
                        { name: "Осёл", image: "assets/images/characters/osel.png", position: "right" }
                    ],
                    audio: "assets/audio/home.mp3",
                    choices: [
                        { text: "Идти", nextScene: "toilet" },
                        { text: "Не идти", nextScene: "start" }
                    ]
                },
                toilet: {
                    text: "Фуууууу, чо так воняет?",
                    background: "assets/images/backgrounds/toilet.jpg",
                    characters: [
                        { name: "Осёл", image: "assets/images/characters/osel.png", position: "center" }
                    ],
                    audio: "assets/audio/toilet.mp3",
                    choices: [
                        { text: "Дальше", nextScene: "toilet_2" }
                    ]
                },
                toilet_2: {
                    text: "Потому что ты насрал осёл и не смыл...",
                    background: "assets/images/backgrounds/toilet.jpg",
                    characters: [
                        { name: "Шрек", image: "assets/images/characters/shrek.png", position: "center" }
                    ],
                    audio: "assets/audio/toilet_2.mp3",
                    choices: [
                        { text: "Пон", nextScene: "end" }
                    ]
                },
                end: {
                    text: "Спасибо за игру!",
                    background: "assets/images/backgrounds/start.jpg",
                    characters: [],
                    audio: "assets/audio/end.mp3",
                    choices: [
                        { text: "В начало", nextScene: "start" }
                    ]
                }
            }
>>>>>>> Stashed changes
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
            this.currentBackground = scene.background || "assets/images/backgrounds/default.jpg";
            this.currentCharacters = scene.characters || [];
<<<<<<< Updated upstream
            
            // Воспроизведение аудио, если оно есть в сцене
            if (scene.audio) {
                this.audioManager.play(scene.audio);
            }
=======
            // Изменение музыки для сцены
            const audio = document.getElementById("backgroundMusic");
            if (scene.audio) {
                audio.src = scene.audio;
                audio.volume = this.audioVolume; // Установка громкости
                audio.play();
            }
            // Сохранение прогресса
            this.saveGame();
>>>>>>> Stashed changes
        },
        
        /**
         * Обрабатывает выбор игрока
         * @param {object} choice - Объект выбора с nextScene
         */
        makeChoice(choice) {
<<<<<<< Updated upstream
            if (choice && choice.nextScene) {
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
        }
    },
    mounted() {
        // Инициализация игры при монтировании компонента
        this.initializeGame();
    }
});

=======
            this.loadScene(choice.nextScene);
        },
        saveGame() {
            localStorage.setItem("currentScene", this.currentScene);
        },
        saveGameManually() {
            this.saveGame();
            alert("Игра успешно сохранена!");
        },
        loadGame() {
            const savedScene = localStorage.getItem("currentScene");
            if (savedScene) {
                this.loadScene(savedScene);
            }
        },
        openSettings() {
            this.isSettingsOpen = true;
        },
        closeSettings() {
            this.isSettingsOpen = false;
        },
        showSaves() {
            this.saves = Object.keys(localStorage).filter(key => key.startsWith("save_"));
            this.isSavesOpen = true;
        },
        closeSaves() {
            this.isSavesOpen = false;
        },
        loadSave(saveKey) {
            const savedScene = localStorage.getItem(saveKey);
            if (savedScene) {
                this.loadScene(savedScene);
                this.closeSaves();
            }
        },
        returnToMenu() {
            // Остановка фоновой музыки текущей сцены
            const audio = document.getElementById("backgroundMusic");
            audio.pause();
            audio.currentTime = 0;

            // Загрузка главного меню
            this.loadScene("menu");
        }
    },
    mounted() {
        this.loadGame();
        const audio = document.getElementById("backgroundMusic");
        audio.volume = this.audioVolume; // Установка начальной громкости
    },
    watch: {
        audioVolume(newVolume) {
            const audio = document.getElementById("backgroundMusic");
            audio.volume = newVolume; // Обновление громкости при изменении ползунка
        }
    }
});
>>>>>>> Stashed changes
app.mount("#app");