let nameNav = prompt("Insira o nome da nave")
let cont = 0;


let option = prompt("Deseja entrar em dobra espacial? \n1-Sim \n2-Não")
while(option != 2){
  cont++;
  option = prompt("Deseja realizar a proxima dobra?\n1-Sim \n2-Não")

}


alert("NAVE ->: "+ nameNav)
alert("Numero de dobras: " + cont)
