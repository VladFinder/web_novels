const app = Vue.createApp({
    data() {
        return {
            currentScene: "start",
            scenes: {
                start: {
                    text: "Добро пожаловать в игру! Что вы хотите сделать?",
                    choices: [
                        { text: "Начать приключение", nextScene: "adventure" },
                        { text: "Выход", nextScene: "end" }
                    ]
                },
                adventure: {
                    text: "Вы отправились в удивительное приключение. Куда вы хотите пойти?",
                    choices: [
                        { text: "В лес", nextScene: "forest" },
                        { text: "В город", nextScene: "city" }
                    ]
                },
                forest: {
                    text: "Вы попали в лес. Здесь красиво и тихо. Что дальше?",
                    choices: [
                        { text: "Исследовать лес", nextScene: "end" },
                        { text: "Вернуться назад", nextScene: "adventure" }
                    ]
                },
                city: {
                    text: "Вы пришли в город. Он полон жизни. Что дальше?",
                    choices: [
                        { text: "Посетить рынок", nextScene: "end" },
                        { text: "Выйти из города", nextScene: "adventure" }
                    ]
                },
                end: {
                    text: "Спасибо за игру!",
                    choices: [
                        {text: "Вернутся в начало игры", nextScene: "start"}
                    ]
                }
            },
            playerChoices: []
        };
    },
    methods: {
        loadScene(sceneId) {
            this.currentScene = sceneId;
        },
        makeChoice(choice) {
            this.playerChoices.push(choice.text);
            this.loadScene(choice.nextScene);
        }
    }
});

app.mount("#app");