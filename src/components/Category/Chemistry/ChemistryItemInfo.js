import aprettoBril from '../../photo/APPRETTO_BRILLANTE.jpg';
import aprettoMild from '../../photo/APPRETTO_MILD.jpg';
import LEDAFIL_SUPER from '../../photo/LEDAFIL_SUPER.jpg';
import sar30E from '../../photo/sar_30E.jpg';
import sar306 from '../../photo/SAR_306.jpg';
import a240 from '../../photo/A240.jpg';
import elixir from '../../photo/ELIXIR.jpg';
import eco1816 from '../../photo/Eco18.webp';
import kenda from '../../photo/1.png';
import farestali from '../../photo/farestali.png'

export const itemInfo = [
  {
    path: 'aprettobrillant',
    title: 'Apretto Brillant',
    content: {
      itemName: "Apretto Brillant",
      fullName: 'Аппретура APPRETTO BRILLANTE 32433 НЕЙТРАЛЬНЫЙ банка 1 кг',
      logo: kenda,
      image: aprettoBril,
      component: 'AprettoBril',
      price: '20000',
      characteristicsList: [
        { label: 'Производитель', value: 'KENDA FARBEN (Италия)' },
        { label: 'Морозоустойчивый', value: 'Нет' },
        { label: 'Срок хранения', value: '36 месяцев' },
        { label: 'Цвет', value: 'Нейтральный' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '1 кг' },
        { label: 'Вид упаковки', value: 'Банка пластиковая' },
      ],
      path: 'aprettobrillant',
      details: 'Аппретура на водной основе для отделки всех типов лицевых кож. Самополирующаяся, приятно пахнущая эмульсия восков и смол. Сильный блеск.',
    },
   
  },
  {
    path: 'aprettomild',
    title: 'Apretto Mild',
    content: {
      itemName: "Apretto Mild",
      fullName: 'Аппретура APPRETTO MILD 32440 НЕЙТРАЛЬНЫЙ, банка 1 кг',
      logo: kenda,
      image: aprettoMild,
      component: 'AprettoMild',
      price: '50000',
      characteristicsList: [
        { label: 'Производитель', value: 'KENDA FARBEN (Италия)' },
        { label: 'Морозоустойчивый', value: 'Нет' },
        { label: 'Срок хранения', value: '36 месяцев' },
        { label: 'Цвет', value: 'Нейтральный' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '1 кг' },
        { label: 'Вид упаковки', value: 'Банка пластиковая' },
      ],
      path: 'aprettomild',
      details: 'Аппретура на водной основе для отделки всех типов лицевых кож. Самополирующаяся, приятно пахнущая эмульсия восков и смол. Сильный блеск.',
    },
  },
  {
    path: 'ledafilsuper',
    title: 'Ledafil Super',
    content: {
      itemName: "Ledafil Super",
      fullName: 'Средство для уреза LEDAFIL SUPER 32480 цв.нейтральный банка 1 кг',
      logo: kenda,
      image: LEDAFIL_SUPER,
      //component: 'AprettoMild',
      price: '50000',
      characteristicsList: [
        { label: 'Производитель', value: 'KENDA FARBEN (Италия)' },
        { label: 'Морозоустойчивый', value: 'Нет' },
        { label: 'Срок хранения', value: '36 месяцев' },
        { label: 'Цвет', value: 'Нейтральный' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '1 кг' },
        { label: 'Вид упаковки', value: 'Банка пластиковая' },
      ],
      path: 'ledafilsuper',
      details: 'Аппретура на водной основе для отделки всех типов лицевых кож.Самополирующаяся, приятно пахнущая эмульсия восков и смол. Сильный блеск.',
    },
  },
  {
    path: 'eco1816',
    title: 'ECOSTICK 1816B',
    content: {
      itemName: "ECOSTICK 1816B",
      fullName: 'Клей ECOSTICK 1816B на водной основе для кожи, экокожи, тканей, ПВХ, ЭВА',
      logo: farestali,
      image: eco1816,
      //component: 'AprettoMild',
      price: '50000',
      characteristicsList: [
        { label: 'Производитель', value: 'Intercom' },
        { label: 'Морозоустойчивый ', value: 'Нет' },
        { label: 'Срок хранения', value: '6 месяцев' },
        { label: 'Цвет', value: 'Белый' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '100 мл, 1л' },
        { label: 'Вид упаковки', value: 'Банка пластиковая' },
        // { label: 'Подвержен деформации', value: 'Да' },
      ],
      path: 'eco1816',
      details: 'Клей на водной основе идеально подходит для соединения кожи, экокожи, тканей, чехлов, картона. Идеально подходит для склеивания ПВХ, ЭВА, нейлона и готовой резины. Идеально подходит для склеивания жирной кожи с содержанием жира до 15%.',
    },
  },
  {
    path: 'elixir',
    title: 'Elixir',
    content: {
      itemName: "Elixir",
      fullName: 'Средство финишное ELIXIR 37900 цв.нейтральный банка 1 кг',
      logo: kenda,
      image: elixir,
      //component: 'AprettoMild',
      price: '50000',
      characteristicsList: [
        { label: 'Производитель', value: 'KENDA FARBEN (Италия)' },
        { label: 'Морозоустойчивый ', value: 'Нет' },
        { label: 'Срок хранения', value: '36 месяцев' },
        { label: 'Цвет', value: 'Нейтральный' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '10,5 кг кг' },
        { label: 'Вид упаковки', value: 'Банка пластиковая' },
        // { label: 'Подвержен деформации', value: 'Да' },
      ],
      path: 'elixir',
      details: 'Средство на водной основе с водоотталкивающим эффектом. Применяется как защитное финишное средство против водных и масляных пятен для натуральной кожи, замши и нубука.',
    },
  },
  {
    path: 'sar306',
    title: 'SAR 306',
    content: {
      itemName: "SAR 306",
      fullName: 'Полиуретановый клей (десмокол) SAR 306 цв. черный банка 15 кг',
      logo: kenda,
      image: sar306,
     // component: 'AprettoMild',
      price: '50000',
      characteristicsList: [
        { label: 'Производитель', value: 'KENDA FARBEN (Италия)' },
        { label: 'Плотность', value: '0,86 г/см3' },
        { label: 'Срок хранения', value: '36 месяцев' },
        { label: 'Цвет', value: 'Черный' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '16,1 кг' },
        { label: 'Вид упаковки', value: 'Банка металлическая' },
        { label: 'Подвержен деформации', value: 'Да' },
      ],
      path: 'sar306',
      details: 'Однокомпонентный полиуретановый клей на основе растворителя для приклеивания подошв из ТЭП, ПУ, ПВХ, резин SBR, тунита к верху из натуральных и искусственных материалов.  Температура реактивации - 70 - 80 град.',
    },
  },
  {
    path: 'sar30e',
    title: 'SAR 30 E',
    content: {
      itemName: "SAR 30 E",
      fullName: 'Полихлоропреновый клей (наирит) SAR 30 E банка 15 кг',
      logo: kenda,
      image: sar30E,
     // component: 'AprettoMild',
      price: '50000',
      characteristicsList: [
        { label: 'Производитель', value: 'KENDA FARBEN (Италия)' },
        { label: 'Плотность', value: '0,9 г/см3' },
        { label: 'Срок хранения', value: '36 месяцев' },
        { label: 'Цвет', value: 'Желтый' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '15 кг' },
        { label: 'Вид упаковки', value: 'Банка металлическая' },
        { label: 'Подвержен деформации', value: 'Да' },
      ],
      path: 'sar30e',
      details: 'Универсальный однокомпонентный полихлоропреновый (наиритовый) клей для обувного и кожгалантерейного производства',
  }
  },
  {
    path: 'a240',
    title: 'A240',
    content: {
      itemName: "A240",
      fullName: 'Клей на водной основе A240 банка 10 кг',
      logo: kenda,
      image: a240,
     // component: 'AprettoMild',
      price: '50000',
      characteristicsList:[
        { label: 'Производитель', value: 'INDUSTRIE CHIMICHE FORESTALI' },
        { label: 'Морозоустойчивый ', value: 'Нет' },
        { label: 'Срок хранения', value: '6 месяцев' },
        { label: 'Цвет', value: 'Белый' },
      ],
      packagingList: [
        { label: 'Вес брутто', value: '10,5 кг кг' },
        { label: 'Вид упаковки', value: 'Банка пластиковая' },
        // { label: 'Подвержен деформации', value: 'Да' },
      ],
      path: 'a240',
      details: 'Полихлоропреновый клей на водной основе для различных сборочных операций: загибка, позиционирование, соединение с подкладкой и различные виды дублирования. Экологически чистый. Не имеет запаха.',
  },
  }
];
