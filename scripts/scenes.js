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
        video: "assets/images/backgrounds/dis3.mp4",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "dis1" }
        ]
    },
    dis1: {
        text: "В начале был Пу,"
,
        background: "assets/images/backgrounds/dis.mov",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "dis2" }
        ]
    },
    dis2: {
        text: "Из Пу произошел Коре"
,
        background: "assets/images/backgrounds/dis.mov",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_1" }
        ]
    },
    // Сцены из истории
    gl1_1: {
        text: "Мама: Считается, что все наши острова созданы из плоти и крови Пеле. Что жизнь посреди океана выкована огнем.",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_text" }
        ]
    },
    gl1_text: {
        text: "Лейла слушала маму, затаив дыхание.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice" }
        ]
    },
    gl1_choice: {
        text: "Остров утопал...",
        background: "",
        characters: [],
        choices: [
            { text: "в тишине", nextScene: "choice1" },
            { text: "в ливнях", nextScene: "choice2" },
        ]
    },
    choice1: {
        text: "Только мотыльки бились об окно - в доме еще горел свет.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_textmom"},
        ]
    },
    choice2: {
        text: "Тяжелые капли дождя разбивались об окно.\nВетер хлестал водой по деревьям.\nА дома было тепло и сухо.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_textmom" },
        ]
    },
    gl1_textmom: {
        text: "Мама: Создала для нас землю, драгоценные камни, пищу для растений. И…",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_text1" }
        ]
    },
    gl1_text1: {
        text: "Мама, звеня ракушками, вложила Лейле в ладошки браслет.\nОчищенный перламутр сиял ярче тусклой комнатной лампы.\nРыбацкой леской в браслет был вплетен прозрачный темный камень.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_2" }
        ]
    },
    gl1_2: {
        text: "Лейла: Что это?",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",   
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_3" }
        ]
    },
    gl1_3: {
        text: "Мама: Это, как говорят на Большой Земле, обсидиан… вулканическое стекло. Там, где встречаются Пеле и Намака, огонь и вода, они навеки застывают. Сестра не может пойти против сестры - обе проиграют..",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4" }
        ]
    },
    gl1_4: {
        text: "Мама: Носи его и не снимай. И у меня….",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_4_1" }
        ]
    },
    gl1_4_1: {
        text: "Мама показала свою руку.",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_5" }
        ]
    },
    gl1_5: {
        text: "Мама: Такой же. Это дар Пеле. Ты знаешь, как обращаться с ее дарами?",
        background: "assets/images/backgrounds/leilas_room_puuvai_old.jpg",
        characters: [
            { name: "Мама", image: "assets/images/characters/leilas_mom.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_6" }
        ]
    },
    gl1_6: {
        text: "Лейла: Уважительно?",
        background: "",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila.png", position: "center" }
        ],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_1" }
        ]
    },
    gl1_6_1: {
        text: "Мама:  Да… Бери, но отдавай что-то взамен. Никогда не пользуйся благами земли сверх меры. Такого она не потерпит. Как зашумит земля, как польется лава! Нрав огня неукротим… Раз – и!?",
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
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_6_3" }
        ]
    },
    gl1_6_3: {
        text: "Мама: Как вспылит!",
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
        background: "",
        characters: [],
        audio: "",
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
            { text: "Дальше", nextScene: "gl1_7_1" }
        ]
    },
    gl1_7_1: {
        text: "Сквозь грохот, срывая горло, Лейлу звал друг:",
        background: "",
        characters: [],
        audio: "",
        choices: [
            { text: "Дальше", nextScene: "gl1_8" }
        ]
    },
    // Сцены с Хани
    gl1_8: {
        text: "Хани: «Лейла!»",
        background: "assets/images/backgrounds/forest_night.jpg",
        characters: [
            { name: "Хани", image: "assets/images/characters/hani.png", position: "left" },
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
        text: "Деревня была наполовину разрушена. Многие пострадали. Кто-то умер. Кто-то пропал.",
        background: "assets/images/backgrounds/destroyed_village.jpg",
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
        text: "В голове доносился крик: «ЛЕЙЛА!» ",
        background: "assets/images/backgrounds/white_screen.jpg",
        characters: [],
        audio: "assets/audio/scream.mp3",
        choices: [
            { text: "Дальше", nextScene: "gl1_17" }
        ]
    },
    // Современная локация
    gl1_17: {
        text: "ЛОКАЦИЯ: КОМНАТА ЛЕЙЛЫ В ПУУВАИ",
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
        text: "Тут же в голову ударила резкая боль: последняя рюмка настойки была лишней.\nПридя в себя, Лейла услышала: об окно бились камушки.",
        background: "assets/images/backgrounds/leilas_window.jpg",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" },
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_20" }
        ]
    },
    gl1_20: {
        text: "С улицы донеслось нетерпеливое: «Просыпайся!»",
        background: "assets/images/backgrounds/leilas_room_morning.jpg",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_21" }
        ]
    },
    gl1_21: {
        text: "Hauna.",
        background: "",
        characters: [
            { name: "Лейла", image: "assets/images/characters/leila_modern.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_22" }
        ]
    },
    gl1_22: {
        text: "Лейла сползла с кровати подошла к окну.\nВнизу из стороны в сторону, озираясь по сторонам, сновал Хани.", 
        background: "assets/images/backgrounds/leilas_mirror.jpg",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_23" }
        ]
    },
    gl1_23: {
        text: "Что это с ним?",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_24" }
        ]
    },
    gl1_24: {
        text: "Солнце было еще низко.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_25" }
        ]
    },
    gl1_25: {
        text: "Разбудил в такую рань!? Как сам умудрился проснуться после такой попойки…",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_26" }
        ]
    },
    gl1_26: {
        text: "Голова гудела. Ныло правое запястье. Еще вчера на нем висел браслет. Мамин. Сейчас здесь красовался синяк.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_27" }
        ]
    },
    gl1_27: {
        text: "Оставила мамин браслет у Хани?... И как я попала домой?",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_28" }
        ]
    },
    gl1_28: {
        text: "Вашей героине предстоит сделать первый выбор, определяющий ее путь.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_29" }
        ]
    },
    gl1_29: {
        text: "Героиня, следующая Пути Цветка, пылкая и яркая, ей нравится быть в центре внимания. Она действует спонтанно, принимает неожиданные решения, стремится исследовать мир далеко за пределами дома. Ее значимость определяется личностными качествами.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_30" }
        ]
    },
    gl1_30: {
        text: "Героиня по Пути Ракушки поступает взвешенно, с оглядкой на свою семью. Она чтит традиции рода. Героиня знает: в ее сердце спрятана жемчужина, и, если раскрываться каждому встречному, рано или поздно сокровенное отнимут. Ее значимость определяется знатным происхождением.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_choice3" }
        ]
    },
    gl1_choice3: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Привести себя в порядок после сна.", nextScene: "choicegl1_3_1" },
            { text: "Прочитать мамину записку.", nextScene: "choicegl1_3_2" }
        ]
    },
    choicegl1_3_1: {
        text: "Волосы были растрепаны, кожа раскраснелась, словно обожженная полуденным солнцем.\nБольше всего горели шрамы, пробегавшие тонкой полоской по щекам.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_2" }
        ]
    },
    choicegl1_3_1_2: {
        text: "Вот-вот минёт десять лет с той ночи.\nТогда Лейла почти не плакала: по утрам она обыскивала леса, а по вечерам - восстанавливала семейное кафе.\nТеперь девушка вспоминала о своей боли, только глядя в зеркало на ожоги, так похожие на две дорожки невыплаканных слез.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_3" }
        ]
    },
    choicegl1_3_1_3: {
        text: "Горечь утраты не прошла: только сжималась внутри под натиском времени.\nЗакаляла.\nКак и мама, Лейла с поднятой головой встречала любые невзгоды.Всегда повторяла про себя слова с записки, оставленной мамой перед исчезновением, а теперь украшавшей зеркало.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "note1" }
        ]
    },
    note1: {
        text: "“A smooth sea never made a skilled sailor”.\n“В спокойном море не стать хорошим моряком”.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_4" }
        ]
    },
    choicegl1_3_1_4: {
        text: "Написано было по-английски. Язык, который на Ниихау понимали только они: мать и дочь.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_5" }
        ]
    },
    choicegl1_3_1_5: {
        text: "В окно снова прилетел камень.",
        text: "Лейла, торопясь, расчесала вьющиеся волосы…",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_6" }
        ]
    },
    choicegl1_3_1_6: {
        text: "В окно снова ударился камень.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_1_3" }
        ]
    },
    choicegl1_3_2: {
        text: "Пока бабушка Лейлы не пускала хоуле и на порог семейного кафе, ее мама с открытым сердцем слушала рассказы о Большой Земле.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_1" }
        ]
    },
    choicegl1_3_2_1: {
        text: "От нее Лейла научилась говорить и читать на английском языке.\nКаждый день, перед тем, как куда-то уйти, Ноелани оставляла для дочки под рамой зеркала записку.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_2" }
        ]
    },
    choicegl1_3_2_2: {
        text: " “Она так редко бывала дома.”",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_3" }
        ]
    },
    choicegl1_3_2_3: {
        text: "Ровным почерком по-английски было выведено:\n“A smooth sea never made a skilled sailor”\n“В спокойном море не стать хорошим моряком”",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_4" }
        ]
    },
    choicegl1_3_2_4: {
        text: "Чернила почти выцвели. Как давно это было…",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_5" }
        ]
    },
    choicegl1_3_2_5: {
        text: "“Почти десять лет назад.”",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_6" }
        ]
    },
    choicegl1_3_2_6: {
        text: "От этой мысли зажгло кончики ушей.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_7" }
        ]
    },
    choicegl1_3_2_7: {
        text: "Лейла натянуто улыбнулась собственному отражению: растрепанные волосы, раскрасневшиеся щеки, рассеченные тонкими шрамами от ожогов.\nИ тут же вздрогнула: в окно снова ударился камень.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "choicegl1_3_2_8" }
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