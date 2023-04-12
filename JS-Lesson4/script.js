// let i = 0;

// while (i < 10){
//     console.log(i)
//     i += 1;
// }

// Задание 1
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
let i = 0;
while (i < 3) {
alert( `number ${i}!` );
i++;
}


let a = (4>3) ? 'yes' : 'no';



// Задание 2
// Перепишите код с использованием тернарного оператора

// let country = 'Sweden';

// let access = country == 'Sweden' ? true : false;

// Задание 3
// Дан массив логических значений (true/false). Например: const roles = [true, false, false, true, false]
// Каждое значение обозначает админ (true) или пользователь (false).
// Из этого массива с помощью цикла сформировать массив объектов - roles, такой же длины, как и заданный массив.  У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
// Т.е. из
// [true, false, false]
// должно получиться
// [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
// ПОДСКАЗКИ:
// 1) создайте пустой массив newRoles.
// 2) обойдите исходный массив с помощью цикла и, используя тернарный оператор, определите значение роли (admin или user) для каждого элемента массива. Определив это значение (его лучше записывать в переменную), сразу же пушьте в новый массив нужный объект.

const roles = [true, false, false, true, false]
let newRoles = []
for(let i = 0; i < roles.length; i++){
    let userRole = roles[i] ? 'admin' : 'user';
    newRoles.push({'role' : userRole})
}
console.log (newRoles);



//Функции
// let number = 33;
// let num = 3;
// function mult2Numbers (num1, num2){
//     let result = num1 * num2;
//     return result;
// }
// // mult2Number (3, number);

// console.log(`Результат произведения ${number} и ${num} - ${mult2Numbers(number, num)}`);

function getSum (min, max){
    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(1, 10));
console.log(getSum(57, 74));
console.log(getSum(30, mult2Numbers (3, number)));


// Задание 4
// Создайте функцию findPositiveNumbers(). Она принимает массив в качестве параметра и возвращает новый массив, в котором содержатся только положительны элементы.
// Проверьте работу функции на примере массивов:
// const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90].

const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0]
const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90]
function findPositiveNumbers(array){
        const newNums = [];
    for (let i = 0; i < array.length; i++){
        if (array[i]>0){
            newNums.push(array[i]);
        }
    }
    return newNums;
}
console.log(findPositiveNumbers(nums));
console.log(findPositiveNumbers(numbers));




// Задание 5
// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

function newArray (value, length){
    const newMassive = [];
    for (let i = 0; i < length; i++){
        newMassive.push(value)
    }
   
    return newMassive;
}
console.log (newArray("Hello", 5));
console.log (newArray("Cat", 7));
console.log (newArray(7, 8));



// Задание 6
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.

// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
function filterFor (arr, a){
const newMassive = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] >= a){
    newMassive.push(arr[i]);
    }
}

return newMassive;
}
console.log (filterFor(arr, 10));
console.log (filterFor(arr, 5));
console.log (filterFor(arr, 3.11));


// Задание 7
// Написать функцию получения случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - с названием getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// ПОДСКАЗКИ: 
// Каждый цвет - это строка, в которой участвуют 3 числа в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию.

function getRandomRGB() {
        const r = getRandomInteger(0, 255);
        const g = getRandomInteger(0, 255);
        const b = getRandomInteger(0, 255);
        return `rgb(${r},${g},${b})`;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
console.log(getRandomRGB())
    

