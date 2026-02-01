// let name = 'Vasya';
// let age = 20;
// let user = {
//     name,
//     age,
//     foo(){
//         console.log(this)
//     }
// }
// console.log(user);
// user.foo()

//-----------ДЕСТРУКТУРИЗАЦІЯ-------------
//
// let user = {
//     name: "John",
//     age: 25,
//     foo(){
//         console.log("foo");
//     }
// }
//
// let {name} = user;
// console.log(name)


// let name = 'Vasya';
// let age = 20;
// let user = {
//     name,
//     age,
//     foo(){
//         console.log(this)
//     }
// }
// let {name: userName, age: userAge}= user;
// console.log(userAge);

// let numbers = [11, 22, 33];
// let [a, b] = numbers;
// console.log(a, b);

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
// ];
// let [{name, age, status}, user2] = users;
// console.log(user2);

//---------SPRED------------------
// let user = {
//     name: "John",
//     age: 25,
// };
// let userCopy = {...user};
// userCopy.age = 50;
// console.log(userCopy);
//
// let nums = [11, 22, 33];
// let nums2 = [...nums];

//------------------КОПІЇ-------------------
// let user = {
//     name: "John",
//     skills: ['html','javascript','css'],
// }
// // let userClone= {...user};
// let s = JSON.stringify(user);
// console.log(s);
// let parse = JSON.parse(s);
//  let assign = Object.assign({}, user);
//  console.log(assign);

//----------PHOTOTYPING--------------

// let base = {
//     id: 1,
//     name: "Javascript",
// };
// let copy = Object.create(base);
// console.log(base);
// console.log(copy.id);
// console.log(copy);
// copy.id = 2;
// console.log(copy);
// console.log(copy.hasOwnProperty('id'));
// let obj = {};
// obj.__proto__ = base;
// console.log(obj);

//-------------DESCRIPTORS---------------
let user ={
    firstName: "John",
    lastName: "Doe",
};
// console.log(user);
// user.firstName = "Taras";
// for (const userElement in user) {
//     console.log(userElement);
// }
Object.defineProperty(user, 'id', {value:100500, writable: false, enumerable: false, configurable: false});
console.log(user.id);
for (const userKey in user) {
    console.log(userKey);
}








