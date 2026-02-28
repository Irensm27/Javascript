let container = document.getElementById('container');
const sessionsList = JSON.parse(localStorage.getItem('sessionList'));
for (const sessionsListElement of sessionsList) {
    let div = document.createElement('div');
    div.innerText = sessionsListElement;
    container.appendChild(div);

}