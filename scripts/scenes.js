/**
 * Модуль сцен визуальной новеллы
 * Содержит все сцены игры с их описанием, фонами, персонажами и выборами
 */
const scenes = {
    // Основные сцены
    menu: {
        text: "Добро пожаловать! Выберите действие:",
        background: "assets/images/backgrounds/start.jpg",
        characters: [],
        choices: [
            { text: "Начать игру", nextScene: "dis" },
            { text: "Выход", nextScene: "end" }
        ]
    },
    dis: {
        text: "",
        background: "assets/images/backgrounds/dis.mov",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_1" }
        ]
    },
    // Сцены из истории
    gl1_1: {
        text: "Мама: Знаешь, как бы она никогда не позволила с собой обращаться?",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_2" }
        ]
    },
    gl1_2: {
        text: "Лейла: Обижать ее?",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_3" }
        ]
    },
    gl1_3: {
        text: "Мама: Пользоваться ей! Такого она не потерпит. Как зашумит земля, как польется лава! Нрав огня неукротим… Раз – и!",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4" }
        ]
    },
    gl1_4: {
        text: "Мама защекотала Лейлу.",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4_1" }
        ]
    },
    gl1_4_1: {
        text: "Девочка, хохоча, заболтала в воздухе худыми ножками.",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_5" }
        ]
    },
    gl1_5: {
        text: "Мама: Как вспылит!..",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_6" }
        ]
    },
    gl1_6: {
        text: "И, однажды, Пеле вспылила. Ночью перед Макахики, когда Лейла искала маму в лесу. Макахики – гавайский праздник урожая.",
        background: "assets/images/backgrounds/volcano_eruption.jpg",
        characters: [],
        audio: "assets/audio/ground_rumble.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_7" }
        ]
    },
    gl1_7: {
        text: "Под ногами рассекали землю трещины. Казалось, сам остров выл от боли. Звук: гул земли",
        background: "assets/images/backgrounds/cracking_ground.jpg",
        characters: [],
        audio: "assets/audio/ground_cracks.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_8" }
        ]
    },
    gl1_8: {
        text: "Хани: «Лейла!» (Звук: хлопанье крыльев)",
        background: "assets/images/backgrounds/forest_night.jpg",
        characters: [
            { name: "Хани", image: "assets/images/characters/hani.png", position: "left" },
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "right" }
        ],
        audio: "assets/audio/bird_flapping.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_9" }
        ]
    },
    gl1_9: {
        text: "Лейла сжимала мамин браслет. Над головой били крыльями напуганные птицы. Словно воцарился Коре. Коре - хаос.",
        background: "assets/images/backgrounds/chaos_sky.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        audio: "assets/audio/chaos_sound.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_10" }
        ]
    },
    gl1_10: {
        text: "За одну ночь на Ниихау вырос новый вулкан. Ниихау – самый маленький обитаемый остров Гавайского архипелага. Был закрыт для туризма с 1864 года.",
        background: "assets/images/backgrounds/new_volcano.jpg",
        characters: [],
        audio: "assets/audio/volcano_grow.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_11" }
        ]
    },
    gl1_11: {
        text: "Звук: гул земли кончается. Деревня была наполовину разрушена. Многие пострадали. Кто-то умер. Кто-то пропал.",
        background: "assets/images/backgrounds/destroyed_village.jpg",
        characters: [],
        audio: "assets/audio/quiet_aftermath.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_12" }
        ]
    },
    gl1_12: {
        text: "Звук: белый шум. На много лун над островом нависла тень вулканической богини. Поисковые группы прочесывали местность, но маму Лейла так и не нашла.",
        background: "assets/images/backgrounds/volcano_cloud.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        audio: "assets/audio/white_noise.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_13" }
        ]
    },
    gl1_13: {
        text: "Островитяне стали ревностно молиться Пеле. Возвели храм в её честь. И вулкан, убаюканный молитвами, уснул.",
        background: "assets/images/backgrounds/pele_shrine.jpg",
        characters: [],
        audio: "assets/audio/prayers.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_14" }
        ]
    },
    gl1_14: {
        text: "Жизнь продолжилась. Только каждый год, перед Макахики, Лейла вспоминала. Тревога поселилась в её теле.",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_15" }
        ]
    },
    gl1_15: {
        text: "Биение сердца – словно подземные толчки. Гул в ушах – словно вулканический рёв. Жгучая боль на щеках не утихала. Кровь казалась раскалённой лавой.",
        background: "assets/images/backgrounds/leilas_room_closeup.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        audio: "assets/audio/heartbeat.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_16" }
        ]
    },
    gl1_16: {
        text: "В голове доносился крик: «ЛЕЙЛА!» (Звук: грохот. Вспышка белого экрана)",
        background: "assets/images/backgrounds/white_screen.jpg",
        characters: [],
        audio: "assets/audio/scream.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_17" }
        ]
    },
    // Современная локация
    gl1_17: {
        text: "ЛОКАЦИЯ: КОМНАТА ЛЕЙЛЫ В ПУУВАИ. РАССЛАБЛЕННАЯ МУЗЫКА.",
        background: "assets/images/backgrounds/leilas_room_puuvai_modern.jpg",
        characters: [],
        audio: "assets/audio/relax_music.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_18" }
        ]
    },
    gl1_18: {
        text: "Лейла вскочила на кровати. Уведомление: Пууваи, 15 ноября, 2008 год. 08:00",
        background: "assets/images/backgrounds/phone_notification.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_19" }
        ]
    },
    gl1_19: {
        text: "«Резкая боль: последняя рюмка настойки была лишней. В голову ударила боль. Об окно бились камушки. Нетерпеливый голос: «Просыпайся!» Л: Hauna. (Подсказка: hauna - задница (гавайск.)",
        background: "assets/images/backgrounds/leilas_window.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" },
            { name: "Хани", image: "assets/images/characters/hani_modern.png", position: "right" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_20" }
        ]
    },
    gl1_20: {
        text: "Л: «Что это с ним?..» Солнце было еще низко. Л: «Как сам умудрился проснуться после такой попойки…»",
        background: "assets/images/backgrounds/leilas_room_morning.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_21" }
        ]
    },
    gl1_21: {
        text: "Л: «Тело ныло. На правом запястье – синяк. Браслет остался у Хани… Как попала домой?»",
        background: "assets/images/backgrounds/wrist_bruise.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_22" }
        ]
    },
    gl1_22: {
        text: "Протерев глаза, Лейла подошла к зеркалу…",
        background: "assets/images/backgrounds/leilas_mirror.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "end" }
        ]
    },
    end: {
        text: "Спасибо за игру!",
        background: "assets/images/backgrounds/start.jpg",
        characters: [],
        choices: [
            { text: "В начало", nextScene: "menu" }
        ]
    }
};

export default scenes;