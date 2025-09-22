// 01: Arquivo criado em projeto no www.stackblitz.com denominado definemodulo.js
//     arquivo criado dentro de uma pasta na raiz do projeto
// 02:
function soma(x, y) {
  // recebe dados como parâmetro
  // 03:
  let soma = x + y; // busquem declarar apenas variáveis LET nas functions
  // 04:
  return soma; // retorna a informação
}
// 05:
const subtrair = function (x, y) {
  return x - y;
};
// 06:
// módulos são utilizados para disponibilizar bibliotecas e funções e classes
// 07:

const dividir = (x, y) => {
  return x / y;
};

const multiplicar = (x, y) => {
  return x * y;
};

module.exports = { soma, subtrair, dividir, multiplicar };
