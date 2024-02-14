const dadosNaves = [
  ["Spark", 7, true],
  ["Culet", 10, true],
  ["Marvin", 5, false],
  ["Spesch", 3, true],
  ["Kalit", 15, false]
]

let maisTrip = dadosNaves.filter(spaceship => {
  return spaceship[1] >9
}).map(spaceship => {
  return spaceship[0]
})

let situacaoPendente = dadosNaves.findIndex(spaceship => {
  return spaceship[2] == false
})

let aumentarNomes = dadosNaves.map(spaceship => {
  return spaceship[0].toUpperCase()
})

let message = "Naves com mais de 9 tripulantes: " + maisTrip.join(", ") 
message += "\nProcesso Pendentes: " + (situacaoPendente+1) 
message += "\nZoom Nomes: " + aumentarNomes.join(",")

alert(message)
  