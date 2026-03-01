let arr = [];
for (let i = 0; i <=99; i++) {
    arr.push({
        id: i+1,
        title: `Product ${i+1}`,
    })
}
console.log(arr);
let arrayDiv = document.getElementById('arrayDiv');
let buttonPrev = document.getElementById('prev');
let buttonNext = document.getElementById('next');
let page = 0;
let limit = 10;

function foo(){
    arrayDiv.innerText= '';
    let start = page * limit;
    let end = start + limit;
    for (let i = start; i < end; i++) {
        let div = document.createElement('div');
        div.innerText = arr[i].id + ' ' + arr[i].title;
        arrayDiv.appendChild(div);
    }
}
buttonPrev.onclick = function (){
    if (page>0){
        page--;
    }
    foo()
};
buttonNext.onclick = function (){
    if((page+1)*limit < arr.length){
    page++;
    foo()}
};
foo()







