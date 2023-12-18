const carroUm = prompt("Insira o nome do veiculo 1")
const velocidadeCarroUm = prompt("Velocidade do carro 1")
const carroDois = prompt("Insira o nome do veiculo 2")
const velocidadeCarroDois  = prompt("Velocidade do carro 2")

if (velocidadeCarroUm > velocidadeCarroDois) {
  alert("Carro mais rapido: " + carroUm + " Velocidade: " + velocidadeCarroUm)
} else if (velocidadeCarroUm < velocidadeCarroDois) {
  alert("Carro mais rapido: " + carroDois + " Velocidade: " + velocidadeCarroDois)
} else if (velocidadeCarroUm === velocidadeCarroDois) {
  alert("Os carros : " + carroUm + "e " +  carroDois  + " possuim a mesma velocidade de: " + velocidadeCarroUm)
}