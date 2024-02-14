//   LET , VAR , CONST

let nomeMaisVelha = prompt ("NOME DA PESSOA MAIS VELHA")
let idadeMaisVelha = prompt ("IDADE DA PESSOA MAIS VELHA")
let nomeMaisNova = prompt ("NOME DA PESSOA MAIS NOVA")
let idadeMaisNova = prompt ("IDADE DA PESSOA MAIS NOVA")

let diferencaIdades = (idadeMaisVelha-idadeMaisNova)

// Alert, Confirm, Prompt , Console

alert(
  nomeMaisNova + " tem " + idadeMaisNova + " anos\n\n" +
  nomeMaisVelha + " tem " + idadeMaisVelha + " anos\n\n" +
  "Diferença entre as idades = " + diferencaIdades)