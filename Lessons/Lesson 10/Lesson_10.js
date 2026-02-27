// document.getElementById('target');
// target.onclick = function (ev) {
//     console.log('target clicked!');
//     console.log(ev)
// }
// // target.onmousemove = function (ev) {
// //     console.log(ev.clientX, ev.clientY)
// //     let r = ev.clientX;
// //     let g = ev.clientX;
// //     let b = ev.clientY;
// //     this.style.background = `rgb(${r}, ${g}, ${b})`;
// // }
//
// // target.addEventListener('click', function (ev) {
// //     console.log('Hello');
// // })
// target.onmouseover = function () {
//     console.log('mouseover');
// };
// target.onmouseleave = function () {
//     console.log('mouseleave');
// };
// // let i1 = document.getElementById('i1');
// // i1.oninput = function () {
// //     console.log(this.value);
// //     target.innerText = this.value;
// // };
// let f1 = document.forms.f1;
// f1.onsubmit = function (ev){
//     ev.preventDefault();
//     console.log('submitted!');
//     let user = {name: this.username.value};
//     console.log(user)};
//
//
// window.onload = function () {
//     console.log('loaded!');
// };
//
// document.onreadystatechange = function () {
//     console.log(document.readyState);
// }

//---------------ЛОКАЛЬНЕ СХОВИЩЕ-----------------------
// localStorage.setItem('asd', 'sdf')
// let item = localStorage.getItem('asd');
// console.log(item);
// localStorage.clear();
// // localStorage.setItem('user', JSON.stringify({id:1, name:'Ira'}));
// let userJS = localStorage.getItem('user');
// console.log(userJS);
// let user = JSON.parse(userJS);
// console.log(user);
// user.age = 31;
// localStorage.setItem('user', JSON.stringify(user));

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
// localStorage.setItem('users', JSON.stringify(users));
//
// let usersJSON = localStorage.getItem('users');
// console.log(usersJSON);
// let parse = JSON.parse(usersJSON);
// console.log(parse);
// localStorage.setItem('users', JSON.stringify(parse));

// ---------------------ЛОКАЛЬНЕ СХОВИЩЕ DEMO------------------------
localStorage.clear()





