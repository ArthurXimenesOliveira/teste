// 01: Arquivo criado em projeto no www.stackblitz.com denominado usamodulo.
//     Arquivo criado na raiz do projeto
// 02:
// importação dos módulos disponíveis no arquivo definemodulo.js
// 03:
const oper = require('./Lib/definemodulo.js');
// 04:
var x = 10,
  y = 30;
// 05:
console.log(oper.soma(x, y));
// 06:
console.log(oper.subtrair(y, x));

console.log(oper.dividir(y, x));

console.log(oper.multiplicar(x, y));
