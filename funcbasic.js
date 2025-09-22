// 01: Arquivo criado em projeto no www.stackblitz.com denominado funcbasic.js
// 02:
// Objetivo de uma função  = definir um bloco de código reutilizável
// function <nome> (<parametros>){ ... }
// 03:
function soma(x, y) {
  // recebe dados como parâmetro
  // 04:
  let soma = x + y; // busquem declarar apenas variáveis LET nas functions
  // 05:
  return soma; // retorna a informação
}
// 06: // chamar a função
// 07:
var print1 = soma(soma(4, 7), 3);
console.log(print1);
// 08:
var print2 = soma(10, soma(print1, 5));
console.log(print2);
// 09:
console.log(soma(print1, print2));
// 10:
// Abaixo são apresentadas formas distintas de declarações de função,
// além de exemplos que se utilizam de operadores de subtração, divisão e multiplicação respectivamente
// 11:
const subtrair = function (x, y) {
  return x - y;
};
console.log(subtrair(3, 5));
// 12:
// arrow function
const dividir = (x, y) => {
  return x / y;
};
console.log(dividir(3, 5));
// 13:
const multiplicar = (x, y) => {
  return x * y;
};
console.log(multiplicar(3, 5));
