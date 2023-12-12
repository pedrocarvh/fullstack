

let nome = prompt(" Digite o seu nome: ")

let contadorDeViagens = 0
let cidade = []
let nomeCidade;


let identificador = prompt("Voce já visitou alguma cidade? \n sim ; nao" )

while (identificador === "sim"){
  let nomeCidade = prompt("Qual cidade voce visitou?")
  cidade += " \n " +  nomeCidade
  contadorDeViagens ++
  identificador = prompt("Voce visitou alguma outra cidade \n sim ; nao")
}

alert(nome + " \n Quantidade de Viagens:  " +  contadorDeViagens + "\n Cidades Visitadas:  "+ cidade)