var palavra = prompt('Escolha uma palavra:')
var palindromo = ''

for (var i = palavra.length - 1; i >= 0; i--) {
  palindromo += palavra[i]
}

if (palindromo == palavra) {
  alert(
    'A palavra [ ' +
      palavra +
      ' ] é um palindromo\n' +
      'Palavra Original:' +
      palavra +
      '\nPalavra Invertida: ' +
      palindromo
  )
} else {
  alert('Não é palindromo')
}
