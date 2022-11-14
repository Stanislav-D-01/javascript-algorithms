/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    // Напишите код здесь

    const arr3 = [];
    arr1.forEach(elem => {
    let repeatValue = false;
    if (!arr3.includes(elem)) {
    arr2.forEach(elem2 => {
       if (elem === elem2){repeatValue = true}
    })
    if (repeatValue === true){arr3.unshift(elem)}
    }
})
return arr3
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []