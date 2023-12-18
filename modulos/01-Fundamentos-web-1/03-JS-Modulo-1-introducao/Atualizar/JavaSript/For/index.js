let nameNav = prompt("Insira o nome da nav")
let caracter = prompt("Escolha o caracter que deseja substituir")
let caracterNew = prompt("Escolha por qual caracter que deseja substituir")
let nameNew = ""

for(let i = 0; i < nameNav.length; i++){
  if(nameNav[i] == caracter){
    nameNew +=  caracterNew
  }else {
    nameNew += nameNav[i]
  }
}

alert("O novo nome da nave é: "+nameNew)
