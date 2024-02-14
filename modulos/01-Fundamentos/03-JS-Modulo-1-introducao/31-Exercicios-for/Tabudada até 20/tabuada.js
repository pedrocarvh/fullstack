let numero = prompt('Escolha um número para ser gerada a sua tabuada:')
let resultados = []

let i

for (i = 0; i <= 20; ++i) {
  resultados += i + 'x' + numero + ' = ' + i * numero + ' \n'
}

alert(resultados)
