//-----------ФУНКЦІЇ STRING---------------

// let str = 'Hello okten';
// // let s = str.concat('!!!');
// // console.log(s);
//
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.startsWith('sa'));
// console.log(str.endsWith('sa'));
// console.log(str.substring(0,5));
// console.log(str.indexOf('H'));
// console.log(str.lastIndexOf('o '));
// console.log(str.charAt(8));
// console.log(str.replaceAll('e','!'));
// let split = str.split(' ');
// console.log(split);

//--------БАЗОВІ ФУНКЦІЇ МАСИВІВ-----------
//  let arr = [];
// console.log(Array.isArray(arr));
//
// arr.push('new1');
// arr.push('new2');
// arr.push('new3');
// arr.push('new4');
// arr.push('new5');
// arr.pop();
// arr.unshift('!!!')
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
//
// let join = arr.join(';');
// console.log(join);
// let nums = [1, 2, 3, 4, 5];
//
// let concat = arr.concat(nums);
// console.log(concat);
// console.log(nums.reverse());
//
// console.log(concat.slice(0, 4));
//
// // let splice = concat.splice(0,2);
// // console.log(splice);
//
// // console.log(concat.indexOf(5));
// // concat.splice(concat.indexOf(5),1);
//
// console.log(concat.includes(3));

//----------ФУНКЦІЇ МАСИВІВ З КОЛБЕКАМИ---------------
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
];
// users.forEach(function (value, index, array){
//     console.log(value);
// });
// users.forEach(value => console.log(value));

// let filterUsers = users.filter(value => value.age > 30 );
// console.log(filterUsers);

// let mapedUsers = users.map(function (value, index) {
//     return{...value, id: index+1};
// });
// console.log(mapedUsers);

// let find = users.find(value => value.name === 'Ira');
// console.log(find);

// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

let sort = users.sort((u1, u2) => {return u1.age -u2.age; });
console.log(sort);