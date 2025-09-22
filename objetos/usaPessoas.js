// 01: Arquivo criado em projeto no www.stackblitz.com denominado usaPessoas.js
//     Arquivo criado dentro de uma pasta /objetos na raiz do projeto
//     Objetivo do exemplo: demonstrar a utilização dos conceitos de encapsulamento (com adição de condicionais)
//     e Herança (classes Pessoa e PF disponíveis na pasta /objetos/pessoas)

// 02:
console.log("==== Objeto Pessoa =====");
// 03:
const Pessoa = require('./pessoas/Pessoa');
// 04:
const x = new Pessoa();
// 05:
// resposta = x.setNome('Leandro');
resposta = x.setNome('');
// 06:
console.log(resposta);
// 07:
if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio");
}
// 08:
resposta = x.setEmail('vaguetti@gmail.com');
// 09:
console.log(resposta);
// 10:
if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("E-mail vazio");
}
// 11:
// ===================================
console.log("==== Objeto PF =====");
// 12:
const PF = require('./pessoas/PF');
// 13:
const y = new PF();
// 14:
resposta = y.setNome('Pedro');
console.log(resposta);
if (resposta) {
  console.log(y.getNome());
} else {
  console.log("Nome vazio");
}
// 15:
resposta = y.setEmail('');
console.log(resposta);
if (resposta) {
  console.log(y.getEmail());
} else {
  console.log("Email vazio");
}
// 16:
resposta = y.setCPF('123456789-10');
console.log(resposta);
if (resposta) {
  console.log(y.getCPF());
} else {
  console.log("CPF vazio");
}

console.log("==== Objeto Aluno =====");
const Aluno = require('./pessoas/Aluno');
const w = new Aluno();

resposta = w.setNome('Pedro');
console.log(resposta);
if(resposta){
  console.log(w.getNome());
}else{
  console.log("Nome vazio");
}

resposta = w.setMatricula('20123456')
console.log(resposta);
if(resposta){
  console.log(w.getMatricula());
}else{
  console.log("Matricula Inválida");
}

resposta = w.setCurso('SIS')
console.log(resposta);
if(resposta){
  console.log(w.getCurso());
}else{
  console.log("Curso Inválido");
}
// console.log("==== Objetos Aluno =====");
// let alunos = [];
// alunos[0] = new Aluno('Pablo', '20123457', 'SIS');
// alunos[1] = new Aluno('Caio', '201234567', 'ADS');
// alunos[2] = new Aluno('Rer', '111234569', "PCB");

// console.log("==== Objetos Aluno 1 =====");
// alunos[0].setNome('Pablo');
// console.log(alunos[0].getNome());
// alunos[0].setMatricula('20123457');
// console.log(alunos[0].getMatricula());
// alunos[0].setCurso('SI');
// console.log(alunos[0].getCurso());

// console.log("==== Objetos Aluno 2 =====");
// alunos[1].setNome('Caio');
// console.log(alunos[1].getNome());
// alunos[1].setMatricula('201234567');
// console.log(alunos[1].getMatricula());
// alunos[1].setCurso('ADS');
// console.log(alunos[1].getCurso());

// console.log("==== Objetos Aluno 3 =====");
// alunos[2].setNome('Rer');
// console.log(alunos[2].getNome());
// alunos[2].setMatricula('111234569');
// console.log(alunos[2].getMatricula());
// alunos[2].setCurso('PCB');
// console.log(alunos[2].getCurso());

const obj1 = new Aluno();
obj1.setNome('');
obj1.setMatricula('');
obj1.setCurso('');

obj2.setNome('');
obj2.setMatricula('');
obj2.setCurso('');

obj3.setNome('');
obj3.setMatricula('');
obj3.setCurso('');

var objetos = [];
objetos.push(obj1);


