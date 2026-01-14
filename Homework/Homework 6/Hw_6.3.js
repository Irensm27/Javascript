// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let s1 = 'HELLO WORLD';
let s2 = 'LOREM IPSUM';
let s3 = 'JAVASCRIPT IS COOL';
const string = [s1, s2, s3];
for (const s of string) {
    console.log(s.toLowerCase());
}
