class Carro {
  constructor(nome, capacidade, velocidadeMax) {
    this.nome = nome
    this.capacidade = capacidade
    this.velocidadeMax = velocidadeMax
    this.velocidade = 0
  }

  speed(acelerecao) {
    this.velocidade += acelerecao
    if (this.velocidade > this.velocidadeMax) {
      alert('Velocidade Maxima Ultrapassada! PERIGO')
    }
  }
}

class TransporteCarro extends Carro {
  constructor(nome, capacidade, velocidadeMax, cargaMaxima) {
    super(nome, capacidade, velocidadeMax)
    this.cargaMaxima = cargaMaxima
  }
  speed(aceleracao) {
    aceleracao /= 2
    alert('Incrementendo velocidade em ' + aceleracao + 'km/s')
    super.speed(aceleracao)
  }
}
let transporteCarro = new TransporteCarro('Transportadora', 4, 100, 400)

console.log(TransporteCarro)

transporteCarro.speed(210)
