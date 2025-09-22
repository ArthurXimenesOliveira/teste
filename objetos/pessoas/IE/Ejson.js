const PJ = require('../PJ');
const PF = require('../PF');

const IE = {
  numero: null,
  estado: null,
  dataRegistro: null,
  pj: null,
  pf: null,

  setNumero: function(numero){
    if(numero){
      this.numero = numero;
      return true
    }
    return false;
  },

  getNumero: function(){
    return this.numero;
  },
  setEstado: function(estado){
    if(estado){
      this.estado = estado;
      return true
    }
    return false;
  },

  getEstado: function(){
    return this.estado;
  },
  
  setDataRegistro: function(data){
    if(data instanceof Date){
      this.dataRegistro = dataRegistro;
      return true
    }
    return false;
  },

  getDataRegistro: function(){
    return this.dataRegistro;
  },

  setPj: function(pj){
    if(pj instanceof PJ){
      this.pj = pj;
      return true
    }
    return false;
  },

  getPj: function(){
    return this.pj;
  },
  
  setPf: function(pf){
    if(pf instanceof PF){
      this.pf = pf;
      return true
    }
    return false;
  },

  getPf: function(){
    return this.pf;
  },
}