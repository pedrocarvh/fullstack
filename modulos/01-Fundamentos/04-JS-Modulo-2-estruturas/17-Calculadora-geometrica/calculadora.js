let opcao = {}

function opcoes(){
  opcao = prompt("Escolha um opcao!\n"+
  " 1 - AREA DO TRIANGULO \n"+
  " 2 - AREA DO RETANGULO \n"+
  " 3 - AREA DO QUADRADO \n"+
  " 4 - AREA DO TRAPEZIO \n"+
  " 5 - AREA DO CIRCULO \n"+
  " 0 - SAIR")
  return opcao
}

function calcAreaTriangulo( base, altura) {
  const base = prompt("Digite a base: ")
   const altura = prompt("Digite a altura: ")
  return alert("AREA DO TRIANGULO: " + (base*altura)/2)
}
function calcAreaRetangulo( base, altura) {
  const base = prompt("Digite a base: ")
  const altura = prompt("Digite a altura: ")
  return alert("AREA DO RETANGULO: " + (base*altura))
}
function calcAreaQuadrado( base, base) {
  const base = prompt("Digite a base: ")
  return alert("AREA DO QUADRADO: " +(base*base))
}
function calcAreaTrapezio( baseMaior, baseMenor, altura) {
  const baseMaior = parseFloat(prompt("Digite a base maior: "))
  const baseMenor = parseFloat(prompt("Digite a base menor: "))
  const altura = parseFloat(prompt("Dgite a altura"))
  return alert("AREA DO TRAPEZIO: " +((baseMaior+baseMenor) * (altura/2)))
}
function calcAreaCirculo( raio) {
  const raio = prompt("Digite o raio: ")
  return alert("AREA DO CIRCULO: " +3.14 * (raio*raio))
}

while(opcao!=0) { 
  opcoes()
  if (opcao == 1) {
    calcAreaTriangulo()
  }
  if (opcao == 2) {
    calcAreaRetangulo()
  }
  if (opcao == 3) {
    calcAreaQuadrado()
  }
  if (opcao == 4) {
    calcAreaTrapezio()
  }
  if (opcao == 5) {
    calcAreaCirculo()
  }
  if (opcao == 0) {
    alert("ENCERRANDO...")
    break;
  }
}


