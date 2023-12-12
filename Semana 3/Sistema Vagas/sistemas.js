const vagas = []

function listarVagas(){
  const vagasEmTexto = vagas.reduce(function(textoFinal, vagas, indice){
    textoFinal += indice + " . "
    textoFinal += vagas.nome
    textoFinal += "( " + vagas.candidatos.length + " candidatos) \n"
    return textoFinal

  }, "")
  alert(vagasEmTexto)
}

function criarVaga(){
      const nome = prompt("Nome da Vaga:")
      const descricao = prompt("Descreva sobre essa vaga:")
      const dataLimite = prompt("Qual a data de limite?: dd/mm/aaaa" )

      const confirmacao = confirm("Deseha confirmar a criação da vaga \n" +
      "[NOME]: " + nome + "\n[DESCRIÇÃO]: " + descricao + "\n[DATA LIMITE]: " +  dataLimite )

      if (confirmacao){
        const novaVaga = { nome,descricao,dataLimite, candidatos:[]}
        vagas.push(novaVaga)
        alert("vaga criada.")
      }
}

function vizualizarVaga() {
  const indice = prompt("Selecione o índice da vaga");
  const vaga = vagas[indice]
  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

  alert(
    "Vaga n° " + indice +
    "\n Nome: " + vaga.nome +
    "\n Descrição: " + vaga.descricao +
    "\n Data Limite: " + vaga.dataLimite +
    "\n Quantidade de Candidatos : " + vaga.candidatos.length +
    "\n Candidatos Inscritos : " + candidatosEmTexto
  )
}

function inscrever(){
  const candidato = prompt("Informe oo nome do candidato")
  const indice= prompt("Informe o indice da vaga para se inscrever")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato" + candidato + "na vaga " + indice + "?\n " +
    "Nome:" + vaga.nome + "\n Descrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
  )
  if (confirmacao){
    vaga.candidatos.push(candidato)
    alert("Inscrição Confirmada")
  }
}


function excluirVaga(){
  const indice = prompt("informe o indice da vaga")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja confirmar a exclusão da vaga " + indice + "?\n" + "Nome:" + vaga.nome + "\n Descrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
  )
  if (confirmacao) {
    vagas.splice(indice,1)
    alert("Vaga Excluida!")
  }
}

function exibirMenu(){
  const opcao = prompt(
  "Cadastro de Vagas de Emprego" +
  "\n\nEscolha umas opções" +
  "\n 1.Listar Vagas Disponiveis" +
  "\n 2.Criar nova vaga" +
  "\n 3.Exibir ou vizualizar uma vaga" +
  "\n 4.Inscrever um candidato" +
  "\n 5.Excluir uma vaga"
  )
  return opcao
}

function executar(){
  let opcao = ""
  do {
    opcao = exibirMenu()

    switch(opcao){
      case "1":
        listarVagas()
        break;
      case "2":
        criarVaga()
        break;
      case "3":
        vizualizarVaga()
        break;
      case "4":
        inscrever()
        break;
      case "5":
        excluirVaga()
        break;
      case "6":
        alert("encerrando")
        break
      default:
        alert("opçao invalida")
    }
  } while (opcao !== "6")
}

executar()
