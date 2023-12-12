
let namePilot = prompt("Insira o nome do piloto")
let velocity = 0;

let newVelocity = prompt("Qual velocidade desejada?")
confirm("Confirmar a velocidade de: "+ newVelocity + " Km/s?")

if(newVelocity <= 0){
  alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if( newVelocity < 40){
  alert("Você está devagar. Podemos aumentar mais")
}  else if( newVelocity >= 40 && newVelocity <80){
  alert("Parece uma boa velocidade para manter")
}  else if( newVelocity >= 80 && newVelocity <100){
  alert("Velocidade alta. Considere diminuir")
}  else if( newVelocity >= 100){
  alert("Velocidade perigosa. Controle automático forçado")
}

alert("ATENÇÃO PILOTO: "+ namePilot + "\n\n" +
  "VELOCIDADE ATUAL: " + newVelocity + " Km/s")
