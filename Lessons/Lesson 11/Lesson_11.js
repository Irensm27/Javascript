// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((json) => {
//         for (const {name, username, email} of json) {
//             document.write(`<div>
//                 ${name} ${username} ${email}
//             </div>`)
//         }
//     });

// fetch('https://dummyjson.com/products?limit=100')
//     .then(value => value.json())
//     .then(res => {
//         let {products} = res;
//         console.log(products);
//         document.write(`<div>`)
//         for (const product of products) {
//             document.write(`<div>`)
//             document.write(`<p>${product.brand} - ${product.price}  </p>`)
//             document.write(`<img src="${product.thumbnail}" alt = "">`)
//             document.write(`</div>`)
//         }
//         document.write(`</div>`)
//     });
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
    })
})
    .then(res => res.json())
    .then(console.log);