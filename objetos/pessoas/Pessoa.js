const Endereco = require('./Endereco');
const Telefone = require('./Telefone');
class Pessoa {
  #nome;

  #email;

  #endereco;
  setEndereco(endereco) {
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
      endereco.addPessoa(this);

      return true;
    } else {
      return false;
    }
  }

  getEndereco() {
    return this.#endereco;
  }

  #telefones = [];
  addTelefone(telefone) {
    if (telefone instanceof Telefone) {
      this.#telefones.push(telefone);
      telefone.addPessoa(this);

      return true;
    } else {
      return false;
    }
  }

  getTelefones() {
    return this.#telefones;
  }

  setNome(nome) {
    if (nome) {
      this.#nome = nome;

      return true;
    } else {
      return false;
    }
  }

  getNome() {
    return this.#nome;
  }

  setEmail(email) {
    if (email) {
      this.#email = email;

      return true;
    } else {
      return false;
    }
  }

  getEmail() {
    return this.#email;
  }
}

module.exports = Pessoa;

// const end = new Endereco();
// end.setLogradouro('QNM 40');
// const obj = new Pessoa();
// obj.setNome('jose');
// obj.setEndereco(end);

// console.log(obj.getNome());
// console.log(obj.getEndereco().getLogradouro());

// const fone1 = new Telefone();
// const fone2 = new Telefone();

// fone1.setNumero('1234-5555');
// fone2.setNumero('1234-8888');
// obj.addTelefone(fone1);
// obj.addTelefone(fone2);

// console.log(obj.getTelefones());

// console.log(end.getPessoas());

// console.log(fone1.getPessoas());