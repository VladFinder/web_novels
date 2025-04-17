const app = Vue.createApp({
    data() {
        return {
            currentScene: "start",
            currentBackground: "assets/images/backgrounds/start.jpg",
            currentCharacters: [],
            scenes: {
                start: {
                    text: "Добро пожаловать! Выберите действие:",
                    background: "assets/images/backgrounds/start.jpg",
                    characters: [],
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
                    choices: [
                        { text: "Пон", nextScene: "end" }
                    ]
                },
                end: {
                    text: "Спасибо за игру!",
                    background: "assets/images/backgrounds/start.jpg",
                    characters: [],
                    choices: [
                        { text: "В начало", nextScene: "start" }
                    ]
                }
            }
        };
    },
    methods: {
        loadScene(sceneId) {
            const scene = this.scenes[sceneId];
            this.currentScene = sceneId;
            this.currentBackground = scene.background || "assets/images/backgrounds/default.jpg";
            this.currentCharacters = scene.characters || [];
        },
        makeChoice(choice) {
            this.loadScene(choice.nextScene);
        }
    },
    mounted() {
        this.loadScene(this.currentScene);
    }
});

app.mount("#app");
