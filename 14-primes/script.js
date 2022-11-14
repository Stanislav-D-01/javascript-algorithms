/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    // Напишите код здесь
    const arr = [];
    const arrPrime = [];
    for (let i = 0; i < num; i++){
        arr[i] = i + 1;
    };

    for (i = 0; i < num; i++){
        check = true;
        arr.forEach(element => {
            if ((arr[i] !== element) && (element !== 1)){
                if (arr[i] % element === 0){
                    check = false;
                }
            }
            });
            if ((check === true) && (arr[i] > 1)){
            arrPrime.push(arr[i])};
        };
    
    return arrPrime;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]