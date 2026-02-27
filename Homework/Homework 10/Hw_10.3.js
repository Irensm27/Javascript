//Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
let form = document.forms.form;

// let button = form.sendButton;
// console.log(button);
// button.addEventListener('click', () => {
//     let valueName = form.name.value;
//     let valueSurname = form.surname.value;
//     let valueAge = form.age.value;
//     let obj = {valueName, valueSurname, valueAge};
//     console.log(obj);
// })
let result = document.getElementById('result');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valueName = form.name.value;
    let valueSurname = form.surname.value;
    let valueAge = form.age.value;
    let obj = {valueName, valueSurname, valueAge};
    console.log(obj);
    result.innerText = obj.valueName + ' ' + obj.valueSurname + ' ' + obj.valueAge;
})






