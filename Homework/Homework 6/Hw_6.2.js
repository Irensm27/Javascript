// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';
const string = [s1, s2, s3];
for (const s of string) {
    console.log(s.toUpperCase());
}