const Pessoa = require('./Pessoa');
class Telefone {
  #ddd;
  #numero;
  #pessoas = [];
  addPessoa(pessoa) {
    if (pessoa) {
      this.#pessoas.push(pessoa);

      return true;
    } else {
      return false;
    }
  }

  getPessoas() {
    return this.#pessoas;
  }
  setDdd(ddd) {
    // 06:
    if (ddd) {
      // 07:
      this.#ddd = ddd;
      // 08:
      return true;
    } else {
      // 09:
      return false;
    }
  }
  // 10:
  getDdd() {
    // 11:
    return this.#ddd;
  }
  // 12:
  setNumero(numero) {
    // 13:
    if (numero) {
      // 14:
      this.#numero = numero;
      // 15:
      return true;
    } else {
      // 16:
      return false;
    }
  }
  // 17:
  getNumero() {
    // 18:
    return this.#numero;
  }
}
module.exports = Telefone;
