// 01 // Arquivo usaEndereco, definido na pasta /pessoas/ENDERECO, denominado usaEndereco.mjs
import Endereco from './Endereco.mjs';                     // 02 // Importa a classe Endereco de outro módulo ES6

// 03 // Função assíncrona que utilizará métodos await internos
async function usaEndereco() {                             
  const end = new Endereco();                              // 04 // Instancia a classe Endereco

  try {                                                    // 05 // Bloco try para tratamento de exceções
    // 06 // Utiliza await para aguardar a finalização da chamada assíncrona
    await end.setCep("72640214");                          // 07 // Chama o método assíncrono que consome API ViaCEP

    console.log("✅ Endereço carregado com sucesso:");     // 08 // Mensagem de sucesso no console
    console.log("CEP:", end.getCep());                     // 09 // Acessa e imprime o CEP
    console.log("Logradouro:", end.getLogradouro());       // 10
    console.log("Bairro:", end.getBairro());               // 11
    console.log("Cidade:", end.getCidade());               // 12
    console.log("UF:", end.getUf());                       // 13
    console.log("Regiao:", end.getRegiao());                       // 13

  } catch (erro) {                                         // 14 // Captura qualquer erro que ocorra durante o await
    console.error("❌ Erro ao definir CEP:", erro.message); // 15 // Exibe mensagem amigável de erro
  }
}

usaEndereco();                                             // 16 // Chama a função assíncrona
