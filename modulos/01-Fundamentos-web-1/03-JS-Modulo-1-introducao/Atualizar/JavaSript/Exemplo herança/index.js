class Banco {
  constructor() {
    this.saldo = 0
  }
  
  sacar(quantidade) {
    this.saldo -= quantidade
  }
  
  depositar(quantidade) {
    this.saldo += quantidade
  }
  
  visualizarSaldo() {
    alert("O seu saldo é de R$ " + this.saldo)
  }
}

class Pessoa extends Banco {
  constructor(nome, idade) {
    // Estou chamando o constructor da class Banco para ter acesso ao atributo "saldo"
    super()
    this.nome = nome
    this.idade = idade
  }
}

let opcao

function criarPessoa() {
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Qual sua idade?")
  const pessoa = new Pessoa(nome, idade)
  
  return pessoa
}
// A função me retorna um objeto, logo a variável "pessoa" terá um objeto associado a ela
const pessoa = criarPessoa()

while(opcao != 4) {
  opcao = prompt("Bom dia!\nO que deseja fazer?\n1- Sacar\n2- Depositar\n3- Visualizar saldo\n4- Sair")
  if(opcao == 1) {
    let quantidadeString = prompt("Quanto deseja sacar?")
    let quantidadeNumber = parseInt(quantidadeString)
    pessoa.sacar(quantidadeNumber)
  } else if(opcao == 2) {
    let quantidadeString = prompt("Quanto deseja depositar?")
    let quantidadeNumber = parseInt(quantidadeString)
    pessoa.depositar(quantidadeNumber)
  } else if(opcao == 3) {
    pessoa.visualizarSaldo()
  } else if(opcao == 4){
    alert("Obrigado e volte sempre!")
  } else {
    alert("Essa opção não existe!")
  }
}

alert("Programa finalizado!")