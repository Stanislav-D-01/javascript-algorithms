/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    if ((typeof num === 'number') && (num >= 1)){
    const arr = [];
    for (let i = 1; i <= num; i++){
        arr.push(i);
   }
   
    arr.forEach((elem) => {
    if ((elem % 3 === 0) && (elem % 5 === 0)){
        console.log('fizzbuzz');
    } else if ((elem % 3 === 0)){
        console.log('fizz');
    } else if ((elem % 5 === 0)){
        console.log('buzz');
    } else {
        console.log(elem);
    }
   })
} else {console.log('введен 0 или строка')}
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));