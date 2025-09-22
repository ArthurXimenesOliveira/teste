// 01. usaIE.mjs (ou .js com "type":"module" no package.json)
import IEfunc, { IEclss, IEjson } from './IE.mjs'; // 02
import PJ from '../PJ.js'; // 03

// -------- Entrada comum --------
const agora = new Date(); // 04
const pj = new PJ(); // 05
pj.setCNPJ('12.345.678/0001-99'); // 06

// ===== 1) Classe =====
const ieC = new IEclss(); // 07
ieC.setNumero('111'); // 08
ieC.setEstado('SP'); // 09
ieC.setDataRegistro(agora); // 10
ieC.setPJ(pj); // 11

// Saída (classe)
console.log(`(Classe) Número: ${ieC.getNumero()}`); // 12
console.log(`(Classe) Estado: ${ieC.getEstado()}`); // 13
console.log(`(Classe) Data: ${ieC.getDataRegistro().toLocaleString('pt-BR')}`); // 14
console.log(''); // 15

// ===== 2) Factory (functions/closure) =====
const ieF = IEfunc(); // 16
ieF.setNumero('222'); // 17
ieF.setEstado('RJ'); // 18
ieF.setDataRegistro(agora); // 19
ieF.setPJ(pj); // 20

// Saída (factory)
console.log(`(Factory) Número: ${ieF.getNumero()}`); // 21
console.log(`(Factory) Estado: ${ieF.getEstado()}`); // 22
console.log(`(Factory) Data: ${ieF.getDataRegistro().toLocaleString('pt-BR')}`); // 23
console.log(''); // 24

// ===== 3) Objeto JSON =====
IEjson.setNumero('333'); // 25
IEjson.setEstado('MG'); // 26
IEjson.setDataRegistro(agora); // 27
IEjson.setPJ(pj); // 28

// Saída (JSON)
console.log(`(JSON) Número: ${IEjson.getNumero()}`); // 29
console.log(`(JSON) Estado: ${IEjson.getEstado()}`); // 30
console.log(`(JSON) Data: ${IEjson.getDataRegistro().toLocaleString('pt-BR')}`); // 31
console.log(''); // 32

// Linha-resumo com template literals
console.log( // 33
`Resumo → Classe: ${ieC.getNumero()}-${ieC.getEstado()} | ` + // 34
`Factory: ${ieF.getNumero()}-${ieF.getEstado()} | ` + // 35
`JSON: ${IEjson.getNumero()}-${IEjson.getEstado()}` // 36
); // 37
