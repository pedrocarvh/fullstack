let saldo = parseFloat(prompt('Insira o valor do seu saldo'))

do {
  escolha = prompt(
    "SEU SALDO : " + saldo + 
    "\n O QUE VOCE DESEJA FAZER? \n"+
    "1 - DEPOSITAR \n" +
    "2 - SACAR \n" + 
    "3 - Sair \n")

  switch (escolha) {
    case '1':
      saldo += parseFloat(prompt('Quanto voce deseja depositar em sua conta?'))
      alert('Depositando')
      break
    case '2':
      saldo -= prompt('Quanto voce deseja sacar de sua conta?')
      alert('Sacando')
      break
  }
} while (escolha != 'SAIR' && escolha != 'sair')

alert('Desconectado')
