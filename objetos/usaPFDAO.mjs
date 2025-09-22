// 01 // código construído na pasta "/pessoas/usaPJDAO.mjs"

import PF from './pessoas/PF.js';                      // 02 // Importa a classe Pessoa Jurídica
import PFDAO from './pessoas/DAOs/PFDAO.mjs';          // 03 // Importa a DAO que manipula objetos PJ

import Endereco from './pessoas/Endereco.js';          // 04 // Importa a classe Endereco
import Telefone from './pessoas/Telefone.js';          // 05 // Importa a classe Telefone
import Titulo from './pessoas/Titulo.js';          // 05 // Importa a classe Telefone
import IE from './pessoas/IE/IEclss.js';                // 06 // Importa a classe Inscrição Estadual (IE)

// ========== Criação do objeto PJ ==========

const pf = new PF();                                   // 08 // Cria instância de Pessoa Jurídica
pf.setNome("Pedro");                                   // 09 // Define o nome
pf.setEmail("pedro@ifb.edu.br");                       // 10 // Define o e-mail com validação
pf.setCPF("123.456.789-00");                      // 11 // Define o CNPJ com validação mínima de tamanho

// ========== Endereço ==========

const end = new Endereco();                            // 13 // Cria objeto endereço
end.setLogradouro("QNM 40");                           // 14 // Define logradouro
end.setCep("12345-678");                               // 15 // Define CEP
pf.setEndereco(end);                                   // 16 // Associa endereço à pessoa jurídica

// ========== Telefones ==========

const fone = new Telefone();                           // 18
fone.setDdd("61");                                     // 19 // Define DDD
fone.setNumero("99999-8888");                          // 20 // Define número
pf.addTelefone(fone);                                  // 21 // Adiciona telefone ao array da PJ

const fone2 = new Telefone();                          // 23
fone2.setDdd("62");                                     // 24
fone2.setNumero("99999-7777");                          // 25
pf.addTelefone(fone2);                                  // 26


const titulo = new Titulo();
titulo.setNumero("123456");
titulo.setZona("Zona1");
titulo.getSecao("Secao1");
pf.setTitulo(titulo);






// ========== Inscrição Estadual ==========

const ie = new IE();                                    // 28
ie.setNumero('123456');                                 // 29 // Define número da IE
ie.setEstado('SP');                                     // 30 // Define estado
ie.setDataRegistro(new Date());                         // 31 // Define a data de registro (hoje)
pf.setIE(ie);                                           // 32 // Associa a IE à PJ

// ========== DAO: Serialização, Salvamento e Leitura ==========

const pfdao = new PFDAO(pf);                            // 34 // Cria DAO passando o objeto PJ

var x = pfdao.toJSON();                                 // 36 // Gera o JSON do objeto
pfdao.saveJSON();                                       // 37 // Salva no "localStorage" simulado

console.log(x);                                         // 39 // Exibe o objeto JSON diretamente
console.log(JSON.stringify(x));                         // 40 // Exibe o objeto convertido em string JSON
console.log(pfdao.recoveryJSON());                      // 41 // Lê do localStorage e exibe a versão recuperada
