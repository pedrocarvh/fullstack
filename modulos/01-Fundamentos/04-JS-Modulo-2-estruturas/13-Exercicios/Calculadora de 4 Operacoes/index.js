var valor1 = prompt('Number 1')
var valor2 = prompt('Number 2')

var primeiroNumero = parseFloat(valor1)
var segundoNumero = parseFloat(valor2)

let soma = primeiroNumero + segundoNumero
let subtracao = primeiroNumero - segundoNumero
let divisao = primeiroNumero / segundoNumero
let multiplicacao = primeiroNumero * segundoNumero

alert(
  'Resultados \n' +
    'Soma: ' +
    soma +
    '\n subtração: ' +
    subtracao +
    '\n divisao: ' +
    divisao +
    '\n multiplicacao: ' +
    multiplicacao
)


