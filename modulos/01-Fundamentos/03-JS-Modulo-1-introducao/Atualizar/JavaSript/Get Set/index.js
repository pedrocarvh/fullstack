class TransporteNave{
  constructor(nome){
    this.nome = nome
    this.velocidadeAtual = 0
  }

  set velocidade(novaVelocidade){
    if(novaVelocidade > 120){
      this.velocidadeAtual = 120
    }else{
      this.velocidadeAtual = novaVelocidade
    }
  }
}

let nave = new TransporteNave("Transportador")

nave.velocidade = 120

console.log(nave)




class ResourceProcessStation{
  constructor(name, monthyProcessedLoad){
    this.name = name
    this.monthyProcessedLoad = monthyProcessedLoad
  }

  get weeklyProcessedLoad(){
    return this.monthyProcessedLoad / 4 
  }
}

let resourceProcessor = new ResourceProcessStation("GAIA",500)

console.log(resourceProcessor.weeklyProcessedLoad)



