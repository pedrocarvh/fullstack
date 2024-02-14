function nota(...notas) {
  const sum1 = notas.reduce((accum, nota) => accum + nota, 0)
  return sum1
}

function peso(...pesos) {
  const sum2 = pesos.reduce((accum, peso) => accum + peso, 0)
  return sum2
}


function mediaPonderada(notas, pesos) {
  if (notas.length === pesos.length) {
    return nota(...notas) / peso(...pesos)
  } else {
    console.log(`error`);
  }
}

// Teste 1: Caso de teste normal
let number1 = [80, 90, 75, 88];
let pesos1 = [0.25, 0.35, 0.2, 0.2];
let resultado1 = mediaPonderada(number1, pesos1);
console.log("Teste 1:", resultado1); // Deve imprimir a média ponderada calculada

// Teste 2: Caso de teste com listas de tamanhos diferentes
let number2 = [80, 90, 75, 88];
let pesos2 = [0.25, 0.35, 0.2];
let resultado2 = mediaPonderada(number2, pesos2);
console.log("Teste 2:", resultado2); // Deve imprimir uma mensagem de erro

// Teste 3: Caso de teste com números e pesos negativos
let number3 = [-10, 5, 20, -15];
let pesos3 = [0.2, 0.3, -0.1, 0.6];
let resultado3 = mediaPonderada(number3, pesos3);
console.log("Teste 3:", resultado3); // Deve imprimir a média ponderada calculada 
// Teste 4: Caso de teste com listas vazias
let number4 = [];
let pesos4 = [];
let resultado4 = mediaPonderada(number4, pesos4);
console.log("Teste 4:", resultado4); // Deve imprimir uma mensagem de erro

