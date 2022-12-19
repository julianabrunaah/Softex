const {consultarCep, calcularPrecoPrazo} = require('correios-brasil')

const cep = '50810000'
consultarCep(cep).then(response =>{
    //console.log(response)
})

let args = {
  sCepOrigem: '50810000',
  sCepDestino: '54762845',
  nVlPeso: '1',
  nCdFormato: '1',
  nVlComprimento: '30',
  nVlAltura: '20',
  nVlLargura: '20',
  nCdServico: ['04014', '04510'], 
  nVlDiametro: '0',
}

calcularPrecoPrazo(args).then(response => {
  console.log(response)
});