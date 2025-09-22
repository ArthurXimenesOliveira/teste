// 01 // localStorage Simulado. localStorage e sessionStorage não funcionam no Node.js puro, somente através do Browser
// 02 // classe construída dentro da pasta "/pessoas/DAOs/PJDAO.mjs"

import { localStorage } from './localStorage.mjs'; // 03 // Importa a simulação de localStorage
import PF from '../PF.js';                          // 04 // Importa a classe PJ (Pessoa Jurídica)

export default class PFDAO {                        // 05 // Declara classe PJDAO que será exportada como default

  #pf;                                              // 06 // Atributo privado que armazena a instância de PJ

  constructor(pf) {                                 // 07 // Construtor da classe PJDAO
    if (pf instanceof PF) {                         // 08 // Verifica se o objeto passado é uma instância de PJ
      this.#pf = pf;                                // 09 // Atribui ao atributo privado
    }
  }

  toJSON() {                                        // 10 // Constrói uma representação em JSON da instância de PJ
    let fones = [];                                 // 11 // Cria array para armazenar os telefones

    for (let fone of this.#pf.getTelefones()) {     // 12 // Itera sobre os telefones associados à PJ
      fones.push({                                  // 13 // Adiciona ao array um objeto com DDD e número
        ddd: fone.getDdd(),
        numero: fone.getNumero(),
      });
    }

    return {                                        // 17 // Retorna objeto literal que representa todos os dados relevantes da PJ
      nome: this.#pf.getNome(),
      email: this.#pf.getEmail(),
      cpf: this.#pf.getCPF(),
      endereco: {
        logradouro: this.#pf.getEndereco().getLogradouro(),
        cep: this.#pf.getEndereco().getCep(),
      },
      telefone: fones,
      ie: {
        numero: this.#pf.getIE().getNumero(),
        estado: this.#pf.getIE().getEstado(),
        dataRegsitro: this.#pf.getIE().getDataRegistro(),
      },
      titulo: {
        numero: this.#pf.getTitulo().getNumero(),
        zona: this.#pf.getTitulo().getZona(),
        secao: this.#pf.getTitulo().getSecao(),
      }
    };
  }

  saveJSON() {                                      // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
    // transforma em string JSON usando stringify() e armazena
    localStorage.setItem("pf", JSON.stringify(this.toJSON())); // 32
  }

  recoveryJSON() {                                  // 34 // Método para recuperar os dados de PJ armazenados
    // recupera a string armazenada e transforma em JSON usando parse()
    return JSON.parse(localStorage.getItem("pf"));  // 36
  }

}                                                   // 38 // Fim da classe
