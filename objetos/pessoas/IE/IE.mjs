// 🧾 IE.mjs (ESM)
// 01: Requer Node com "type": "module" ou extensão .mjs
// 02: Ajuste o caminho/forma de import do PJ conforme seu projeto:
import PJ from "../PJ.js"; // 03: se seu PJ for CommonJS, use: import PJpkg from "../PJ.js"; const PJ = PJpkg.default ?? PJpkg;
import PF from "../PF.js"; // 03: se seu PJ for CommonJS, use: import PJpkg from "../PJ.js"; const PJ = PJpkg.default ?? PJpkg;
import Aluno from "../Aluno.js";
// 04: Classe IEclss
export class IEclss {
  #numero;
  #estado;
  #dataRegistro;
  #pj;
  #pf;
  #aluno;

  setNumero(numero) { if (numero) { this.#numero = numero; return true; } return false; } // 10
  getNumero() { return this.#numero; } // 11

  setEstado(estado) { if (estado) { this.#estado = estado; return true; } return false; } // 13
  getEstado() { return this.#estado; } // 14

  setDataRegistro(dataregistro) { if (dataregistro instanceof Date) { this.#dataRegistro = dataregistro; return true; } return false; } // 16
  getDataRegistro() { return this.#dataRegistro; } // 17

  setPJ(pj) { if (pj instanceof PJ) { this.#pj = pj; return true; } return false; } // 19
  getPJ() { return this.#pj; } // 20
  
  setPF(pf) { if (pf instanceof PF) { this.#pf = pf; return true; } return false; } // 19
  getPF() { return this.#pf; } // 20

  setAluno(aluno) { if (aluno instanceof Aluno) { this.#aluno = aluno; return true; } return false; } // 19
  getAluno() { return this.#aluno; }
  
}

// 23: Factory function
export default function IEfunc() {
  let dados = { numero: null, estado: null, dataRegistro: null, pj: null, pf: null, aluno: null }; // 25

  function setNumero(numero) { if (numero) { dados.numero = numero; return true; } return false; } // 27
  function getNumero() { return dados.numero; } // 28

  function setEstado(estado) { if (estado) { dados.estado = estado; return true; } return false; } // 30
  function getEstado() { return dados.estado; } // 31

  function setDataRegistro(data) { if (data instanceof Date) { dados.dataRegistro = data; return true; } return false; } // 33
  function getDataRegistro() { return dados.dataRegistro; } // 34

  function setPJ(pj) { if (pj instanceof PJ || (pj && pj.cnpj)) { dados.pj = pj; return true; } return false; } // 36
  function getPJ() { return dados.pj; } // 37
  
  function setPF(pf) { if (pf instanceof PF || (pf && pf.cpf)) { dados.pf = pf; return true; } return false; } // 36
  function getPF() { return dados.pf; } // 37

  function setAluno(aluno) { if (aluno instanceof Aluno || (aluno && aluno.matricula)) { dados.aluno = aluno; return true; } return false; } // 36
  function getAluno() { return dados.aluno; }

  return { setNumero, getNumero, setEstado, getEstado, setDataRegistro, getDataRegistro, setPJ, getPJ, setPF, getPF, setAluno, getAluno }; // 39
}

// 42: Objeto JSON
export const IEjson = {
  numero: null,
  estado: null,
  dataRegistro: null,
  pj: null,
  pf: null,
  aluno: null,

  setNumero(numero) { if (numero) { this.numero = numero; return true; } return false; }, // 49
  getNumero() { return this.numero; }, // 50

  setEstado(estado) { if (estado) { this.estado = estado; return true; } return false; }, // 52
  getEstado() { return this.estado; }, // 53

  setDataRegistro(data) { if (data instanceof Date) { this.dataRegistro = data; return true; } return false; }, // 55
  getDataRegistro() { return this.dataRegistro; }, // 56

  setPJ(pj) { if (pj instanceof PJ || (pj && pj.cnpj)) { this.pj = pj; return true; } return false; }, // 58
  getPJ() { return this.pj; }, // 59
  
  setPF(pf) { if (pf instanceof PF || (pf && pf.cpf)) { this.pf = pf; return true; } return false; }, // 58
  getPF() { return this.pf; }, // 59

  setAluno(aluno) { if (aluno instanceof Aluno || (aluno && aluno.matricula)) { this.aluno = aluno; return true; } return false; }, // 58
  getAluno() { return this.aluno; }
};
