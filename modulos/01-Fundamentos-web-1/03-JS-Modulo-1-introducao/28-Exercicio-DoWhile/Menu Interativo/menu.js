let escolha

do {
  escolha = prompt(
    'O que voce deseja fazer: \n' +
      'Criar \n' +
      'Editar \n' +
      'Atualizar \n' +
      'Excluir \n' +
      'Encerrar'
  )

  switch (escolha) {
    case 'Criar':
      alert('Criando')
      break
    case 'Editar':
      alert('Editando')
      break
    case 'Atualizar':
      alert('Atualizando')
      break  
    case 'Excluir':
      alert('Exlcuindo')
      break
  }
} while (escolha != 'Encerrar' && escolha != 'encerrar')

alert('O programa foi finalizado com sucesso!')
