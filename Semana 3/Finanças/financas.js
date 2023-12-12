const despesa = []

function listarDespesas(){
  
}
function registrarDespesa(){
  const nameDespesa = prompt("Digite o nome da despesa")
  const valueDespesa = prompt("Valor da Despesa")
  const descriptionDespesa = prompt("Descrição")
  const confirmacao = confirm("Criar a despesa " + nameDespesa + "no valor de " +  valueDespesa + "Reais\n" + "Descricao:" + descriptionDespesa)
  if ( confirmacao) {
    const newDespesa = {nameDespesa, valueDespesa, descriptionDespesa}
    despesa.push(newDespesa)
    alert("Despesar criada com sucesso!")
  }

}
function vizualizarDetalhesDespesa(){

}
function excluirDespesa(){

}
function sair(){

}
function listarDespesas(){

}
function exibirMenu(){

}
function executar(){
  const opcao = prompt(
    "\n Controle de Finanças" + 
    "\n Menu \n" +
    "\n 1.Listar Despesas" +
    "\n 2.Registrar despesa" +
    "\n 3.Vizualizar Detalhes de uma despesa" +
    "\n 4.Excluir Despesa" +
    "\n 5.Sair" 
  )
    return opcao
}

