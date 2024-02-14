function addEmployee(){

  const nameEmployee = document.getElementById("nameEmployee").value
  const cpfEmployee = document.getElementById("cpfEmployee").value
  const functionEmployee = document.getElementById("functionEmployee").value

const confirmation = confirm("Deseja confirmar o cadastro do profisisonal: "+nameEmployee + " CPF: " + cpfEmployee + " no cargo de: "+functionEmployee+ "?")

  if (confirmation){
    const listEmployee = document.getElementById('listEmployee')
    const employeeItem = document.createElement('li')
    employeeItem.id = "f-" + cpfEmployee
    employeeItem.innerText = nameEmployee + ":" + cpfEmployee + " ( " + functionEmployee + " )"
    listEmployee.appendChild(employeeItem)
    
    document.getElementById('nameEmployee').value = ' '
    document.getElementById('cpfEmployee').value = ' '
    document.getElementById('functionEmployee').value = ' '
  }
}

function removeEmployee(){
  const id = document.getElementById("removedEmployee").value
  const employeeToRemove = document.getElementById("f-" + id)

  const confirmation = confirm("Deseja remover o profissional: "+ employeeToRemove.innerText + "?")

  if(confirmation){
    document.getElementById("listEmployee").removeChild(employeeToRemove)
    document.getElementById("removedEmployee").value = ' '
  }
}
