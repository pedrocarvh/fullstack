let nameNav = prompt("Nome da nave: ")
let velocityNav = 0;

let key = 0;

while(key <= 4){

  key = prompt("-OPTIONS-"+" \n 1-Acelerar a nave em 5km/s \n 2-Desacelerar em 5 km/s \n 3-Imprimir dadoas de bordo \n 4-Sair")

  if(key == 1){
    alert("Acelerando em 5km/s")
    acelerar()
  }else if(key == 2){
    desacelerar()
  }else if(key == 3){
    imprimir(nameNav,velocityNav)
  }else if(key == 4){
    sair()
  }else{
    alert("KEY ERROR")
  }
}

function acelerar() {
  velocityNav += 5;
}

function desacelerar() {9
  if(velocityNav > 0){
    alert("Desacelerando em 5km/s")
    velocityNav -=5;
  }else{
    alert("Velocidade muito baixa")
  }
}

function imprimir(nameNav,velocityNav) {
  alert("Nome da nave: "+nameNav + "\nVelocidade: "+velocityNav + "km/s")
}


