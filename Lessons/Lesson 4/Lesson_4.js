// function writer(tittle, price, description) {
//     document.write(`
//         <div>
//             <h2>${tittle} ${price}</h2>
//             <p>${description}</p>
//         </div>`
//     );
// }
// writer('milk', 32, 'some milk');
function printArray(array) {
    for (const item of array) {
        console.log(item);
    }
}
let users = [
    {name: 'Vasya', age:27, status: false},
    {name: 'Olya', age:32, status: true},
    {name: 'Ira', age:14, status: false},
    {name: 'Kate', age:28, status: true},
    {name: 'Vanya', age:24, status: false},
    {name: 'Kolya', age:36, status: false},
    {name: 'Vasya', age:20, status: true},
    {name: 'Kristina', age:25, status: false},
    {name: 'Vasya', age:17, status: false},
    {name: 'Vasya', age:45, status: false},
    {name: 'Vasya', age:54, status: false}
];
printArray(users);