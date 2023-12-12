let velocidade = 80

while( velocidade > 0){
  alert("A velocidade está a " +velocidade + "km")
  velocidade -= 20

  alert("A velocidade está deminuind em: 20 km" )

  if( velocidade === 40){
    alert("veiculo com velocidade aceita")
    break
  }
  alert("veiculo parado")
}

