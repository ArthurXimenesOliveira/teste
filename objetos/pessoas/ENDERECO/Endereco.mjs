// 01 // classe Endereco, definida na pasta /pessoas/ENDERECO, denominada Endereco.mjs
// 02 // Objetivo: demonstrar o uso de métodos assíncronos e tratamento de exceções com try/catch ou throw

export default class Endereco {                       // 03 // Declaração da classe Endereco com exportação padrão
  #cep;                                               // 04 // Atributos privados encapsulados
  #logradouro;                                        // 05
  #bairro;                                            // 06
  #cidade;                                            // 07
  #uf;                                                // 08
  #regiao;

  // 09 // Método assíncrono que consome a API ViaCEP para buscar dados de endereço com base no CEP
  async setCep(cep) {                                 // 10
    const url = `https://viacep.com.br/ws/${cep}/json/`;  // 11 // Monta a URL da API pública do ViaCEP

    const resposta = await fetch(url);                // 12 // Realiza a requisição HTTP de forma assíncrona

    if (!resposta.ok) {                               // 13 // Verifica se a resposta não foi bem-sucedida
      throw new Error(`Erro ao buscar CEP: ${resposta.status}`);  // 14 // Dispara uma exceção com o status do erro
    }

    const dados = await resposta.json();              // 15 // Converte a resposta para objeto JSON

    if (dados.erro) {                                 // 16 // Se a API retornar um campo "erro", o CEP não existe
      throw new Error("CEP não encontrado na base do ViaCEP."); // 17 // Dispara uma exceção
    }

    // 18 // Se tudo ocorreu bem, preenche os atributos com os dados retornados
    this.#cep = dados.cep;                            // 19
    this.#logradouro = dados.logradouro;              // 20
    this.#bairro = dados.bairro;                      // 21
    this.#cidade = dados.localidade;                  // 22
    this.#uf = dados.uf;                              // 23
    this.#regiao = dados.regiao;
  }

  // 24 // Métodos públicos de acesso (getters)
  getCep() {                                          // 25
    return this.#cep;                                 // 26
  }

  getLogradouro() {                                   // 27
    return this.#logradouro;                          // 28
  }

  getBairro() {                                       // 29
    return this.#bairro;                              // 30
  }

  getCidade() {                                       // 31
    return this.#cidade;                              // 32
  }

  getUf() {                                           // 33
    return this.#uf;                                  // 34
  }
  
  getRegiao() {                                           // 33
    return this.#regiao;                                  // 34
  }
}
