// ------------------------INCREMENTS-----------------------------
// let x = 0;
// x++;
// x=x+1;
// console.log(x);
// x+=1;
// console.log(x);
//
// x = x-1;
// x-=1;
// console.log(x);
// x--;
// console.log(x);

// let a = 0;
// let b = ++a;
// console.log(b, a);

// -----------------------FOR OF----------------------------------------
// let users = [
//     {name: 'Vasya', age:27, status: false},
//     {name: 'Olya', age:27, status: false},
//     {name: 'Ira', age:27, status: false},
//     {name: 'Kate', age:27, status: false},
//     {name: 'Vanya', age:27, status: false},
//     {name: 'Kolya', age:27, status: false},
//     {name: 'Vasya', age:27, status: false},
//     {name: 'Kristina', age:27, status: false},
//     {name: 'Vasya', age:27, status: false},
//     {name: 'Vasya', age:27, status: false},
//     {name: 'Vasya', age:27, status: false}
// ];
// debugger;
// for (let user of users) {
//     if (!user.status) {
//         console.log(user)
//     }
// }
// ----------------------------FOR------------------------------------------
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
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<h3>${users[i].name}</h3>`)
// }
// -----------------------------FOR IN--------------------------------------
// let user = {
//     id: 1,
//     name: 'vasya',
//     status: true,
// }
// for (let fieldName in user) {
//     console.log(user[fieldName]);
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
// for (const user of users) {
//     for (let fieldName in user){
//         console.log(fieldName, user[fieldName]);
//     }
// }
//------------------------------ WHILE------------------------------------
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
//
// let i =0;
// while(i<users.length){
//     console.log(users[i]);
//     i++;
//
// }
do{
    console.log('dfd')
}while(false)
