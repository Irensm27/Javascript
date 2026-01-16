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

function User(name, age){
    this.name = name;
    this.age = age;
}
let user1 = new User('Ira', 27);
user1.greeting = function (msg){
    return `${msg}'Hi' ${this.name}`};
let user2 = new User('Artem', 26);
user1.greeting.apply(user2);
console.log(user1.greeting.call(user2, 'Olla'));



