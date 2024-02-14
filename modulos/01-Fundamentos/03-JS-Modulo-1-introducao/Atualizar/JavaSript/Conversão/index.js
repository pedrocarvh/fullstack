let distanciaAnoLuz = prompt("Digite a distância em anos-luz")
let nameUnity;

alert( "CONVERSÕES DISPONÍVEIS \n\n1-Parsec(pc) \n2-Unidade Astronônima(AU)\n3-Quilômetros(km)")

let optionConversion = prompt("Qual operação desejada?")

switch (optionConversion) {
  case "1":
    nameUnity = "Parsec(pc)"
    unitConverted = distanciaAnoLuz*0.306601
    alert("Distância em anos luz: " + distanciaAnoLuz + "\nConversão Desejada: " + optionConversion + "\nDistãncia Convertida "+ unitConverted)
    break;
  case "2":
    nameUnity = "Unidade Astronônima(AU)"
    unitConverted = distanciaAnoLuz*63241.1
    alert("Distância em anos luz: " + distanciaAnoLuz + "\nConversão Desejada: " + optionConversion + "\nDistãncia Convertida "+ unitConverted)
    break;
  case "3":
    nameUnity = "Quilômetros(km)"
    unitConverted = distanciaAnoLuz*9.5*Math.pow(10,12)
    alert("Distância em anos luz: " + distanciaAnoLuz + "\nConversão Desejada: " + optionConversion + "\nDistãncia Convertida "+ unitConverted)
    break;
  default:
    alert("Distância em anos luz: " + distanciaAnoLuz + "\nConversão fora do escopo ")
}


