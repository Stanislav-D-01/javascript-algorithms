/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 * 
*/

function uniq(arr) {
    // Напишите код здесь
    
    const newArr=[];
  for (let i = 0; i < arr.length; i++){
    let repeatValue = false;
    for (let y = 0; y < arr.length-i-1; y++) {
        if (arr[y] === arr[arr.length-1-i]){
        repeatValue = true;
    } 
    };
    if (repeatValue === false) {newArr.unshift(arr[arr.length-1-i])}
}
return newArr;
};
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]