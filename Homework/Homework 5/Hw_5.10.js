//– створити функцію, яка повертає найменше число з масиву
let foo = (arr) => {
    let a = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        if (arrElement <= a) {
            a = arrElement;
        }
    }return a;
}
console.log(foo([17, 28, 41, 15]));