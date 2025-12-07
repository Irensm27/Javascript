// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
   let busket = 0;
    for (const arrElement of arr) {
        busket = busket + arrElement;
    }
    return busket;}
console.log(sum([1,2,3,4,5,6]));