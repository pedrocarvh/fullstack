let nomePiloto = prompt("Insira o nome do piloto")
let velocidadeInicial = 0
let velocidadeNova = prompt("Velocidade Deasejada")
let velocidadeFinal = velocidadeInicial

validar = confirm("Deseja Confirmar a nova velocidade de" + velocidadeNova + " km/h ?")

if(validar){
  velocidadeFinal = velocidadeNova
  if(velocidadeNova <= 0 ){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
  }if(velocidadeNova < 40){ 
    alert("Você está devagar. Podemos aumentar mais")
  }if(velocidadeNova >= 40 && velocidadeNova <80){
    alert("Parece uma boa velocidade para manter")
  }if(velocidadeNova >= 80 && velocidadeNova < 100){
    alert("Velocidade alta, considere diminuir")
  }if(velocidadeNova >=100){
    alert("Velocidade perigosa, Controle Automatico Forçado")
  }
}else{
  alert("Velocidade = 0 Km/h")
}
alert("Piloto = " + nomePiloto + "Velocidade Atual = " + velocidadeFinal)



