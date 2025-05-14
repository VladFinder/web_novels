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
        audio: "",
        audio: "",
        audio: "",
        audio: "",
        choices: [
            { text: "Начать игру", nextScene: "dis" },
            { text: "Выход", nextScene: "end" }
        ]
    },
    dis: {
        text: "Дисклеймер: Вдохновением для данного произведения послужили гавайские культура и мифология, однако многие достоверные факты были изменены для художественного умысла авторов. Мы не претендуем на историческую достоверность, лишь знакомим читателя с культурой.",
        background: "assets\images\backgrounds\cutscenes\dis1.MP4",
        characters: [],
        audio: "assets\images\SOUNDS\music\ritual_music.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis1" }
        ]
    },
    dis1: {
        text: "«В начале был Пу. ПОДСКАЗКА: Пу – ничего.",
        background: "assets\images\backgrounds\cutscenes\dis2.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "dis2" }
        ]
    },
    dis2: {
        text: "Из Пу произошел Коре. ПОДСКАЗКА: Коре – хаос.",
        background: "assets\images\backgrounds\cutscenes\dis_3.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "dis3" }
        ]
    },
    dis3: {
        text: "Коре разделился на Землю и Небо, чей союз породил Первых Богов.",
        background: "assets\images\backgrounds\cutscenes\dis__3.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "dis4" }
        ]
    },
    dis4: {
        text: "И ими же был разрушен.",
        background: "assets\images\backgrounds\cutscenes\dis_4.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "dis5" }
        ]
    },
    dis5: {
        text: "Разлученные, Земля и Небо долго плакали.",
        background: "assets\images\backgrounds\cutscenes\dis5.mp4",
        characters: [],
        audio: "assets\images\SOUNDS\water_sound.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis6" }
        ]
    },
    dis6: {
        text: "Мир тонул в океане соленых слез.",
        background: "assets\images\backgrounds\cutscenes\dis6.MP4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "dis7" }
        ]
    },
    dis7: {
        text: "Но однажды, Кане отвернул Землю от Неба, населив ее богами, вождями и людьми. ПОДСКАЗКА: Кане – верховный бог, прародитель всех вождей и общинников в гавайской мифологии.",
        background: "assets\images\backgrounds\cutscenes\dis7.mp4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "dis8" }
        ]
    },
    dis8: {
        text: "Так появилась на Земле Пеле: вдохнула жизнь в вулканическую лаву. ПОДСКАЗКА: Пеле – богиня вулканов. ",
        background: "assets\images\backgrounds\cutscenes\dis8.MP4",
        characters: [],
        audio: "assets\images\SOUNDS\female_breath.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis9" }
        ]
    },
    dis9: {
        text: "Она была своенравной. ",
        background: "assets\images\backgrounds\cutscenes\dis9.MP4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "dis10" }
        ]
    },
    dis10: {
        text: "Из-за старых обид ей сложно было уживаться с сестрой, Намакой. Та управляла океаном, и волны ее стремились потушить пыл вулканов. ПОДСКАЗКА: Намака – богиня океана.",
        background: "assets\images\backgrounds\cutscenes\dis10.MP4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "dis11" }
        ]
    },
    dis11: {
        text: "Пусть вдали от семьи, но Пеле хотела жить по своим правилам.",
        background: "assets\images\backgrounds\cutscenes\dis11.MP4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "dis12" }
        ]
    },
    dis12: {
        text: "Богиня покинула родные земли и обосновалась на наших островах…»",
        background: "assets\images\backgrounds\cutscenes\dis12.mp4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_text" }
        ]
    },
    // Сцены из истории
    gl1_text: {
        text: "Лейла слушала маму, затаив дыхание.",
        background: "assets\images\backgrounds\black.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice" }
        ]
    },
    gl1_choice: {
        text: "Остров утопал...",
        background: "assets\images\backgrounds\black.png",
        characters: [],
        choices: [
            { text: "в тишине", nextScene: "gl1_choice1" },
            { text: "в ливнях", nextScene: "gl2_choice2" },
        ]
    },
    gl1_choice1: {
        text: "Только мотыльки бились в окно - в доме еще горел свет.",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [],
        audio: "assets\images\SOUNDS\ночные сверчки.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_1"},
        ]
    },
    gl1_choice1_1: {
        text: "Считается, что все наши острова созданы из плоти и крови Пеле. Что жизнь посреди океана выкована огнем.",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_2" }
        ]

    },
    ggl1_choice1_2: {
        text: "Создала для нас землю, драгоценные камни, пищу для растений. И…",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_3" }
        ]
    },
    gl1_choice1_3: {
        text: "Мама, звеня ракушками, вложила Лейле в ладошки браслет.\nОчищенный перламутр сиял ярче тусклой комнатной лампы.\nРыбацкой леской в браслет был вплетен прозрачный темный камень.",
        background: "assets\images\backgrounds\cutscenes\bracelet.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_4" }
        ]
    },
    gl1_choice1_4: {
        text: "Что это?",
        background: "assets\images\backgrounds\roomnight.PNG",   
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_5" }
        ]
    },
    gl1_choice1_5: {
        text: "Это, как говорят на Большой Земле, обсидиан… вулканическое стекло. Там, где встречаются Пеле и Намака, огонь и вода, они навеки застывают. Сестра не может пойти против сестры - обе проиграют...   ПОДСКАЗКА: Обсидиан — природное вулканическое стекло, образующееся в результате быстрого охлаждения лавы.",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_6" }
        ]
    },
    gl1_choice1_6: {
        text: "Носи его и не снимай. И у меня….",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_7" }
        ]
    },
    gl1_choice1_7: {
        text: "Мама показала свою руку.",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_8" }
        ]
    },
    gl1_choice1_8: {
        text: "Такой же. Это дар Пеле. Ты знаешь, как обращаться с ее дарами?",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_9" }
        ]
    },
    gl1_choice1_9: {
        text: "Уважительно?",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_10" }
        ]
    },
    gl1_choice1_10: {
        text: "Да... Бери, но отдавай что-то взамен. Никогда не пользуйся благами земли сверх меры. Такого она не потерпит. Как зашумит земля, как польется лава! Нрав огня неукротим… Раз – и!?",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_11" }
        ]
    },
    gl1_choice1_11: {
        text: "Мама защекотала Лейлу. Девочка, хохоча, заболтала в воздухе худыми ножками.",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [],
        audio: "assets\images\SOUNDS\child_laugh.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice1_12" }
        ]
    },
    gl1_choice1_12: {
        text: "Как вспылит!",
        background: "assets\images\backgrounds\roomnight.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "dis13" }
        ]
    },
    gl1_choice2: {
        text: "Тяжелые капли дождя разбивались об окно.\nВетер хлестал водой по деревьям.\nА дома было тепло и сухо.",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [],
        audio: "assets\images\SOUNDS\ливень.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_1" },
        ]
    },
    gl1_choice2_1: {
        text: "Считается, что все наши острова созданы из плоти и крови Пеле. Что жизнь посреди океана выкована огнем.",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_2" }
        ]
    },
    
    gl1_choice2_2: {
        text: "Создала для нас землю, драгоценные камни, пищу для растений. И…",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_3" }
        ]
    },
    gl1_choice2_3: {
        text: "Мама, звеня ракушками, вложила Лейле в ладошки браслет.\nОчищенный перламутр сиял ярче тусклой комнатной лампы.\nРыбацкой леской в браслет был вплетен прозрачный темный камень.",
        background: "assets\images\backgrounds\cutscenes\bracelet.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_4" }
        ]
    },
    gl1_choice2_4: {
        text: "Что это?",
        background: "assets\images\backgrounds\roomnightrain.mp4",   
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_5" }
        ]
    },
    gl1_choice2_5: {
        text: "Это, как говорят на Большой Земле, обсидиан... вулканическое стекло. Там, где встречаются Пеле и Намака, огонь и вода, они навеки застывают. Сестра не может пойти против сестры - обе проиграют...   ПОДСКАЗКА: Обсидиан — природное вулканическое стекло, образующееся в результате быстрого охлаждения лавы.",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_6" }
        ]
    },
    gl1_choice2_6: {
        text: "Носи его и не снимай. И у меня...",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_7" }
        ]
    },
    gl1_choice2_7: {
        text: "Мама показала свою руку.",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_8" }
        ]
    },
    gl1_choice2_8: {
        text: "Такой же. Это дар Пеле. Ты знаешь, как обращаться с ее дарами?",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_9" }
        ]
    },
    gl1_choice2_9: {
        text: "Уважительно?",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_10" }
        ]
    },
    gl1_choice2_10: {
        text: "Да... Бери, но отдавай что-то взамен. Никогда не пользуйся благами земли сверх меры. Такого она не потерпит. Как зашумит земля, как польется лава! Нрав огня неукротим… Раз – и!?",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_11" }
        ]
    },
    gl1_choice2_11: {
        text: "Мама защекотала Лейлу. Девочка, хохоча, заболтала в воздухе худыми ножками.",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [],
        audio: "assets\images\SOUNDS\child_laugh.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_choice2_12" }
        ]
    },
    gl1_choice2_12: {
        text: "Как вспылит!",
        background: "assets\images\backgrounds\roomnightrain.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/mom_leila.PNG", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "dis13" }
        ]
    },
    dis13: {
        text: "И, однажды, Пеле вспылила.\nНочью после Макахики, когда Лейла искала маму на священной земле.",
        background: "assets\images\backgrounds\cutscenes\DISSTORY.mp4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gdis14" }
        ]
    },
    dis14: {
        text: "Под ногами рассекали землю трещины. Казалось, сам остров выл от боли.",
        background: "assets\images\backgrounds\cutscenes\gl1_7.MP4",
        characters: [],
        audio: "assets\images\SOUNDS\earth_crack.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis15" }
        ]
    },
    dis15: {
        text: "Сквозь грохот, срывая горло, Лейлу звал друг:",
        background: "assets\images\backgrounds\cutscenes\gl1_7.MP4",
        characters: [],
        audio: "assets\images\SOUNDS\echo.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis16" }
        ]
    },
    // Сцены с Хани
    dis16: {
        text: "«Лейла!»",
        background: "assets\images\backgrounds\black.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" },
        ],
        audio: "assets/audio/bird_flapping.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis17" }
        ]
    },
    dis17: {
        text: "Лейла сжимала мамин браслет. Над головой били крыльями напуганные птицы. Словно воцарился Коре. Коре - хаос.",
        background: "assets\images\backgrounds\cutscenes\gl1_9.MP4",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leilanni.png", position: "center" }
        ],
        audio: "assets/audio/bird_flapping.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis18" }
        ]
    },
    dis18: {
        text: "За одну ночь на Ниихау вырос новый вулкан.   ПОДСКАЗКА: Ниихау – самый маленький обитаемый остров Гавайского архипелага. Был закрыт для туризма с 1864 года.",
        background: "assets\images\backgrounds\cutscenes\gl1_10.MP4",
        characters: [],
        audio: "assets/audio/volcano_grow.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis19" }
        ]
    },
    dis19: {
        text: "Деревня была наполовину разрушена. Многие пострадали. Кто-то умер. Кто-то пропал.",
        background: "assets\images\backgrounds\cutscenes\gl1_11.mp4",
        characters: [],
        audio: "assets/audio/quiet_aftermath.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis20" }
        ]
    },
    dis20: {
        text: "На много лун над островом нависла тень вулканической богини. Поисковые группы прочесывали местность, но маму Лейла так и не нашла.",
        background: "assets/images/backgrounds/volcano_cloud.jpg",
        characters: [],
        audio: "assets/audio/white_noise.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis21" }
        ]
    },
    dis21: {
        text: "Островитяне стали ревностно молиться Пеле. Возвели храм в её честь. И вулкан, убаюканный молитвами, уснул.",
        background: "assets/images/backgrounds/pele_shrine.jpg",
        characters: [],
        audio: "assets/audio/prayers.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis22" }
        ]
    },
    dis22: {
        text: "Жизнь продолжилась. Только каждый год, перед Макахики, Лейла вспоминала. Тревога поселилась в её теле.",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "dis23" }
        ]
    },
    dis23: {
        text: "Биение сердца – словно подземные толчки. Гул в ушах – словно вулканический рёв. Жгучая боль на щеках не утихала. Кровь казалась раскалённой лавой.",
        background: "assets\images\backgrounds\cutscenes\gl1_15.MP4",
        characters: [],
        audio: "assets/audio/heartbeat.mp3",
        choices: [
            { text: "Дальше", nextScene: "dis24" }
        ]
    },
    dis24: {
        text: "Она все еще слышала крик: «ЛЕЙЛА!» ",
        background: "assets/images/backgrounds/white_screen.jpg",
        characters: [],
        audio: "assets/audio/scream.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_17" }
        ]
    },
    // Современная локация
    gl1_17: {
        text: "Лейла!",
        background: "assets/images/backgrounds/room_morning.png",
        characters: [],
        audio: "assets\images\SOUNDS\music\main_theme.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_18" }
        ]
    },
    gl1_18: {
        text: "Лейла вскочила на кровати. Уведомление: Пууваи, 15 ноября, 2008 год. 08:00",
        background: "assets/images/backgrounds/room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_19" }
        ]
    },
    gl1_19: {
        text: "Тут же в голову ударила резкая боль: последняя рюмка настойки была лишней.\nПридя в себя, Лейла услышала: об окно бились камушки.",
        background: "assets/images/backgrounds/room_morning.png",
        characters: [ ],
        audio: "assets\images\SOUNDS\rock_window.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_20" }
        ]
    },
    gl1_20: {
        text: "С улицы донеслось нетерпеливое: «Просыпайся!»",
        background: "assets/images/backgrounds/room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_21" }
        ]
    },
    gl1_21: {
        text: "Hauna.",
        background: "assets/images/backgrounds/room_morning.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_22" }
        ]
    },
    gl1_22: {
        text: "Лейла сползла с кровати подошла к окну.\nВнизу из стороны в сторону, озираясь по сторонам, сновал Хани.", 
        background: "assets/images/backgrounds/room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_23" }
        ]
    },
    gl1_23: {
        text: "Что это с ним?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_24" }
        ]
    },
    gl1_24: {
        text: "Солнце было еще низко.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_25" }
        ]
    },
    gl1_25: {
        text: "Разбудил в такую рань!? Как сам умудрился проснуться после такой попойки…",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_26" }
        ]
    },
    gl1_26: {
        text: "Голова гудела. Ныло правое запястье. Еще вчера на нем висел браслет. Мамин. Сейчас здесь красовался синяк.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_27" }
        ]
    },
    gl1_27: {
        text: "Оставила мамин браслет у Хани?... И как я попала домой?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_28" }
        ]
    },
    gl1_28: {
        text: "Вашей героине предстоит сделать первый выбор, определяющий ее путь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_29" }
        ]
    },
    gl1_29: {
        text: "Героиня, следующая Пути Цветка, пылкая и яркая, ей нравится быть в центре внимания. Она действует спонтанно, принимает неожиданные решения, стремится исследовать мир далеко за пределами дома. Ее значимость определяется личностными качествами.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_30" }
        ]
    },
    gl1_30: {
        text: "Героиня по Пути Ракушки поступает взвешенно, с оглядкой на свою семью. Она чтит традиции рода. Героиня знает: в ее сердце спрятана жемчужина, и, если раскрываться каждому встречному, рано или поздно сокровенное отнимут. Ее значимость определяется знатным происхождением.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice3" }
        ]
    },
    gl1_choice3: {
        text: "",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Привести себя в порядок после сна.", nextScene: "choicegl1_3_1" },
            { text: "Прочитать мамину записку.", nextScene: "choicegl1_3_2" }
        ]
    },
    choicegl1_3_1: {
        text: "Волосы были растрепаны, кожа раскраснелась, словно обожженная полуденным солнцем.\nБольше всего горели шрамы, пробегавшие тонкой полоской по щекам.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_2" }
        ]
    },
    choicegl1_3_1_2: {
        text: "Почти минуло десять лет с той ночи.\nТогда Лейла почти не плакала: по утрам она обыскивала леса, а по вечерам - восстанавливала семейное кафе.\nТеперь девушка вспоминала о своей боли, только глядя в зеркало на ожоги, так похожие на две дорожки невыплаканных слез.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_3" }
        ]
    },
    choicegl1_3_1_3: {
        text: "Горечь утраты не прошла: только сжималась внутри под натиском времени.\nЗакаляла.\nКак и мама, Лейла с поднятой головой встречала любые невзгоды.Всегда повторяла про себя слова с записки, оставленной мамой перед исчезновением, а теперь украшавшей зеркало.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "note1" }
        ]
    },
    note1: {
        text: "“A smooth sea never made a skilled sailor”.\n“В спокойном море не стать хорошим моряком”.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_4" }
        ]
    },
    choicegl1_3_1_4: {
        text: "Написано было по-английски. Язык, который на Ниихау понимали только они: мать и дочь.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_5" }
        ]
    },
    choicegl1_3_1_5: {
        text: "В окно снова прилетел камень.",
        text: "Лейла, торопясь, расчесала вьющиеся волосы…",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        audio: "assets\images\SOUNDS\hair_comb.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_31" }
        ]
    },
    choicegl1_3_2: {
        text: "Пока бабушка Лейлы не пускала хоуле и на порог семейного кафе, ее мама с открытым сердцем слушала рассказы о Большой Земле.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_1" }
        ]
    },
    choicegl1_3_2_1: {
        text: "От нее Лейла научилась говорить и читать на английском языке.\nКаждый день, перед тем, как куда-то уйти, Ноелани оставляла для дочки под рамой зеркала записку.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_2" }
        ]
    },
    choicegl1_3_2_2: {
        text: "“Она так редко бывала дома.”",
        background: "assets\images\backgrounds\mirror.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_3" }
        ]
    },
    choicegl1_3_2_3: {
        text: "Ровным почерком по-английски было выведено:\n“A smooth sea never made a skilled sailor”\n“В спокойном море не стать хорошим моряком”",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_4" }
        ]
    },
    choicegl1_3_2_4: {
        text: "Чернила почти выцвели. Как давно это было…",
        background: "assets\images\backgrounds\mirror.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_5" }
        ]
    },
    choicegl1_3_2_5: {
        text: "“Почти десять лет назад.”",
        background: "assets\images\backgrounds\mirror.png",
        characters:[
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_6" }
        ]
    },
    choicegl1_3_2_6: {
        text: "От этой мысли зажгло кончики ушей.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_7" }
        ]
    },
    choicegl1_3_2_7: {
        text: "Натянутая улыбка собственному отражению: растрепанные волосы, раскрасневшиеся щеки, рассеченные тонкими шрамами от ожогов.\nИ тут же испуг в глазах: в окно снова ударился камень.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_8" }
        ]
    },
    gl1_31: {
        text: "Лейла подскочила к окну, открыла створку – и в нее чуть было не влетело что-то тяжелое.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\rock_fell.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_32" }
        ]
    },
    gl1_32: {
        text: "Успела увернуться, перевесилась через подоконник и крикнула:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\chicks.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_33" }
        ]
    },
    gl1_33: {
        text: "И тебе доброе... утро...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        audio: "assets\images\SOUNDS\children_play.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_34" }
        ]
    },
    gl1_34: {
        text: "Хани под окнами уже не было. На крик обернулись дети, катающие по площади булыжник, и засмеялись. Лейла закатила глаза и наклонилась поднять упавший на пол камень.\nЗамахнулась выбросить его на улицу – и…",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4" }
        ]
    },
    choicegl1_4: {
        text: "...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Попала прямо в глаз Хани.", nextScene: "choicegl1_4_1" },
            { text: "Чуть не попала прямо в Хани.", nextScene: "choicegl1_4_2" }
        ]
    },
    choicegl1_4_1: {
        text: "В окне из ниоткуда появилось довольное лицо. Лейла не успела среагировать: камень уже летел...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_1" }
        ]
    },
    choicegl1_4_1_1: {
        text: "«Ай!»",
        background: "assets\images\backgrounds\room_window.png",
        characters:[
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        audio: "assets\images\SOUNDS\ouch.mp3",
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_2" }
        ]
    },
    choicegl1_4_1_2: {
        text: "От неожиданности Хани разомкнул хватку, полетел вниз — Лейла, немедля, подскочила к нему, хватая за предплечье.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_3" }
        ]
    },
    choicegl1_4_1_3: {
        text: "Другой рукой он успел схватить ветку растущего рядом дерева, по которому и вскарабкался.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_4" }
        ]
    },
    choicegl1_4_1_4: {
        text: "Какого хрена, Лейла?!",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_5" }
        ]
    },
    choicegl1_4_1_5: {
        text: "Я что, знала, что ты лезешь? Забирайся, тяжелый, как тюлень...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_6" }
        ]
    },
    choicegl1_4_1_6: {
        text: "Это мышцы! И годы тренировок.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_7" }
        ]
    },
    choicegl1_4_1_7: {
        text: "Вместо того, чтобы запрыгнуть в окно, Хани, красуясь, начал подтягиваться на ветке.\nТа жалобно заскрипела.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_35bruise" }
        ]
    },
    choicegl1_4_2: {
        text: "Довольное лицо появилось прямо перед Лейлой.\nОна успела только ойкнуть: камень уже летел, но друг вовремя уклонился.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_2" }
        ]
    },
    choicegl1_4_2_2: {
        text: "Хани проводил снаряд взглядом, присвистнув.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        audio: "assets\images\SOUNDS\whistle.mp3",
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_3" }
        ]
    },
    choicegl1_4_2_3: {
        text: "Не ожидал, Лейла...»",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_4" }
        ]
    },
    choicegl1_4_2_4: {
        text: "Прости! Это я не ожидала, что ты так быстро залезешь.",
        background: "assets\images\backgrounds\room_window.png",
        characters:[
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_5" }
        ]
    },
    choicegl1_4_2_5: {
        text: "А что тут лезть?\nВ доказательство своих слов, Хани, ловко переставляя руки, взобрался еще выше.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_6" }
        ]
    },
    choicegl1_4_2_6: {
        text: "Я бы спилил эту ветку, так ведь любой дурак в окно влезть может.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_7" }
        ]
    },
    choicegl1_4_2_7: {
        text: "Я пока что вижу только одного.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_8" }
        ]
    },
    choicegl1_4_2_8: {
        text: "Хани завертел головой по сторонам.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_9" }
        ]
    },
    choicegl1_4_2_9: {
        text: "Где?",
        background: "assets\images\backgrounds\room_window.png",
        characters:[
            { name: "Хани", image: "assets\images\characters\Hani0.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_35" }
        ]
    },
    gl1_35: {
        text: "ХАНИ!!!",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_36" }
        ]
    },
    gl1_36: {
        text: "От громогласного мужского баса с деревьев вспорхнули в воздух птицы.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\wings.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_37" }
        ]
    },
    gl1_37: {
        text: "Сторонись!\nРаскачавшись в воздухе ногами, Хани с грохотом влетел в окно.",
        background: "assets\images\backgrounds\room_window.png",
        characters:[
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        audio: "assets\images\SOUNDS\falling.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_38" }
        ]
    },
    gl1_38: {
        text: "Прокатился по полу кубарем до самой кровати.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_39" }
        ]
    },
    gl1_39: {
        text: "Кто это? ",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_40" }
        ]
    },
    gl1_40: {
        text: "Ответа не последовало: Хани, приложив палец к губам, подполз к окну.\nНе осмелившись высунуться до конца, выглянул на улицу.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_41" }
        ]
    },
    gl1_41: {
        text: "Короче, мне нельзя идти домой, я уволен и...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image:             { name: "assets\images\characters\Hani.PNG", position: "left" } }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_42" }
        ]
    },
    gl1_42: {
        text: "Вновь прогремело:\n ХАНИ!!!",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_43" }
        ]
    },
    gl1_43: {
        text: "И меня ищет мой бывший босс...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image:             { name: "assets\images\characters\Hani.PNG", position: "left" } }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_44" }
        ]
    },
    gl1_44: {
        text: "ЛЕЙЛАННИ?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_45" }
        ]
    },
    gl1_45: {
        text: "Локтем прикрыв кудрявую макушку друга, Лейла высунулась из окна и с напускной беззаботностью помахала Пилипо.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_46" }
        ]
    },
    gl1_46: {
        text: "Хани все это время обнимал Лейлу за ноги и шептал слова молитвы.\nРазобрать можно было только: “Не выдавай меня”.\nСжалившись, девушка шепнула себе под нос:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_47" }
        ]
    },
    gl1_47: {
        text: "Будешь должен.",
        background: "assets\images\backgrounds\room_window.png",
        characters:[
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_48" }
        ]
    },
    gl1_48: {
        text: "Пилипо, доброе утро! “Охиа” сегодня не принимает посетителей, сами понимаете – подготовка к празднику. ",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_49" }
        ]
    },
    gl1_49: {
        text: "Конечно, Лейланни, я по делу.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_50" }
        ]
    },
    gl1_50: {
        text: "Ищете Тутувахини?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_51" }
        ]
    },
    gl1_51: {
        text: "Нет, но… Как она себя чувствует?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_52" }
        ]
    },
    gl1_52: {
        text: "Как всегда. В хлопотах перед праздником.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_53" }
        ]
    },
    gl1_53: {
        text: "Слушай, Лейланни. Ты же дружишь с Хани? Не видела его?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_54" }
        ]
    },
    gl1_54: {
        text: "Лейла перевесилась через подоконник  и, вытянувшись, оглядела деревню.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\jungle_birds.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_55" }
        ]
    },
    gl1_55: {
        text: "Жизнь здесь текла спокойно: под переливы укулеле щебетали птицы, девочки плели цветочные ожерелья, мальчишки мерились силой.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets/images/SOUNDS/ukulele_short.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_56" }
        ]
    },
    gl1_56: {
        text: "Нет, не видать. Что-то ему передать?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_57" }
        ]
    },
    gl1_57: {
        text: "Да...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_58" }
        ]
    },
    gl1_58: {
        text: "Пилипо покрепче сжал бумеранг в кулаке и насупился, подбирая слова.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_59" }
        ]
    },
    gl1_59: {
        text: "Он уволен. Пусть зайдет за расплатой.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_60" }
        ]
    },
    gl1_60: {
        text: "Не расслышав последнее слово, Лейла уточнила:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_61" }
        ]
    },
    gl1_61: {
        text: "За оплатой?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_62" }
        ]
    },
    gl1_62: {
        text: "Пилипо неуверенно кивнул.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_63" }
        ]
    },
    gl1_63: {
        text: "Что ж, надеюсь, я найду его раньше. Счастливого Макахики тебе и бабушке! ПОДСКАЗКА: Макахики - гавайский праздник урожая.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_64" }
        ]
    },
    gl1_64: {
        text: "Проведите праздник...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "С семьей!", nextScene: "choicegl1_5" },
            { text: "С удовольствием!", nextScene: "choicegl1_5" }
        ]
    },
          
    choicegl1_5: {
        text: "Спасибо, Лейланни.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "l1_66" }
        ]
    },
    gl1_66: {
        text: "Проследив за Пилипо взглядом, Лейла обернулась к Хани:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\music\main_theme.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_67" }
        ]
    },
    gl1_67: {
        text: "Проработал пять дней. Уже уволен?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_68" }
        ]
    },
    gl1_68: {
        text: "Хани безразлично пожал плечами и приземлился на кровать, хватаясь за голову.\nЛейла, не дождавшись ответа, села рядом.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_69" }
        ]
    },
    gl1_69: {
        text: "Новый рекорд. ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani0.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_70" }
        ]
    },
    gl1_70: {
        text: "Тебе, вроде, нравилась эта работа? Что-то натворил?",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_71" }
        ]
    },
    gl1_71: {
        text: "Может быть.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name:             { name: "assets\images\characters\Hani.PNG", position: "left" } }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_72" }
        ]
    },
    gl1_72: {
        text: "Хани перевалился на другой бок и недовольно протянул:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_73" }
        ]
    },
    gl1_73: {
        text: "Бежал от него через всю деревню с больной головой.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_74" }
        ]
    },
    gl1_74: {
        text: "Тут, Лейла просияла:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_75" }
        ]
    },
    gl1_75: {
        text: "Неужели это после вчерашнего? Я помню, ты разговаривал с Кейлой…",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_76" }
        ]
    },
    gl1_76: {
        text: "Хани не отвечал: только растирал ноющие виски.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_77" }
        ]
    },
    // ХАНИ С СИНЯКОМ
    gl1_35bruise: {
        text: "ХАНИ!!!",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_36bruise" }
        ]
    },
    gl1_36bruise: {
        text: "От громогласного мужского баса с деревьев вспорхнули в воздух птицы.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\wings.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_37bruise" }
        ]
    },
    gl1_37bruise: {
        text: "Сторонись!",
        background: "assets\images\backgrounds\room_window.png",
        characters:[
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        audio: "assets\images\SOUNDS\falling.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_37bruisedop" }
        ]
    },
    gl1_37bruisedop: {
        text: "Раскачавшись в воздухе ногами, Хани с грохотом влетел в окно.",
        background: "assets\images\backgrounds\room_window.png",
        characters:[ ],
        audio: "assets\images\SOUNDS\falling.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_38bruise" }
        ]
    },
    gl1_38bruise: {
        text: "Прокатился по полу кубарем до самой кровати.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_39bruise" }
        ]
    },
    gl1_39bruise: {
        text: "Кто это? ",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_40bruise" }
        ]
    },
    gl1_40bruise: {
        text: "Ответа не последовало: Хани, приложив палец к губам, подполз к окну.\nНе осмелившись высунуться до конца, выглянул на улицу.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_41bruise" }
        ]
    },
    gl1_41bruise: {
        text: "Короче, мне нельзя идти домой, я уволен и...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_42bruise" }
        ]
    },
    gl1_42bruise: {
        text: "Вновь прогремело:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_42bruisedop" }
        ]
    },
    gl1_42bruisedop: {
        text: "ХАНИ!!!",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_43bruise" }
        ]
    },
    gl1_43bruise: {
        text: "И меня ищет мой бывший босс...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_44bruise" }
        ]
    },
    gl1_44bruise: {
        text: "ЛЕЙЛАННИ?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_45bruise" }
        ]
    },
    gl1_45bruise: {
        text: "Локтем прикрыв кудрявую макушку друга, Лейла высунулась из окна и с напускной беззаботностью помахала Пилипо.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_46bruise" }
        ]
    },
    gl1_46bruise: {
        text: "Хани все это время обнимал Лейлу за ноги и шептал слова молитвы.\nРазобрать можно было только: “Не выдавай меня”.\nСжалившись, девушка шепнула себе под нос:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_47bruise" }
        ]
    },
    gl1_47bruise: {
        text: "Будешь должен.",
        background: "assets\images\backgrounds\room_window.png",
        characters:[
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_48bruise" }
        ]
    },
    gl1_48bruise: {
        text: "Пилипо, доброе утро! “Охиа” сегодня не принимает посетителей, сами понимаете – подготовка к празднику. ",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_49bruise" }
        ]
    },
    gl1_49bruise: {
        text: "Конечно, Лейланни, я по делу.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_50bruise" }
        ]
    },
    gl1_50bruise: {
        text: "Ищете Тутувахини? ПОДСКАЗКА: Тутувахини - бабушка (гавайск.).",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_51bruise" }
        ]
    },
    gl1_51bruise: {
        text: "Нет, но... Как она себя чувствует?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_52bruise" }
        ]
    },
    gl1_52bruise: {
        text: "Как всегда. В хлопотах перед праздником.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_53bruise" }
        ]
    },
    gl1_53bruise: {
        text: "Слушай, Лейланни. Ты же дружишь с Хани? Не видела его?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_54bruise" }
        ]
    },
    gl1_54bruise: {
        text: "Лейла перевесилась через подоконник  и, вытянувшись, оглядела деревню.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\jungle_birds.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_55bruise" }
        ]
    },
    gl1_55bruise: {
        text: "Жизнь здесь текла спокойно: под переливы укулеле щебетали птицы, девочки плели цветочные ожерелья, мальчишки мерились силой.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets/images/SOUNDS/ukulele_short.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_56bruise" }
        ]
    },
    gl1_56bruise: {
        text: "Нет, не видать. Что-то ему передать?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_57bruise" }
        ]
    },
    gl1_57bruise: {
        text: "Да...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_58bruise" }
        ]
    },
    gl1_58bruise: {
        text: "Пилипо покрепче сжал бумеранг в кулаке и насупился, подбирая слова.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_59bruise" }
        ]
    },
    gl1_59bruise: {
        text: "Он уволен. Пусть зайдет за расплатой.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_60bruise" }
        ]
    },
    gl1_60bruise: {
        text: "Не расслышав последнее слово, Лейла уточнила:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_61bruise" }
        ]
    },
    gl1_61bruise: {
        text: "За оплатой?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_62bruise" }
        ]
    },
    gl1_62bruise: {
        text: "Пилипо неуверенно кивнул.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_63bruise" }
        ]
    },
    gl1_63bruise: {
        text: "Что ж, надеюсь, я найду его раньше. Счастливого Макахики тебе и бабушке! ПОДСКАЗКА: Макахики - гавайский праздник урожая.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_64bruise" }
        ]
    },
    gl1_64bruise: {
        text: "Проведите праздник...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "С семьей!", nextScene: "choicegl1_5bruise" },
            { text: "С удовольствием!", nextScene: "choicegl1_5bruise" }
        ]
    },
          
    choicegl1_5bruise: {
        text: "Спасибо, Лейланни.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [
            { name: "Пилипо", image: "assets\images\characters\pilipo.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "l1_66bruise" }
        ]
    },
    gl1_66bruise: {
        text: "Проследив за Пилипо взглядом, Лейла обернулась к Хани:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        audio: "assets\images\SOUNDS\music\main_theme.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_67bruise" }
        ]
    },
    gl1_67bruise: {
        text: "Проработал пять дней. Уже уволен?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_68bruise" }
        ]
    },
    gl1_68bruise: {
        text: "Хани безразлично пожал плечами и приземлился на кровать, хватаясь за голову.\nЛейла, не дождавшись ответа, села рядом.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_69bruise" }
        ]
    },
    gl1_69bruise: {
        text: "Новый рекорд. ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image: "assets\images\characters\Hani0.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_70bruise" }
        ]
    },
    gl1_70bruise: {
        text: "Тебе, вроде, нравилась эта работа? Что-то натворил?",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_71bruise" }
        ]
    },
    gl1_71bruise: {
        text: "Может быть.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_72bruise" }
        ]
    },
    gl1_72bruise: {
        text: "Хани перевалился на другой бок и недовольно протянул:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_73bruise" }
        ]
    },
    gl1_73bruise: {
        text: "Бежал от него через всю деревню с больной головой.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_74bruise" }
        ]
    },
    gl1_74bruise: {
        text: "Еще и ты… звезданула.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_74bruise_1" }
        ]
    },
    gl1_74bruise_1: {
        text: "Лейла виновато вздохнула.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_77bruise" }
        ]
    },
    gl1_75bruise: {
        text: "Неужели это после вчерашнего? Я помню, ты разговаривал с Кейлой…",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_76bruise" }
        ]
    },
    gl1_76bruise: {
        text: "Хани не отвечал: только растирал ноющие виски.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_77bruise" }
        ]
    },
    gl1_77bruise: {
        text: "Поверить не могу! Потерял работу, переспав с дочкой начальника?",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_78bruise" }
        ]
    },
    gl1_78bruise: {
        text: "Послышалось недовольное бурчание. Хани отвернулся к стене, точно прятал глаза.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_79bruise" }
        ]
    },
    gl1_79bruise: {
        text: "«Никакой ответственности...»",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "«Никак не укоренится.»", nextScene: "gl1_80bruise" },
            { text: "«Наслаждается свободой.»", nextScene: "gl1_81bruise" }
        ]
    },
    gl1_80bruise: {
        text: "«Дрейфует по жизни, как медуза.»",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_82bruise" }
        ]
    },
    gl1_81bruise: {
        text: "«Кажется, я ему завидую.»",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_83bruise" }
        ]
    },
    gl1_82bruise: {
        text: "«А мне - выручать...»",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_84bruise" }
        ]
    },
    gl1_83bruise: {
        text: "«Может, чему-то и стоит у него поучиться... Так и завять можно - сидеть, как я, на одном месте.»",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_84bruise" }
        ]
    },
    gl1_84bruise: {
        text: "Лейла кивнула головой в сторону двери.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_85bruise" }
        ]
    },
    gl1_85bruise: {
        text: "Ладно, пойдем на кухню. Обработаю твой глаз.",
        background: "assets\images\backgrounds\room_morning.png",
        characters:  [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_86bruise" }
        ]
    },
    gl1_86bruise: {
        text: "Стой, я забыл.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_87ruise_1" }
        ]
    },
    gl1_87bruise: {
        text: "Хани потянулся в задний карман шорт.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise" }
        ]
    },
    gl1_88bruise_flower: {
        text: "Цветок Охиа. Как раз под твой воинственный настрой.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower1" }
        ]
    },
    gl1_88bruise_flower2: {
        text: "Лейла с недоверием покосилась на друга.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower3" }
        ]
    },
    gl1_88bruise_flower3: {
        text: "Л: Сорвал с моего дерева?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower4" }
        ]
    },
    gl1_88bruise_flower4: {
        text: "Хани сыграл бровями. Промолчал.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower5" }
        ]
    },
    gl1_88bruise_flower5: {
        text: "Л(ИКИ): “Точно сорвал с моего дерева.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower6" }
        ]
    },
    gl1_88bruise_flower6: {
        text: "Л: Поставлю в вазу...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower7" }
        ]
    },
    gl1_88bruise_flower7: {
        text: "Х: Нет, это же для тебя. Увидел, подумал и сорвал. Подожди.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower8" }
        ]
    },
    gl1_88bruise_flower8: {
        text: "Лейла замерла, позволяя Хани заложить цветок за ухо.\nСмотрела на ноги.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower9" }
        ]
    },
    gl1_88bruise_flower9: {
        text: "Л(ИКИ): “Не смутилась же?...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower10" }
        ]
    },
    gl1_88bruise_flower10: {
        text: "Окружил медовый аромат.Хани тоже замер.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower11" }
        ]
    },
    gl1_88bruise_flower11: {
        text: "Л(ИКИ):”Смотрит на меня?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower12" }
        ]
    },
    gl1_88bruise_flower12: {
        text: "Подняла взгляд - ошиблась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower13" }
        ]
    },
    gl1_88bruise_flower13: {
        text: "Л(ИКИ): “Смотрит на себя. Конечно.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower14" }
        ]
    },
    gl1_88bruise_flower13: {
        text: "Хани разглядывал свой синяк в зеркало.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_flower14" }
        ]
    },
    gl1_88bruise_shell: {
        text: "Пока бежал, нашел ракушку... Похожа на тебя, а?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell1" }
        ]
    },
    gl1_88bruise_shell1: {
        text: "Лейла смутилась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell2" }
        ]
    },
    gl1_88bruise_shell2: {
        text: "Л: Чем же?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell3" }
        ]
    },
    gl1_88bruise_shell3: {
        text: "Ну... ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell4" }
        ]
    },
    gl1_88bruise_shell4: {
        text: "Подбирая слова, Хани повертел подарок в руках.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell5" }
        ]
    },
    gl1_88bruise_shell5: {
        text: "Сложная, как ты.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell6" }
        ]
    },
    gl1_88bruise_shell7: {
        text: "Л(ИКИ): “Сложная? Да я самая простая!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell8" }
        ]
    },
    gl1_88bruise_shell8: {
        text: "Л(ИКИ): “Он и разбираться не пробовал.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell9" }
        ]
    },
    gl1_88bruise_shell9: {
        text: "Такая же закрученная...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell10" }
        ]
    },
    gl1_88bruise_shell10: {
        text: "Лейла с обидой посмотрела на подарок.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell11" }
        ]
    },
    gl1_88bruise_shell11: {
        text: "Л: Оставь у зеркала.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell12" }
        ]
    },
    gl1_88bruise_shell12: {
        text: "Хани, задержав на подруге теплый взгляд, кивнул.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell13" }
        ]
    },
    gl1_88bruise_shell13: {
        text: "И вся эта сложность создает красоту. Ракушки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell14" }
        ]
    },
    gl1_88bruise_shell14: {
        text: "Лейла закатила глаза.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell15" }
        ]
    },
    gl1_88bruise_shell15: {
        text: "Л: Ты странный.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell16" }
        ]
    },
    gl1_88bruise_shell16: {
        text: "Ага, меня по голове ударили. Кто же это был?...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell17" }
        ]
    },
    gl1_88bruise_shell17: {
        text: "Л(ИКИ): “Ни о чем не жалею.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell18" }
        ]
    },
    gl1_88bruise_shell18: {
        text: "Хани, оставив ракушку на столе, посмотрел на свое отражение.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88bruise_shell19" }
        ]
    },
    gl1_88bruise: {
        text: "Ну у тебя и замах... Не хочешь поучаствовать в Макахики?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_89bruise" }
        ]
    },
    gl1_89bruise: {
        text: "Бедром толкая дверь комнаты, Лейла поманила Хани пальцем.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_90bruise" }
        ]
    },
    gl1_90bruise: {
        text: "",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Не до того. На мне кафе, помнишь?", nextScene: "gl1_choice5_1" },
            { text: "С радостью бы показала вам, мальчишки, как правильно работать мышцами. ", nextScene: "gl1_choice5_2" }
        ]
    },
    gl1_choice5_1: {
        text: "Ты занимаешься им с детства. Неужели нет желания попробовать что-то еще?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice5_1_1" }
        ]
    },
    gl1_choice5_1_1: {
        text: "Лейла, пожав плечами, отправилась на первый этаж.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice5_1_2" }
        ]
    },
    gl1_choice5_1_2: {
        text: "Л: Есть желания, а есть обязанности. К тому же, я люблю “Охиа”.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_91bruise" }
        ]
    },
    gl1_choice5_2: {
        text: "Но не смогу. Кто-то должен готовить еду, пока все будут развлекаться.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice5_2_1" }
        ]
    },
    gl1_choice5_2_1: {
        text: "Ты все можешь, стоит только захотеть.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice5_2_2" }
        ]
    },
    gl1_choice5_2_2: {
        text: "Л: Я знаю.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice5_2_3" }
        ]
    },
    gl1_choice5_2_3: {
        text: "Ловким движением Лейла запрыгнула на перила лестницы и съехала на первый этаж.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice5_2_4" }
        ]
    },
    gl1_choice5_2_4: {
        text: "К тому же...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_91bruise" }
        ]
    },
    gl1_91bruise: {
        text: "Нагнав Лейлу уже внизу, Хани предложил:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_92bruise" }
        ]
    },
    gl1_92bruise: {
        text: "К твоему счастью, я теперь абсолютно свободен. Давай я помогу тебе с кафе?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_93bruise" }
        ]
    },
    gl1_93bruise: {
        text: "Лейла недоверчиво покосилась на него.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_94bruise" }
        ]
    },
    gl1_94bruise: {
        text: "Л: С таким синяком? Распугаешь народ.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_95bruise" }
        ]
    },
    gl1_95bruise: {
        text: "Скорее ты распугаешь: твоих же рук дело. Калечишь сотрудников?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_96bruise" }
        ]
    },
    gl1_96bruise: {
        text: "Л: Ты не сотрудник, ты взломщик.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_97bruise" }
        ]
    },
    gl1_97bruise: {
        text: "С выражением страдания на лице Хани свалился на табурет, раскинув руки в стороны по столешнице.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_98bruise" }
        ]
    },
    gl1_98bruise: {
        text: "Лейла потянулась через него к верхней полке, звякнув ракушками завязанного на запястье браслета.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_99bruise" }
        ]
    },
    gl1_99bruise: {
        text: "Хани удивленно проследил за ней взглядом. Снизу вверх. Подумал было: ",
        background: "assets\images\backgrounds\room_morning.png" ,
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_100bruise" }
        ]
    },
    gl1_100bruise: {
        text: "“Какая она стала высокая…”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_101bruise" }
        ]
    },
    gl1_101bruise: {
        text: "Когда Лейла спустила аптечку и вопросительно посмотрела на него, Хани только улыбнулся.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_102bruise" }
        ]
    },
    gl1_102bruise: {
        text: "Возьми меня, Лейла. На работу. Я тебя с полуслова понимаю. И твое кафе мне как второй дом. Я усердный, способный...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_103bruise" }
        ]
    },
    gl1_103bruise: {
        text: "Ставя точку в споре, Лейла прижала к ссадинам на коже пропитанную обжигающим спиртом ткань:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_104bruise" }
        ]
    },
    gl1_104bruise: {
        text: "Л: Безответственный, самовлюбленный...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_105bruise" }
        ]
    },
    gl1_105bruise: {
        text: "Хани отстранился. Не это он хотел услышать от подруги детства.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_106bruise" }
        ]
    },
    gl1_106bruise: {
        text: "За это меня и любят.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_107bruise" }
        ]
    },
    gl1_107bruise: {
        text: "Лейла достала из холодильника мешок со льдом и, задумчиво склонив голову к плечу, приложила к глазу Хани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_108bruise" }
        ]
    },
    gl1_108bruise: {
        text: "Ауч!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_109bruise" }
        ]
    },
    gl1_109bruise: {
        text: "Л: Я тебя всему научу, а через четверть луны тебе захочется чего-то нового - и ты снова все бросишь. Спорим?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_110bruise" }
        ]
    },
    gl1_110bruise: {
        text: "Это был другой разговор. Хани хитро улыбнулся: ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_111bruise" }
        ]
    },
    gl1_111bruise: {
        text: "Х: Спорим. Две луны я продержусь - и ты будешь мне должна.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_112bruise" }
        ]
    },
    gl1_112bruise: {
        text: "Л: Должна что?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_113bruise" }
        ]
    },
    gl1_113bruise: {
        text: "Х: Желание.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_114bruise" }
        ]
    },
    gl1_nobruise: {
        text: "Л: Какое?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_1nobruise" }
        ]
    },
    gl1_1nobruise: {
        text: "Л: Вид у Пилипо был разъяренный.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_2nobruise" }
        ]
    },
    gl1_2nobruise: {
        text: "Не волнуйся за меня.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_3nobruise" }
        ]
    },
    gl1_3nobruise: {
        text: "Л: Я не волнуюсь, я предупреждаю...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_4nobruise" }
        ]
    },
    gl1_4nobruise: {
        text: "Ну, пока я умолял тебя открыть окно, ты прихорашивалась. Выходит, правда не волнуешься.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_5nobruise" }
        ]
    },
    gl1_5nobruise: {
        text: "Лейла вновь почувствовала жар на щеках: на этот раз от стыда. Избегая взгляда Хани, она уставилась в потолок.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_6nobruise" }
        ]
    },
    gl1_6nobruise: {
        text: "Да ладно, ей стыдно! Ну-ка, посмотри мне в глаза и признайся: “ты звал на помощь, а я слушала и наряжалась!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_7nobruise" }
        ]
    },
    gl1_7nobruise: {
        text: "Он подошел вплотную - чтобы точно поймать взгляд Лейлы.\nТа, рассмеявшись, продолжила игру: отвернулась и, виляя бедрами, улизнула к зеркалу."
        background: "assets\images\backgrounds\room_morning.png", 
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_8nobruise" }
        ]
    },
    gl1_8nobruise: {
        text: "Не отвлекай меня своей походкой от темы разговора, это вне правил.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_9nobruise" }
        ]
    },
    gl1_9nobruise: {
        text: "Хани протинул руку - толкнул зеркало, и взгляды друзей пересеклись в отражении.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_10nobruise" }
        ]
    },
    gl1_10nobruise: {
        text: "Л:  Вне правил - влезать в окна к девушкам.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_11nobruise" }
        ]
    },
    gl1_11nobruise: {
        text: "А ты не против?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_12nobruise" }
        ]
    },
    gl1_12nobruise: {
        text: "Л: Я не против.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_13nobruise" }
        ]
    },
    gl1_77: {
        text: "Тебе нужно отдохнуть. Праздники для всех, ты же в курсе?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_78" }
        ]
    },
    gl1_78: {
        text: "Лейла поежилась. От одного упоминания Макахики бросало в дрожь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_79" }
        ]
    },  
    gl1_79: {
        text: "О веселье не было и речи. Видимо, поэтому Лейла и переборщила вчера с кокосовой настойкой.Даже руки тряслись, пока она пыталась разбить кокос.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_80" }
        ]
    },
    gl1_80: {
        text: "Понял, будешь работать. Может, хоть помощь примешь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_81" }
        ]
    },
    gl1_81: {
        text: "Хани аккуратно забрал из ее рук нож и кокос.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_82" }
        ]
    },
    gl1_82: {
        text: "Л: Помощь? Какую?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_83" }
        ]
    },
    gl1_83: {
        text: "Меня уволили, нужна новая работа. А ты устала справляться одна.Тебе не кажется, меня должны были уволить, чтобы перед Макахики я волею богов оказался в твоем распоряжении... босс?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_84" }
        ]
    },
    gl1_84: {
        text: "С этими словами Хани протянул Лейле кокос с трубочкой, украшенный цветком. Той хватило пары глотков, чтобы прийти в себя.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_85" }
        ]
    },
    gl1_85: {
        text: "Л: Нет.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_86" }
        ]
    },
    gl1_86: {
        text: "Ты даже не задумалась!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_87" }
        ]
    },
    gl1_87: {
        text: "Л: О чем тут думать?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_88" }
        ]
    },
    gl1_88: {
        text: "О том, как нам с тобой будет легко работать вдвоем...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_89" }
        ]
    },
    gl1_89: {
        text: "Л: Вдвоем с целой кучей проблем, которые хвостом за тобой вьются.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_90" }
        ]
    },
    gl1_90: {
        text: "Хани поглядел по сторонам:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_91" }
        ]
    },
    gl1_91: {
        text: "Где? Я проблем не вижу. Лейла, мы же лучшие друзья.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_92" }
        ]
    },
    gl1_92: {
        text: "Л: Вот именно. И я много раз видела, как ты менял работу за работой сразу, как только начинал скучать.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_93" }
        ]
    },
    gl1_93: {
        text: "Будем работать вместе - скучно не будет.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_94" }
        ]
    },
    gl1_94: {
        text: "Л: Да тебя и на треть луны не хватит!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_95" }
        ]
    },
    gl1_95: {
        text: "Да ну? Я продержусь две полные луны. И ты будешь мне должна.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_96" }
        ]
    },
    gl1_96: {
        text: "Л: Должна что?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_97" }
        ]
    },
    gl1_97: {
        text: "Желание.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_98" }
        ]
    },
    gl1_98: {
        text: "Лейла рассмеялась. Уверенная в своей победе, согласилась:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_99" }
        ]
    },
    gl1_99: {
        text: "Л: Хорошо.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_100" }
        ]
    },
    gl1_100: {
        text: "Хани протянул Лейле правую руку с вытянутыми мизинцем и большим пальцем.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_101" }
        ]
    },
    gl1_101: {
        text: "Та протянула свою в ответ. Сцепившись за мизинцы, они коснулись друг к друга лбами.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_102" }
        ]
    },
    gl1_102: {
        text: "Так, стоя вплотную друг к другу, заглядывая в такие знакомые лица, дыша одним воздухом, друзья разбили спор: хлопнули друг друга в ладони.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_103" }
        ]
    },
    gl1_103: {
        text: "Л: Уйдешь раньше, чем закончится вторая Луна, будешь должен мне.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_104" }
        ]
    },
    gl1_104: {
        text: "Должен что?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Бабушка", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_105" }
        ]
    },
    gl1_105: {
        text: "На кухне появилась тутувахини Окелани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_106" }
        ]
    },
    gl1_106: {
        text: "Лейла тут же, как ошпаренная, отскочила от Хани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_107" }
        ]
    },
    gl1_107: {
        text: "Хани усмехнулся: в присутствии бабушки Лейла менялась. А он, кто бы рядом ни находился, оставался верен себе.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_108" }
        ]
    },
    gl1_108: {
        text: "Окелани, доброе утро! Отлично выглядите.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_114bruise" }
        ]
    },
    gl1_114bruise: {
        text: "А с тобой что приключилось?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_115bruise" }
        ]
    },
    gl1_115bruise: {
        text: "Х: А, это... спросите у своей внучки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_116bruise" }
        ]
    },
    gl1_116bruise: {
        text: "Лейла? Ты, наконец, поставила подхалима на место?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_117bruise" }
        ]
    },
    gl1_117bruise: {
        text: "Лейла поджала губы.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_118bruise" }
        ]
    },
    gl1_118bruise: {
        text: "Л: Ничего особенного. Несчастный случай.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_119bruise" }
        ]
    },
    gl1_119bruise: {
        text: "Х: Вот так, Окелани, проходите вместе огонь и воду, а потом - “ничего особенного”...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_120bruise" }
        ]
    },
    gl1_120bruise: {
        text: "Все верно",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_121bruise" }
        ]
    },
    gl1_121bruise: {
        text: "Бабушка подождала, пока молодежь расступится, и приступила к готовке: достала из холодильника рыбу и вонзила в нее разделочный нож.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_122bruise" }
        ]
    },
    gl1_122bruise: {
        text: "Все “особенное” заканчивается плохо. Смиренная жизнь без страстей - и страдания не найдут, как к тебе подступиться. Да, Лейла?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_123bruise" }
        ]
    },
    gl1_123bruise: {
        text: "Лейла...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Согласилась.", nextScene: "gl1_123shell" },
            { text: "Протестовала.", nextScene: "gl1_123flower" }
        ]
    },
    gl1_123shell: {
        text: "Л: Приключения - для мятежных духом. Кто нашел покой, не ищет проблем.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123shell" }
        ]
    },
    gl1_123shell1: {
        text: "Хани едва ли смог сдержать улыбку. Наклонившись к уху подруги, он шепнул:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123shell2" }
        ]
    },
    gl1_123shell2: {
        text: "Уверена, что нашла покой?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_123shell3" }
        ]
    },
    gl1_123shell3: {
        text: "Лейла отвернулась от Хани - и тут же поймала на себе прожигающий взгляд тутувахини.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123shell4" }
        ]
    },
    gl1_123shell4: {
        text: "Л: Хани хотел сказать, что...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123shell5" }
        ]
    },
    gl1_123flower: {
        text: "Л: Какая жизнь без страданий и без удовольствий?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123flower1" }
        ]
    },
    gl1_123flower1: {
        text: "Долгая.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_123flower2" }
        ]
    },
    gl1_123flower2: {
        text: "Было видно: настроение Окелани было испорчено одним-единственным вопросом.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123flower3" }
        ]
    },
    gl1_123flower3: {
        text: "Хани решил спасти ситуацию: перевести тему.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123flower4" }
        ]
    },
    gl1_123flower4: {
        text: "Совсем забыли вам сказать.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_124" }
        ]
    },
    gl1_124bruise: {
        text: "Перед Вами новый сотрудник кафе “Охиа”.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_125bruise" }
        ]
    },
    gl1_125bruise: {
        text: "Неужели?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_126bruise" }
        ]
    },
    gl1_126bruise: {
        text: "Окелани искренне улыбнулась - это бывало редко. Хани был польщен: расправил плечи, выпятил грудь, довольный радушному приему.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_127bruise" }
        ]
    },
    gl1_127bruise: {
        text: "Но он ошибся: блеск в глазах тутувахини был вовсе не счастьем.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_128bruise" }
        ]
    },
    gl1_128bruise: {
        text: "Ты? Работать?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_129bruise" }
        ]
    },
    gl1_129bruise: {
        text: "Окелани рассмеялась - звук более редкий, чем щебет вымирающих птиц.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_130bruise" }
        ]
    },
    gl1_130bruise: {
        text: "Хани растерянно посмотрел на Лейлу. Та одними губами ему прошептала: “Ну!” и спрятала взгляд в книге рецептов.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_131bruise" }
        ]
    },
    gl1_131bruise: {
        text: "Л(ИКИ): “Делай вид, что читаешь, и тебя не приплетут...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_132bruise" }
        ]
    },
    gl1_132bruise: {
        text: "Ну... Да. Я завидный работник, вы знаете. Окелани вновь посмеялась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_133bruise" }
        ]
    },
    gl1_133bruise: {
        text: "Лейла, не отрываясь от книги, прошептала: “Не смей!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_134bruise" }
        ]
    },
    gl1_109: {
        text: "Работник... раз ты тут будешь работать, не теряй времени. Иди, помоги Лейле забрать у Макана свежий улов.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_110" }
        ]
    },
    gl1_110: {
        text: "Лейла удивленно оторвалась от книги.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_111" }
        ]
    },
    gl1_111: {
        text: "Эта рыба из морозильной камеры... безвкусная гадость.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_134bruise" }
        ]
    },
    gl1_134bruise: {
        text: "Такую только к твоему фингалу прикладывать.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Окелани", image:"assets\images\characters\okelani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_135bruise" }
        ]
    },
    gl1_135bruise: {
        text: "Х:...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_112" }
        ]
    },
    gl1_112: {
        text: "Хани поклонился Окелани, плавным движением забрал из рук Лейлы книгу и направился к лестнице.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_113" }
        ]
    },
    gl1_113: {
        text: "Л: Отдай!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_114" }
        ]
    },
    gl1_114: {
        text: "Да ладно, какие там еще секреты от меня? Раз работаю в “Охиа”, мне и рецепты знать положено...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_115" }
        ]
    },
    gl1_115: {
        text: "Подняв раскрытую книгу к потолку, Хани принялся изучать витиеватые записи.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_116" }
        ]
    },
    gl1_116: {
        text: "Лейла предприняла несколько попыток дотянуться до его руки: тщетно. Пихнула друга бедром и поникла.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_117" }
        ]
    },
    gl1_117: {
        text: "Л: Мы почти не готовим по маминым рецептам.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_118" }
        ]
    },
    gl1_118: {
        text: "Хани тут же вытянулся в струнку. Уважительно закрыл книгу и вложил Лейле в руки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_119" }
        ]
    },
    gl1_119: {
        text: "Дай угадаю... Окелани?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_120" }
        ]
    },
    gl1_120: {
        text: "Л: Окелани. Не хочет, чтоб мы “тратили время” на выдумки мамы.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_121" }
        ]
    },
    gl1_121: {
        text: "А ты что?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_122" }
        ]
    },
    gl1_122: {
        text: "Лейла промолчала.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_123" }
        ]
    },
    gl1_123: {
        text: "Ты чего хочешь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_124" }
        ]
    },
    gl1_124: {
        text: "Л: Ниче...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_125" }
        ]
    },
    gl1_125: {
        text: "Земля ушла из-под ног: Хани, одной рукой обхватив девичью талию, повалил ее на плечо и занес в комнату.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_126" }
        ]
    },
    gl1_126: {
        text: "Что?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_127" }
        ]
    },
    gl1_127: {
        text: "Л: Пусти!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_128" }
        ]
    },
    gl1_128: {
        text: "Повалил на кровать. Плюхнулся рядом.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_129" }
        ]
    },
    gl1_129: {
        text: "У Лейлы закружилась голова. В висках стучало.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_130" }
        ]
    },
    gl1_130: {
        text: "Л(ИКИ): “Точно… не нужно было столько пить.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_131" }
        ]
    },
    gl1_131: {
        text: "Я серьезно, времени - море, почему не попробовать?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_132" }
        ]
    },
    gl1_132: {
        text: "Л: Я бы рада, но... половины рецептов не понимаю. В жизни не видела таких растений, как рисует мама. Какие-то синие семена, розовые водоросли... Туту говорит, она общалась с хоуле. Может, рецепты с Большой земли.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_133" }
        ]
    },
    gl1_133: {
        text: "Хани пробежался взглядом по записям. Не узнав в рисунках знакомых растений, виновато посмотрел на Лейлу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_134" }
        ]
    },
    gl1_134: {
        text: "Ладно... плохая была идея.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_135" }
        ]
    },   
    gl1_135: {
        text: "Он поднялся с кровати. Солнце уже разгоралось.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_136" }
        ]
    },
    gl1_136: {
        text: "Работа не ждет! А я жду. Собирайся, это будет лучший Макахики на твоей памяти.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_137" }
        ]
    },
    gl1_137: {
        text: "Дверь за ним захлопнулась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_138" }
        ]
    },
    gl1_138: {
        text: "Л(ИКИ): “Лучший среди худших.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_139" }
        ]
    },
    gl1_139: {
        text: "Еще несколько мгновений Лейла лежала, рассматривая рисунки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_140" }
        ]
    },
    gl1_140: {
        text: "На пожелтевших страницах дневника выведены тонкие, почти трепетные рисунки — листья, стебли, плоды. Под каждым рисунком — аккуратные пометки. Лейла провела пальцем по страницам и тяжело вздохнула. Спустя годы она вновь увидела эти записи. Воспоминания нахлынули, как волна, накрывающая берег.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_141" }
        ]
    },
    gl1_141: {
        text: "Л(ИКИ): “Ладно. Пора идти.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_142" }
        ]
    },
    gl1_142: {
        text: "Пока Лейла одевалась, Хани бормотал под дверью:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_143" }
        ]
    },
    gl1_143: {
        text: "По главной улице идти нельзя, там можно столкнуться с Пилипо... Лейла, вернемся через дикий пляж? Мне лучше не ходить одними и теми же путями дважды. И эти патрули Коа... Мало того, не дают спокойно гулять по ночам, так и днем зачастили.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_144" }
        ]
    },
    gl1_144: {
        text: "Лейла вышла из комнаты. Хани, не дождавшись ее, уже спустился по лестнице и ждал у двери.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_145" }
        ]
    },
    gl1_145: {
        text: "Лейла слушала друга, мысленно жалея, что приняла его на работу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_146" }
        ]
    },
    gl1_146: {
        text: "С другой стороны...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Хани был ей очень дорог.", nextScene: "gl1_146shell" },
            { text: "Хани вносил разнообразие в ее жизнь.", nextScene: "gl1_146flower" }
        ]
    },
    gl1_146shell: {
        text: "Они были знакомы с детства - росли плечом к плечу, попадали в передряги, не раз приходили друг другу на помощь. С Хани Лейла чувствовала себя, как дома.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_147" }
        ]
    },
    gl1_146flower: {
        text: "Хани любил пробовать новое, смотрел на мир просто и умел по-настоящему радоваться жизни - он всегда вытаскивал Лейлу с нудной работы. С ним она по-настоящему отдыхала.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_147" }
        ]
    },
    gl1_147: {
        text: "Л: Ну, что, пойдем?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_148" }
        ]
    },
    gl1_148: {
        text: "Лейла показалась в дверном проеме.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_149" }
        ]
    },
    gl1_149: {
        text: "Хани поднялся со ступенек и укоризненно посмотрел на Лейлу:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_150" }
        ]
    },
    gl1_150: {
        text: "Мне нужно пройти незамеченным, а ты... заметная.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_151" }
        ]
    },
    gl1_151bruise: {
        text: "ЛЛ: Ну, пока две луны не пройдет, я диктую правила. И в моих же интересах, чтобы тебе поскорее надоело работать со мной.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_152bruise" }
        ]
    },
    gl1_152bruise: {
        text: "Х: Играешь грязно. Мне нравится.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_153bruise" }
        ]
    },
    gl1_153bruise: {
        text: "Лейла, подмигнув, побежала вниз по лестнице, за руку увлекая Хани следом. На ходу бросила:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_154bruise" }
        ]
    },
    gl1_154bruise: {
        text: "Л: К тому же, все внимание от меня все равно будет перетягивать на себя двухметровый парень с воспаленным фингалом.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_155bruise" }
        ]
    },
    gl1_155: {
        text: "По улице они передвигались с опаской - держались близ деревьев, заглядывали за каждый угол и сдерживали хохот, чтобы не привлекать внимание.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_156" }
        ]
    },
    gl1_156: {
        text: "Правда, выходило наоборот.\nВслед парочке смотрел каждый - таким громким был их шепот.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_157" }
        ]
    },
    gl1_157: {
        text: "Л: Тише! Куда ты?.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_158" }
        ]
    },
    gl1_158: {
        text: "Кончай шептать! Это подозрительно!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_159" }
        ]
    },
    gl1_159: {
        text: "Л: А прятать голову в ведре - не подозрительно?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_160" }
        ]
    },
    gl1_160: {
        text: "Хани высунулся из укрытия:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_161" }
        ]
    },
    gl1_161: {
        text: "Это предусмотрительно-о, черт!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_162" }
        ]
    },
    gl1_162: {
        text: "Ведра попадали на землю. Боком Хани вытолкал Лейлу за угол - та даже не успела понять, что стряслось.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_163" }
        ]
    },
    gl1_163: {
        text: "Вдвоем они скрылись в тени кроны раскидистого дерева - Хани зажал ладонью Лейле рот, так, что та едва могла вдохнуть.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_164" }
        ]
    },
    gl1_164: {
        text: "Лейла...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Укусила Хани за палец", nextScene: "gl1_165choice1" },
            { text: "Ударила Хани локтем в живот", nextScene: "gl1_165choice2" },
            { text: "Ждала", nextScene: "gl1_165choice3" }
        ]
    },
    gl1_165choice1: {
        text: "Хани сжал челюсти: заскрипели зубы. Но хватку он не расцепил, только прижал девушку ближе к себе за талию, пряча ее от пробивающихся через листву солнечных лучей.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_1" }
        ]
    },
    gl1_165choice1_1: {
        text: "Под крепкой хваткой по телу Лейлы  пробежали мурашки. Кажется, снова загорели на щеках шрамы.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_2" }
        ]
    },
    gl1_165choice1_2: {
        text: "Хани едва слышно прошептал:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_3" }
        ]
    },
    gl1_165choice1_3: {
        text: "Тише.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_4" }
        ]
    },
    gl1_165choice1_4: {
        text: "Вскоре послышались тяжелые шаги и лязг металла.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_5" }
        ]
    },
    gl1_165choice1_5: {
        text: "Л: “Воины Коа...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_6" }
        ]
    },
    gl1_165choice1_6: {
        text: "О них ходило много слухов. Они служили стражами священных земель.Личная охрана Вождя и Кахуны-Нуи Калео.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_7" }
        ]
    },
    gl1_165choice1_7: {
        text: "В последнее время они все чаще стали появляться в деревне. Комендантский час, установленный военными и Али-Нуи, требовал контроля.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_8" }
        ]
    },
    gl1_165choice1_8: {
        text: "Говорили, ничто не может скрыться от зоркого взора Коа.И все же...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_9" }
        ]
    },
    gl1_165choice1_9: {
        text: "Заросли акаций скрыли Хани, Лейлу и послужили прикрытием для встречи двух групп воинов. Они остановились всего в паре метров.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_10" }
        ]
    },
    gl1_165choice1_10: {
        text: "Один из них прошелся по местности, проверяя, нет ли здесь лишних ушей. Лейла почувствовала: сердце Хани забилось чаще.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_11" }
        ]
    },
    gl1_165choice1_11: {
        text: "Лейла решила...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Успокоить его", nextScene: "gl1_165choice1_12_shell" },
            { text: "Поддразнить его", nextScene: "gl1_165choice1_12_flower" }
        ]
    },
    gl1_165choice1_12_shell: {
        text: "Стараясь не издавать лишних звуков, Лейла сжала руку Хани в крепком дружеском жесте.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_shell1" }
        ]
    },
    gl1_165choice1_12_shell1: {
        text: "Тот спокойно, медленно выдохнул. И сильнее прижал к себе Лейлу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_13" }
        ]
    },
    gl1_165choice1_12_flower: {
        text: "Лейла прижалась к Хани сильнее.Тихо выдохнула: шеи Хани коснулся горячий воздух.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_flower1" }
        ]
    },
    gl1_165choice1_12_flower1: {
        text: "Тот сжал губы. Ноздри его расширились.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_flower2" }
        ]
    },
    gl1_165choice1_12_flower2: {
        text: "Боясь оттолкнуть Лейлу - та бы зазвенела своими побрякушками - постарался отодвинуться сам.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_flower3" }
        ]
    },
    gl1_165choice1_12_flower3: {
        text: "Лейла, потеряв опору, ткнулась носом в шею Хани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_flower4" }
        ]
    },
    gl1_165choice1_12_flower4: {
        text: "Оба замерли, молясь всем богам, чтобы их возню не услышали.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_flower5" }
        ]
    },
    gl1_165choice1_12_flower5: {
        text: "Воин 2: Смена караула.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_flower6" }
        ]
    },
    gl1_165choice1_12_flower6: {
        text: "Л(ИКИ):Кажется, не заметили.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_12_flower7" }
        ]
    },
    gl1_165choice1_12_flower7: {
        text: "Лейла облегченно размякла на руках у Хани. Тот только ткнул ее пальцем в бок.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_13" }
        ]
    },
    gl1_165choice1_13: {
        text: "Воин 1: Что-то нашли?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_14" }
        ]
    },
    gl1_165choice1_14: {
        text: "Воин 2: Дома пусто. Родители переживают. Не видели девчонку уже сутки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_15" }
        ]
    },
    gl1_165choice1_15: {
        text: "Воин 1: Кекоа ночью патрулировал улицы. Говорит, слышал странные звуки, но на месте нашел только браслет из ракушек.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_16" }
        ]
    },
    gl1_165choice1_16: {
        text: "Воин 3(Кекоа): Вот он.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_17" }
        ]
    },
    gl1_165choice1_17: {
        text: "Послышался глухой стук - воины разглядывали улику.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_18" }
        ]
    },
    gl1_165choice1_18: {
        text: "Воин 2: Это ее?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_19" }
        ]
    },
    gl1_165choice1_19: {
        text: "Воин 1: Этого нельзя исключать.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_20" }
        ]
    },
    gl1_165choice1_20: {
        text: "Л: “О, Кане…”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_21" }
        ]
    },
    gl1_165choice1_21: {
        text: "Один взгляд на воинов вернул воспоминания о прошлой ночи.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_22" }
        ]
    },
    gl1_165choice1_22: {
        text: "Л: “Это мамин.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_23" }
        ]
    },
    gl1_165choice1_23: {
        text: "Л: “Как я могла забыть?!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_24" }
        ]
    },
    gl1_165choice1_24: {
        text: "Вчера, после нескольких рюмок настойки, Кейла начала отвечать взаимностью на сладкие речи Хани. Чтобы не мешать, Лейла и О-Лин, расхрабрев от алкоголя, тайком улизнули на улицу, несмотря на комендантский час, утвержденный самим Али-Нуи.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_25" }
        ]
    },
    gl1_165choice1_25: {
        text: "Они добирались до дома, прячась от патрульных за деревьями.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_26" }
        ]
    },
    gl1_165choice1_26: {
        text: "Лейла потерла запястье.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_27" }
        ]
    },
    gl1_165choice1_27: {
        text: "Л: “Кажется, я оставила браслет не у Хани...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_28" }
        ]
    },
    gl1_165choice1_28: {
        text: "Воин 1: Продолжаем поиски. Кахуна-Нуи не намерен омрачать праздник плохими новостями.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_29" }
        ]
    },
    gl1_165choice1_29: {
        text: "Воин 2: Принято. Продолжаем поиски. Нужно проследить за ее друзьями.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_30" }
        ]
    },
    gl1_165choice1_29: {
        text: "Тяжелые шаги поспешили прочь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_30" }
        ]
    },
    gl1_165choice1_30: {
        text: "Хани и Лейла не решались выходить из засады: вытягивали шеи, пытаясь увидеть, как далеко ушли воины.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_31" }
        ]
    },
    gl1_165choice1_31: {
        text: "Тут со спины на них налетели, обхватив за шеи.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_32" }
        ]
    },
    gl1_165choice1_32: {
        text: "А-а!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_33" }
        ]
    },
    gl1_165choice1_33: {
        text: "Л: А-а!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_34" }
        ]
    },
    gl1_165choice1_34: {
        text: "О-Лин: А-алоха!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_35" }
        ]
    },
    gl1_165choice1_35: {
        text: "Обняв друзей, на их плечах повисла О-Лин.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_36" }
        ]
    },
    gl1_165choice1_36: {
        text: "О-Лин! Ты подкрадывалась? Я тебя чуть через плечо не перекинул!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_37" }
        ]
    },
    gl1_165choice1_37: {
        text: "ОЛ: Прячетесь от Коа? Они ушли, расслабьтесь! Хани, тебя искал Пилипо, говорит, ты не забрал свою оплату.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_38" }
        ]
    },
    gl1_165choice1_38: {
        text: "Хани пожал плечами.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_39" }
        ]
    },
    gl1_165choice1_39: {
        text: "Уже все забрал.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_40" }
        ]
    },
    gl1_165choice1_40: {
        text: "ОЛ: Но я не уверена, что речь шла об оплате, от него шла негативная энергия.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_41" }
        ]
    },
    gl1_165choice1_41: {
        text: "Хани сухо ухмыльнулся.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_42" }
        ]
    },
    gl1_165choice1_42: {
        text: "О-Лин, кажется, вспомнила прошлую ночь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_43" }
        ]
    },
    gl1_165choice1_43: {
        text: "ОЛ: Стой! Это из-за Кейлы?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_44" }
        ]
    },
    gl1_165choice1_44: {
        text: "Увидев, как Хани мешкается, О-Лин шлепнула его по плечу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_45" }
        ]
    },
    gl1_165choice1_45: {
        text: "ОЛ: Ты ее уговорил! Какому богу помолился, чтобы привалила такая удача? Мне понадобится такая на конкурсе...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_46" }
        ]
    },
    gl1_165choice1_46: {
        text: "Тормози, красотка. Это она уговаривала меня, а я...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_47" }
        ]
    },
    gl1_165choice1_47: {
        text: "Хани замялся. О-Лин продолжала беззаботно смеяться.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_48" }
        ]
    },
    gl1_165choice1_48: {
        text: "ОЛ: Отбивался?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_49" }
        ]
    },
    gl1_165choice1_49: {
        text: "Воины Коа заворачивали за угол.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_50" }
        ]
    },
    gl1_165choice1_50: {
        text: "Воин 1:...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_51" }
        ]
    },
    gl1_165choice1_51: {
        text: "Лейла поймала на себе взгляд. Показалось?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_52" }
        ]
    },
    gl1_165choice1_52: {
        text: "ОЛ: Лейла! Что с тобой?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_53" }
        ]
    },
    gl1_165choice1_53: {
        text: "Л: У нас дела.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_54" }
        ]
    },
    gl1_165choice1_54: {
        text: "Хани деловито поднял ведра.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_55" }
        ]
    },
    gl1_165choice1_55: {
        text: "Работа.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_56" }
        ]
    },
    gl1_165choice1_56: {
        text: "ОЛ: Идете за рыбой? Мне по пути. Я собираю желающих на утреннюю хулу на побережье. Идете?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_57" }
        ]
    },
    gl1_165choice1_57: {
        text: "Хани вопросительно посмотрел на Лейлу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_58" }
        ]
    },
    gl1_165choice1_58: {
        text: "Л: Не-е, в кафе много дел.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_59" }
        ]
    },
    gl1_165choice1_59: {
        text: "ОЛ: Многое теряете.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_60" }
        ]
    },
    gl1_165choice1_60: {
        text: "О-Лин затанцевала - скорее поплыла - к дороге. Лейла и Хани побрели следом.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_61" }
        ]
    },
    gl1_165choice1_61: {
        text: "Л: Хани... я не оставила у тебя дома такой же браслет? Я не помню.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_62" }
        ]
    },
    gl1_165choice1_62: {
        text: "Не знаю, я был немного занят... Пилипо искал Кейлу, а она оставалась на ночь. ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_63" }
        ]
    },
    gl1_165choice1_63: {
        text: "Лейла посмотрела на Хани, ожидая подробностей.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_64" }
        ]
    },
    gl1_165choice1_64: {
        text: "Ну, она не такая смелая, как вы, не решилась разгуливать под носом у патруля. А мне из-за этого пришлось через окно убегать от разговоров о замужестве.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_65" }
        ]
    },
    gl1_165choice1_65: {
        text: "Лейла слушала вполуха: голову ее занимали мысли о мамином браслете.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_66" }
        ]
    },
    gl1_165choice1_66: {
        text: "Слышала их разговор? Они случайно не о твоем браслете?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_67" }
        ]
    },
    gl1_165choice1_67: {
        text: "Лейла почувствовала, как страх щекочет затылок.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_68" }
        ]
    },
    gl1_165choice1_68: {
        text: "Л: Не знаю. Я не слышала.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_69" }
        ]
    },
    gl1_165choice1_69: {
        text: "Л(ИКИ): “Знаю.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_70" }
        ]
    },
    gl1_165choice1_70: {
        text: "Л(ИКИ): “Я потеряла его... Как я могла?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_71" }
        ]
    },
    gl1_165choice1_71: {
        text: "Вскоре друзья оказались на побережье. От хижины Макана привычно пахло сырой рыбой.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_72" }
        ]
    },
    gl1_165choice1_72: {
        text: "Уже на подходе О-Лин поспешила слинять, скривив нос.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice1_73" }
        ]
    },
    gl1_165choice1_73: {
        text: "ОЛ: Мы будем за валуном. Захотите посмотреть - не подходите близко!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_166" }
        ]
    },
    gl1_165choice2: {
        text: "Хани сдавленно вдохнул и отпустил Лейлу. Та попятилась назад, оскорбленно глядя на друга.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_1" }
        ]
    },
    gl1_165choice2_1: {
        text: "Л: “Ты что?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_2" }
        ]
    },
    gl1_165choice2_2: {
        text: "Хани закатил глаза и скрылся за стволом дерева.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_2" }
        ]
    },
    gl1_165choice2_3: {
        text: "Л: “От кого он прячется?...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_4" }
        ]
    },
    gl1_165choice2_4: {
        text: "Лейле стало не по себе: она хотела было тоже спрятаться, как услышала за спиной тяжелые шаги, отбивавшие по земле ритм в такт лязгу металла.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_5" }
        ]
    },
    gl1_165choice2_5: {
        text: "Пара неосторожных движений - и Лейла оказалась прямо между двумя отрядами патруля.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_6" }
        ]
    },
    gl1_165choice2_6: {
        text: "Раньше Воины Коа следили, чтобы нога простого человека не ступила на священную землю.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_7" }
        ]
    },
    gl1_165choice2_7: {
        text: "Когда появились Хоуле, воины Жреца были перенаправлены на урегулирование конфликтов с ними.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_8" }
        ]
    },
    gl1_165choice2_8: {
        text: "Сейчас же, когда Али-Нуи утвердил над селением комендантский час, Воины Коа патрулировали улицы, выискивая нарушителей.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_9" }
        ]
    },
    gl1_165choice2_9: {
        text: "Кто попадался им раз, предпочитал не вспоминать о последствиях такой встречи. Лейла ощутила, как холодеют ее ладони.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_10" }
        ]
    },
    gl1_165choice2_10: {
        text: "Л: “Hauna! Какие высокие...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_11" }
        ]
    },
    gl1_165choice2_11: {
        text: "Л: “Загораживают солнце.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_12" }
        ]
    },
    gl1_165choice2_12: {
        text: "Лица воинов были скрыты тенью - и все же, Лейла заметила: суровый их взгляд направлен сквозь нее.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_13" }
        ]
    },
    gl1_165choice2_13: {
        text: "Л: “Будто смотрят не на меня, а... внутрь?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_14" }
        ]
    },
    gl1_165choice2_14: {
        text: "Л: “Чувствуют мое нутро...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_15" }
        ]
    },
    gl1_165choice2_15: {
        text: "Ее нутро трепетало.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_16" }
        ]
    },
    gl1_165choice2_16: {
        text: "Л: “Что-то не так...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_17" }
        ]
    },
    gl1_165choice2_17: {
        text: "Воин 1: Назовись.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_18" }
        ]
    },
    gl1_165choice2_18: {
        text: "Лейла поджала губы.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_19" }
        ]
    },
    gl1_165choice2_19: {
        text: "Л: “Это он мне?.. Конечно, мне... но зачем мне называться?”\n“Комендантский час только ночью, и я не на Священной земле, нет повода для беспокойства.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_20" }
        ]
    },
    gl1_165choice2_20: {
        text: "Л: “Почему я тогда так волнуюсь?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_21" }
        ]
    },
    gl1_165choice2_21: {
        text: "Воин 3 (Кекоа): Когда ты последний раз видела Иолану?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_22" }
        ]
    },
    gl1_165choice2_22: {
        text: "Первый воин осек заговорившего грозным взглядом и повторил снова:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_23" }
        ]
    },
    gl1_165choice2_23: {
        text: "Воин 1: Назовись.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_24" }
        ]
    },
    gl1_165choice2_24: {
        text: "Во рту у Лейлы пересохло. Нервно сглотнув, она заговорила:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Лейланни, дочь Ноелани.", nextScene: "gl1_165choice2_25_shell" },
            { text: "Лейланни, управительница кафе “Охиа”.", nextScene: "gl1_165choice2_25_flower" }
        ]
    },
    gl1_165choice2_25_shell: {
        text: "Л: Мои предки ступали по Вахи Пана.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_25_shell1" }
        ]
    },
    gl1_165choice2_25_shell1: {
        text: "Лейла не знала, зачем она все это рассказывала. Но имена предков дарили ей чувство защиты. Показалось, и в глазах Воинов прояснилось. ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_25_shell2" }
        ]
    },
    gl1_165choice2_25_shell2: {
        text: "Теперь они смотрели на нее, а не сквозь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_25_shell3" }
        ]
    },
    gl1_165choice2_25_shell3: {
        text: "Воин 1: Что ж, вахини Лейланни...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_26" }
        ]
    },
    gl1_165choice2_25_flower: {
        text: "Л: Вам стоит как-нибудь к нам зайти, попробовать поке.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_25_flower1" }
        ]
    },
    gl1_165choice2_25_flower1: {
        text: "Воины непонимающе переглянулись.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_25_flower2" }
        ]
    },
    gl1_165choice2_25_flower2: {
        text: "Л: Это рыба с рисом. Очень вкусно.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_25_flower3" }
        ]
    },
    gl1_165choice2_25_flower3: {
        text: "Воин 2: При всем желании, вахини Лейланни, ваша еда для нас табу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_25_flower4" }
        ]
    },
    gl1_165choice2_25_flower4: {
        text: "Лейла цыкнула языком.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_26" }
        ]
    },
    gl1_165choice2_26: {
        text: "Воин 1: Где вы были этой ночью?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_27" }
        ]
    },
    gl1_165choice2_27: {
        text: "Лейлу из холода бросило в жар. Она вспомнила: этой ночью они с О-Лин нарушали комендантский час.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_28" }
        ]
    },
    gl1_165choice2_28: {
        text: "Выпивали дома у Хани, веселье затянулось - и вот наступила ночь. У Хани начало что-то получаться с Кейлой - он долго отвешивал комплименты ее пышным бедрам. Девушки решили оставить воркующих одних.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_29" }
        ]
    },
    gl1_165choice2_29: {
        text: "От количества выпитого потерявшие всякий страх, Лейла и О-Лин бежали по улицам, прячась от патрульных.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_30" }
        ]
    },
    gl1_165choice2_30: {
        text: "Л: Спала... Дома. Что-то случилось?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_31" }
        ]
    },
    gl1_165choice2_31: {
        text: "Воины нахмурились.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_32" }
        ]
    },
    gl1_165choice2_32: {
        text: "Воин 3 (Кекоа): У вас очень красивый браслет. Вы сами его сплели?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_33" }
        ]
    },
    gl1_165choice2_33: {
        text: "Лейла почувствовала, как страх щекочет затылок.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_34" }
        ]
    },
    gl1_165choice2_34: {
        text: "Л: «О, Кане...»",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_35" }
        ]
    },
    gl1_165choice2_35: {
        text: "ОЛ: Лейла! Вот ты где! Окелани стало плохо, бежим скорее!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_36" }
        ]
    },
    gl1_165choice2_36: {
        text: "Из ниоткуда появилась О-Лин – набегу схватила Лейлу за руку и вырвала из окружения воинов.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_37" }
        ]
    },
    gl1_165choice2_37: {
        text: "Лейла не успела даже обернуться.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_38" }
        ]
    },
    gl1_165choice2_38: {
        text: "Л: «Тутувахини плохо?!»",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_39" }
        ]
    },
    gl1_165choice2_39: {
        text: "ОЛ: Она снова вспоминает извержение и зовет тебя!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_40" }
        ]
    },
    gl1_165choice2_40: {
        text: "Л: «Снова?...»",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_41" }
        ]
    },
    gl1_165choice2_41: {
        text: "ОЛ: Говорит, за дочкой не уследила, еще и внучка куда-то пропала...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_42" }
        ]
    },
    gl1_165choice2_42: {
        text: "Лейла не нужно было оборачиваться, чтобы понять, что войны смотрят девушкам вслед и их тяжелые взгляды сверлят им спины.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_43" }
        ]
    },
    gl1_165choice2_43: {
        text: "О-Лин увела Лейлу за поворот - там уже ждал Хани с ведрами, пряча от редких прохожих лицо за листвой.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_44" }
        ]
    },
    gl1_165choice2_44: {
        text: "Л: Что-то с тутувахини?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_45" }
        ]
    },
    gl1_165choice2_45: {
        text: "О-Лин рассмеялась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_46" }
        ]
    },
    gl1_165choice2_46: {
        text: "ОЛ: Поверила? Это была моя импровизация, не переживай. Что этим красавчикам было нужно?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_47" }
        ]
    },
    gl1_165choice2_47: {
        text: "Девочки, понимаю, соскучились за ночь, но давайте не задерживаться. Не хочу иметь дел с Коа.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_48" }
        ]
    },
    gl1_165choice2_48: {
        text: "Хани передернуло от одного упоминания воинов.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_49" }
        ]
    },
    gl1_165choice2_49: {
        text: "Уже на ходу она приглушенно ответила :",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_50" }
        ]
    },
    gl1_165choice2_50: {
        text: "Л: Ничего, остановили, спрашивали, кто такая... и про браслет. А я не помню, оставила я второй такой же у тебя или потеряла ночью.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_51" }
        ]
    },
    gl1_165choice2_51: {
        text: "ОЛ: Так ты ничего не помнишь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_52" }
        ]
    },
    gl1_165choice2_52: {
        text: "Л:...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_53" }
        ]
    },
    gl1_165choice2_53: {
        text: "ОЛ: Я тебя расстрою, но он порвался, когда ты упала.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_54" }
        ]
    },
    gl1_165choice2_54: {
        text: "Лейла закрыла лицо ладонями.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_55" }
        ]
    },
    gl1_165choice2_55: {
        text: "Л: Они его нашли? Кажется, они его нашли.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_56" }
        ]
    },
    gl1_165choice2_56: {
        text: "Л(ИКИ): “Мамин браслет!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_57" }
        ]
    },
    gl1_165choice2_57: {
        text: "Л(ИКИ): “Я потеряла его навсегда.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_58" }
        ]
    },
    gl1_165choice2_58: {
        text: "Л: И они, выходит, знают, что я гуляла ночью.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_59" }
        ]
    },
    gl1_165choice2_59: {
        text: "О-Лин пихнула подругу локтем в бок.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_60" }
        ]
    },
    gl1_165choice2_60: {
        text: "ОЛ: И что они сделают? Ты из знатной семьи, для них табу даже поднимать на тебя руку.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_61" }
        ]
    },
    gl1_165choice2_61: {
        text: "Л: Изгнать нас с Вахи Пана им табу не помешало...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_62" }
        ]
    },
    gl1_165choice2_62: {
        text: "Подумаешь! Гуляешь ты по Вахи Пана или по обычной земле, неважно. Главное - чья кровь течет в тебе.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_63" }
        ]
    },
    gl1_165choice2_63: {
        text: "А вот и рыбацкая хижина! О-Лини, ты с нами?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_64" }
        ]
    },
    gl1_165choice2_64: {
        text: "О-Лин, обнимая Лейлу на прощанье, послала ему воздушный поцелуй.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_65" }
        ]
    },
    gl1_165choice2_65: {
        text: "ОЛ: Не хочу вонять рыбой на Макахики. К тому же, у нас с девчонками утренняя хула.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_66" }
        ]
    },
    gl1_165choice2_67: {
        text: "Л: Иолана с вами?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_68" }
        ]
    },
    gl1_165choice2_68: {
        text: "Разговор с военными не отпускал Лейлу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_69" }
        ]
    },
    gl1_165choice2_70: {
        text: "О-Лин задумалась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_71" }
        ]
    },
    gl1_165choice2_71: {
        text: "ОЛ: Не видела ее вчера. Наверное будет! Захотите посмотреть - мы за валуном!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_72" }
        ]
    },
    gl1_165choice2_72: {
        text: "Лейла кивнула.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_73" }
        ]
    },
    gl1_165choice2_73: {
        text: "Л: Удачи на хула!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_74" }
        ]
    },
    gl1_165choice2_74: {
        text: "Хани отсалютовал подруге и, гремя ведрами, побежал к хижине Макана.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice2_75" }
        ]
    },
    gl1_165choice2_75: {
        text: "Лейла медленно побрела следом. Внутри неприятно бурлила тревоа. Она не могла понять, что именно ее беспокоит.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_166" }
        ]
    },
     gl1_165choice3: {
        text: "Прислушалась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_1" }
        ]
    },
    gl1_165choice3_1: {
        text: "В такт биению сердца Хани послышались шаги. Грузные, ритмичные. Лейла затаила дыхание. Это были Воины Коа.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_2" }
        ]
    },
    gl1_165choice3_2: {
        text: "Л: “Призваны защищать нас… в последнее время патрулей на улицах все больше.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_3" }
        ]
    },
    gl1_165choice3_3: {
        text: "Л: “А значит, что-то нам угрожает...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_4" }
        ]
    },
    gl1_165choice3_4: {
        text: "Л: “Или они просто не доверяют нам?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_5" }
        ]
    },
    gl1_165choice3_5: {
        text: "Лейла поежилась. Беспечная жизнь на Ниихау кончилась десять лет назад. Несчастья, о которых старались не вспоминать, изменили свободный облик острова.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_6" }
        ]
    },
    gl1_165choice3_6: {
        text: "Жители смиренно приняли новые правила: комендантские часы, снующие Воины Коа, военные с Большой земли...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_7" }
        ]
    },
    gl1_165choice3_7: {
        text: "Негодование высказывали единицы. И тут же жалели об этом.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_8" }
        ]
    },
    gl1_165choice3_8: {
        text: "Л: “Прячемся от тех, кто должен нас оберегать.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_9" }
        ]
    },
    gl1_165choice3_9: {
        text: "Лейла посмотрела на Хани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_10" }
        ]
    },
    gl1_165choice3_10: {
        text: "Л: “Чего он испугался?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_11" }
        ]
    },
    gl1_165choice3_11: {
        text: "Воины остановились всего в паре метров. Один из них прошелся по местности, проверяя, нет ли лишних ушей.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_12" }
        ]
    },
    gl1_165choice3_12: {
        text: "Видимо, ночные караулы ударили по бдительности Коа: Лейла и Хани, скрывшиеся в тени акации, остались незамеченными.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_13" }
        ]
    },
    gl1_165choice3_13: {
        text: "Воин 1: Что-то нашли?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_14" }
        ]
    },
    gl1_165choice3_14: {
        text: "Воин 2: Дома пусто. Родители переживают. Не видели девчонку уже сутки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_15" }
        ]
    },
    gl1_165choice3_15: {
        text: "Воин 1: Кекоа ночью патрулировал улицы. Говорит, слышал странные звуки, но на месте нашел только браслет из ракушек.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_16" }
        ]
    },
    gl1_165choice3_16: {
        text: "Воин 3(Кекоа): Вот он.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_17" }
        ]
    },
    gl1_165choice3_17: {
        text: "Лейла вздрогнула. Браслет! Мамин браслет...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_18" }
        ]
    },
    gl1_165choice3_18: {
        text: "ОЛ: Ой!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_19" }
        ]
    },
    gl1_165choice3_19: {
        text: "Послышался знакомый голос. Лейла и Хани переглянулись.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_20" }
        ]
    },
    gl1_165choice3_20: {
        text: "Л: “О-Лин?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_21" }
        ]
    },
    gl1_165choice3_21: {
        text: "В1: Назовись.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_22" }
        ]
    },
    gl1_165choice3_22: {
        text: "ОЛ: О-Лин, служительница Лаки. Буду танцевать хулу на Макахики. А вы?...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_23" }
        ]
    },
    gl1_165choice3_23: {
        text: "Воин 3 (Кекоа): Патруль Коа, младший воин Кекоа.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_24" }
        ]
    },
    gl1_165choice3_24: {
        text: "ОЛ: О, так вы недавно начали службу? И как, нравится?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_25" }
        ]
    },
    gl1_165choice3_25: {
        text: "Воин 1: Вопросы запрещены.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_26" }
        ]
    },
    gl1_165choice3_26: {
        text: "На какое-то время повисла тяжелая тишина.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_27" }
        ]
    },
    gl1_165choice3_27: {
        text: "Воин 1: Вахини О-Лин, где вы были этой ночью?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_28" }
        ]
    },
    gl1_165choice3_28: {
        text: "Л: “Hauna!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_29" }
        ]
    },
    gl1_165choice3_29: {
        text: "Этой ночью они с О-Лин нарушали комендантский час. Вчера, после нескольких рюмок настойки, Кейла начала отвечать взаимностью на сладкие речи Хани. Чтобы не мешать, Лейла и О-Лин, тайком улизнули на улицу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_30" }
        ]
    },
    gl1_165choice3_30: {
        text: "Л(ИКИ): “Никогда больше не буду пить...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_31" }
        ]
    },
    gl1_165choice3_31: {
        text: "По домам они добирались, прячась от патрульных за деревьями.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_32" }
        ]
    },
    gl1_165choice3_32: {
        text: "Лейла потерла запястье.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_33" }
        ]
    },
    gl1_165choice3_33: {
        text: "Л(ИКИ): “Вот откуда у них мой браслет...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_34" }
        ]
    },
    gl1_165choice3_34: {
        text: "Л(ИКИ):”Боги, как я могла его потерять?”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_35" }
        ]
    },
    gl1_165choice3_35: {
        text: "ОЛ: Лучше спросите, что я буду делать следующей ночью...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_36" }
        ]
    },
    gl1_165choice3_36: {
        text: "Лейла почувствовала, как Хани сдерживает смех.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_37" }
        ]
    },
    gl1_165choice3_37: {
        text: "Л: “Додумалась флиртовать с Коа... Дурочка!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_38" }
        ]
    },
    gl1_165choice3_38: {
        text: "Воин 1: Вахини О-Лин, я задал вопрос.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_39" }
        ]
    },
    gl1_165choice3_39: {
        text: "ОЛ: Какой вы серьезный. Он всегда такой, а, Кекоа?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_40" }
        ]
    },
    gl1_165choice3_40: {
        text: "Воин 3 (Кекоа): Довольно...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_41" }
        ]
    },
    gl1_165choice3_41: {
        text: "Воин 1: Молчать. Вахини, последний раз повторяю: где вы были?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_42" }
        ]
    },
    gl1_165choice3_42: {
        text: "ОЛ: Ночевала у друга. Опережая ваш вопрос, нет, ничего серьезного. Я свободная птичка, понимаете?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_43" }
        ]
    },
    gl1_165choice3_43: {
        text: "Хани едва ли сдерживал смех. Лейла слушала кокетство О-Лин через боль.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_44" }
        ]
    },
    gl1_165choice3_44: {
        text: "Л: “Она всегда перестает следить за языком, когда волнуется...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_45" }
        ]
    },
    gl1_165choice3_45: {
        text: "Л: “Надо спасать. О, Кане!”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46" }
        ]
    },
    gl1_165choice3_46: {
        text: "Как могла, бесшумно вложила свой браслет в руки Хани. И решила...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Появиться с достоинством", nextScene: "gl1_165choice3_46_shell" },
            { text: "Появиться ярко", nextScene: "gl1_165choice3_46_flower" },
        ]
    },
    gl1_165choice3_46_shell: {
        text: "Лейла жестом попросила Хани стоять тихо и прокралась назад, к дороге. Отойдя от друга на приличное расстояние, девушка зашагала громче.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell1" }
        ]
    },
    gl1_165choice3_46_shell1: {
        text: "Украшения на ногах зазвенели, оповещая воинов о приближении еще одного беспечного слушателя.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell2" }
        ]
    },
    gl1_165choice3_46_shell2: {
        text: "Л: О-Лин! Мы тебя потеряли.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell3" }
        ]
    },
    gl1_165choice3_46_shell3: {
        text: "Воины медленно обернулись на незваную гостью. Дыхание Лейлы сбилось, но походкой она не выдала волнения: все так же высоко держала голову.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell4" }
        ]
    },
    gl1_165choice3_46_shell4: {
        text: "Воин 1: Назовись.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell5" }
        ]
    },
    gl1_165choice3_46_shell5: {
        text: "Л: “Заладил... “Назовись”, “Назовись”...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell6" }
        ]
    },
    gl1_165choice3_46_shell6: {
        text: "Л: Лейланни, дочь Ноелани. Внучка Окелани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell7" }
        ]
    },
    gl1_165choice3_46_shell7: {
        text: "Воины Коа уважительно склонили головы. Самый молодой из них - очевидно, Кекоа - помедлил. Но, оглянувшись на остальных, тоже выразил почтение кивком головы.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell8" }
        ]
    },
    gl1_165choice3_46_shell8: {
        text: "Воин 1: Вахини Лейланни, где вы были этой ночью?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell9" }
        ]
    },
    gl1_165choice3_46_shell9: {
        text: "Л: Что-то стряслось? Задавший вопрос воин сощурился, глядя на Лейлу. Помедлив, процедил:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell10" }
        ]
    },
    gl1_165choice3_46_shell10: {
        text: "Воин 1: Вопросы запрещены.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell11" }
        ]
    },
    gl1_165choice3_46_shell11: {
        text: "ОЛ: Лучше ответить, а то застрянем с ними на весь день.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell12" }
        ]
    },
    gl1_165choice3_46_shell12: {
        text: "Л: Мы допоздна задержались у Хани, сына Алики. Там и провели ночь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell13" }
        ]
    },
    gl1_165choice3_46_shell13: {
        text: "Воин 1: Кто еще был с вами?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell14" }
        ]
    },
    gl1_165choice3_46_shell14: {
        text: "Лейла и О-Лин переглянулись.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell15" }
        ]
    },
    gl1_165choice3_46_shell15: {
        text: "Л: Хани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell16" }
        ]
    },
    gl1_165choice3_46_shell16: {
        text: "Воин 1: Чем вы занимались?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell17" }
        ]
    },
    gl1_165choice3_46_shell17: {
        text: "ОЛ: У девушек такое неприлично спрашивать!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell18" }
        ]
    },
    gl1_165choice3_46_shell18: {
        text: "Воин 3 (Кекоа): Вахини О-Лин, сохраняйте спокойствие, вы отвлекаете нас от ответов.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell19" }
        ]
    },
    gl1_165choice3_46_shell19: {
        text: "О-Лин зарделась:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell20" }
        ]
    },
    gl1_165choice3_46_shell20: {
        text: "ОЛ: Уж в этом мой дар.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell21" }
        ]
    },
    gl1_165choice3_46_shell21: {
        text: "Воин 1: Что за дар?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell22" }
        ]
    },
    gl1_165choice3_46_shell22: {
        text: "ОЛ: Умею заставить любого замолчать.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell23" }
        ]
    },
    gl1_165choice3_46_shell23: {
        text: "Воин 1: Вахини О-Лин, вы отвлекаете нас от ответов.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell24" }
        ]
    },
    gl1_165choice3_46_shell24: {
        text: "Лейла, сдерживая улыбку, взяла подругу под локоть.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell25" }
        ]
    },
    gl1_165choice3_46_shell25: {
        text: "Л: Готовились к Макахики. О-Лин - лучшая танцовщица хулы на острове… Приходите на праздник, сами увидите.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell26" }
        ]
    },
    gl1_165choice3_46_shell26: {
        text: "Воин 1: Служительница Лаки, значит.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell27" }
        ]
    },
    gl1_165choice3_46_shell27: {
        text: " Воин 3 (Кекоа): Вижу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell28" }
        ]
    },
    gl1_165choice3_46_shell28: {
        text: "Воин 1: Молитесь усердно и будьте осторожны.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell29" }
        ]
    },
    gl1_165choice3_46_shell29: {
        text: "Кивнув девушкам, группы патрульных разошлись в разные стороны. Лейла и О-Лин остались одни.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell30" }
        ]
    },
    gl1_165choice3_46_shell30: {
        text: "Когда они скрылись из виду, Лейла строго посмотрела на подругу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell31" }
        ]
    },
    gl1_165choice3_46_shell31: {
        text: "Л: Серьезно, флиртуешь с Коа? Не помнишь, что про них рассказывают?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell32" }
        ]
    },
    gl1_165choice3_46_shell32: {
        text: "О-Лин пожала плечами.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell33" }
        ]
    },
    gl1_165choice3_46_shell33: {
        text: "ОЛ: К чему слушать чужие рассказы, когда можно попробовать самой?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell34" }
        ]
    },
    gl1_165choice3_46_shell34: {
        text: "Из зарослей показался Хани с пустыми ведрами.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell35" }
        ]
    },
    gl1_165choice3_46_shell35: {
        text: "Попробовать? Коа запрещено вступать в отношения.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell36" }
        ]
    },
    gl1_165choice3_46_shell36: {
        text: "ОЛ: А я и не хочу отношений.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell37" }
        ]
    },
    gl1_165choice3_46_shell37: {
        text: "Пока О-Лин говорила, Хани помог Лейле натянуть ее браслет на запястье.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell38" }
        ]
    },
    gl1_165choice3_46_shell38: {
        text: "Шепотом Лейла сказала:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell39" }
        ]
    },
    gl1_165choice3_46_shell39: {
        text: "Л: “Спасибо, Хани.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell40" }
        ]
    },
    gl1_165choice3_46_shell40: {
        text: "Хани кивнул.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell41" }
        ]
    },
    gl1_165choice3_46_shell41: {
        text: "ОЛ: Я хочу пообщаться с настоящими воинами... настоящими мужчинами. Ну, тебе, Лейла, не понять.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell42" }
        ]
    },
    gl1_165choice3_46_shell42: {
        text: "Л: Да, давайте не терять времени. О-Лин, идешь с нами за рыбой?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell43" }
        ]
    },
    gl1_165choice3_46_shell43: {
        text: "ОЛ: Провожу, но ноги моей в этой вонючей хибаре не будет. Мне на днях танцевать перед народом, не хочу портить впечатление. Я должна пахнуть фруктами, цветами, соленой водой, а не рыбой.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell44" }
        ]
    },
    gl1_165choice3_46_shell44: {
        text: "Вскоре друзья оказались на побережье. ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell45" }
        ]
    },
    gl1_165choice3_46_shell45: {
        text: "О-Лин поспешила по делам.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_shell46" }
        ]
    },
    gl1_165choice3_46_shell46: {
        text: "ОЛ: Мы будем за валуном. Захотите посмотреть - не подходите близко! ",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_166" }
        ]
    },
    gl1_165choice3_46_flower: {
        text: "Лейла жестом попросила Хани стоять тихо и прокралась глубоко в заросли акаций.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower1" }
        ]
    },
    gl1_165choice3_46_flower1: {
        text: "С листвы она собрала утреннюю росу - намочила волосы и лицо. Пошлепала себя по щекам - раскраснелась, словно запыхалась на бегу. Собравшись с духом, Лейла закричала:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower2" }
        ]
    },
    gl1_165choice3_46_flower2: {
        text: "Л: Помогите! На помощь!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower3" }
        ]
    },
    gl1_165choice3_46_flower3: {
        text: "И, спотыкаясь, побежала вперед - к улице, где Коа допрашивали О-Лин.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower4" }
        ]
    },
    gl1_165choice3_46_flower4: {
        text: "Украшения на ногах звенели, листва шелестела - Лейла создала много шума.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower5" }
        ]
    },
    gl1_165choice3_46_flower5: {
        text: "Л: КАБАН!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower6" }
        ]
    },
    gl1_165choice3_46_flower6: {
        text: "Она выскочила прямо на воинов - увидела  О-Лин. Та недолго медлила, тут же подхватив план подруги.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower7" }
        ]
    },
    gl1_165choice3_46_flower7: {
        text: "ОЛ: КАБАН! Беги, Лейла!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower8" }
        ]
    },
    gl1_165choice3_46_flower8: {
        text: "Не упуская своего, О-Лин запрыгнула на воина - должно быть, на Кекоа - и обхватила его мускулы.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower9" }
        ]
    },
    gl1_165choice3_46_flower9: {
        text: "ОЛ: Убейте его!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower10" }
        ]
    },
    gl1_165choice3_46_flower10: {
        text: "Лейла принялась пальцем указывать в глубину зарослей, заикаясь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower11" }
        ]
    },
    gl1_165choice3_46_flower11: {
        text: "Л: Я шла... увидела выводок поросят... такие милые, а мама - кабан!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower12" }
        ]
    },
    gl1_165choice3_46_flower12: {
        text: "ОЛ: Кабан!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower13" }
        ]
    },
    gl1_165choice3_46_flower13: {
        text: "О-Лин спрыгнула с Кекоа, хватая Лейлу за руку. Вдвоем, высоко подпрыгивая, они побежали к домам, пока воины готовились к столкновению со зверем.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower14" }
        ]
    },
    gl1_165choice3_46_flower14: {
        text: "За углом девчонки встретились с Хани - он, в суматохе собрав ведра, тоже успел сбежать из поля зрения Коа.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower15" }
        ]
    },
    gl1_165choice3_46_flower15: {
        text: "О-Лин бедром толкнула Лейлу:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower16" }
        ]
    },
    gl1_165choice3_46_flower16: {
        text: "ОЛ: Спасибо! Думала, не отстанут.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower17" }
        ]
    },
    gl1_165choice3_46_flower17: {
        text: "Л: Да ладно! Ты и не хотела, чтобы они отстали.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower18" }
        ]
    },
    gl1_165choice3_46_flower18: {
        text: "ОЛ: В смысле?!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower19" }
        ]
    },
    gl1_165choice3_46_flower19: {
        text: "“Лучше спросите, что я буду делать следующей ночью”... На что ты надеялась?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower20" }
        ]
    },
    gl1_165choice3_46_flower20: {
        text: "О-Лин скромно улыбнулась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower21" }
        ]
    },
    gl1_165choice3_46_flower21: {
        text: "ОЛ: Ладно, засранцы, раскусили. А что плохого?! Готова спорить, этот Кекоа меня не скоро забудет.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower22" }
        ]
    },
    gl1_165choice3_46_flower22: {
        text: "Ничего серьезного из интрижки с Коа не выйдет. Им же запрещены привязанности.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower23" }
        ]
    },
    gl1_165choice3_46_flower23: {
        text: "ОЛ: Кто сказал, что я хочу чего-то серьезного? Просто забудьте, я сама разберусь.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower24" }
        ]
    },
    gl1_165choice3_46_flower24: {
        text: "ОЛ: Так, куда вы идете? На побережье?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower25" }
        ]
    },
    gl1_165choice3_46_flower25: {
        text: "Так точно, детка, рыба сама не приплывет в “Охиа”! Хотя это, между прочим, было бы очень круто, Лейла.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower26" }
        ]
    },
    gl1_165choice3_46_flower26: {
        text: "Вытянув руку перед собой, словно рисуя будущее, Хани протянул:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower27" }
        ]
    },
    gl1_165choice3_46_flower27: {
        text: "“Охиа. Реально свежая рыба.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower28" }
        ]
    },
    gl1_165choice3_46_flower28: {
        text: "Впереди показалась рыбацкая хижина.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower29" }
        ]
    },
    gl1_165choice3_46_flower29: {
        text: "ОЛ: Ну нет, туда не пойду. Захотите посмотреть на хулу - мы танцуем за валуном.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower30" }
              ]
    },
    gl1_165choice3_46_flower30: {
        text: "Л: Приходи вечером, будем украшать кафе.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_165choice3_46_flower31" }
        ]
    },
    gl1_165choice3_46_flower31: {
        text: "О-Лин на бегу махнула Лейле рукой.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_166" }
        ]
    },
    gl1_166: {
        text: "Макана в хижине не оказалось",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_167" }
        ]
    },
    gl1_167: {
        text: "Л: Лодки нет.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_168" }
        ]
    },
    gl1_168: {
        text: "И на горизонте не видно...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_169" }
        ]
    },
    gl1_169: {
        text: "Только высокие волны взволнованно бились о берег.Лейла вырисовывала ногой узоры на песке. Хани бросил ведра у входа в хижину и принялся разминаться.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_170" }
        ]
    },
    gl1_170: {
        text: "Слушай, ждать явно долго. Пока Макан вернется... Как насчет...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Сделать работу, а потом развлекаться.", nextScene: "gl1_171_shell" },
            { text: "Пойти к О-Лин?", nextScene: "gl1_171_flower" }
        ]
    },
    gl1_171_shell: {
        text: "Л: Если пропустим, как Макан возвращается, еще полдня будем бегать за ним.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_shell1" }
        ]
    },
    gl1_171_shell1: {
        text: "Сколько раз он уходил, не дождавшись тебя?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_shell2" }
        ]
    },
    gl1_171_shell2: {
        text: "Л: Ни разу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_shell3" }
        ]
    },
    gl1_171_shell3: {
        text: "Хани повел Лейлу за плечо в сторону валуна.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_shell4" }
        ]
    },
    gl1_171_shell4: {
        text: "И в этот раз не уйдет!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_172" }
        ]
    },
    gl1_171_flower: {
        text: "Узнаю мою бунтарку. Видишь, мы отлично сработаемся.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_flower1" }
        ]
    },
    gl1_171_flower1: {
        text: "Л: Просто я хороший начальник.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_flower2" }
        ]
    },
    gl1_171_flower2: {
        text: "Без вопросов! Я-то знаю, у меня их было много...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_flower3" }
        ]
    },
    gl1_171_flower3: {
        text: "Скинув ведра у входа в хижину, друзья направились к валуну.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_flower4" }
        ]
    },
    gl1_171_flower4: {
        text: "Кажется, не так уж сложно будет работать на тебя.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani.PNG", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_flower5" }
        ]
    },
    gl1_171_flower5: {
        text: "Лейла недоверчиво покосилась:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_171_flower6" }
        ]
    },
    gl1_171_flower5: {
        text: "Л: Забыл про желание?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_172" }
        ]
    },
    gl1_172: {
        text: "За валуном под переливы укулеле танцевали хулу девушки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_173" }
        ]
    },
    gl1_173: {
        text: "Хани раскинулся на горячем камне, подставляя свою блестящую кожу солнцу. Поко, мальчишка, неумело перебирал струны укулеле. Краем глаза он поглядывал на Лейлу. Когда она ему улыбалась, смущенно отводил взгляд.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_174" }
        ]
    },
    gl1_174: {
        text: "ОЛ: Ну же, девочки, хоть кто-то из вас хочет попасть на Священные земли? Или вы уже смирились, что это буду я? Постарайтесь, почувствуйте ритм ветра... Пять лей на дороге не валяется.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_175" }
        ]
    },
    gl1_175: {
        text: "Лейла наклонилась к Хани:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_176" }
        ]
    },
    gl1_176: {
        text: "Л: Пять лей?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_177" }
        ]
    },
    gl1_177: {
        text: "А?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_178" }
        ]
    },
    gl1_178: {
        text: "Он не слушал: почти уснул. Впервые за утро почувствовал себя на своем месте. Потерянно огляделся по сторонам, потер слипающиеся глаза.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_179" }
        ]
    },
    gl1_179: {
        text: "А, да, в этом году той, что лучше всех станцует хулу, дарят пять лей. Калео, видимо, считает, женщина годна только танцевать. И это - жрец...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_180" }
        ]
    },
    gl1_180: {
        text: "Л: Он...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Поддерживает традиции.", nextScene: "gl1_180_shell" },
            { text: "Просто боится женщин.", nextScene: "gl1_180_flower" }
        ]
    },
    gl1_180_shell: {
        text: "Л: Когда-то нам и кушать с вами нельзя было в одной комнате. Нынешние порядки намного мягче.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_shell1" }
        ]
    },
    gl1_180_shell1: {
        text: "Л: Все-таки, он Кахуна-Нуи. Ему дано знать больше.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_shell2" }
        ]
    },
    gl1_180_shell2: {
        text: "Думаешь, они там, на священной земле, живут какую-то другую жизнь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_shell3" }
        ]
    },
    gl1_180_shell3: {
        text: "Лейла сжалась. Принялась пересчитывать ракушки на браслете.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_shell4" }
        ]
    },
    gl1_180_shell4: {
        text: "Л: Так говорит Окелани. И маму тянуло вернуться.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_shell5" }
        ]
    },
    gl1_180_shell5: {
        text: "На поникшую спину легла теплая ладонь. Хани сел рядом. Сжал плечо Лейлы, приободряя.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_shell6" }
        ]
    },
    gl1_180_flower: {
        text: "Л: Не думаю, что мою маму изгнали просто за то, что она забеременела.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_flower1" }
        ]
    },
    gl1_180_flower1: {
        text: "Хани приподнялся на локтях.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_flower2" }
        ]
    },
    gl1_180_flower2: {
        text: "А что думаешь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_flower3" }
        ]
    },
    gl1_180_flower3: {
        text: "Говорить Лейле было тяжело. Она оглянулась: словно кто-то мог слушать. Только шелестела листва пальм на ветру. Смеялись девушки, танцуя под игру Поко. Лейла зашептала. Быстро, точно убегая от собственной тревоги.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_flower4" }
        ]
    },
    gl1_180_flower4: {
        text: "Л: Наверное, и ее боялись. Туту говорит, она любила лезть не в свое дело. И, когда она вновь оказалась на wahi pana...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_flower5" }
        ]
    },
    gl1_180_flower5: {
        text: "Ты все еще думаешь, что извержение тут не при чем?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_180_flower6" }
        ]
    },
    gl1_180_flower6: {
        text: "Лейла кивнула. Хани лег обратно, устроил голову на ладонях.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_181" }
        ]
    },
    gl1_181: {
        text: "И все равно, одна победа - одна лея. Так было всегда. Каждый талант важен.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_182" }
        ]
    },
    gl1_182: {
        text: "Л: И пусть ты соберешь все награды за силу и смекалку, победит все равно та, что лучше всех станцует?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_183" }
        ]
    },
    gl1_183: {
        text: "Если у тебя действительно хорошая смекалка, то ты знаешь, что на священной земле делать нечего. И чего О-Лин туда тянет, неужели не помнит, как ты...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_184" }
        ]
    },
    gl1_184: {
        text: "В ушах зашумело. Лейла надавила на виски.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_185" }
        ]
    },
    gl1_185: {
        text: "Все в порядке?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_186" }
        ]
    },
    gl1_186: {
        text: "Hauna. прости.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_187" }
        ]
    },
    gl1_187: {
        text: "Л: Ничего.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_188" }
        ]
    },
    gl1_188: {
        text: "ОЛ: Раз, два, три, четыре...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_189" }
        ]
    },
    gl1_189: {
        text: "Девушки наконец поймали ритм. В сияющих брызгах воды они двигались так плавно, словно были частью океана. Хани, с опаской оглядываясь на Лейлу, старался ее отвлечь:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_190" }
        ]
    },
    gl1_190: {
        text: "По сравнению со вчерашним днем море потемнело. Вместе с пеной выбрасывало  на берег поднявшиеся со дна мутные водоросли. Послышались девичьи вздохи и смешки. Лейлу накрыла тень: Хани встал и стянул с себя майку.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_191" }
        ]
    },
    gl1_191: {
        text: "Л: На что-то намекаешь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_192" }
        ]
    },
    gl1_192: {
        text: "Да. Знаешь, когда будет Макахики, спокойно не поплаваешь. Давай, поймаем момент. Поймаем волну.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_193" }
        ]
    },
    gl1_193: {
        text: "Л: Ты не хочешь посмотреть, как танцуют девочки?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_194" }
        ]
    },
    gl1_194: {
        text: "Я бы посмотрел, танцуй там ты. Но...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_195" }
        ]
    },
    gl1_195: {
        text: "Л: Нет",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_196" }
        ]
    },
    gl1_196: {
        text: "Хани тепло улыбнулся.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_197" }
        ]
    },
    gl1_197: {
        text: "Вот видишь. Танцы успею посмотреть, когда заберу победу во всех играх. Тогда они будут танцевать для меня, смекаешь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_198" }
        ]
    },
    gl1_198: {
        text: "Хани ленно потянулся:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_199" }
        ]
    },
    gl1_199: {
        text: "В который раз заберу победу и стану Лоно. Тяжело быть лучшим... но и свои плюсы есть.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_200" }
        ]
    },
    gl1_200: {
        text: "Лейла закатила глаза.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_201" }
        ]
    },
    gl1_201: {
        text: "Л: Ты собрался работать и участвовать в Макахики? Не было мысли, что это... невозможно? Даже для “Лоно”.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_202" }
        ]
    },
    gl1_202: {
        text: "Хани удивленно поднял брови.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_203" }
        ]
    },
    gl1_203: {
        text: "Нево-что? Нахваталась английских слов...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_204" }
        ]
    },
    gl1_204: {
        text: "Он поднялся с места и пошел к берегу, где в накатывающих волнах репетировали танец девушки. Лейла поспешила за ним.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_205" }
        ]
    },
    gl1_205: {
        text: "Л: Не смей меня бросать в разгар праздника, слышишь?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_206" }
        ]
    },
    gl1_206: {
        text: "А я и не брошу. Буду участвовать от имени “Охиа”. Как говорят хоуле, “Реклама”?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_207" }
        ]
    },
    gl1_207: {
        text: "Л: Кому ты собрался нас “рекламировать”? На острове все знают о нашем кафе. Оно единственное.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_208" }
        ]
    },
    gl1_208: {
        text: "Плохой из тебя “бизнесмен”.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_209" }
        ]
    },
    gl1_209: {
        text: "Л: Правильно “бизнесвумен”.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_210" }
        ]
    },
    gl1_210: {
        text: "Правильно “бизнесвахини”.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_211" }
        ]
    },
    gl1_211: {
        text: "ОЛ: Сладкие, кончайте ссориться. Весь настрой сбиваете.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_212" }
        ]
    },
    gl1_212: {
        text: "О-Лин стояла, уперев руки в боки, склонив голову к плечу. Хани приобнял ее за плечи и прижал к себе.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_213" }
        ]
    },
    gl1_213: {
        text: "Отлично танцуете.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_214" }
        ]
    },
    gl1_214: {
        text: "Девушки заулыбались, но не О-Лин. Она достаточно хорошо знала Хани.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_215" }
        ]
    },
    gl1_215: {
        text: "ОЛ: Тебе что-то надо?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_216" }
        ]
    },
    gl1_216: {
        text: "Да. Лейла хочет прокатиться. Мы возьмем ваши Алайи?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_217" }
        ]
    },
    gl1_217: {
        text: "О-Лин перевела вопросительный взгляд на Лейлу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_218" }
        ]
    },
    gl1_218: {
        text: "Л: Хотим развеяться.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_219" }
        ]
    },
    gl1_219: {
        text: "ОЛ:Ладно, берите. Лишь бы девочки перестали отвлекаться... Иолана вообще не пришла.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_220" }
        ]
    },
    gl1_220: {
        text: "Махало! Мы пошли. Не смеем отвлекать прекрасных танцовщиц.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_221" }
        ]
    },
    gl1_221: {
        text: "На пляже раздались игривые смешки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_222" }
        ]
    },
    gl1_222: {
        text: "Вырываясь из объятий Хани, О-Лин шепнула:",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_223" }
        ]
    },
    gl1_223: {
        text: "ОЛ: Лейла, пусть он уплывет подальше и не мешает нам. Макахики на носу, нам нужно готовиться, чтоб не оплошать перед богами.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_224" }
        ]
    },
    gl1_224: {
        text: "Под сердцем у Лейлы заныло. Казалось, с тех пор, как семью изгнали со священной земли, боги стали глухи к их молитвам.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_225" }
        ]
    },
    gl1_225: {
        text: "Л(ИКИ): “Иначе почему мама не вернулась...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_226" }
        ]
    },
    gl1_226: {
        text: "Лейла сжала зубы. Она не могла позволить себе думать о маме. Не могла позволить себе думать о том, что она могла бы вернуться.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_227" }
        ]
    },
    gl1_227: {
        text: "ОЛ: Лейла?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_228" }
        ]
    },
    gl1_228: {
        text: "Л: Да. Без проблем.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_229" }
        ]
    },
    gl1_229: {
        text: "В следующий же миг она крепко взяла за руку Хани, который красовался мышцами перед девочками, и потащила к доскам.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_230" }
        ]
    },
    gl1_230: {
        text: "Старайтесь, девчонки! Когда я снова стану королем Макахики, я хочу видеть без-у-пречную хулу.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_231" }
        ]
    },
    gl1_231: {
        text: "ОЛ: Слышали? Соберитесь! Поко, играй. Раз, два, три, четыре...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_232" }
        ]
    },
    gl1_232: {
        text: "Запела укулеле.  Хани наконец отлепил взгляд от качающихся из стороны в сторону бедер, мокрых от брызг волн, и поравнялся с Лейлой. Та уже поднимала доску.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_233" }
        ]
    },
    gl1_233: {
        text: "Л: Догоняй.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_234" }
        ]
    },
    gl1_234: {
        text: "С каждым шагом предвкушение нарастало. На волнах Лейла успокаивалась.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_235" }
        ]
    },
    gl1_235: {
        text: "Л(ИКИ): “Чем опаснее ситуация, тем комфортнее я себя чувствую...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_236" }
        ]
    },
    gl1_236: {
        text: "Л(ИКИ):” Словно хочу бежать.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_237" }
        ]
    },
    gl1_237: {
        text: "И Лейла побежала навстречу волне. Оказавшись на глубине, легла на доску. Она не оглядывалась на Хани, пусть он и кричал что-то. Только плыла вперед, слушая, как дыхание сливается с шумом океана. Снова дома.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_238" }
        ]
    },
    gl1_238: {
        text: "Л(ИКИ): “Я не могу позволить себе думать о том, что я не могу...”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_239" }
        ]
    },
    gl1_239: {
        text: "Быстрее и быстрее... Лейла поднялась на ноги. Ветер свистел в ушах.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_240" }
        ]
    },
    gl1_240: {
        text: "Поймал!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_241" }
        ]
    },
    gl1_241: {
        text: "Тот тоже уже был на гребне волны. Светился счастьем.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_242" }
        ]
    },
    gl1_242: {
        text: "Л: Хани! Радуга!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_243" }
        ]
    },
    gl1_243: {
        text: "Где?!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_244" }
        ]
    },
    gl1_244: {
        text: "Л: На тебе!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_245" }
        ]
    },
gl1_245: {
        text: "Хани присел, и доску мотнуло выше - точно он плыл по мерцающей радуге. Прямо как...",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_246" }
        ]
    },
    gl1_246: {
        text: "Л(ИКИ): “Лоно.”",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_247" }
        ]
    },
    gl1_247: {
        text: "Хороший знак!",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [{ name: "Хани", image:"assets\images\characters\Hani_topless.png", position: "left" }],
        choices: [
            { text: "Дальше", nextScene: "gl1_248" }
        ]
    },
    gl1_248: {
        text: "Лейла не могла сдержать смех. Она обернулась к Хани и увидела, что он тоже смеется.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_249" }
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