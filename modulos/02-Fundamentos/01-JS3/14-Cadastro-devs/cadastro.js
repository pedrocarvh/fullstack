// Função para criar o label
function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}
// Função para criar o inputs
function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}
// Aqui estamos criando uma variável para pegar o id do button
const addTechBtn = document.getElementById('addTechBtn')

// Variável para pegar o formulário
const form = document.getElementById('devForm')

// array vazio para armazenar os desenvolvedores cadastrados
const developers = []

// contador para criar os id
let inputRows = 0

// adicionando um evento do tipo click no button de adicionar tecnologia 
addTechBtn.addEventListener('click', function (ev) {
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

  const expLabel = createLabel(' Experiencia: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)

  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(1, '3-5 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-5 anos', id2)

  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(1, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })

  newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)

  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev Cadastrado com Sucesso!')

  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers);
})