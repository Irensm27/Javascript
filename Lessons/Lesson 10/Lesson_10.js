document.getElementById('target');
target.onclick = function (ev) {
    console.log('target clicked!');
    console.log(ev)
}
// target.onmousemove = function (ev) {
//     console.log(ev.clientX, ev.clientY)
//     let r = ev.clientX;
//     let g = ev.clientX;
//     let b = ev.clientY;
//     this.style.background = `rgb(${r}, ${g}, ${b})`;
// }

// target.addEventListener('click', function (ev) {
//     console.log('Hello');
// })
target.onmouseover = function () {
    console.log('mouseover');
};
target.onmouseleave = function () {
    console.log('mouseleave');
};
// let i1 = document.getElementById('i1');
// i1.oninput = function () {
//     console.log(this.value);
//     target.innerText = this.value;
// };
let f1 = document.forms.f1;
f1.onsubmit = function (ev){
    ev.preventDefault();
    console.log('submitted!');
    let user = {name: this.username.value};
    console.log(user)};


window.onload = function () {
    console.log('loaded!');
};

document.onreadystatechange = function () {
    console.log(document.readyState);
}



