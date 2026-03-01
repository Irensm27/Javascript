let priceBlock = document.getElementById('price');
let price = +localStorage.getItem('price') || 100;
let upDate = +localStorage.getItem('upDate') || 0;
let date = Date.now();

if( date - upDate >= 10000 ){
    price+=10;
    localStorage.setItem('price', price);
    localStorage.setItem('upDate', date)
}
priceBlock.innerText = price + 'UAH';
