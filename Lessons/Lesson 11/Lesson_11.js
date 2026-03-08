// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((json) => {
//         for (const {name, username, email} of json) {
//             document.write(`<div>
//                 ${name} ${username} ${email}
//             </div>`)
//         }
//     });

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(result => {

    });