
let contLikeds = 0; 

function curtir(eventoCurtir){
  contLikeds++;
  const contadorElement =       
  eventoCurtir.currentTarget.nextElementSibling.nextElementSibling
  contadorElement.innerText = contLikeds + (contLikeds ===1? 'clique': ' cliques')
  const sectionElement = eventoCurtir.currentTarget.parentNode
}

function removerCurtida(eventoRemoverCurtida){
  if(contLikeds>0){
    contLikeds--;
    const contadorElement = document.getElementById('contador')
    contadorElement.innerText = contLikeds + (contLikeds === 1? ' curtida': ' curtidas')
  }
}

const button = document.getElementById("add-liked");
button.addEventListener('click', curtir)

const buttonRemoveCurtida = document.getElementById("remove-liked");
buttonRemoveCurtida.addEventListener('click', removerCurtida)


function curtir(eventoCurtir) {
  contLikeds++;
  const contadorElement = eventoCurtir.currentTarget.nextElementSibling.nextElementSibling;
  contadorElement.innerText = contLikeds + (contLikeds === 1 ? ' curtida' : ' curtidas');
  
  // Adiciona a classe 'success' para aplicar o estilo de sucesso
  contadorElement.classList.add('success');
  
  // Remove a classe após 1 segundo para voltar ao estilo original
  setTimeout(() => {
    contadorElement.classList.remove('success');
  }, 1000);

  const sectionElement = eventoCurtir.currentTarget.parentNode;
}
