function register(evento){
  console.log(evento);
  const sectionElement = evento.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirm = sectionElement.children.passwordConfirm.value

  if(password === passwordConfirm){
    alert("User:" + username + " - Criado com Sucesso!")
  }else{
    alert("ERRO, VERIFIQUE OS DADOS")
  }
  
}

const button = document.getElementById("register-button")


//Permite adicionar eventos
button.addEventListener('click',register)

//Permite remover eventos
function removeListener(){
  button.removeEventListener('click',register)
  alert(" ------------>> Event Listener Removido")
}

button.addEventListener('mouseover',function(evento){
  console.log(evento.currentTarget);
})