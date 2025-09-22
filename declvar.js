// 01: Arquivo criado em projeto no www.stackblitz.com denominado declvar.js
// 02:
var x = 6;
// 03:
console.log(x);
// 04:
const y = 'a'; // definição de variável const
// 05:
// y = "b";
// 06:
console.log(y);
// 07: // VARIÁVEIS GLOBAIS E LOCAIS
// 08:
{
  // 09:
  let z = 4;
  // 10:
  console.log(x);
  // 11:
  console.log(y);
  // 12:
  console.log(z);
}
// 13:
// console.log(z);  <-- Essa linha, se descomentada, gera erro pois z é local ao bloco acima
