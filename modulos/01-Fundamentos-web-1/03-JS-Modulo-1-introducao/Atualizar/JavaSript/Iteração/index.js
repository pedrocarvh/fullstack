let teams = ["Corinthians","Flamengo","Palmeiras","Vasco","Manaus"]

let upTeam = teams.map(function(teamsatt){
  let up = teamsatt.toUpperCase()
  return up
})

let select = teams.filter(element => { return element.length >= 7 })
console.log(select);

let select1 = teams.find(element => { return element.length >= 7 })
console.log(select1);


