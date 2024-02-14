const form = document.getElementById('orderForm')


form.addEventListener('submit', function (ev) {
  ev.preventDefault()
  const name = document.querySelector('input[name="name"]').value
  const adress = document.querySelector('input[name="adress"]').value
  const typeBrad = document.querySelector('select[name="typeBrad"]').value
  const recheioPrincipal = document.querySelector('input[name="recheio"]').value
  const observations = document.querySelector('textarea[name="observation"]').value

  let molho = ''
  document.querySelectorAll('input[name="molho"]:checked').forEach(function (item) {
    molho += " - " + item.value + '\n'
  })

  console.log({
    name, adress, typeBrad, recheioPrincipal, observations
  });

  alert(
  "Pedido Realizado!" +
  "\nNome do Cliente: " + name+
  "\nEndereco de Entrega: " + adress+
  "\nTipo de Pao: " + typeBrad+
  "\nRecheio:\n" + recheioPrincipal+ "\n" + molho +
  "\nObservacoes: " + observations
  )
})

