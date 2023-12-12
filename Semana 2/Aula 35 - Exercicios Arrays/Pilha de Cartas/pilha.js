let baralho = ['Carta 1', 'Carta 2', 'Carta 3', 'Carta 4']

let escolha = prompt(
  'CARTAS DISPONIVEIS: ' +
    baralho +
    '\nEscolha uma opção\n' +
    '1 - Adicionar carta\n' +
    '2 - Puxar uma carta\n' +
    '3 - Sair'
)

while (escolha != 'sair' && escolha != '3') {
  switch (escolha) {
    case '1':
      let novaCarta = prompt('Insira o nome da carta')
      baralho.push(novaCarta)
      break
    case '2':
      let retirarCarta = baralho.pop()
      alert(retirarCarta)
      break
  }
  escolha = prompt(
    'CARTAS DISPONIVEIS: ' +
    baralho +
    '\nEscolha uma opção\n' +
    '1 - Adicionar carta\n' +
    '2 - Puxar uma carta\n' +
    '3 - Sair'
  )
}
