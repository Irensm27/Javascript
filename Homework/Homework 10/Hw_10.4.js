//є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let num = +localStorage.getItem('num');
num +=1;
localStorage.setItem('num', num);
let number = document.getElementsByClassName('number')[0];
number.innerText = num;