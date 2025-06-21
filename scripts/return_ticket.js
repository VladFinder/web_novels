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
        text: "«Боже мой, как давно они у меня? Они появились сегодня, или я просто не обращала на них внимания раньше? Кажется, мне нужно хорошо отоспаться на выходных. А может быть, мне вообще пора в отпуск?»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_30" }
        ]
    },
    gl1_sc1_30: {
        text: "«Нет, а как же мой проект?... Я ведь не могу уйти в отпуск, не сдав его. Но такими темпами я вообще никогда не отдохну…»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_31" }
        ]
    },
    gl1_sc1_31: {
        text: "Бесконечную волну размышлений прервало оповещение.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_32" }
        ]
    },
    gl1_sc1_32: {
        text: "Босс:\n– Привет, ты в метро уже?",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_33" }
        ]
    },
    gl1_sc1_33: {
        text: "Ты смотришь на экран. 7:15. До начала рабочего дня ещё больше полутора часа. Ты стоишь в ночной рубашке с мокрыми волосами.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34" }
        ]
    },
    gl1_sc1_34: {
        text: "Ты даже ещё не приступила к началу дня, не выпила кофе и уж тем более не вышла из дома. Но он – уже требует ответа.",
        background: "",
        characters: [],
        choices: [
            { text: "Проигнорировать»", nextScene: "gl1_sc1_34_choice1_1" },
            { text: "Ответить: «Скоро выхожу", nextScene: "gl1_sc1_34_choice2_1" }
        ]
    },
    // Персонаж: ГГ в ночнушке нейтральная
    gl1_sc1_34_choice1_1: {
        text: "Закатывая глаза, ты вслух проговариваешь, словно пытаясь убедить саму себя: «Мой рабочий день начинается в 9:00, я не обязана ему отвечать в своё свободное время.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_2" }
        ]
    },
    gl1_sc1_34_choice1_2: {
        text: "Ты откладываешь телефон экраном вниз, завариваешь чай, накрываешь на стол.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_3" }
        ]
    },
    gl1_sc1_34_choice1_3: {
        text: "Включаешь музыку потише. Впервые за долгое время ты завтракаешь, не глядя в экран.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_4" }
        ]
    },
    gl1_sc1_34_choice1_4: {
        text: "Начальник подождёт. Мир не обрушится, если я отвечу на 20 минут позже.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_5" }
        ]
    },
    gl1_sc1_34_choice1_5: {
        text: "После завтрака – ты не спешишь. Лёгкая укладка, макияж «без макияжа». Ничего лишнего, но взгляд становится яснее.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_6" }
        ]
    },
    gl1_sc1_34_choice1_6: {
        text: "Открываешь шкаф, проводишь пальцами по ряду одинаково сдержанных вещей.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_7" }
        ]
    },
    // Персонаж: ГГ в платье нейтральная
    gl1_sc1_34_choice1_7: {
        text: "На автомате могла бы выбрать беспроигрышное комбо – водолазку и бежевый жакет, но сегодня рука тянется к другому –\nчерное платье, нежное, почти невесомое, но строгое по крою. В нём ты чувствуешь себя особенно уверенно.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_8" }
        ]
    },
    gl1_sc1_34_choice1_8: {
        text: "Смотришь в зеркало:\nвсё на месте.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice1_9" }
        ]
    },
    gl1_sc1_34_choice1_9: {
        text: "Ты готова – не к бою, а к дню. И между этими вещами огромная разница.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_35" }
        ]
    },
    gl1_sc1_34_choice2_1: {
        text: "Ты отвечаешь. И тут же ставишь таймер: 4 минуты на укладку, 3 – на макияж, 5 минут на сборы, 3 – на кофе.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_2" }
        ]
    },
    gl1_sc1_34_choice2_2: {
        text: "«Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_3" }
        ]
    },
    gl1_sc1_34_choice2_3: {
        text: "Ты собираешь волосы в узел, включаешь плейлист с бодрой музыкой и почти одновременно собираешь сумку и надеваешь брюки.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_4" }
        ]
    },
    // Персонаж: ГГ в брюках нейтральная
    gl1_sc1_34_choice2_4: {
        text: "Именно так ты и выживаешь в столице – идя всегда чуть быстрее, чем хотелось бы.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_34_choice2_5" }
        ]
    },
    gl1_sc1_34_choice2_5: {
        text: "Босс: \n– Поторопись, жду тебя в офисе.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_35" }
        ]
    },
    // ГГ должна быть одета в то, что выбрала в предыдущем варианте - платье/штаны
    gl1_sc1_35: {
        text: "Пора выходить, иначе опоздаешь!\nПеред самым выходом ты замечаешь в шкатулке кольцо.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36" }
        ]
    },
    gl1_sc1_36: {
        text: "Мамино. Старое. С потертой оправой. Когда-то ты считала, что оно приносит удачу. В школе надевала его на каждую контрольную и уж тем более на экзамен.",
        background: "",
        characters: [],
        choices: [
            { text: "Вернуться и надеть мамино кольцо. Немного удачи не навредит.", nextScene: "gl1_sc1_36_choice1_1" },
            { text: "Проверить, ничего ли не забыла взять: ноутбук, зарядка, ланчбокс, расчёска, телефон.", nextScene: "gl1_sc1_36_choice1_2" },
        ]
    },
    gl1_sc1_36_choice1_1: {
        text: "Ты берёшь кольцо и надеваешь его на средний палец. Оно чуть велико, но сидит надёжно.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36_choice1_2" }
        ]
    },
    gl1_sc1_36_choice1_2: {
        text: "«Пусть будет со мной. Чуточки магии и удачи мне совсем не помешают.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36_choice1_3" }
        ]
    },
    gl1_sc1_36_choice1_3: {
        text: "Это почти как поцелуй в лоб перед выходом. Только от себя самой.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_37" }
        ]
    },
    gl1_sc1_36_choice2_1: {
        text: "Некогда возвращаться за кольцом. Вместо этого ты открываешь сумку и быстро пробегаешь по чек-листу в голове.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_36_choice2_2" }
        ]
    },
    gl1_sc1_36_choice2_2: {
        text: "Каждая вещь – якорь, элемент твоего контроля над этим днём.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_37" }
        ]
    },
    gl1_sc1_37: {
        text: "Ты бросаешь последний взгляд на комнату. Свет выключен. Дверь захлопнулась с глухим «щелк». Лифт уже на твоём этаже. Город – за дверью. Ждёт.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc1_38" }
        ]
    },
    gl1_sc1_38: {
        text: "7:50.",
        background: "",
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
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_2" }
        ]
    },
    gl1_sc2_2: {
        text: "На платформе – духота. Кажется, вот-вот, и кислород здесь закончится. Но наконец из тоннеля выныривает поезд, обдавая толпу мощными потоками воздуха. Люди толпятся у входа в вагон.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_3" }
        ]
    },
    gl1_sc2_3: {
        text: "«Вот бы успеть занять сидячее место.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_4" }
        ]
    },
    // Локация: вагон метро
    gl1_sc2_4: {
        text: "Увы, не сегодня.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_5" }
        ]
    },
    gl1_sc2_5: {
        text: "«Ну ничего. Совсем скоро меня повысят, и я себе обещаю – я обязательно буду ездить на работу на такси. Я заслуживаю большего!»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_6" }
        ]
    },
    gl1_sc2_6: {
        text: "Станции летят одна за другой.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_7" }
        ]
    },
    gl1_sc2_7: {
        text: "«Такое ощущение, что я полжизни провожу в метро.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_8" }
        ]
    },
    gl1_sc2_8: {
        text: "За стеклом – чёрный туннель, мигающий огоньками.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_9" }
        ]
    },
    gl1_sc2_9: {
        text: "«Тоннель метро – это словно наша жизнь. Кажется такой длинной, а на самом деле только успевай оглядываться и замечать, как она пролетает. Огоньки – это люди, встречающиеся на нашем пути. Их помощь и поддержка позволяет нам двигаться вперёд. ",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_10" }
        ]
    },
    gl1_sc2_10: {
        text: "А станции – это наши цели. Кто-то едет в Успехово, кто-то в Семейное, а кто-то просто катается на поездах и получает удовольствие от процесса. А куда вообще еду я?»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_11" }
        ]
    },
    gl1_sc2_11: {
        text: "Вдруг в наушниках заиграла песня. Особенная песня. От нее все твое тело покрылось мурашками, а мир вокруг перестал существовать.  Перед глазами уже не вагон, не толпа, не станция…",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_12" }
        ]
    },
    // Локация: серые хрущевки + цветущая сирень (возможно, в блюре, поскольку это воспоминания)
    gl1_sc2_12: {
        text: "А майские вечера в родном городе. Свежий воздух, ароматная сирень, легкое волнение от экзаменов.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13" }
        ]
    },
    gl1_sc2_13: {
        text: "Его руки. Его голос. Его прикосновения. Первый поцелуй. Первые планы. Конечно же, совместные.",
        background: "",
        characters: [],
        choices: [
            { text: "Позволить себе улыбнуться. Тепло прошлого всё ещё во мне.", nextScene: "gl1_sc2_13_choice1_1" },
            { text: "Отогнать воспоминание. Время двигаться дальше.", nextScene: "gl1_sc2_13_choice2_1" }
        ]
    },
    gl1_sc2_13_choice1_1: {
        text: "Ты закрываешь глаза и на секунду позволяешь себе поверить: «Тогда казалось, что нет ничего невозможного. Скучаю по этому ощущению.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13_choice1_2" }
        ]
    },
    // Локация: вагон метро
    gl1_sc2_13_choice1_2: {
        text: "Звонкий голос диктора, озвучивающий станции, вернул тебя в текущую действительность. Большой город, карьера в компании мечты, амбиции – всё, как ты мечтала.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_14" }
        ]
    },
    gl1_sc2_13_choice2_1: {
        text: "Ты резко переключаешь трек. Звук меняется – и с ним внутренний темп.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13_choice2_2" }
        ]
    },
    gl1_sc2_13_choice2_2: {
        text: "«Это уже было. Сейчас другое. Главное – не отвлекаться и помнить о своей цели.»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_13_choice2_3" }
        ]
    },
    // Локация: вагон метро
    gl1_sc2_13_choice2_3: {
        text: "Звонкий голос диктора, озвучивающий станции, словно подтвердил твою мысль. Большой город, карьера в компании мечты, амбиции – всё, как ты мечтала.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_14" }
        ]
    },
    gl1_sc2_14: {
        text: "Ты ведь об этом мечтала, да?",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_15" }
        ]
    },
    // Локация: метро
    gl1_sc2_15: {
        text: "Поднимаешься на эскалаторе.\n«Интересно, а что же тогда символизирует эскалатор в нашей жизни?...»",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_16" }
        ]
    },
    // Локация: улица у офиса
    gl1_sc2_16: {
        text: "Город по-прежнему накрыт металлической крышкой. Воздух в этом городе пахнет бензином и кофе. Вокруг люди, которые бесконечно куда-то спешат. Интересно, а счастливы ли они?",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_17" }
        ]
    },
    gl1_sc2_17: {
        text: "8:57.",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc2_18" }
        ]
    },
    // Сцена 3: В офисе
    // Локация: офис
    gl1_sc3_1: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_2" }
        ]
    },
    gl1_sc3_2: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_3" }
        ]
    },
    gl1_sc3_3: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_4" }
        ]
    },
    gl1_sc3_4: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_5" }
        ]
    },
    gl1_sc3_5: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_6" }
        ]
    },
    gl1_sc3_6: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_7" }
        ]
    },
    gl1_sc3_7: {
    text: "",
    background: "",
    characters: [],
    choices: [
            { text: "Дальше", nextScene: "gl1_sc3_8" }
        ]
    },
    gl1_sc3_8: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_9" }
        ]
    },
    gl1_sc3_9: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_10" }
        ]
    },
    gl1_sc3_10: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_11" }
        ]
    },
    gl1_sc3_11: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_12" }
        ]
    },
    gl1_sc3_12: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_13" }
        ]
    },
    gl1_sc3_13: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_14" }
        ]
    },
    gl1_sc3_14: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_15" }
        ]
    },
    gl1_sc3_15: {
        text: "",
        background: "",
        characters: [],
        choices: [
            { text: "Дальше", nextScene: "gl1_sc3_16" }
        ]
    },
};
export default scenes;