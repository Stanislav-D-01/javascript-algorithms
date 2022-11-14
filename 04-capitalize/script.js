/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] === ""){
            arr.splice (i, 1)
        }
    }



    str = arr.map ((item) => {
      return item[0].toUpperCase() + item.slice(1);
     }).join(' ');
    return str;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"