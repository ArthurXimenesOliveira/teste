// 01:
const Telefone = require('./pessoas/Telefone');
const Endereco = require('./pessoas/Endereco');
const Titulo = require('./pessoas/Titulo');
// 02:
const PF = require('./pessoas/PF');
// 03:
const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();
// 04:
end.setLogradouro('QNM 40');
fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');
// 05:
const titulo = new Titulo();
titulo.setNumero('1234156');
titulo.setSecao('DF');
// 06:
const obj = new PF();
obj.setNome('José');
obj.setEndereco(end);       // vincula Endereco a PF
obj.addTelefone(fone1);     // vincula Telefone a PF
obj.addTelefone(fone2);     // vincula outro Telefone a PF
obj.setTitulo(titulo);      // vincula Titulo a PF
// 07:
console.log(obj.getNome());
console.log(obj.getEndereco().getLogradouro());
console.log(obj.getTelefones());
console.log(obj.getTitulo().getNumero());
// 08: // Verificando as referências cruzadas
console.log(end.getPessoas());
console.log(fone1.getPessoas());
console.log(titulo.getPF().getNome());

