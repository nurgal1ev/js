/* let a = 1;
console.log(a);

a = "test";
console.log(a);


// арифметические операторы
const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3 // 2 * 2 * 2
console.log(volume);

// строки
const city = 'Москва';
const street = 'Новослободская';
console.log(city +', ' + street +', ' + 5);

// присваивание
let age = 7 + 5;
age += 2; // age = age + 2
age -= 1; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2
age++ // age = age + 1
age-- // age = age - 1
console.log(age);

// сравнения
const vasya  = 20;
console.log(age < vasya);
console.log(age > vasya);
console.log(age >= vasya);
console.log(age <= vasya);
console.log(age == vasya);

// порядок операторов
const box = 15;
const size = 10;
const isSuited = box - 3 > size - 8;
console.log(isSuited);

// 15 -(12) 3 >(10) 10 -(12) 8;
const b = (6 + 10) / 2;
console.log(b);

let c;
let d;
c = d = 100 - 34;
console.log(c);
console.log(d);

// типы данных
let num = 5;
let num2 = 4.6;
console.log(typeof num);

const paymentRate = 80;
const newWorkHours = 40;
const available = (11 - 2) * 5;
console.log('Смогу ли работать ' + (available > newWorkHours));
console.log('Стоимость работ: ' + newWorkHours * paymentRate + '$');

// шаблонные строки
const projectName = 'сайт магазина';
const price = 2000;
const author = 'Иван Иванов';

const template = author + ' заказал ' + projectName + ' по цене ' + price + '$'
console.log( template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`
console.log(template2);

const template3 = 'Проект \n' + 'Цена:' + price + '$';
console.log(template3);

const template4 = `Проект
цена: ${price}$`

console.log(template4);

// поток
const money = 100;

if (money > 50) {
    console.log('куплено');
} else if (money > 50) {
    console.log('куплен мини продукт');
} else {
    console.log('не куплено');
}

const deposit = 10000;
const rate = 0.07;
const depositLength = 24;

const housePrice = 13500;

const result = deposit * (1 + rate / 12 ) ** depositLength;
if (result > housePrice) {
    console.log(`Мы накопили: ${result}.  Может купить дом. Остаток ${result - housePrice}`);
} else {
    console.log(`Мы накопили: ${result}. Не хватает средств`);
}

// оператор равенства
const secretNumber = 7;

if (secretNumber === 7) {
    console.log('угадано');
}

const q = prompt('Введите число');
if (q == 7) {
    console.log('угадано не строго');
} else {
    console.log('не угадал');
}

// switch
const role = prompt('введите роль:');

switch (role) {
    case 'manager': // role === 'manager'
        console.log('менеджер');
        break
    case 'admin': // role === 'admin'
        console.log('админ');
        break
    case 'CEO': // role === 'CEO'
        console.log('СЕО');
        break
    default:
        console.log('мы тебя не знаем');
}

switch (role) {
    case 'manager':
    case 'admin':
        console.log('не руководитель');
        break
    case 'CEO':
        console.log('руководитель');
        break
    default:
        console.log('мы тебя не знаем');
}

const bmwPrice = 100000;
const fordPrice = 10000;
const budget = 20000

let message = budget > bmwPrice
    ? 'BMW'
    : budget > fordPrice ? 'FORD' : 'ВЕЛОСИПЕД';

console.log(`я хочу купить ${message}`);

const captcha = prompt('сколько будет 7 + 15' || 'сколько будет 7 - 15')

if (captcha === 22 || captcha === '-8') {
    console.log('успех');
} else if (captcha === 'я не робот') {
    console.log('успех');
} else {
    console.log('вы робот');
}

switch (true) {
    case captcha === '22' || captcha === '-8' || captcha === 'я не робот':
        console.log('успех');
        break;

    default:
        console.log('вы робот');
}

// булева логика
const isAdmin = false;
const canWrite = true;

console.log(`системный файл ${isAdmin && canWrite}`);
console.log(`обычный файл ${isAdmin || canWrite}`);
console.log(`инвертируем права ${!isAdmin && canWrite}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`системный файл с редактированием ${isAdmin || isSuperAdmin && canWrite && isEdited}`);


console.log('Вася' || 'Оля');
console.log(false || 'Оля');
console.log('Вася' || false);

console.log('Вася' && 'Оля');
console.log('Вася' && false);
console.log(true && false);

let a = 'Петя';
const username = a || 'Вася';
console.log(username);

const isAdmin = true;
const filename = isAdmin && 'file.mp4';
console.log(filename);

let user = 'Саша';
console.log(user || 'default user');

const balance = 1000;
const bonusBalance = 110;
const isBanned = false;
const isExist = false;
const isSelling = true;

if ((balance > 1000 || bonusBalance > 100) && (isBanned && isExist && !isSelling) === false) {
    console.log('куплено');
}



const balance = 1200;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
console.log(canBuy); */

// функции
function logName(name, surname) {
    console.log(`Мое имя ${name} ${surname}`);
}
logName('Вася', 'Васин');


////
function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

const example2 = countDepositSum(1000, 48, 0.10);
console.log(example2);

////
/*
function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(563));

////
const poft = function (num) {
    return num * num;
}
console.log(poft(6)); */

////
function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(7));

const poft = (num) => num * num;
console.log(poft(3));
