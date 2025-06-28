/**
 * Модуль сцен визуальной новеллы
 * Содержит все сцены игры с их описанием, фонами, персонажами и выборами
 */
const scenes = {
    // Основные сцены
    menu: {
        text: "Добро пожаловать! Выберите действие:",
        background: "assets/images/backgrounds/return_ticket/preview.png",
        characters: [],
        choices: [
            { text: "Начать игру", nextScene: "dis" },
            { text: "Выход", nextScene: "end" }
        ]
    },
    // Сцены из истории
    gl1_name: {
        text: "Глава 1. Город, который ест по расписанию",
        background: "assets/images/backgrounds/return_ticket/city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_1" }
        ]
    },
    // Сцена 1: ГГ дома
    // Локация: комната ГГ
    gl1_sc1_1: {
        text: "Утро.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        audio: "assets/audio/return_ticket/sounds/alarm.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_2" }
        ]
    },
    gl1_sc1_2: {
        text: "6:05.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        audio: "assets/audio/return_ticket/sounds/alarm.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_3" }
        ]
    },
    gl1_sc1_3: {
        text: "Звон будильника этим утром ощущался как ведро ледяной воды, опрокинутое на себя после бани, от которого аж хочется взвизгнуть  – ожидаемо, но чрезмерно отрезвляюще.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        audio: "assets/audio/return_ticket/sounds/alarm.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_4" }
        ]
    },
    gl1_sc1_4: {
        text: "В такую рань, когда за окном до сих пор темно, воздух в квартире кажется особенно холодным и тяжелым, а одеяло – особенно манящим.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_5" }
        ]
    },
    gl1_sc1_5: {
        text: "Одеяло ощущается как объятия любимой бабушки, как, собираясь в школу, залезть в теплые колготки, как первый тёплый день после зимы длиной в шесть месяцев.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_6" }
        ]
    },
    gl1_sc1_6: {
        text: "Существует ли что-то более приятное, чем забуриться пасмурным дождливым утром в теплую постель и никуда не спешить?",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_7" }
        ]
    },
    gl1_sc1_7: {
        text: "Однако пора вставать.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Поднять себя с кровати сразу – мир не ждёт.", nextScene: "gl1_sc1_7_choice1_1" }, // + Целеустремлённость
            { text: "Полежать ещё пять минут – мир и так без тебя справляется.", nextScene: "gl1_sc1_7_choice2_1" } // + Размеренность
        ]
    },
    gl1_sc1_7_choice1_1: {
        text: "Как всегда говорила мама: «Есть такое слово – надо». Пора начинать новый день.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_8" }
        ]
    },
    gl1_sc1_7_choice2_1: {
        text: "Пять минут плавно перетекли в пятнадцать, которые притом едва ли что-то поменяли. Теперь точно пора вставать.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_8" }
        ]
    },
    gl1_sc1_8: {
        text: "Откинув одеяло, ты садишься на край кровати. С полузакрытыми глазами не сразу удается нащупать тапки. Холодный ламинат – не самый приятный, но тем не менее рабочий способ взбодриться.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_9" }
        ]
    },
    gl1_sc1_9: {
        text: "Ловким движением руки, даже не задумываясь, ты собираешь волосы в пучок.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_10" }
        ]
    },
    gl1_sc1_10: {
        text: "Каждое движение доведено до автоматизма. Каждое утро одинаковое.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_11" }
        ]
    },
    // Локация: вид из окна
    gl1_sc1_11: {
        text: "Подойдя к окну, ты распахиваешь серые шторы. Несмотря на это, в комнате светлее не становится.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_12" }
        ]
    },
    gl1_sc1_12: {
        text: "Над бесконечно огромным городом, конца и края которого не видать даже с твоего 24 этажа, нависло небо стального цвета, в котором нет ни одного просветления, ни намека на солнце.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_13" }
        ]
    },
    gl1_sc1_13: {
        text: "Весь город словно накрыт металлической крышкой.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_14" }
        ]
    },
    gl1_sc1_14: {
        text: "Дождь моросит. Его едва видно, но отчетливо слышно – он барабанит по подоконнику, задавая ритм сегодняшнему утру.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_15" }
        ]
    },
    gl1_sc1_15: {
        text: "Несмотря на то, что на часах всего лишь 6 утра, на улице уже суета: куда-то торопятся люди с зонтами, спешат и машины с беспрестанно работающими дворниками, едут автобусы, которые никогда никого не ждут и безжалостно захлопывают двери прямо перед носом вечно опаздывающих пассажиров.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_16" }
        ]
    },
    gl1_sc1_16: {
        text: "Май в столице – не весна, а ожидание весны. Но почему-то это ожидание затянулось.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17" }
        ]
    },
    // Персонаж: ГГ в ночнушке
    gl1_sc1_17: {
        text: "«Кажется, весна не торопится в этот город. Может быть, ей здесь просто не нравится?»",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Собрать силы в кулак. «Я знала, на что шла.»", nextScene: "gl1_sc1_17_choice1_1" }, // + Реалист
            { text: "Позволить себе легкую тоску.", nextScene: "gl1_sc1_17_choice2_1" } // + Мечтатель
        ]
    },
    gl1_sc1_17_choice1_1: {
        text: "Ты вспоминаешь, как приехала в столицу. Огромный вокзал. Чемодан на трёх колёсах. И точно такой же мелкий, промозглый дождь.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_2" }
        ]
    },
    gl1_sc1_17_choice1_2: {
        text: "– Я справлюсь, – тогда ты сказала это вслух, как мантру.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_3" }
        ]
    },
    gl1_sc1_17_choice1_3: {
        text: "И справилась. Жильё, работа, учёба, связи – всё сама.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_4" }
        ]
    },
    gl1_sc1_17_choice1_4: {
        text: "Ты выдыхаешь. Всё ещё держишься. Всё ещё идёшь по курсу.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_5" }
        ]
    },
    gl1_sc1_17_choice1_5: {
        text: "«Я знала, на что шла. Я ехала сюда пахать, строить жизнь мечты, становиться лучшей версией себя. А отдыхать, ловить момент и наслаждаться размеренной жизнью я могла бы и дома.»",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_18" }
        ]
    },
    gl1_sc1_17_choice2_1: {
        text: "По подоконнику стучит дождь. Ты смотришь, как капля стекает по стеклу – медленно, нерешительно, периодически останавливаясь, будто делает передышку.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_2" }
        ]
    },
    gl1_sc1_17_choice2_2: {
        text: "В голове вдруг всплывает забытый запах: мокрая черемуха, запах прибитой к асфальту пыли и сырых досок старого крыльца.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_3" }
        ]
    },
    gl1_sc1_17_choice2_3: {
        text: "Ты даже не помнишь, откуда это. Просто… было. Как будто и вовсе в другой жизни.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_4" }
        ]
    },
    gl1_sc1_17_choice2_4: {
        text: "Как будто что-то внутри говорит: «Вернись». Не навсегда. Хотя бы на чуть-чуть. Просто – к себе, к родным.",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_5" }
        ]
    },
    gl1_sc1_17_choice2_5: {
        text: "«Интересно, как там дома?»",
        background: "assets/images/backgrounds/return_ticket/window_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_sad.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_18" }
        ]
    },
    // Локация: комната ГГ
    gl1_sc1_18: {
        text: "«Хм, любопытно это всё… Я в столице уже пятый год. Здесь моя работа, мои друзья, здесь вся моя жизнь. Но почему же я называю домом другой город, который я давно покинула? А где вообще мой дом?...»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_sad.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_19" }
        ]
    },
    gl1_sc1_19: {
        text: "Зазвенел очередной будильник, который ты включаешь на всякий случай, вдруг проспишь. Но в его раздражающем звуке в этот раз было хоть что-то хорошее – он прервал бесконечную пучину мыслей, бурлящую в голове.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_19_added" }
        ]
    },
    gl1_sc1_19_added: {
        text: "«Пора собираться.»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_20" }
        ]
    },
    gl1_sc1_20: {
        text: "Каждое утро происходит словно по чек-листу: встать, открыть шторы, собрать волосы, заправить кровать, ведь «если вы хотите изменить жизнь и, быть может, мир – сначала заправьте кровать!».",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_21" }
        ]
    },
    gl1_sc1_21: {
        text: "«Ты приехала в большой город за успешной карьерой, за большими деньгами, за лучшей жизнью. Так что о незаправленной кровати не может быть и речи. Мы ведь не согласны на меньшее, так?",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_22" }
        ]
    },
    gl1_sc1_22: {
        text: "Следующий пункт чек-листа: выпить воду с лимоном. Как советуют нутрициологи, нужно пробудить свой организм изнутри. Ты ищешь кружку, но вот незадача – все кружки в раковине.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_23" }
        ]
    },
    gl1_sc1_23: {
        text: "Ты опять забыла, не успела (или не захотела?) перемыть посуду. Конечно, после работы на такую мелочь просто не остаётся сил.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_24" }
        ]
    },
    gl1_sc1_24: {
        text: "«Хм, может, пора уже купить посудомойку? Она сэкономит мне столько времени. Хотя, это же съемная квартира. Не хочется потратить деньги и услышать, что мне необходимо съехать. Наверное, именно поэтому я до сих пор не чувствую себя здесь дома.»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_25" }
        ]
    },
    gl1_sc1_25: {
        text: "Это жилье словно говорит: «Я временное. Я не постоянное.» Своего рода промежуточный пункт в большом путешествии.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_26" }
        ]
    },
    gl1_sc1_26: {
        text: "Ты смотришь на грязные кружки в раковине, на приклеенные на скотч крючки для полотенец, которые бесконечно отваливаются. Полноценные крючки повесить не получится – хозяйка запретила сверлить стены.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дом – это там, где ты строишь своё. Пусть даже с нуля.", nextScene: "gl1_sc1_26_choice1_1" }, // + Реалист
            { text: "Дом – это не стены. Это чувство. Тепло, запах, воздух.", nextScene: "gl1_sc1_26_choice2_1" } // + Мечтатель
        ]
    },
    gl1_sc1_26_choice1_1: {
        text: "Ты представляешь свою квартиру – не съёмную, а настоящую. Стены – цвета, который ты выбрала сама. Полки, картины и крючки – прикручены, а не приклеены, книги, фото в рамках – для души, а не ради эстетики.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_26_choice1_2" }
        ]
    },
    gl1_sc1_26_choice1_2: {
        text: "«Я обязательно сделаю это. Здесь. Или где захочу. Но сама.»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_27" }
        ]
    },
    gl1_sc1_26_choice2_1: {
        text: "Ты закрываешь глаза и представляешь окно в своей комнате у родителей. Лёгкий сквозняк, скрипящий пол, запах цветущей под окном сирени, разлетающийся тюль.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_26_choice2_2" }
        ]
    },
    gl1_sc1_26_choice2_2: {
        text: "«Дом – это не про недвижимость. Это про ощущение безопасности, любви, комфорта. Дом – это там, где тебе хорошо, где тебя любят и ждут.»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_27" }
        ]
    },
    gl1_sc1_27: {
        text: "На часах тем временем 6:40. Скоро выходить на работу, а ещё столько дел – душ, макияж, завтрак. Пора ускоряться!",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_28" }
        ]
    },
    gl1_sc1_28: {
        text: "Подойдя к зеркалу после душа, ты обращаешь внимание на тёмные круги под глазами.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_29" }
        ]
    },
    // Персонаж: ГГ в ночнушке грустная
    gl1_sc1_29: {
        text: "«Боже мой, как давно они у меня? Они появились сегодня, или я просто не обращала на них внимания раньше? Кажется, мне нужно хорошо отоспаться на выходных. А может быть, мне вообще пора в отпуск?»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_sad.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_30" }
        ]
    },
    gl1_sc1_30: {
        text: "«Нет, а как же мой проект?... Я ведь не могу уйти в отпуск, не сдав его. Но такими темпами я вообще никогда не отдохну…»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_31" }
        ]
    },
    gl1_sc1_31: {
        text: "Бесконечную волну размышлений прервало оповещение.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        audio: "assets/audio/return_ticket/sounds/vibrating_phone.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_32" }
        ]
    },
    gl1_sc1_32: {
        text: "Босс:\n– Привет, ты в метро уже?",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_33" }
        ]
    },
    gl1_sc1_33: {
        text: "Ты смотришь на экран. 7:15. До начала рабочего дня ещё больше полутора часа. Ты стоишь в ночной рубашке с мокрыми волосами.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34" }
        ]
    },
    gl1_sc1_34: {
        text: "Ты даже ещё не приступила к началу дня, не выпила кофе и уж тем более не вышла из дома. Но он – уже требует ответа.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "«Проигнорировать»", nextScene: "gl1_sc1_34_choice1_1" }, // + Размеренность
            { text: "Ответить: «Скоро выхожу»", nextScene: "gl1_sc1_34_choice2_1" } // + Целеустремлённость
        ]
    },
    // Персонаж: ГГ в ночнушке нейтральная
    gl1_sc1_34_choice1_1: {
        text: "Закатывая глаза, ты вслух проговариваешь, словно пытаясь убедить саму себя: «Мой рабочий день начинается в 9:00, я не обязана ему отвечать в своё свободное время.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_2" }
        ]
    },
    gl1_sc1_34_choice1_2: {
        text: "Ты откладываешь телефон экраном вниз, завариваешь чай, накрываешь на стол.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_3" }
        ]
    },
    gl1_sc1_34_choice1_3: {
        text: "Включаешь музыку потише. Впервые за долгое время ты завтракаешь, не глядя в экран.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_4" }
        ]
    },
    gl1_sc1_34_choice1_4: {
        text: "Начальник подождёт. Мир не обрушится, если я отвечу на 20 минут позже.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_5" }
        ]
    },
    gl1_sc1_34_choice1_5: {
        text: "После завтрака – ты не спешишь. Лёгкая укладка, макияж «без макияжа». Ничего лишнего, но взгляд становится яснее.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_6" }
        ]
    },
    gl1_sc1_34_choice1_6: {
        text: "Открываешь шкаф, проводишь пальцами по ряду одинаково сдержанных вещей.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_7" }
        ]
    },
    // Персонаж: ГГ в платье нейтральная
    gl1_sc1_34_choice1_7: {
        text: "На автомате могла бы выбрать беспроигрышное комбо – водолазку и бежевый жакет, но сегодня рука тянется к другому –\nчерное платье, нежное, почти невесомое, но строгое по крою. В нём ты чувствуешь себя особенно уверенно.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_8" }
        ]
    },
    gl1_sc1_34_choice1_8: {
        text: "Смотришь в зеркало:\nвсё на месте.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_9" }
        ]
    },
    gl1_sc1_34_choice1_9: {
        text: "Ты готова – не к бою, а к дню. И между этими вещами огромная разница.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_35" }
        ]
    },
    gl1_sc1_34_choice2_1: {
        text: "Ты отвечаешь. И тут же ставишь таймер: 4 минуты на укладку, 3 – на макияж, 5 минут на сборы, 3 – на кофе.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_2" }
        ]
    },
    gl1_sc1_34_choice2_2: {
        text: "«Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_3" }
        ]
    },
    gl1_sc1_34_choice2_3: {
        text: "Ты собираешь волосы в узел, включаешь плейлист с бодрой музыкой и почти одновременно собираешь сумку и надеваешь брюки.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_4" }
        ]
    },
    // Персонаж: ГГ в брюках нейтральная
    gl1_sc1_34_choice2_4: {
        text: "Именно так ты и выживаешь в столице – идя всегда чуть быстрее, чем хотелось бы.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_5" }
        ]
    },
    gl1_sc1_34_choice2_5: {
        text: "Босс:\n– Поторопись, жду тебя в офисе.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        audio: "assets/audio/return_ticket/sounds/vibrating_phone.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_35" }
        ]
    },
    // ГГ должна быть одета в то, что выбрала в предыдущем варианте - платье/штаны
    gl1_sc1_35: {
        text: "Пора выходить, иначе опоздаешь!\nПеред самым выходом ты замечаешь в шкатулке кольцо.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36" }
        ]
    },
    gl1_sc1_36: {
        text: "Мамино. Старое. С потертой оправой. Когда-то ты считала, что оно приносит удачу. В школе надевала его на каждую контрольную и уж тем более на экзамен.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Вернуться и надеть мамино кольцо. Немного удачи не навредит.", nextScene: "gl1_sc1_36_choice1_1" }, // + Мечтатель
            { text: "Проверить, ничего ли не забыла взять: ноутбук, зарядка, ланчбокс, расчёска, телефон.", nextScene: "gl1_sc1_36_choice1_2" } // + Реалист
        ]
    },
    gl1_sc1_36_choice1_1: {
        text: "Ты берёшь кольцо и надеваешь его на средний палец. Оно чуть велико, но сидит надёжно.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36_choice1_2" }
        ]
    },
    gl1_sc1_36_choice1_2: {
        text: "«Пусть будет со мной. Чуточки магии и удачи мне совсем не помешают.»",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_happy.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36_choice1_3" }
        ]
    },
    gl1_sc1_36_choice1_3: {
        text: "Это почти как поцелуй в лоб перед выходом. Только от себя самой.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_37" }
        ]
    },
    gl1_sc1_36_choice2_1: {
        text: "Некогда возвращаться за кольцом. Вместо этого ты открываешь сумку и быстро пробегаешь по чек-листу в голове.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36_choice2_2" }
        ]
    },
    gl1_sc1_36_choice2_2: {
        text: "Каждая вещь – якорь, элемент твоего контроля над этим днём.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_37" }
        ]
    },
    gl1_sc1_37: {
        text: "Ты бросаешь последний взгляд на комнату. Свет выключен. Дверь захлопнулась с глухим «щелк». Лифт уже на твоём этаже. Город – за дверью. Ждёт.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_38" }
        ]
    },
    gl1_sc1_38: {
        text: "7:50.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_1" }
        ]
    },
    // Сцена 2: По дороге на работу
    // Локация: метро
    // Персонаж: ГГ в пальто
    gl1_sc2_1: {
        text: "Подземка. Люди идут – плотной массой, как лосось на нересте. Кто-то пьёт кофе из бумажного стакана, кто-то читает новости, кто-то просто… засыпает на ходу.",
        background: "assets/images/backgrounds/return_ticket/subway.png",
        audio: "assets/audio/return_ticket/ambience/talking_people.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_2" }
        ]
    },
    gl1_sc2_2: {
        text: "На платформе – духота. Кажется, вот-вот, и кислород здесь закончится. Но наконец из тоннеля выныривает поезд, обдавая толпу мощными потоками воздуха. Люди толпятся у входа в вагон.",
        background: "assets/images/backgrounds/return_ticket/subway.png",
        audio: "assets/audio/return_ticket/ambience/talking_people.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_3" }
        ]
    },
    gl1_sc2_3: {
        text: "«Вот бы успеть занять сидячее место.»",
        background: "assets/images/backgrounds/return_ticket/subway.png",
        audio: "assets/audio/return_ticket/ambience/talking_people.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_4" }
        ]
    },
    // Локация: вагон метро
    gl1_sc2_3_cutscene: {
        text: "",
        background: "assets/images/cut_scenes/return_ticket/gl1/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_4" }
        ]
    },
    gl1_sc2_4: {
        text: "Увы, не сегодня.",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_5" }
        ]
    },
    gl1_sc2_5: {
        text: "«Ну ничего. Совсем скоро меня повысят, и я себе обещаю – я обязательно буду ездить на работу на такси. Я заслуживаю большего!»",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_6" }
        ]
    },
    gl1_sc2_6: {
        text: "Станции летят одна за другой.",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_7" }
        ]
    },
    gl1_sc2_7: {
        text: "«Такое ощущение, что я полжизни провожу в метро.»",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_8" }
        ]
    },
    gl1_sc2_8: {
        text: "За стеклом – чёрный туннель, мигающий огоньками.",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_9" }
        ]
    },
    gl1_sc2_9: {
        text: "«Тоннель метро – это словно наша жизнь. Кажется такой длинной, а на самом деле только успевай оглядываться и замечать, как она пролетает. Огоньки – это люди, встречающиеся на нашем пути. Их помощь и поддержка позволяет нам двигаться вперёд. ",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_10" }
        ]
    },
    gl1_sc2_10: {
        text: "А станции – это наши цели. Кто-то едет в Успехово, кто-то в Семейное, а кто-то просто катается на поездах и получает удовольствие от процесса. А куда вообще еду я?»",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_11" }
        ]
    },
    gl1_sc2_11: {
        text: "Вдруг в наушниках заиграла песня. Особенная песня. От нее все твое тело покрылось мурашками, а мир вокруг перестал существовать.  Перед глазами уже не вагон, не толпа, не станция…",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        audio: "assets/audio/return_ticket/music/village_flashback.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_12" }
        ]
    },
    // Локация: серые хрущевки + цветущая сирень (возможно, в блюре, поскольку это воспоминания)
    gl1_sc2_12: {
        text: "А майские вечера в родном городе. Свежий воздух, ароматная сирень, легкое волнение от экзаменов.",
        background: "assets/images/backgrounds/return_ticket/buildings_and_lilac_evening.png",
        audio: "assets/audio/return_ticket/music/village_flashback.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13" }
        ]
    },
    gl1_sc2_13: {
        text: "Его руки. Его голос. Его прикосновения. Первый поцелуй. Первые планы. Конечно же, совместные.",
        background: "assets/images/backgrounds/return_ticket/buildings_and_lilac_evening.png",
        audio: "assets/audio/return_ticket/music/village_flashback.mp3",
        characters: [],
        choices: [
            { text: "Позволить себе улыбнуться. Тепло прошлого всё ещё во мне.", nextScene: "gl1_sc2_13_choice1_1" }, // + Мечтатель
            { text: "Отогнать воспоминание. Время двигаться дальше.", nextScene: "gl1_sc2_13_choice2_1" } // + Реалист
        ]
    },
    gl1_sc2_13_choice1_1: {
        text: "Ты закрываешь глаза и на секунду позволяешь себе поверить: «Тогда казалось, что нет ничего невозможного. Скучаю по этому ощущению.»",
        background: "assets/images/backgrounds/return_ticket/buildings_and_lilac_evening.png",
        audio: "assets/audio/return_ticket/music/village_flashback.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13_choice1_2" }
        ]
    },
    // Локация: вагон метро
    gl1_sc2_13_choice1_2: {
        text: "Звонкий голос диктора, озвучивающий станции, вернул тебя в текущую действительность. Большой город, карьера в компании мечты, амбиции – всё, как ты мечтала.",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_14" }
        ]
    },
    gl1_sc2_13_choice2_1: {
        text: "Ты резко переключаешь трек. Звук меняется – и с ним внутренний темп.",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        audio: "assets/audio/return_ticket/music/night_city_vibe.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13_choice2_2" }
        ]
    },
    gl1_sc2_13_choice2_2: {
        text: "«Это уже было. Сейчас другое. Главное – не отвлекаться и помнить о своей цели.»",
        background: "assets/images/cut_scenes/return_ticket/subway.png",
        audio: "assets/audio/return_ticket/music/night_city_vibe.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13_choice2_3" }
        ]
    },
    // Локация: вагон метро
    gl1_sc2_13_choice2_3: {
        text: "Звонкий голос диктора, озвучивающий станции, словно подтвердил твою мысль. Большой город, карьера в компании мечты, амбиции – всё, как ты мечтала.",
        background: "assets/images/backgrounds/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_14" }
        ]
    },
    gl1_sc2_14: {
        text: "Ты ведь об этом мечтала, да?",
        background: "assets/images/backgrounds/return_ticket/subway.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_15" }
        ]
    },
    // Локация: метро
    gl1_sc2_15: {
        text: "Поднимаешься на эскалаторе.\n«Интересно, а что же тогда символизирует эскалатор в нашей жизни?...»",
        background: "assets/images/backgrounds/return_ticket/subway.png",
        audio: "assets/audio/return_ticket/ambience/talking_people.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_16" }
        ]
    },
    // Локация: улица у офиса
    gl1_sc2_16: {
        text: "Город по-прежнему накрыт металлической крышкой. Воздух в этом городе пахнет бензином и кофе. Вокруг люди, которые бесконечно куда-то спешат. Интересно, а счастливы ли они?",
        background: "assets/images/backgrounds/return_ticket/city_1.png",
        audio: "assets/audio/return_ticket/ambience/city.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_17" }
        ]
    },
    gl1_sc2_17: {
        text: "8:57.",
        background: "assets/images/backgrounds/return_ticket/city_1.png",
        audio: "assets/audio/return_ticket/ambience/city.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_1" }
        ]
    },
    // Сцена 3: В офисе
    // Локация: офис
    gl1_sc3_1: {
        text: "Серое здание с зеркальными окнами. Бейдж той самой компании, о которой ты так долго мечтала. Работа по профессии.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_2" }
        ]
    },
    gl1_sc3_2: {
        text: "18-летняя ты была бы в восторге от всего происходящего. Лифт до 24 этажа. Open space.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_3" }
        ]
    },
    gl1_sc3_3: {
        text: "Чек-лист по утренним сборам меняется на рабочий чек-лист: сходить за кофе, открыть ноутбук, проверить почту.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_4" }
        ]
    },
    gl1_sc3_4: {
        text: "Едва успев настроиться на рабочую волну, ты видишь, как твоя коллега направляется к тебе.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_5" }
        ]
    },
    gl1_sc3_5: {
        text: "Аня:\n– Привет! Скинь, пожалуйста, финальную версию презентации для сегодняшней встречи. Ты же вчера делала? Надо согласовать с руководителем.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/anna/anna.png", position: "center" }
        ],
        choices: [
            { text: "«Да, уже в папке „готово“»", nextScene: "gl1_sc3_5_choice1_1" }, // + Целеустремлённость
            { text: "«Сейчас-сейчас, почти доделала.»", nextScene: "gl1_sc3_5_choice2_1" } // + Размеренность
        ]
    },
    // Персонаж: ГГ улыбака (в соответствующей одежде!!)
    gl1_sc3_5_choice1_1: {
        text: "Ты не задумываясь отвечаешь. Всё действительно готово. Ты справилась ещё вчера. Правда, пришлось задержаться на час на работе.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_happy.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_5_choice1_2" }
        ]
    },
    gl1_sc3_5_choice1_2: {
        text: "Аня кивает и уходит, а ты ловишь в себе ту самую смесь: лёгкую усталость и гордость. Ты держишь план – даже когда никто не просит.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_6" }
        ]
    },
    // Персонаж: ГГ нейтральная (в соответствующей одежде!!)
    gl1_sc3_5_choice2_1: {
        text: "Ты не извиняешься. Не оправдываешься. Просто честно говоришь, что не закончила.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_5_choice2_2" }
        ]
    },
    gl1_sc3_5_choice2_2: {
        text: "Сегодня будет время – и ты точно доведёшь до ума. Но не в режиме «сдохни или умри».",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_5_choice2_3" }
        ]
    },
    gl1_sc3_5_choice2_3: {
        text: "Аня выглядит немного раздражённой. Пусть. Твоё спокойствие – важнее.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_6" }
        ]
    },
    gl1_sc3_6: {
        text: "Начальник проходит мимо. Не здоровается – значит, сегодня на стрессе.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        audio: "assets/audio/return_ticket/ambience/office.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_7" }
        ]
    },
    // Персонаж: ГГ нейтральная
    gl1_sc3_7: {
    text: "Рабочий день плывёт сквозь таск-трекер, бескрайние таблицы, правки, правки правок, созвоны, голосовые от клиента:\n– «Слушай, тут чуть-чуть поправить, только цвет другой, и со шрифтами поиграться, и картинки заменить, и вообще всё заменить, но чтобы завтра было.»",
    background: "assets/images/backgrounds/return_ticket/office.png",
    audio: "assets/audio/return_ticket/ambience/office.mp3",
    characters: [],
    choices: [
            { text: "Дальше", nextScene: "gl1_sc3_8" }
        ]
    },
    gl1_sc3_8: {
        text: "Вот на часах заветные 13:00.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_9" }
        ]
    },
    gl1_sc3_9: {
        text: "Целый час тишины, покоя, наконец-то еды и отдыха.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_10" }
        ]
    },
    gl1_sc3_10: {
        text: "Этот час – как оазис в знойной пустыне. Как глоток воды после тяжёлой тренировки.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_11" }
        ]
    },
    gl1_sc3_11: {
        text: "Ты смотришь в окно. Внизу – город, движение, стройка. Рядом – чай, надкусанный сэндвич и тетрадь с задачами на день. Внутри – тишина.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_12" }
        ]
    },
    gl1_sc3_12: {
        text: "А потом – почти случайная мысль:\n«Интересно, а я всё ещё хочу этого?»",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "«Не знаю. Может быть, я просто делаю то, что умею. Без огня.»", nextScene: "gl1_sc3_12_choice1_1" }, // + Размеренность
            { text: "«Конечно. Это мой путь. Просто сейчас тяжело.»", nextScene: "gl1_sc3_12_choice2_1" } // + Целеустремлённость
        ]
    },
    gl1_sc3_12_choice1_1: {
        text: "Ты не ощущаешь ни боли, ни грусти. Просто… тишину. Работа – как привычка. Одежда, которую давно не чувствуешь на теле.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_12_choice1_2" }
        ]
    },
    gl1_sc3_12_choice1_2: {
        text: "«Может, так и должно быть? Или… нет?",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_12_choice1_3" }
        ]
    },
    gl1_sc3_12_choice1_3: {
        text: "«Я ведь буквально продаю часы своей жизни по тарифу. А когда-то я этого хотела: офис, карьера, рост. А теперь… чего я хочу теперь?»",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_13" }
        ]
    },
    gl1_sc3_12_choice2_1: {
        text: "Ты ловишь себя на том, что даже в моменты усталости всё ещё веришь в то, зачем пришла сюда.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_choice2_2" }
        ]
    },
    gl1_sc3_choice2_2: {
        text: "Пусть не каждый день праздник, но каждый шаг – вперёд. Твоя мотивация живёт глубже усталости.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_13" }
        ]
    },
    gl1_sc3_13: {
        text: "В 16:00 – совещание. В 17:00 – ежедневная планёрка. В 20:15 – ты одна в офисе. Только ты и незаконченная презентация к завтрашней встрече по итогам недели.",
        background: "assets/images/backgrounds/return_ticket/office.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_14" }
        ]
    },
    // Сцена 4: Свидание
    // Локация: бар
    gl1_sc4_1: {
        text: "21:58.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_2" }
        ]
    },
    gl1_sc4_2: {
        text: "Поздний вечер. Свидание.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_3" }
        ]
    },
    gl1_sc4_3: {
        text: "Бар неподалёку от работы. На стенах – картины, на столах – бокалы, на твоём лице – усталость, которую ты стараешься замаскировать под улыбкой.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_4" }
        ]
    },
    gl1_sc4_4: {
        text: "Ему тридцать один.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_5" }
        ]
    },
    gl1_sc4_5: {
        text: "Безупречно одет: пиджак, сдержанные запонки, часы, которые не кричат о цене, но всё равно заставляют переспросить марку.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_6" }
        ]
    },
    gl1_sc4_6: {
        text: "Гладко выбрит, с лёгким ароматом дорогого парфюма — не резкого, а тонкого, как остаточное послевкусие у вина.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_7" }
        ]
    },
    gl1_sc4_7: {
        text: "Говорит он редко и почти всегда по делу. Каждое слово будто заранее обдумано, прежде чем покинуть уста. ",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_8" }
        ]
    },
    gl1_sc4_8: {
        text: "Даже в мелочах он выглядит собранным, будто внутренне никогда не расслабляется до конца.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_9" }
        ]
    },
    gl1_sc4_9: {
        text: "Он настоящий джентльмен. Откроет дверь — не из вежливости, а потому что иначе просто не может. Подаст руку, если ты спускаешься по лестнице. Придвинет стул в ресторане, дождётся, пока ты сделаешь заказ первой.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_10" }
        ]
    },
    gl1_sc4_10: {
        text: "Всегда платит, не обсуждая, но никогда не выставляет это как жест. Просто так принято. Вы вместе уже третий месяц.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_11" }
        ]
    },
    gl1_sc4_11: {
        text: "И всё это время он остаётся немного… собранным? Не закрытым, нет. ",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_12" }
        ]
    },
    gl1_sc4_12: {
        text: "Скорее  аккуратным. Как человек, который уже привык, что к нему тянутся из-за его возможностей, а не из-за него самого.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_13" }
        ]
    },
    gl1_sc4_13: {
        text: "Ты не замечала за ним грубости или холодности. Но и настоящей открытости – тоже. Как будто между вами стекло: прозрачное, но отчётливо ощущаемое.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14" }
        ]
    },
    // Персонаж: чел в костюме
    gl1_sc4_14: {
        text: "Александр:\n– Что-то у тебя серьёзные синяки под глазами. На работе запара?",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [
            { name: "Александр", image: "assets/images/characters/return_ticket/alex/alex_serious.png", position: "center" }
        ],
        choices: [
            { text: "«Да, но я сама в это ввязалась.»", nextScene: "gl1_sc4_14_choice1_1" }, // + Целеустремлённость
            { text: "«Иногда кажется, что я делаю недостаточно.»", nextScene: "gl1_sc4_14_choice2_1" } // + Размеренность
        ]
    },
    gl1_sc4_14_choice1_1: {
        text: "Ты откидываешься на спинку стула и коротко киваешь.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_choice1_2" }
        ]
    },
    gl1_sc4_14_choice1_2: {
        text: "– Я знала, на что шла. Это часть игры.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_choice1_3" }
        ]
    },
    gl1_sc4_14_choice1_3: {
        text: "Ты берёшь бокал и делаешь глоток. Вино чуть терпкое – как вечер.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_choice1_4" }
        ]
    },
    gl1_sc4_14_choice1_4: {
        text: "Внутри всё сжимается, но ты знаешь: эта гонка – твой выбор. Во всяком случае, пока что.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_cutcsene" }
        ]
    },
    gl1_sc4_14_choice2_1: {
        text: "Ты не сразу находишься с ответом. Просто чуть опускаешь глаза.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_choice2_2" }
        ]
    },
    gl1_sc4_14_choice2_2: {
        text: "– Иногда думаю, что всё это… не имеет смысла.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_sad.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_choice2_3" }
        ]
    },
    gl1_sc4_14_choice2_3: {
        text: "Он смотрит на тебя с лёгким непониманием. А ты вдруг вспоминаешь, как хотела работать в издательстве, читать рукописи, писать тексты, а не бесконечные отчёты.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_choice2_4" }
        ]
    },
    gl1_sc4_14_choice2_4: {
        text: "«А что, если я просто свернула не туда?»",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        audio: "assets/audio/return_ticket/ambience/bar.mp3",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_sad.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_14_cutcsene" }
        ]
    },
    gl1_sc4_14_cutcsene: {
        text: "",
        background: "assets/images/cutscenes/return_ticket/gl1/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_15" }
        ]
    },
    // Персонаж: чел в костюме
    gl1_sc4_15: {
        text: "На мгновение – тишина. Он вроде бы смотрит прямо на тебя, но взгляд будто проходит сквозь.",
        background: "assets/images/cutscenes/return_ticket/gl1/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_16" }
        ]
    },
    gl1_sc4_16: {
        text: "Потом он отставляет бокал, аккуратно проводит пальцем по ободку, будто что-то вспомнил",
        background: "assets/images/cutscenes/return_ticket/gl1/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_17" }
        ]
    },
    gl1_sc4_17: {
        text: "– Знаешь, Лёха купил винодельню в Италии. Говорит, там сезон круглый год, вообще не парится.",
        background: "assets/images/cutscenes/return_ticket/gl1/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_18" }
        ]
    },
    gl1_sc4_18: {
        text: "Ты улыбаешься. Киваешь. Поддакиваешь в нужных местах.",
        background: "assets/images/cutscenes/return_ticket/gl1/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_19" }
        ]
    },
    gl1_sc4_19: {
        text: "Он продолжает – про сделки, про вылеты, про инвестора с крутым чеком.",
        background: "assets/images/cutscenes/return_ticket/gl1/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_20" }
        ]
    },
    gl1_sc4_20: {
        text: "Слова льются как фоновый шум в баре, в котором ты сидишь слишком долго.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21" }
        ]
    },
    // Персонаж: ГГ нейтральная
    gl1_sc4_21: {
        text: "Вот только ты помнишь, что речь изначально шла о тебе.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Замолчать. Просто отметить про себя.", nextScene: "gl1_sc4_21_choice1_1" }, // + Размеренность
            { text: "Напомнить, что ты вообще-то рассказывала о себе.", nextScene: "gl1_sc4_21_choice2_1" } // + Целеустремлённость
        ]
    },
    gl1_sc4_21_choice1_1: {
        text: "Ты ничего не говоришь.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice1_2" }
        ]
    },
    gl1_sc4_21_choice1_2: {
        text: "Отмечаешь, что он перевёл тему, так и не дослушав тебя – и отпускаешь.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice1_3" }
        ]
    },
    gl1_sc4_21_choice1_3: {
        text: "Это не обида. Просто деталь.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Наверное, хотел перевести диалог в более приятное русло.", nextScene: "gl1_sc4_21_choice1_3_choice1_1" }, // + Мечтатель
            { text: "Я и сама тоже не всегда внимательно его слушаю.", nextScene: "gl1_sc4_21_choice1_3_choice2_1" } // + Реалист

        ]
    },
    gl1_sc4_21_choice1_3_choice1_1: {
        text: "Может, он просто не знал, как отреагировать. Хотел увести в сторону, чтобы я не грустила.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice1_3_choice1_2" }

        ]
    },
    gl1_sc4_21_choice1_3_choice1_2: {
        text: "Это не то, как ты бы поступила. Но ты это понимаешь.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_22" }
        ]
    },
    gl1_sc4_21_choice1_3_choice2_1: {
        text: "В конце концов, я тоже порой отключаюсь. Не из злости, а от усталости.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice1_3_choice2_2" }
        ]
    },
    gl1_sc4_21_choice1_3_choice2_2: {
        text: "И ничего в этом страшного нет.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_22" }
        ]
    },
    gl1_sc4_21_choice2_1: {
        text: "– Подожди, – перебиваешь ты. – А мы ведь говорили обо мне?",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_2" }
        ]
    },
    gl1_sc4_21_choice2_2: {
        text: "Он отрывается от бокала, будто только сейчас понял, что увлёкся.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_3" }
        ]
    },
    gl1_sc4_21_choice2_3: {
        text: "– Прости. Ты права. Я не специально. Просто… как-то перескочил.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "Александр", image: "assets/images/characters/return_ticket/alex/alex_serious.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_4" }
        ]
    },
    gl1_sc4_21_choice2_4: {
        text: "Он даёт тебе возможность говорить. Ты не злишься – ты просто возвращаешь себе внимание...",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Наверное, просто увлекся.", nextScene: "gl1_sc4_21_choice2_4_choice1_1" }, // + Мечтатель
            { text: "Наверное, ему просто неинтересно.", nextScene: "gl1_sc4_21_choice2_4_choice2_1" } // + Реалист
        ]
    },
    gl1_sc4_21_choice2_4_choice1_1: {
        text: "Может, он так впечатлился виноградниками и «крутыми чеками», что и сам не заметил, как перевёл тему.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_4_choice1_2" }
        ]
    },
    gl1_sc4_21_choice2_4_choice1_2: {
        text: "Ты даёшь ему шанс. Ты умеешь находить объяснение.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_4_choice1_3" }
        ]
    },
    gl1_sc4_21_choice2_4_choice1_3: {
        text: "Ты всё же продолжаешь рассказ. Но в этот раз уже кратко. Без деталей. Не хочется рассказывать про свой «неуспешный неуспех» среди разговора об инвесторах и виноградниках.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_4_choice1_4" }
        ]
    },
    gl1_sc4_21_choice2_4_choice1_4: {
        text: "Он слушает. Кивает в нужных местах. А потом снова берёт инициативу в руки.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_22" }
        ]
    },
    gl1_sc4_21_choice2_4_choice2_1: {
        text: "Если честно — ему, похоже, просто всё равно.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_4_choice2_2" }
        ]
    },
    gl1_sc4_21_choice2_4_choice2_2: {
        text: "Фиксируешь это внутри. Без эмоций. Просто как факт.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_4_choice2_3" }
        ]
    },
    gl1_sc4_21_choice2_4_choice2_3: {
        text: "Ты всё же продолжаешь рассказ. Но в этот раз уже коротко. Без деталей. Не хочется рассказывать про свой «неуспешный не успех» среди разговора об инвесторах и виноградниках.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_21_choice2_4_choice2_4" }
        ]
    },
    gl1_sc4_21_choice2_4_choice2_4: {
        text: "Он слушает. Кивает в нужных местах. А потом снова берёт инициативу в руки.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_22" }
        ]
    },
    gl1_sc4_22: {
        text: "Он:\n– Кстати, ты же хотела поехать куда-то на майские? Я нашёл новенький отель в Черногории. Поедем?",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "Александр", image: "assets/images/characters/return_ticket/alex/alex_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_23" }
        ]
    },
    gl1_sc4_23: {
        text: "Твой взгляд резко падает на его наручные часы. Красивые. Но стоят как твоя аренда за два месяца, а то и за полгода.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_24" }
        ]
    },
    gl1_sc4_24: {
        text: "У него всё под контролем. Даже ты – как будто часть этого расписания.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25" }
        ]
    },
    gl1_sc4_25: {
        text: "«А что, если я не хочу винодельню и Черногорию? А хочу блинчики и домашний квас?»",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Сказать, что собираешься домой. Пусть знает.", nextScene: "gl1_sc4_25_choice1_1" }, // + Размеренность
            { text: "Согласиться – это выгодная возможность.", nextScene: "gl1_sc4_25_choice2_1" }, // + Целеустремлённость
            { text: "Ни соглашаться, ни отказываться. Перевести разговор.", nextScene: "gl1_sc4_25_choice3_1" }
        ]
    },
    gl1_sc4_25_choice1_1: {
        text: "Ты ставишь бокал на стол.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice1_2" }
        ]
    },
    gl1_sc4_25_choice1_2: {
        text: "– Я уже купила билеты домой.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice1_3" }
        ]
    },
    gl1_sc4_25_choice1_3: {
        text: "Он поднимает брови. Ты выдерживаешь паузу.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice1_4" }
        ]
    },
    gl1_sc4_25_choice1_4: {
        text: "–  Иногда нужно просто побыть среди своих. Без планов, без галочки «отдохнула».",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice1_5" }
        ]
    },
    gl1_sc4_25_choice1_5: {
        text: "Ты не оправдываешься. Ты просто знаешь, чего хочешь.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice1_6" }
        ]
    },
    gl1_sc4_25_choice1_6: {
        text: "Он чуть морщится:\n– В смысле, в провинцию вместо Черногории?... Ой, надеюсь, это не грубо прозвучало.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "Александр", image: "assets/images/characters/return_ticket/alex/alex_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice1_7" }
        ]
    },
    gl1_sc4_25_choice1_7: {
        text: "Ты отвечаешь уклончиво. Он улыбается, но глаза у него пустые.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice1_8" }
        ]
    },
    gl1_sc4_25_choice1_8: {
        text: "Он привык всё контролировать. Даже тебя.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_1" }
        ]
    },
    gl1_sc4_25_choice2_1: {
        text: "– Да, звучит неплохо. Надо будет только подстроиться по графику.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_happy.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice2_2" }
        ]
    },
    gl1_sc4_25_choice2_2: {
        text: "Он удовлетворён. А ты – не теряешь нить.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice2_3" }
        ]
    },
    gl1_sc4_25_choice2_3: {
        text: "Черногория? Пусть будет. Он – из нужной среды. Кто знает, с кем он тебя там познакомит?",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice2_4" }
        ]
    },
    gl1_sc4_25_choice2_4: {
        text: "Да, жизнь в столице делает своё дело. Даже романтическое, казалось бы, путешествие, ты начинаешь рассматривать через призму перспектив.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_1" }
        ]
    },
    gl1_sc4_25_choice3_1: {
        text: "– Угу. А ты уже покупал билеты или просто присматриваешь?",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/office_dress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice3_2" }
        ]
    },
    gl1_sc4_25_choice3_2: {
        text: "Вопрос – без веса. Как будто ты кидаешь мяч в стену и смотришь, отскочит ли.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc4_25_choice3_3" }
        ]
    },
    gl1_sc4_25_choice3_3: {
        text: "Он что-то говорит – ты киваешь. Но тема уходит, как песня, которую не хочешь слушать до конца.",
        background: "assets/images/backgrounds/return_ticket/bar.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_1" }
        ]
    },
    // Сцена 5: После свидания
    // Локация: ночная улица
    gl1_sc5_1: {
        text: "Ночь.",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_2" }
        ]
    },
    gl1_sc5_2: {
        text: "00:41.",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_3" }
        ]
    },
    gl1_sc5_3: {
        text: "Ты выходишь из такси. Влажный воздух, а на асфальте – блики неона и отражения витрин. В домах планомерно гаснет свет, ведь всем завтра на работу. Этот город живёт в режиме 5/2.",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_4" }
        ]
    },
    gl1_sc5_4: {
        text: "Ты идёшь по тротуару, ловя своё отражение в тёмных витринах. Не радостно и грустно. Просто – пусто.",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_5" }
        ]
    },
    gl1_sc5_5: {
        text: "Сирень, кстати, будто даже ещё не собирается здесь зацветать. Интересно… а как там дома?",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_6" }
        ]
    },
    gl1_sc5_6: {
        text: "Ты достаёшь телефон. Прогноз погоды.",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_7" }
        ]
    },
    gl1_sc5_7: {
        text: "+20, солнце, ни одного дождя. На майские – тепло и благодать.",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_8" }
        ]
    },
    gl1_sc5_8: {
        text: "Ты улыбаешься краешком губ.",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_9" }
        ]
    },
    gl1_sc5_9: {
        text: "«Наверное, самое время навестить родню.»",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_10" }
        ]
    },
    gl1_sc5_10: {
        text: "Или … навестить себя?",
        background: "assets/images/backgrounds/return_ticket/dark_city_1.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_11" }
        ]
    },
    // Локация: ночная квартира ГГ
    gl1_sc5_11: {
        text: "Наконец ты дома. Тишина.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [
            { name: "", image: "assets/images/characters/return_ticket/main_character/nightdress_neutral.png", position: "center" }
        ],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_12" }
        ]
    },
    // Персонаж: ГГ в ночнушке нейтральная
    gl1_sc5_12: {
        text: "Быстрый поход в душ. Одежда на спинку стула. Чашка в раковину. Опять не хватило сил помыть посуду. Завтра – точно.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_13" }
        ]
    },
    gl1_sc5_13: {
        text: "Телефон вибрирует на тумбочке.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        audio: "assets/audio/return_ticket/sounds/vibrating_phone.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_14" }
        ]
    },
    // Оповещение на телефоне
    gl1_sc5_14: {
        text: "Бойфренд: «Ты добралась?»",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_15" }
        ]
    },
    gl1_sc5_15: {
        text: "Ты: «Да, дома. Спасибо за вечер.»",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_16" }
        ]
    },
    gl1_sc5_16: {
        text: "Ставишь телефон на зарядку, гасишь верхний свет.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_17" }
        ]
    },
    gl1_sc5_17: {
        text: "Осталась последняя задача на день: полистать ленту.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_18" }
        ]
    },
    gl1_sc5_18: {
        text: "Лица, шутки, танцы, советы о жизни, чужая реальность – скроллинг видео как неотъемлемый ритуал. Ты не задумываешься, не всматриваешься, просто листаешь. Этакая финальная точка сегодняшнего дня.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_19" }
        ]
    },
    gl1_sc5_19: {
        text: "Ты уже почти засыпаешь – и тут экран вспыхивает от нового уведомления.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        audio: "assets/audio/return_ticket/sounds/vibrating_phone.mp3",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_20" }
        ]
    },
    // Оповещение на телефоне
    gl1_sc5_20: {
        text: "Звук откуда-то из прошлого.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_21" }
        ]
    },
    gl1_sc5_21: {
        text: "Ты лениво тянешься, не глядя открываешь – и замираешь.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_22" }
        ]
    },
    gl1_sc5_22: {
        text: "Имя.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_23" }
        ]
    },
    gl1_sc5_23: {
        text: "Тот, кого ты не видела столько лет, что уже научилась не вспоминать.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_24" }
        ]
    },
    gl1_sc5_24: {
        text: "«Будешь дома – напиши.»",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_25" }
        ]
    },
    gl1_sc5_25: {
        text: "Ни смайлов. Ни объяснений. Ничего. Только эта фраза. Как будто он знал, что ты ещё не спишь.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_26" }
        ]
    },
    gl1_sc5_26: {
        text: "Ты смотришь в экран. Тишина комнаты кажется громче. Сердце – будто на секунду проскакивает один удар.",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc5_27" }
        ]
    },
    gl1_sc5_27: {
        text: "«Привет. Приеду на майские. Что-то случилось?»",
        background: "assets/images/backgrounds/return_ticket/room_evening.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl2_sc1_1" }
        ]
    },
};
export default scenes;