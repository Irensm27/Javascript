
//------СТРІЛОЧНІ ФУНКЦІЇ--------
// function calc(a, b){
//     return a + b;
// }

// let calc = (a, b) => a + b;
// console.log(calc(10,20));

//----ФУНКЦІЇ В ОБ'ЄКТАХ--------
// let user = {
//     name: "John",
//     age: 25,
//     greeting: function (msg){
//         return `${msg} my name is ${this.name}`;
//     },
//     vitanny: (msg)=> `${msg} my age is ${user.age}`
// }
// console.log(user.greeting('hi'));
// console.log(user.vitanny('Hello'))

//------------ЗАМИКАННЯ----------------
// function asd(){
//     let x = 10;
//     function inner(){
//         return ++x;
//     }
//     return inner;
// }
// console.log(asd()());

// let user = {name:'John',age:35};
// function userBuilder(name, age){
//     let user = {name, age};
//     return {
//         getName(){
//             return user.name;
//         },
//         getAge(){
//             return user.age;
//         },
//         setAge(age){
//             if (age>0){
//                 user.age = age;
//             }
//         }
//     }
// }
// let builder = userBuilder('Vasya', 27);
// console.log(builder);
// console.log(builder.getName());
// builder.setAge(100);

//-----------РЕКУРСІЯ--------------
// function foo() {
//     console.log('foo');
//     // foo()
// }
// foo();
// function iterator(arr, i){
//     console.log(arr[i]);
//     i++;
//     if (i<arr.length){
//     iterator(arr,i);}
// }
// iterator([11,33,44],0)

// let arr = [11,22,33,[44,55]];
// let innerArray = [];
// function flatter(array){
//
//     for (const item of array) {
//        if (Array.isArray(item)){
//            flatter(item)
//        }
//        else{
//            innerArray.push(item);
//        }
//     }
// }
// flatter(arr);
// console.log(innerArray);

//------------ГЕНЕРАТОРИ------------
// function *foo(){
//     yield 100;
//     yield 200;
//     yield 300;
// }
// let fooGenerator = foo();
// console.log(fooGenerator);
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());

// function *cardsHolder (){
//     const cards = [
//         {value:6, suite: 'diamond'},
//         {value:7, suite: 'spade'},
//         {value:8, suite: 'diamond'},
//         {value:9, suite: 'spade'}
//     ]
//     for (const card of cards) {
//         yield card;
//     }
// }
// let cardsHolder1 = cardsHolder();
// console.log(cardsHolder1.next());
// console.log(cardsHolder1.next());

//------------ОБРОБКА ПОМИЛОК-----------------

// console.log('start');
// try{
//     console.log(a);
// } catch (e) {
//     console.log(e);
// } finally {
//     console.log('finish');
// }
// // console.log('end');
// function calc(a,b){
//     if(b ===0){
//         throw new Error('b is 0')
//     }
//     return a / b;
// };
// calc(10,0)