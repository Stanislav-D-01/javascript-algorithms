/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const arr1 = str1.split('') ;
    const arr2 = str2.split('');
    let check;
    let checkTrue = true
    if ((arr1.length === arr2.length) && (str1 !== str2)) {
        arr1.forEach(element => {
           check = arr2.some(element2 =>{
           return arr2.includes(element)
        })
        checkTrue = (checkTrue && check);
    });


return checkTrue;
} else return false;
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
