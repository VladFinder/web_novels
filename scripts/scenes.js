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
        text: "Дисклеймер: Вдохновением для данного произведения послужили гавайские культура и мифология, однако многие достоверные факты были изменены для художественного умысла авторов. Мы не претендуем на историческую достоверность, лишь знакомим читателя с культурой.",
        background: "assets\images\backgrounds\cutscenes\dis1.MP4",
        characters: [],
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
            { text: "в тишине", nextScene: "choice1" },
            { text: "в ливнях", nextScene: "choice2" },
        ]
    },
    choice1: {
        text: "Только мотыльки бились об окно - в доме еще горел свет.",
        background: "assets\images\backgrounds\комната ночь.PNG",
        characters: [],
        audio: "assets\images\SOUNDS\ночные сверчки.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_1_choice1"},
        ]
    },
    gl1_1_choice1: {
        text: "Считается, что все наши острова созданы из плоти и крови Пеле. Что жизнь посреди океана выкована огнем.",
        background: "assets\images\backgrounds\комната ночь.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_textmomc1" }
        ]

    },
    gl1_textmomc1: {
        text: "Создала для нас землю, драгоценные камни, пищу для растений. И…",
        background: "assets\images\backgrounds\комната ночь.PNG",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_text1ch1" }
        ]
    },
    gl1_text1ch1: {
        text: "Мама, звеня ракушками, вложила Лейле в ладошки браслет.\nОчищенный перламутр сиял ярче тусклой комнатной лампы.\nРыбацкой леской в браслет был вплетен прозрачный темный камень.",
        background: "assets\images\backgrounds\cutscenes\bracelet.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_2ch1" }
        ]
    },
    gl1_2ch1: {
        text: "Что это?",
        background: "",   
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_3ch1" }
        ]
    },
    gl1_3ch1: {
        text: "Это, как говорят на Большой Земле, обсидиан… вулканическое стекло. Там, где встречаются Пеле и Намака, огонь и вода, они навеки застывают. Сестра не может пойти против сестры - обе проиграют...   ПОДСКАЗКА: Обсидиан — природное вулканическое стекло, образующееся в результате быстрого охлаждения лавы.",
        background: "",
        characters: [
            { name:, image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4ch1" }
        ]
    },
    gl1_4ch1: {
        text: "Носи его и не снимай. И у меня….",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4_1ch1" }
        ]
    },
    gl1_4_1ch1: {
        text: "Мама показала свою руку.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_5ch1" }
        ]
    },
    gl1_5ch1: {
        text: "Такой же. Это дар Пеле. Ты знаешь, как обращаться с ее дарами?",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_6ch1" }
        ]
    },
    gl1_6ch1: {
        text: "Уважительно?",
        background: "",
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_1ch1" }
        ]
    },
    gl1_6_1ch1: {
        text: "Да… Бери, но отдавай что-то взамен. Никогда не пользуйся благами земли сверх меры. Такого она не потерпит. Как зашумит земля, как польется лава! Нрав огня неукротим… Раз – и!?",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_2ch1" }
        ]
    },
    gl1_6_2ch1: {
        text: "Мама защекотала Лейлу. Девочка, хохоча, заболтала в воздухе худыми ножками.",
        background: "",
        characters: [],
        audio: "assets\images\SOUNDS\child_laugh.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_3ch1" }
        ]
    },
    gl1_6_3ch1: {
        text: "Как вспылит!",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_4" }
        ]
    },
    choice2: {
        text: "Тяжелые капли дождя разбивались об окно.\nВетер хлестал водой по деревьям.\nА дома было тепло и сухо.",
        background: "assets\images\backgrounds\комната ночь дождь.mp4",
        characters: [],
        audio: "assets\images\SOUNDS\ливень.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_1" },
        ]
    },
    gl1_1: {
        text: "Считается, что все наши острова созданы из плоти и крови Пеле. Что жизнь посреди океана выкована огнем.",
        background: "assets\images\backgrounds\комната ночь дождь.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_textmom" }
        ]
    },
    
    gl1_textmom: {
        text: "Создала для нас землю, драгоценные камни, пищу для растений. И…",
        background: "assets\images\backgrounds\комната ночь дождь.mp4",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_text1" }
        ]
    },
    gl1_text1: {
        text: "Мама, звеня ракушками, вложила Лейле в ладошки браслет.\nОчищенный перламутр сиял ярче тусклой комнатной лампы.\nРыбацкой леской в браслет был вплетен прозрачный темный камень.",
        background: "assets\images\backgrounds\cutscenes\bracelet.MP4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_2" }
        ]
    },
    gl1_2: {
        text: "Что это?",
        background: "",   
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_3" }
        ]
    },
    gl1_3: {
        text: "Это, как говорят на Большой Земле, обсидиан… вулканическое стекло. Там, где встречаются Пеле и Намака, огонь и вода, они навеки застывают. Сестра не может пойти против сестры - обе проиграют...   ПОДСКАЗКА: Обсидиан — природное вулканическое стекло, образующееся в результате быстрого охлаждения лавы.",
        background: "",
        characters: [
            { name:, image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4" }
        ]
    },
    gl1_4: {
        text: "Носи его и не снимай. И у меня….",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4_1" }
        ]
    },
    gl1_4_1: {
        text: "Мама показала свою руку.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_5" }
        ]
    },
    gl1_5: {
        text: "Такой же. Это дар Пеле. Ты знаешь, как обращаться с ее дарами?",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_6" }
        ]
    },
    gl1_6: {
        text: "Уважительно?",
        background: "",
        characters: [
            { name: "Лейла", image: "assets\images\characters\lilleila.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_1" }
        ]
    },
    gl1_6_1: {
        text: "Да… Бери, но отдавай что-то взамен. Никогда не пользуйся благами земли сверх меры. Такого она не потерпит. Как зашумит земля, как польется лава! Нрав огня неукротим… Раз – и!?",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_2" }
        ]
    },
    gl1_6_2: {
        text: "Мама защекотала Лейлу. Девочка, хохоча, заболтала в воздухе худыми ножками.",
        background: "",
        characters: [],
        audio: "assets\images\SOUNDS\child_laugh.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_3" }
        ]
    },
    gl1_6_3: {
        text: "Как вспылит!",
        background: "",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_4" }
        ]
    },
    gl1_6_4: {
        text: "И, однажды, Пеле вспылила.\nНочью после Макахики, когда Лейла искала маму на священной земле.",
        background: "assets\images\backgrounds\cutscenes\DISSTORY.mp4",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_7" }
        ]
    },
    gl1_7: {
        text: "Под ногами рассекали землю трещины. Казалось, сам остров выл от боли.",
        background: "assets\images\backgrounds\cutscenes\gl1_7.MP4",
        characters: [],
        audio: "assets\images\SOUNDS\earth_crack.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_7_1" }
        ]
    },
    gl1_7_1: {
        text: "Сквозь грохот, срывая горло, Лейлу звал друг:",
        background: "assets\images\backgrounds\cutscenes\gl1_7.MP4",
        characters: [],
        audio: "assets\images\SOUNDS\echo.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_8" }
        ]
    },
    // Сцены с Хани
    gl1_8: {
        text: "«Лейла!»",
        background: "assets\images\backgrounds\black.png",
        characters: [
            { name: "Хани", image: "assets/images/characters/hani0.png", position: "left" },
        ],
        audio: "assets/audio/bird_flapping.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_9" }
        ]
    },
    gl1_9: {
        text: "Лейла сжимала мамин браслет. Над головой били крыльями напуганные птицы. Словно воцарился Коре. Коре - хаос.",
        background: "assets\images\backgrounds\cutscenes\gl1_9.MP4",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        audio: "assets/audio/bird_flapping.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_10" }
        ]
    },
    gl1_10: {
        text: "За одну ночь на Ниихау вырос новый вулкан.   ПОДСКАЗКА: Ниихау – самый маленький обитаемый остров Гавайского архипелага. Был закрыт для туризма с 1864 года.",
        background: "assets\images\backgrounds\cutscenes\gl1_10.MP4",
        characters: [],
        audio: "assets/audio/volcano_grow.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_11" }
        ]
    },
    gl1_11: {
        text: "Деревня была наполовину разрушена. Многие пострадали. Кто-то умер. Кто-то пропал.",
        background: "assets\images\backgrounds\cutscenes\gl1_11.mp4",
        characters: [],
        audio: "assets/audio/quiet_aftermath.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_12" }
        ]
    },
    gl1_12: {
        text: "На много лун над островом нависла тень вулканической богини. Поисковые группы прочесывали местность, но маму Лейла так и не нашла.",
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
        background: "assets\images\backgrounds\cutscenes\gl1_15.MP4",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        audio: "assets/audio/heartbeat.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_16" }
        ]
    },
    gl1_16: {
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
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        audio: "assets/audio/relax_music.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_18" }
        ]
    },
    gl1_18: {
        text: "Лейла вскочила на кровати. Уведомление: Пууваи, 15 ноября, 2008 год. 08:00",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_19" }
        ]
    },
    gl1_19: {
        text: "Тут же в голову ударила резкая боль: последняя рюмка настойки была лишней.\nПридя в себя, Лейла услышала: об окно бились камушки.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" },
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_20" }
        ]
    },
    gl1_20: {
        text: "С улицы донеслось нетерпеливое: «Просыпайся!»",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_21" }
        ]
    },
    gl1_21: {
        text: "Hauna.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [
            { name: "Лейла", image: "assets\images\characters\Leila_shadow.PNG", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_22" }
        ]
    },
    gl1_22: {
        text: "Лейла сползла с кровати подошла к окну.\nВнизу из стороны в сторону, озираясь по сторонам, сновал Хани.", 
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_23" }
        ]
    },
    gl1_23: {
        text: "Что это с ним?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_6" }
        ]
    },
    choicegl1_3_1_6: {
        text: "В окно снова ударился камень.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_3" }
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
        text: " “Она так редко бывала дома.”",
        background: "assets\images\backgrounds\mirror.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_5" }
        ]
    },
    choicegl1_3_2_5: {
        text: "“Почти десять лет назад.”",
        background: "assets\images\backgrounds\mirror.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        text: "Лейла натянуто улыбнулась собственному отражению: растрепанные волосы, раскрасневшиеся щеки, рассеченные тонкими шрамами от ожогов.\nИ тут же вздрогнула: в окно снова ударился камень.",
        background: "assets\images\backgrounds\mirror.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_8" }
        ]
    },
    gl1_31: {
        text: "Лейла подскочила к окну, открыла створку – и в нее чуть было не влетел камень.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_32" }
        ]
    },
    gl1_32: {
        text: "Успела увернуться, перевесилась через подоконник и крикнула:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_33" }
        ]
    },
    gl1_33: {
        text: "И тебе доброе... утро...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        text: "",
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
        characters: [assets\images\characters\Hani0.png],
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
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_5" }
        ]
    },
    choicegl1_4_1_5: {
        text: "Я что, знала, что ты лезешь? Забирайся, тяжелый, как тюлень...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_6" }
        ]
    },
    choicegl1_4_1_6: {
        text: "Это мышцы! И годы тренировок.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_1_7" }
        ]
    },
    choicegl1_4_1_7: {
        text: "Вместо того, чтобы запрыгнуть в окно, Хани, красуясь, начал подтягиваться на ветке.\nТа жалобно заскрипела.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_35" }
        ]
    },
    choicegl1_4_2_1: {
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
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_3" }
        ]
    },
    choicegl1_4_2_3: {
        text: "Не ожидал, Лейла...»",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_4" }
        ]
    },
    choicegl1_4_2_4: {
        text: "Прости! Это я не ожидала, что ты так быстро залезешь.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_5" }
        ]
    },
    choicegl1_4_2_5: {
        text: "А что тут лезть?\nВ доказательство своих слов, Хани, ловко переставляя руки, взобрался еще выше.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_6" }
        ]
    },
    choicegl1_4_2_6: {
        text: "Я бы спилил эту ветку, так ведь любой дурак в окно влезть может.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_4_2_7" }
        ]
    },
    choicegl1_4_2_7: {
        text: "Я пока что вижу только одного.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        characters: [assets\images\characters\Hani0.png],
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
        choices: [
            { text: "Дальше", nextScene: "gl1_37" }
        ]
    },
    gl1_37: {
        text: "Сторонись!\nРаскачавшись в воздухе ногами, Хани с грохотом влетел в окно.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Hani0.png],
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
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "gl1_42" }
        ]
    },
    gl1_42: {
        text: "Вновь прогремело:\nП:ХАНИ!!!",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_43" }
        ]
    },
    gl1_43: {
        text: "И меня ищет мой бывший босс...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "gl1_44" }
        ]
    },
    gl1_44: {
        text: "ЛЕЙЛАННИ?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\pilipo.png],
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
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "gl1_48" }
        ]
    },
    gl1_48: {
        text: "Пилипо, доброе утро! “Охиа” сегодня не принимает посетителей, сами понимаете – подготовка к празднику. ",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "gl1_49" }
        ]
    },
    gl1_49: {
        text: "Конечно, Лейланни, я по делу.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\pilipo.png],
        choices: [
            { text: "Дальше", nextScene: "gl1_50" }
        ]
    },
    gl1_50: {
        text: "Ищете Тутувахини?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "gl1_51" }
        ]
    },
    gl1_51: {
        text: "Нет, но… Как она себя чувствует?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\pilipo.png],
        choices: [
            { text: "Дальше", nextScene: "gl1_52" }
        ]
    },
    gl1_52: {
        text: "Как всегда. В хлопотах перед праздником.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "gl1_53" }
        ]
    },
    gl1_53: {
        text: "Слушай, Лейланни. Ты же дружишь с Хани? Не видела его?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\pilipo.png],
        choices: [
            { text: "Дальше", nextScene: "gl1_54" }
        ]
    },
    gl1_54: {
        text: "Лейла перевесилась через подоконник  и, вытянувшись, оглядела деревню.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_55" }
        ]
    },
    gl1_55: {
        text: "Жизнь здесь текла спокойно: под переливы укулеле щебетали птицы, девочки плели цветочные ожерелья, мальчишки мерились силой.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_56" }
        ]
    },
    gl1_56: {
        text: "Нет, не видать. Что-то ему передать?",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "Дальше", nextScene: "gl1_57" }
        ]
    },
    gl1_57: {
        text: "Да...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\pilipo.png],
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
        characters: [assets\images\characters\pilipo.png],
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
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        text: "Что ж, надеюсь, я найду его раньше. Счастливого Макахики тебе и бабушке!",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\pilipo.png],
        choices: [
            { text: "Дальше", nextScene: "gl1_64" }
        ]
    },
    gl1_64: {
        text: "Проведите праздник...",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
        choices: [
            { text: "С семьей!", nextScene: "choicegl1_5" }
            { text: "С удовольствием!", nextScene: "choicegl1_5" }
        ]
    },
          
    choicegl1_5: {
        text: "Спасибо, Лейланни.",
        background: "assets\images\backgrounds\room_window.png",
        characters: [assets\images\characters\pilipo.png],
        choices: [
            { text: "Дальше", nextScene: "l1_66" }
        ]
    },
    gl1_66: {
        text: "Проследив за Пилипо взглядом, Лейла обернулась к Хани:",
        background: "assets\images\backgrounds\room_window.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_67" }
        ]
    },
    gl1_67: {
        text: "Проработал пять дней. Уже уволен?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [assets\images\characters\Leila_shadow.PNG],
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
        characters: [assets\images\characters\Hani0.png],
        choices: [
            { text: "Дальше", nextScene: "gl1_70" }
        ]
    },
    gl1_70: {
        text: "Л: Тебе, вроде, нравилась эта работа? Что-то натворил?",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_71" }
        ]
    },
    gl1_71: {
        text: "Может быть.",
        background: "assets\images\backgrounds\room_morning.png",
        characters: [assets\images\characters\Hani0.png],
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