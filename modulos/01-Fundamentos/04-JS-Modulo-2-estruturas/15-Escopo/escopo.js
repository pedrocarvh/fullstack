let nikeName = "Draskter"

function evoluir() {
  nikeName = "Drakster IO"
}

/*

console.log(nikeName)
evoluir()
console.log(nikeName)

 function criarNickName(){
  let names = "Graks"
  return names
} 

criarNickName()
console.log(criarNickName())  

*/

function avaliarNota (nota) {
  if (nota > 60) {
    var aprovado = true
    var situacao = "Aprovado" 
  } else {
    var aprovado = false
    let situacao = "Reprovado" // error pq let é uma variavel que fica apenas no escopo onde foi definido
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}

avaliarNota(67)
avaliarNota(33)