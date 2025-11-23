//-------------- МАСИВИ-----------------------
// let arr;
// arr = [123, 234, 345, -123, 0, true, 'asd'];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);
//
// arr[0] = 'new value';
// console.log(arr);
//
// arr[7] = 'okten';
// console.log(arr);
// arr[arr.length] =  123456;
// console.log(arr);

// let arr = [
//     [11,22,33],
//     [],
//     []
// ];
// console.log(arr);
// console.log(arr[0]);
// let innerArray = arr[0];
// console.log(innerArray[1]);
//
// console.log(arr[0][1]);
//--------------------------- ОБ'ЄКТИ------------------------

//
// let user1 = {
//     id: 1,
//     name: "Ira",
//     age: 27,
//     skills: ['html' , 'javascript'],
//     wife: {
//         name: 'Olya',
//         age: 25,
//     }
// }
// console.log(user1);
// console.log(user1.id);
// console.log(user1['age']);
// console.log(user1.skills);
// console.log(user1.skills[0]);
// console.log(user1.wife.name);

// -----------------МАСИВИ З ОБ'ЄКТАМИ----------------------
// let users = [
//     {skills: ['html','mysql','mongo'], id:1, name:'vasya', age:31, status: true},
//     {skills: ['html','js'],id:2, name:'petya', age:33, status: false},
//     {skills: ['html','js'],id:3, name:'anna', age:28, status: true},
//     {skills: ['html','mysql','mongo'],id:4, name:'olga', age:29, status: false}
// ];
// console.log(users);
// let user0 = users[0];
// console.log(user0.age);
// console.log(users[0].skills[2]);
// console.log(users[0]['skills']);
//-------------------------- МОДИФІКАЦІЯ ОБ'ЄКТІВ------------------------
// let user = {
//     id: 1,
//     name: "vasya",
// };
// user.age = 31;
// user['status'] = false;
// console.log(user);
//
// delete  user.id;
// console.log(user);
//
// ----------------ПРИМІТИВИ ТА РЕФЕРЕНЦІАЛЬНІ ТИПИ-------------------------
// let a = 100;
// let b = a;
// b = b + 10;
//
// let user = {name:'vasya'};
// let user2 = user;
// user2.age = 31;
// console.log(user2);
// console.log(user);
// ----------------ЛОГІЧНІ РОЗГАЛУДЖЕННЯ IF-------------------------
// let color = 'green';
// if(color === 'red'){
//     console.log('test');
// }
// else{
//     console.log('go');
// }
//
// let color = prompt('enter color');
// let isroadclear = confirm('is road clear');
// if (color === 'green' &&  isroadclear){
//     console.log('go')
// }
// else if(color === 'yellow'){
//     console.log('wait');
// }
// else if(color === 'red'){
//     console.log('stop');
// }
// else{
//     console.log('error');
// }
//--------------------- SWITCH--------------------------
// let color = prompt('enter color');
// switch (color){
//     case 'green':
//         console.log('green');
//         break;
//     case 'red':
//         console.log('red');
//         break;
//     case 'blue':
//         console.log('blue');
//         break;
//     default:
//         console.log('error');
//         break;
//
// }
// -----------------ТЕРНАРНИЙ ОПЕРАТОР-------------------------
let obj = {
    id: 1,
    name: "Vasya",
    age: 19
}
// let access;
// let conditional = obj.age >18;
// if (obj.age > 18) {
//     access = true;
// }
// else {
//     access = false;
// }
// console.log(access);
//
let access = obj.age>18? 'Yes' : 'No';
console.log(access);

