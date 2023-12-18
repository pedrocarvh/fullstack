const tarefas = []

function listarTarefas() {
  const tarefaText = tarefas.reduce(function (texto, tarefas, indice) {
    texto += indice + " - "
    texto += tarefas.nameTask + "\n"
    texto += tarefas.descriptionTask

    // Verifica se a tarefa está concluída
    if (tarefas.statusTask.includes("CONCLUÍDO")) {
      texto += " (CONCLUÍDA)";
    }

    texto += "\n";
    return texto
  }, "")
  alert(tarefaText)
}

function criarTarefas() {
  const nameTask = prompt("Digite o nome da tarefa");
  const descriptionTask = prompt("Descreva sobre a tarefa");
  const statusTask = "EM ANDAMENTO";
  const confirmacao = confirm("Você deseja criar essa nova tarefa" + "\nNome: " +
    nameTask + "\nDescrição: " + descriptionTask);

  if (confirmacao) {
    const newTask = { nameTask, descriptionTask, statusTask: [] }; // Ajuste aqui
    tarefas.push(newTask);
    alert("TAREFA INSERIDA NA LISTA DE TAREFAS!");
  }
}

function marcarTarefas() {
  const indice = prompt("Digite o índice da tarefa");
  const status = "CONCLUÍDO";

  if (tarefas[indice]) {
    const confirmacao = confirm("Você deseja mudar o status da tarefa " + tarefas[indice].nameTask + " para CONCLUÍDO?");

    if (confirmacao) {
      tarefas[indice].statusTask.push(status);
      alert("STATUS = CONCLUÍDO");
    } else {
      alert("Operação cancelada.");
    }
  } else {
    alert("Tarefa inexistente.");
  }
}

function excluirTarefas() {
  const indice = prompt("Digite o indice da vaga")
  const tarefa = tarefas[indice]

  const confirmacao = confirm(
    "Deseja confirmar a exclusão da tarefa " + indice + "?\n" + "Nome:" + tarefa.nameTask + "\n Descrição: " + tarefa.descriptionTask)
  if (confirmacao) {
    tarefas.splice(indice, 1)
    alert("VAGA EXCLUIDA COM SUCESSO")
  }
}

function exibirMenu() {
  const opcao = prompt(
    "To Do" +
    "\n\nEscolha umas opções" +
    "\n 1.Listar Minhas Tarefas" +
    "\n 2.Criar uma nova tarefa" +
    "\n 3.Marcar tarefa com concluida" +
    "\n 4.Excluir tarefa"
  )
  return opcao
}

function executar() {
  let opcao = ""
  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarTarefas()
        break;
      case "2":
        criarTarefas()
        break;
      case "3":
        marcarTarefas()
        break;
      case "4":
        excluirTarefas()
        break;
      case "5":
        alert("encerrando")
        break
      default:
        alert("opçao invalida")
    }
  } while (opcao !== "6")
}

executar()