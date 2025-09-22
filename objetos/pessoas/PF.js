// 01: Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
// 02: Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// 03: Objetivo do exemplo: demonstrar conceitos de Herança, encapsulamentos e relacionamentos 1 - 1 com a classe Titulo
// 04:
const Pessoa = require('./Pessoa');
// 05:
const Titulo = require('./Titulo');
// 06:
const IE = require('./IE/IEclss');

class PF extends Pessoa {
  // 07:
  #cpf;
  // 08:
  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    } else {
      return false;
    }
  }
  // 09:
  getCPF() {
    return this.#cpf;
  }
  // 10: Relacionamento 1 - 1 com a classe Titulo
  #titulo;

  // 11:
  setTitulo(titulo) {
    if (titulo instanceof Titulo) {
      this.#titulo = titulo;
      titulo.setPF(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }
  // 12:
  getTitulo() {
    return this.#titulo;
  }

  #ie;  // Atributo privado para armazenar objeto do tipo IE

  // 22
    setIE(ie) {
      // 23
      if (ie instanceof IE) {             // Verifica se o parâmetro é instância da classe IE
        this.#ie = ie;
        ie.setPF(this);                   // Referência cruzada (IE também aponta para este PJ)
        return true;
      } else {
        return false;
      }
    }
  
  // 24
    getIE() {
      return this.#ie;                    // Retorna o objeto IE relacionado
    }

}
// 13:
module.exports = PF;
