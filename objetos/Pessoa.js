// 01: Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
//     Arquivo criado dentro da pasta "objetos" do projeto
//     não deve executar o arquivo através do node
// 02:
class Pessoa {
  // 03:
  constructor(nome, peso, altura) {
    // 04:
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  // 05:
  imc() { // índice de massa corpórea
    // 06:
    let imc = this.peso / (this.altura * this.altura); 
    // 07:
    return imc;
  }
}
// 08:
module.exports = Pessoa;
