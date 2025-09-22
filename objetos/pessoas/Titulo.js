// 01: Código Titulo.js 
// 02:
class Titulo {
  // 03:
  #numero;
  #zona;
  #secao;
  // 04:
  setNumero(numero) {
    if (numero) {
      this.#numero = numero;
      return true;
    } else {
      return false;
    }
  }
  // 05:
  getNumero() {
    return this.#numero;
  }
  // 06:
  setZona(zona) {
    if (zona) {
      this.#zona = zona;
      return true;
    } else {
      return false;
    }
  }
  // 07:
  getZona() {
    return this.#zona;
  }
  // 08:
  setSecao(secao) {
    if (secao) {
      this.#secao = secao;
      return true;
    } else {
      return false;
    }
  }
  // 09:
  getSecao() {
    return this.#secao;
  }
  // 10: Relacionamento 1 para 1 com a classe PF
  #pf;
  // 11:
  setPF(pf) {
    if (pf) {
      this.#pf = pf;
      return true;
    } else {
      return false;
    }
  }
  // 12:
  getPF() {
    return this.#pf;
  }
}
// 13:
module.exports = Titulo;
