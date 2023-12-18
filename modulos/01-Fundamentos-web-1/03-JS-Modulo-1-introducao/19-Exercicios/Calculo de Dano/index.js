const personagemUm = prompt("personagem 1")
const poderP1 = prompt("Poder de Atack 1")

const personagemDois = prompt("personagem 2")
const pontoDeVida  = prompt("Pontos de Vida")
const poderDefesa = prompt("Poder de Defesa")
const escudo = confirm("Possuim escudo")

const poderPersonagem1 = parseFloat(poderP1)
const poderDeDefesa = parseFloat(poderDefesa)

let danoCausadoSemEscudo = poderPersonagem1 - poderDeDefesa
let danoCausadoComEscudo = ( poderPersonagem1 - poderDeDefesa)/2

if ( (poderPersonagem1 > poderDeDefesa) && escudo === false){
  alert("Dano causado pelo atacante" + danoCausadoSemEscudo + 
  "\n Vida restante do defensor" + (pontoDeVida-danoCausadoSemEscudo)) 
}  else if (( poderPersonagem1 > poderDeDefesa) && escudo === true){
  alert("Dano causado " + danoCausadoComEscudo +
  "\n Vida restante do defensor" + (pontoDeVida-danoCausadoComEscudo))
} else {
  alert("Dano causado: 0"  +
  "\n Vida restante do defensor" + pontoDeVida)
  
}

