// 01: Arquivo criado em projeto no www.stackblitz.com denominado Aluno.js
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de Herança, bem como encapsulamento adicionados de condicionais utilizando operadores lógicos
// 02:
const PF = require('./PF');
const IE = require('./IE/IEclss');
// 03:
class Aluno extends PF {
  // 04:
  #matricula;
  // 05:
  #curso;
  // 06:
  setMatricula(matricula) {
    // 07:
    if (matricula) {
      // 08:
      if ((matricula.length === 8) && (matricula.startsWith("20")))              {
        // 09:
        this.#matricula = matricula;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  // 10:
  getMatricula() {
    return this.#matricula;
  }
  // 11:
  setCurso(curso) {
    // 12:
    if (curso) {
      // 13:
      if ((curso === 'ADS') || (curso === 'SI')) {
        // 14:
        this.#curso = curso;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  // 15:
  getCurso() {
    return this.#curso;
  }

}
// 16:
module.exports = Aluno;
