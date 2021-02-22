let fname = 'Gusti';
let lname = 'Ananda';
let age = prompt("Masukkan umur Gusti Ananda");

// Cara lama
// let result = fname + '' + lname + 'is' + age + 'years old';
// alert(result);

// Memakai template String
let result = `${fname} ${lname} is ${age} years old`;
alert(result);