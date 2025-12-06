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
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i)
// }

//-----------------------13-------------------------------
//– Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

//-----------------------14------------------------------
//– Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }

//-----------------------15-------------------------------
//– Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

//-----------------------16--------------------------------
// створити масив книжок (назва, кількість сторінок, автори , жанри).
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор
// let books = [
//     {title: "JS Intro", pages: 150, authors: ["Tom"], genres: ["tech", "js"]},
//     {title: "Long Book Title Example", pages: 350, authors: ["Anna", "Kate"], genres: ["novel"]},
//     {title: "Short", pages: 90, authors: ["Mike"], genres: ["fantasy", "adventure", "magic"]},
//     {title: "Mega Story", pages: 400, authors: ["Alice", "Bob"], genres: ["horror", "mystery"]}
// ];
// let biggest = books[0];
// for (let b of books) {
//     if (b.pages > biggest.pages) biggest = b;
// }
// console.log(biggest);
// let maxGenres = books[0];
// for (const i of books) {
//     if (i.genres.length > maxGenres.genres.length) maxGenres = i;
// }
// console.log(maxGenres);
// let maxTitle = books[0];
// for (const i of books) {
//     if (i.title.length > maxTitle.title.length) maxTitle = i;
// }
// console.log(maxTitle);
// let twoAuthors = [];
// for (const i of books) {
//     if( i.authors.length === 2) twoAuthors.push(i);
// }
// console.log(twoAuthors);
// let oneAuthor = [];
// for (const i of books) {
//     if( i.authors.length === 1) oneAuthor.push(i);
// }
// console.log(oneAuthor);

//-------------------------17----------------------------
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  let arr = [];
// for (let i = 0; i < 100; i++) {
//    if (i %2 ===0 ) arr.push(i);
// }
// console.log(arr);
// for (let i = 0; i < 100; i++) {
//     if (i %2 !== 0) arr.push(i);
// }
// console.log(arr);
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() *100))
// }
// console.log(arr);
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
// }
// console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемент
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);}
// console.log(arr);
// for (let i = 0; i < arr.length; i+= 3) {
//     console.log(arr[i]);
// }
// for (let i = 0; i < arr.length; i+= 3) {
//     if( arr[1] %2 ===0) console.log(arr[i]);
// }
// let arr1= [];
// for (let i = 0; i < arr.length; i+= 3) {
//     if( arr[1] %2 ===0) arr1.push(arr[i]);
//         console.log(arr[i]);
// }
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i+1]%2 ===0) console.log(arr[i]);
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
// let arr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (const m of arr) sum += m;{
//     console.log(sum/arr.length);
// }
// let arr = [100,250,50,168,120,345,188];
// let arr1 = [];
// for (const n of arr)  arr1.push(n*5);
// console.log(arr1);

//--------------------18--------------------
// – Дано 2 масиви з рівною кількістю об’єктів.
//     Масиви:
// let usersWithId = [
// {id: 1, name: 'vasya', age: 31, status: false},
// {id: 2, name: 'petya', age: 30, status: true},
// {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
// {user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// // З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// // Записати цей об’єкт в новий масив
// //
// let arr = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     const user = usersWithId[i];
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const city = citiesWithId[j];
//         if( user.id === city.user_id) user.address = city;
//     }
//     arr.push(user);
// }
// console.log(arr);

//------------------19------------------------
//– Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [18, 45, 398, 47, 654, 47, 8, 23, 58, 12, 43];
// for (const number of arr) {
//     if (number %2 === 0) console.log(number);
// }

//------------------20--------------------------
//– Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [18, 45, 398, 47, 654, 47, 8, 23, 58, 12, 43];
// let arr1 = [];
// for (const i of arr) {
//     arr1.push(i);
// }
// console.log(arr1);

//--------------------21------------------------
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let a = '';
// for (let i = 0; i < arr.length; i++) {
//     a += arr[i];
// }
// console.log(a);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let a = '';
// let i = 0;
// while (i < arr.length) {
//     a += arr[i];
//     i++
// } console.log(a)

//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = ['a', 'b', 'c'];
// let a = '';
// for (const string of arr) {
//     a +=string;
// }
// console.log(a);