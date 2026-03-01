let input = document.getElementById('xxx');
let divResult = document.getElementById('result');
input.oninput = function() {
    let kilos = +this.value;
    let result = kilos*2.2;
    divResult.innerText = result;
}

