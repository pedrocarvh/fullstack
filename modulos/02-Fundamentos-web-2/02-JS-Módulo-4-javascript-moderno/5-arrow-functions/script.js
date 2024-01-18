function somaSum(a, b) {
  return a + b
}

console.log(`Resultado somaSum ${somaSum(2, 2)}`);

const functionAnonima = function (a, b) {
  return a + b
}

console.log(`Resultado functionAnonima ${functionAnonima(2, 2)}`);

const arrowFunctionSoma = (a, b) => {
  return a + b
}

console.log(`Resultado arrowFunctionSoma ${arrowFunctionSoma(2, 2)}`);

const arrowFunctionSubtracao = (a, b) => a - b

console.log(`Resultado arrowFunctionSubtracao  ${arrowFuncitonSubtracao(5, 2)}`);

const double = n => (`O dobro de ${n} = ${n * 2}`)

const numberX = 25

console.log(double(numberX));


const teams = ['Corinthians', 'Real Madrid', 'Chelsea', 'Cruzeiro', 'Arsenal', 'Coritiba', 'Chapecoense']

const startingWithC = teams.filter(team => team[0] === 'C')

console.log(`Times que começam com a letra C ${startingWithC}`);