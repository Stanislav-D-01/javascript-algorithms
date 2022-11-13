/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, sum) {
    // Напишите код здесь
    let bool = false;
    for (i1 = 0; i1<arr.length-1; i1++){
        for (i2 = 0; i2<arr.length-1; i2++){
            if (i1 !== i2){
                if ((arr[i1]+arr[i2]) === sum){
                    bool = true;
                    break;
                }
            }
        }


    }
return (bool);


}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false