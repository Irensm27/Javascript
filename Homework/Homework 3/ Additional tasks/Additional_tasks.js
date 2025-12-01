// ----------------1----------------------
// .// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль
// let int = [28, 17, 31,258,144];
// console.log(int);
// let str = ['Hello', 'World', 'Hello', 'World', 'World'];
// console.log(str);
// let arr = ['Hello', 'Okten', 28, true, 5.47];
// console.log(arr);

//----------------2------------------
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 1;
// arr[1] = 'Hello';
// arr[2] = 258;
// arr[3] = 30;
// arr[4] = 3.25;
// arr[5] = true;
// arr[6] = [28, 15, 896, 21];
// console.log(arr);

//----------------3-----------------
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”
// 8. вивести масив у зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// let i = 0;
// while (i < arr.length) {
//    if (i %2 !==0) console.log(arr[i]);
//    i++
// }
// for (let i = 0; i < arr.length; i++) {
//     if( i%2 !==0) console.log(arr[i]);
// }
// let i =0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) console.log(arr[i]);
//     i++
// }
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] %2 === 0) console.log(arr[i]);
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] %3 ===0) {
//         arr[i]= 'okten'
//     }
//     console.log(arr[i]);
// }
// for (let i = arr.length - 1; i >=0 ; i--) {
//     console.log(arr[i]);
// }
// let i = arr.length;
// while (i>=0){
//     console.log(arr[i]);
//     i--;
// }
// for (let i = arr.length -1; i >= 0; i--) {
//     console.log( arr[i])
// }
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length - 1;
// while (i>=0 ){
//     if (i %2 !==0 ) console.log(arr[i]);
//     i--;
// }
// for (let i = arr.length ; i >= 0; i--) {
//     if (i %2 !== 0) console.log(arr[i]);
// }
// let i = arr.length-1;
// while (i>=0){
//     if (arr[i] %2 ===0) console.log(arr[i]);
//     i--
// }
// for (let i = arr.length-1; i >=0; i--) {
//     if( arr[i] %2 ===0 ) console.log(arr[i]);
// }
// for (let i = arr.length-1; i >=0; i--) {
//     if( arr[i] %3 === 0){
//         arr[i] = 'okten';
//     }
//     console.log(arr[i]);
// }

//-----------------4-------------------
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [11,25,17,54,86,95,245,265,25,12];
// for (const number of arr) {
//     console.log(number);
// }
//-----------------5---------------------
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['Katya', 'vanya', 'ira', 'artem', 'kostya', 'natasha', 'nastya', 'vova', 'andrey', 'anya'];
// for (const string of arr) {
//     console.log(string);
// }
//------------------6----------------------
//– Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [28, 14, 3.47, 'vanya', true, 584, 'hello', 'world', 5.26, 17];
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
//-------------------7-----------------------
//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [28, 14, true, 'vanya', true, 584, 'hello', 'world', false, 17];
// // for (let i = 0; i < arr.length; i++) {
// //     if (typeof arr[i] === "boolean") console.log(arr[i]);
// // }
// for (const arrElement of arr) {
//     if (typeof arrElement === "boolean") console.log(arrElement);
// }
//--------------------8--------------------------
//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [28, 14, true, 'vanya', true, 584, 'hello', 'world', false, 17];
// for (const arrElement of arr) {
//     if(typeof arrElement==="number") console.log(arrElement);
// }
//---------------------9-------------------------
//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [28, 14, true, 'vanya', true, 584, 'hello', 'world', false, 17];
// for (const arrElement of arr) {
//     if(typeof arrElement === 'string') console.log(arrElement);
// }
//---------------------10--------------------------
//– Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'Hello';
// arr[1] = 'World';
// arr[2] = true;
// arr[3] = false;
// arr[4] = false;
// arr[5] = 258;
// arr[6] = true;
// arr[7] = 4587;
// arr[8] = 'anya';
// arr[9] = true;
// for (const arrElement of arr) {
//     console.log(arrElement);
// }
//----------------------11----------------------------
//– Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write('i')
// }
//-----------------------12------------------------------
//– Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write()
}