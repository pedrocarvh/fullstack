
const personagens = [ 
{ nivel: 45, nome: "Drakster", raca: "indigena", classe: "lutador"},
{ nivel: 55, nome: "Ortus", raca: "orc", classe: "monstro"},
{ nivel: 235, nome: "Semper", raca: "cobra", classe: "animal"},
{ nivel: 53, nome: "Fernanda", raca: "portugues", classe: "princesa"},
{ nivel: 45, nome: "Nostigus", raca: "orc", classe: "monstro"},
{ nivel: 61, nome: "Akallister", raca: "alien", classe: "assassino"},
{ nivel: 11, nome: "Naly", raca: "indigena", classe: "mago"},
]

//MAP

// const nomes = []

// for(let i = 0; i<personagens.length; i++){
//   nomes.push(personagens[i].nome)
// }

const nomes = personagens.map(function(personagens){
  return personagens.nome
})


console.log(nomes);

// FILTER 

// const indigenas = []

// for (let i = 0; i < personagens.length; i++) {
//   if (personagens[i].raca === "indigena") {
//     indigenas.push(personagens[i])
//   }
// }

// console.log(indigenas);

const indigenas = personagens.filter(function(personagens){
  return personagens.raca === "cobra"
})

console.log(indigenas);

// reduce

const totalNiveis = personagens.reduce(function(valorTotal, personagens){
  return valorTotal + personagens.nivel
},0)

console.log(totalNiveis);


const racas = personagens.reduce(function(valorAcumulado, personagem){
  if(valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem)
  }else{
    valorAcumulado[personagem.raca] = [personagem]
  }
  return valorAcumulado
},{})

console.log(racas);


personagens.sort(function(a,b){
  return a.nivel - b.nivel
})

console.log(personagens);