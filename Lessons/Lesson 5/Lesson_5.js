
//------СТРІЛОЧНІ ФУНКЦІЇ--------
// function calc(a, b){
//     return a + b;
// }

// let calc = (a, b) => a + b;
// console.log(calc(10,20));

//----ФУНКЦІЇ В ОБ'ЄКТАХ--------
let user = {
    name: "John",
    age: 25,
    greeting: function (msg){
        return `${msg} my name is ${this.name}`;
    }
}
console.log(user.greeting('hi'));

vitanny: (msg)=> `${msg} my age is ${this.age}`;
console.log(user.vitanny('Hello'))