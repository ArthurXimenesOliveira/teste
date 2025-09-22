// 01: Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
//     Arquivo criado dentro da pasta "objetos" do projeto
//     para executar o arquivo através do node utilize o comando:
//     "node ./objetos/usaPessoa.js" na raiz do projeto
// 02:
const Pessoa = require('./Pessoa.js');
// 03:
const joao = new Pessoa("joao", 80, 1.75); // instanciando um objeto
// 04:
console.log(joao.imc());
// 05:
const pedro = new Pessoa();
// 06:
pedro.nome = "pedro";

pedro.peso = 100;
// 07:
pedro.altura = 1.6;
// 08:
console.log(pedro.imc());

const maria = new Pessoa("maria", 65, 1.60);

console.log(maria.imc());

