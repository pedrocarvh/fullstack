var media = (...numbers) => {
  const sum = numbers.reduce((accum, number) => accum + number, 0)
  return sum / numbers.length
}

console.log(`Media Aritmetica Simples: ${media(1, 2, 3, 4, 5)}`);


const mediaPonderada = (...entradas) => {
  const sum = entradas.reduce((accum, { number, peso }) => accum + (number * (peso ?? 1)), 0)
  const sumPeso = entradas.reduce((accum, entrada) => accum + (entrada.peso??1), 0)
  return sum / sumPeso
}

console.log(`Media Ponderada:  ${mediaPonderada(
  { number: 9, peso: 3 },
  { number: 7},
  { number: 10, peso: 1 },
)}`);

