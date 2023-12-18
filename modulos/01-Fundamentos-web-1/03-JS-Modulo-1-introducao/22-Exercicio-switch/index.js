
const valor = prompt("Valor a ser convertido")
const valorInicial = parseFloat(valor)

let valorFinal = 0

const escolha = prompt(
  'Escola uma unidade de medida \n' +
    'MM - milimetro  \n' +
    'CM - centimetro  \n' +
    'DM - decimetro  \n' +
    'DAM - decametro  \n' +
    'HM - hectometro  \n' +
    'KM - quillometro  \n'
)

switch (escolha) {
  case 'MM' && "mm":
    valorFinal = valorInicial*1000
    break
  case 'CM' && "cm":
    valorFinal = valorInicial*100
    break
  case 'DM' && "dm":
    valorFinal = valor*10
    break
  case 'DAM' && "dam":
    valorFinal = valorInicial*0.1
    break
  case 'HM' && "hm":
    valorFinal = valorInicial*0.01
    break
  case 'KM' && "km":
    valorFinal = valorInicial*0.001
    break
}

alert("O valor de " + valor + " metros \n" +
      "Convertido para " + valorFinal + " " + escolha)
