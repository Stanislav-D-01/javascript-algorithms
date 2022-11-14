/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n) {
    // Напишите код здесь
    const arr1 = [0];
    for (let i = 0; i < n; i++){
        arr1[i] = i+2
    }
    check = true;
    arr1.forEach(element => {
        if (element !== n){
            if (n % element === 0){check = false}
        }
    });
    if (n === 2){return true;}
    if ((n === 0) ||(n === 1)) {return false}
    return check;

  
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true