// 01:
let frutas = ["maçã", "banana"];

// 02:
frutas.push("laranja");      // adiciona ao final

// 03:
frutas.unshift("uva");       // adiciona ao início

// 04:
console.log(frutas);         // ["uva", "maçã", "banana", "laranja"]

// 05:
console.log("Tamanho:", frutas.length); // 4

// 06:
console.log("Primeira fruta:", frutas[0]); // "uva"

// 07:
console.log("Última fruta:", frutas[frutas.length - 1]); // "laranja"

// 08:
frutas.pop();                // remove "laranja"

// 09:
frutas.shift();              // remove "uva"

// 10:
console.log(frutas);         // ["maçã", "banana"]

const Aluno = requeri('./objetos/pessoas/Aluno');
const obj1 = new Aluno();


