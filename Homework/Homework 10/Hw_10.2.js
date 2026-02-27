//– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
let age = document.getElementById('btn');
age.onclick = function () {
    let num = document.getElementById('num');
    if (num.value < 18) {
        document.write('You are young')
    }
    else( document.write('Good'))
}
