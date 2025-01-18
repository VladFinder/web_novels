const app = Vue.createApp({
    data() {
        return {
            currentScene: "start",
            currentBackground: "assets/images/backgrounds/start.jpg",
            currentCharacter: null,
            scenes: {
                start: {
                    text: "Добро пожаловать! Что вы хотите сделать?",
                    background: "assets/images/backgrounds/start.jpg",
                    character: null,
                    choices: [
                        { text: "Начать приключение", nextScene: "adventure" },
                        { text: "Выход", nextScene: "end" }
                    ]
                },
                adventure: {
                    text: "Вы отправились в приключение! Куда пойдём?",
                    background: "assets/images/backgrounds/forest.jpg",
                    character: "assets/images/characters/character1.png",
                    choices: [
                        { text: "В лес", nextScene: "forest" },
                        { text: "В город", nextScene: "city" }
                    ]
                },
                forest: {
                    text: "Вы в лесу. Здесь красиво и тихо.",
                    background: "assets/images/backgrounds/forest.jpg",
                    character: "assets/images/characters/character2.png",
                    choices: [
                        { text: "Исследовать лес", nextScene: "end" },
                        { text: "Вернуться назад", nextScene: "adventure" }
                    ]
                },
                city: {
                    text: "Вы в городе. Здесь шумно и людно.",
                    background: "assets/images/backgrounds/city.jpg",
                    character: "assets/images/characters/character3.png",
                    choices: [
                        { text: "На рынок", nextScene: "end" },
                        { text: "Вернуться назад", nextScene: "adventure" }
                    ]
                },
                end: {
                    text: "Спасибо за игру!",
                    background: "assets/images/backgrounds/start.jpg",
                    character: null,
                    choices: [
                        { text: "Вернуться в главное меню", nextScene: "start" }
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
            this.currentCharacter = scene.character || null;
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
