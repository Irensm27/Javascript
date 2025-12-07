// function writer(tittle, price, description) {
//     document.write(`
//         <div>
//             <h2>${tittle} ${price}</h2>
//             <p>${description}</p>
//         </div>`
//     );
// }
// writer('milk', 32, 'some milk');
// function printArray(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }

// let users = [
//     {name: 'Vasya', age:27, status: false},
//     {name: 'Olya', age:32, status: true},
//     {name: 'Ira', age:14, status: false},
//     {name: 'Kate', age:28, status: true},
//     {name: 'Vanya', age:24, status: false},
//     {name: 'Kolya', age:36, status: false},
//     {name: 'Vasya', age:20, status: true},
//     {name: 'Kristina', age:25, status: false},
//     {name: 'Vasya', age:17, status: false},
//     {name: 'Vasya', age:45, status: false},
//     {name: 'Vasya', age:54, status: false}
// ];
// printArray(users);

// function calc(a, b){
//     let result = a + b;
//     return result;
// }
// let r1 = calc (20, 10);
// let r2 = calc (22, 10);
// console.log(r1, r2);

// function percentage(cash, per){
//     return cash / 100*per;
// }
// function tax(sum){
//     let result = sum -percentage(sum, 20) - percentage(sum, 1.5);
//     return result;
// }
// let a = tax(10000);
// console.log(a);

// function filter (users){
//     let filterUser = [];
//     for (const user of users) {
//         if( user.age>30) {
//         filterUser.push(user);}
//     }
//     return filterUser;
// }

// let users = [
//     {name: 'Vasya', age:27, status: false},
//     {name: 'Olya', age:32, status: true},
//     {name: 'Ira', age:14, status: false},
//     {name: 'Kate', age:28, status: true},
//     {name: 'Vanya', age:24, status: false},
//     {name: 'Kolya', age:36, status: false},
//     {name: 'Vasya', age:20, status: true},
//     {name: 'Kristina', age:25, status: false},
//     {name: 'Vasya', age:17, status: false},
//     {name: 'Vasya', age:45, status: false},
//     {name: 'Vasya', age:54, status: false}]
// let f = filter(users);
// console.log(f);

//------------------ARGUMENTS----------------------------
// function foobar(){
//     console.log(arguments);
//     if( arguments.length === 2){
//         return arguments[0] + arguments[1];
//     }
//     else if(arguments.length === 3){
//         return arguments[0] + arguments[1] + arguments[2];
//     }
// }
// console.log(foobar(10, 20, 30));

//--------------------REST ARGUMENT-----------------------
// function f(y,...x){
//     console.log(x);}
// f(1, 4,45)