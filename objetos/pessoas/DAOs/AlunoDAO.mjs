
import { localStorage } from './localStorage.mjs'; // 03 // Importa a simulação de localStorage
import Aluno from '../Aluno.js';                          // 04 // Importa a classe PJ (Pessoa Jurídica)

export default class AlunoDAO {                        // 05 // Declara classe PJDAO que será exportada como default

    #aluno;                                              // 06 // Atributo privado que armazena a instância de PJ

    constructor(aluno) {                                 // 07 // Construtor da classe PJDAO
        if (aluno instanceof Aluno) {                         // 08 // Verifica se o objeto passado é uma instância de PJ
            this.#aluno = aluno;                                // 09 // Atribui ao atributo privado
        }
    }

    toJSON() {                                        // 10 // Constrói uma representação em JSON da instância de PJ
        let fones = [];                                 // 11 // Cria array para armazenar os telefones

        for (let fone of this.#aluno.getTelefones()) {     // 12 // Itera sobre os telefones associados à PJ
            fones.push({                                  // 13 // Adiciona ao array um objeto com DDD e número
                ddd: fone.getDdd(),
                numero: fone.getNumero(),
            });
        }

        return {
            mattricula: this.#aluno.getMatricula(),
            curso: this.#aluno.getCurso(),
            pf: {
                nome: this.#aluno.getPf().getNome(),
                email: this.#aluno.getPf().getEmail(),
                cpf: this.#aluno.getPf().getCPF(),
            },
            endereco: {
                logradouro: this.#aluno.getEndereco().getLogradouro(),
                cep: this.#aluno.getEndereco().getCep(),
            },
            telefone: fones,
            titulo: {
                numero: this.#aluno.getTitulo().getNumero(),
                zona: this.#aluno.getTitulo().getZona(),
                secao: this.#aluno.getTitulo().getSecao(),
            },
            ie: {
                numero: this.#aluno.getIE().getNumero(),
                estado: this.#aluno.getIE().getEstado(),
                dataRegsitro: this.#aluno.getIE().getDataRegistro(),
            }
        };
    }

    saveJSON() {                                      // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
        // transforma em string JSON usando stringify() e armazena
        localStorage.setItem("aluno", JSON.stringify(this.toJSON())); // 32
    }

    recoveryJSON() {                                  // 34 // Método para recuperar os dados de PJ armazenados
        // recupera a string armazenada e transforma em JSON usando parse()
        return JSON.parse(localStorage.getItem("aluno"));  // 36
    }

}                                                   // 38 // Fim da classe
