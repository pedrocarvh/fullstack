const navesEspaciais = [
  ['Drakster', 12, true],
  ['Tranklyn', 6, false],
  ['Celerion', 9, true],
  ['Iris', 18, true],
  ['Carrasko', 4, false]
]

let filtrarNaves = navesEspaciais
  .filter(elemento => {
    return elemento[1] > 9
  })
  .map(elemento => {
    return elemento[0]
  })
alert(filtrarNaves + ' São as naves com mais de 9 tripulantes')

let filtraPrimeira = navesEspaciais.findIndex(elemento => {
  return elemento[2] == false
})
alert(filtraPrimeira + ' Nave com pendencia')

let upCases = navesEspaciais.map(elemento => {
  return elemento[0].toUpperCase()
})

alert('NAVES: ' + upCases.join(','))
