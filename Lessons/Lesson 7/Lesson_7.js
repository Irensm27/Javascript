//----------ФУНКЦЫЪ КОНСТРУКТОРИ-------------

// function User(name, age, status){
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
// let user1 = new User ('Ira', 27, true);
// let user2 = new User ('Ira', 27, false);
// function User(name, age, status, wifeName, wifeAge){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge};
// }
// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
// User.prototype.greeting = function() {
//     return "Hello, " + this.name + "!";
// }
// let user1 = new User('Ira', 27);
// console.log(user1.greeting());

// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
// let user1 = new User('Ira', 27);
// user1.greeting = function (msg){
//     return `${msg}'Hi' ${this.name}`};
// let user2 = new User('Artem', 26);
// user1.greeting.apply(user2);
// console.log(user1.greeting.call(user2, 'Olla'));
//
//-------------------КЛАСИ ТА НАСЛІДУВАННЯ----------------------
// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     static greeting(){
//         return `hello my name is ${this.name}`;
//     }
// }
// let user = new User('Ira', 27);
// // console.log(user);
// // console.log(user.greeting());
//
// class Customer extends User{
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
// }
//
// console.log(new Customer('Ira', 17, '1111'));

//-------------------РОБОТА З ДАТАМИ-------------------
// let now = new Date();
// console.log(now)
// console.log(now.getTime())
// let date1 = new Date(1768663092807);
// console.log(date1)

//-------------SET-----------------
// let set = new Set();
// set.add('asd');
// set.add('xcv');
// console.log(set);
// console.log(set.has('asd'));
// set.delete('asd');
// console.log(set.size);
//
// set.forEach(value => console.log(value));
// let from = Array.from(set);

//---------------MAP---------------------
let map = new Map;
console.log(map);
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');
console.log(map);
console.log(map.get(1));


