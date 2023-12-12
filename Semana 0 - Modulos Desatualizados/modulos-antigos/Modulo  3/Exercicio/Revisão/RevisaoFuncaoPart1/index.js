let nameNave = prompt("Digite o nome da sua Nave")
let velocidadePadrao = 0
let escolha = ""

alert("Bem Vindo a Nave " + nameNave)

do{
  alert("Escolha uma das opcões\n 1 - Acelerar em 5 km/s" +
                            "\n 2 - Desacelerar em 5 km/s" +
                            "\n 3 - Imprimir dados da nave "+
                            "\n 4 - Desligar e Sair da nave ")
  escolha = prompt("Inserir digito da opcao")
  menu(escolha)                           
}while(escolha != 4)


function menu(){
    switch(escolha){
      case "1":
        acelerar()
        break
      case "2":
        desacelerar()
        break
      case "3":
        imprimir(nameNave,velocidadePadrao)
        break
      case "4":
        sair()
        break
    }
}

function acelerar(){
  velocidadePadrao += 5;
}

function desacelerar(){
  if(velocidadePadrao >=5){
    velocidadePadrao -= 5;
  }
}

function imprimir(nameNave,velocidadePadrao){
  alert("A nave: "+ nameNave +" Velocidade Atual: " + velocidadePadrao)
}

function sair(){
  escolha = 4
}

