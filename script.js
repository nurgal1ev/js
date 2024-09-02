let a = 1;
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