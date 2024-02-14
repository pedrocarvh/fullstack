function calcular(a, b, operacao) {
  console.log("REALIZANDO OPERARAÇÃO");
  const resultado = operacao(a, b)
  return resultado
}

function somar(a, b) {
  console.log("REALIZANDO SOMA");
  return a + b
}

console.log(calcular(3, 4, somar))




function listarElementos(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  });
}

const lista = ["Corinthians", "Semper Invicta", "Tranklyn Mhoes", "Barets"]

for (let i = 0; i < lista.length; i++) {
  listarElementos(lista[i],i,lista)
}


// forEach é uma HOF  
lista.forEach(listarElementos)