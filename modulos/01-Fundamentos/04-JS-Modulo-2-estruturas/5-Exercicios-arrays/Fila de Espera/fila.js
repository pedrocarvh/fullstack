let fila  = ["Angra","Giovana"]

let escolha = prompt("Escolha uma opção\n"+
      "1 - Inserir Novo Paciente\n"+
      "2 - Consultar Proximo Paciente\n"+
      "3 - Sair")

while (escolha != "sair" && escolha != "3"){
  switch(escolha){
    case "1":
      let novoPaciente = prompt("Insira o nome do paciente")
      fila.push(novoPaciente)
      break
    case "2":
      let consultaPaciente = fila.shift()
      alert(consultaPaciente)
      break
  }
  escolha = prompt("Escolha uma opção\n"+
      "1 - Inserir Novo Paciente\n"+
      "2 - Consultar Proximo Paciente\n"+
      "3 - Sair")
}