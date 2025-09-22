// 01: Arquivo criado em projeto no www.stackblitz.com denominado usaAluno.js
//     Arquivo criado dentro de uma pasta /objetos na raiz do projeto
//     Objetivo do exemplo: demonstrar a utilização dos conceitos de visibilidade de atributos e métodos
//     e objetivos do encapsulamento
// 02:
const Aluno = require('./escola/Aluno');
// 03:
const joao = new Aluno();
// 04:
// joao.#matricula = 1234; --> ERRO
// 05:
//joao.escola = "IFB";
joao.setEscola("IFB")
// 06:
joao.setMatricula(12345);
// 07:
joao.setCurso("Programação de FrontEnd");
// 08:
// console.log(joao.#matricula); --> ERRO
// 09:
console.log(joao.getMatricula());
// 10:
console.log(joao.getCurso());
// 11:
console.log(`Escola : ${joao.getEscola()}`);
