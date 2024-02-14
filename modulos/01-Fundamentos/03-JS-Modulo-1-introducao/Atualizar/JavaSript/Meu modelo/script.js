class Carros {
  constructor(nome, turbos){
    this.nome = nome
    this.turbos = turbos
    this.ligado = false
    this.portaAberta = false
  }
  ativar(){
    this.ligado = true
    this.portaAberta = true
  }
}

function menu(){
  let escolha
  while ( escolha != '1' && escolha != '2' && escolha !='3'){
    escolha = prompt(
      'O que deseja fazer?\n' +
        '1- Ligar carro\n' +
        '2- Imprimir carros\n' +
        '3- Sair do programa'
    )
  }
  return escolha
}

function criarCarro(){
  let nomeCarro = prompt("Digite o nome do carro")
  let turbos = prompt("Digite a quantidade de turbos")
  let carro = new Carros(nomeCarro,turbos)
  return carro
}

function imprimirCarros(carros) {
  let listaCarros = ''
  carros.forEach((carro, index) => {
    listaCarros += 
    index +
    1 + 
    '-' + 
    carro.nome + 
    ' (' +
    carro.turbos +
    ' turbos)\n'
  })
alert(listaCarros)
}

let carrosLigados = []
let escolha

while (escolha != '3') {
  escolha = menu()
  switch (escolha) {
    case '1':
      let carroAdd = criarCarro()
      carroAdd.ativar()
      carrosLigados.push(carroAdd)
      break
    case '2':
      imprimirCarros(carrosLigados)
      break
  }
}