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
        background: "assets/images/backgrounds/return_ticket/city.png",
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
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_2" }
        ]
    },
    gl1_sc1_2: {
        text: "6:05.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_3" }
        ]
    },
    gl1_sc1_3: {
        text: "Звон будильника этим утром ощущался как ведро ледяной воды, опрокинутое на себя после бани, от которого аж хочется взвизгнуть  – ожидаемо, но чрезмерно отрезвляюще.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
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
            { text: "Поднять себя с кровати сразу – мир не ждёт.", nextScene: "gl1_sc1_7_choice1" },
            { text: "Полежать ещё пять минут – мир и так без тебя справляется.", nextScene: "gl1_sc1_7_choice2" }
        ]
    },
    gl1_sc1_7_choice1: {
        text: "Как всегда говорила мама: «Есть такое слово – надо». Пора начинать новый день.",
        background: "assets/images/backgrounds/return_ticket/room_dark.png",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_8" }
        ]
    },
    gl1_sc1_7_choice2: {
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
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_12" }
        ]
    },
    gl1_sc1_12: {
        text: "Над бесконечно огромным городом, конца и края которого не видать даже с твоего 24 этажа, нависло небо стального цвета, в котором нет ни одного просветления, ни намека на солнце.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_13" }
        ]
    },
    gl1_sc1_13: {
        text: "Весь город словно накрыт металлической крышкой.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_14" }
        ]
    },
    gl1_sc1_14: {
        text: "Дождь моросит. Его едва видно, но отчетливо слышно – он барабанит по подоконнику, задавая ритм сегодняшнему утру.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_15" }
        ]
    },
    gl1_sc1_15: {
        text: "Несмотря на то, что на часах всего лишь 6 утра, на улице уже суета: куда-то торопятся люди с зонтами, спешат и машины с беспрестанно работающими дворниками, едут автобусы, которые никогда никого не ждут и безжалостно захлопывают двери прямо перед носом вечно опаздывающих пассажиров.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_16" }
        ]
    },
    gl1_sc1_16: {
        text: "Май в столице – не весна, а ожидание весны. Но почему-то это ожидание затянулось.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17" }
        ]
    },
    // Персонаж: ГГ в ночнушке
    gl1_sc1_17: {
        text: "«Кажется, весна не торопится в этот город. Может быть, ей здесь просто не нравится?»",
        background: "",
        characters: [],
        choices: [
            { text: "Собрать силы в кулак. «Я знала, на что шла.»", nextScene: "gl1_sc1_17_choice1_1" },
            { text: "Позволить себе легкую тоску.", nextScene: "gl1_sc1_17_choice2_1" }
        ]
    },
    gl1_sc1_17_choice1_1: {
        text: "Ты вспоминаешь, как приехала в столицу. Огромный вокзал. Чемодан на трёх колёсах. И точно такой же мелкий, промозглый дождь.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_2" }
        ]
    },
    gl1_sc1_17_choice1_2: {
        text: "– Я справлюсь, – тогда ты сказала это вслух, как мантру.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_3" }
        ]
    },
    gl1_sc1_17_choice1_3: {
        text: "И справилась. Жильё, работа, учёба, связи – всё сама.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_4" }
        ]
    },
    gl1_sc1_17_choice1_4: {
        text: "Ты выдыхаешь. Всё ещё держишься. Всё ещё идёшь по курсу.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice1_5" }
        ]
    },
    gl1_sc1_17_choice1_5: {
        text: "«Я знала, на что шла. Я ехала сюда пахать, строить жизнь мечты, становиться лучшей версией себя. А отдыхать, ловить момент и наслаждаться размеренной жизнью я могла бы и дома.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_18" }
        ]
    },
    gl1_sc1_17_choice2_1: {
        text: "По подоконнику стучит дождь. Ты смотришь, как капля стекает по стеклу – медленно, нерешительно, периодически останавливаясь, будто делает передышку.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_2" }
        ]
    },
    gl1_sc1_17_choice2_2: {
        text: "В голове вдруг всплывает забытый запах: мокрая черемуха, запах прибитой к асфальту пыли и сырых досок старого крыльца.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_3" }
        ]
    },
    gl1_sc1_17_choice2_3: {
        text: "Ты даже не помнишь, откуда это. Просто… было. Как будто и вовсе в другой жизни.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_4" }
        ]
    },
    gl1_sc1_17_choice2_4: {
        text: "Как будто что-то внутри говорит: «Вернись». Не навсегда. Хотя бы на чуть-чуть. Просто – к себе, к родным.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_17_choice2_5" }
        ]
    },
    gl1_sc1_17_choice2_5: {
        text: "«Интересно, как там дома?»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_18" }
        ]
    },
    // Локация: комната ГГ
    gl1_sc1_18: {
        text: "«Хм, любопытно это всё… Я в столице уже пятый год. Здесь моя работа, мои друзья, здесь вся моя жизнь. Но почему же я называю домом другой город, который я давно покинула? А где вообще мой дом?...»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_19" }
        ]
    },
    gl1_sc1_19: {
        text: "«Зазвенел очередной будильник, который ты включаешь на всякий случай, вдруг проспишь. Но в его раздражающем звуке в этот раз было хоть что-то хорошее – он прервал бесконечную пучину мыслей, бурлящую в голове. Пора собираться.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_20" }
        ]
    },
    gl1_sc1_20: {
        text: "«Каждое утро происходит словно по чек-листу: встать, открыть шторы, собрать волосы, заправить кровать, ведь «если вы хотите изменить жизнь и, быть может, мир – сначала заправьте кровать!».",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_21" }
        ]
    },
    gl1_sc1_21: {
        text: "«Ты приехала в большой город за успешной карьерой, за большими деньгами, за лучшей жизнью. Так что о незаправленной кровати не может быть и речи. Мы ведь не согласны на меньшее, так?",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_22" }
        ]
    },
    gl1_sc1_22: {
        text: "Следующий пункт чек-листа: выпить воду с лимоном. Как советуют нутрициологи, нужно пробудить свой организм изнутри. Ты ищешь кружку, но вот незадача – все кружки в раковине.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_23" }
        ]
    },
    gl1_sc1_23: {
        text: "Ты опять забыла, не успела (или не захотела?) перемыть посуду. Конечно, после работы на такую мелочь просто не остаётся сил.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_24" }
        ]
    },
    gl1_sc1_24: {
        text: "«Хм, может, пора уже купить посудомойку? Она сэкономит мне столько времени. Хотя, это же съемная квартира. Не хочется потратить деньги и услышать, что мне необходимо съехать. Наверное, именно поэтому я до сих пор не чувствую себя здесь дома.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_25" }
        ]
    },
    gl1_sc1_25: {
        text: "Это жилье словно говорит: «Я временное. Я не постоянное.» Своего рода промежуточный пункт в большом путешествии.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_26" }
        ]
    },
    gl1_sc1_26: {
        text: "Ты смотришь на грязные кружки в раковине, на приклеенные на скотч крючки для полотенец, которые бесконечно отваливаются. Полноценные крючки повесить не получится – хозяйка запретила сверлить стены.",
        background: "",
        characters: [],
        choices: [
            { text: "Дом – это там, где ты строишь своё. Пусть даже с нуля.", nextScene: "gl1_sc1_26_choice1_1" },
            { text: "Дом – это не стены. Это чувство. Тепло, запах, воздух.", nextScene: "gl1_sc1_26_choice2_1" }
        ]
    },
    gl1_sc1_26_choice1_1: {
        text: "Ты представляешь свою квартиру – не съёмную, а настоящую. Стены – цвета, который ты выбрала сама. Полки, картины и крючки – прикручены, а не приклеены, книги, фото в рамках – для души, а не ради эстетики.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_26_choice1_2" }
        ]
    },
    gl1_sc1_26_choice1_2: {
        text: "«Я обязательно сделаю это. Здесь. Или где захочу. Но сама.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_27" }
        ]
    },
    gl1_sc1_26_choice2_1: {
        text: "Ты закрываешь глаза и представляешь окно в своей комнате у родителей. Лёгкий сквозняк, скрипящий пол, запах цветущей под окном сирени, разлетающийся тюль.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_26_choice2_2" }
        ]
    },
    gl1_sc1_26_choice2_2: {
        text: "«Дом – это не про недвижимость. Это про ощущение безопасности, любви, комфорта. Дом – это там, где тебе хорошо, где тебя любят и ждут.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_27" }
        ]
    },
    gl1_sc1_27: {
        text: "На часах тем временем 6:40. Скоро выходить на работу, а ещё столько дел – душ, макияж, завтрак. Пора ускоряться!",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_28" }
        ]
    },
    gl1_sc1_28: {
        text: "Подойдя к зеркалу после душа, ты обращаешь внимание на тёмные круги под глазами.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_29" }
        ]
    },
    // Персонаж: ГГ в ночнушке грустная
    gl1_sc1_29: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_30" }
        ]
    },
    gl1_sc1_30: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_31" }
        ]
    },
    gl1_sc1_31: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_32" }
        ]
    },
    gl1_sc1_32: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_33" }
        ]
    },
    gl1_sc1_33: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34" }
        ]
    },
    gl1_sc1_34: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_35" }
        ]
    },
};
export default scenes;