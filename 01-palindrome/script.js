/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    // Напишите код здесь
    let stroka='';
    for (let p=0; p<str.length; p++){
        if(str[p]!==' ' && str[p]!==',' && str[p]!=='!' && str[p]!=='?'){stroka=stroka+str[p]}
    };

    stroka = stroka.toLowerCase();
 for (let i=0; i<stroka.length; i+=1){
   if (i===0){
    if ((stroka.slice((-1) - i  )) !== stroka[i]){return false};
   }
    else {if ((stroka.slice((-1) - i , (-1) - i+1 )) !== stroka[i]){return false}}   
    }
    
    return true;  
 }



// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!')); // true)
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/