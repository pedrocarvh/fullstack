let nave = {
  velocidade: 0,
  speedUp: function(aceleracao){
    this.velocidade += aceleracao
  }
}

function registroNave(){
  nave.name = prompt("Informe o nome da nave")
  nave.type = prompt("Informe o tipo da nave")
  nave.maxVelocidade = Number(prompt("Informe a velocidade maxima da nave (km/s"))
}

function acelerate(){
  let aceleration = Number(prompt("Quanto voce quer acelerar (km/s"))
  nave.speedUp(aceleration)
  if(nave.velocidade > nave.maxVelocidade){
    alert("Velocidade max ultrapassada\n" +
    "\nVelocidade" + nave.velocidade + "km/s" +
    "\nVelocidade Maxima" + nave.maxVelocidade + "km/s")
  }
}

function stop(){
  alert("Nave Parada")
  nave.velocidade = 0
}

function menu(){
  let op
  do{
    op = prompt("Acelar:1 - Parar:2")
    switch(op){
      case "1":
        acelerate()
        break
      case "2":
        stop()
        break
      default:
        alert("Op invalid")    
    }
  }
  while(op != "2")
}

registroNave()
menu()