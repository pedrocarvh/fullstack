
//EXEMPLO 1

function calcularMedia(a,b){
  const media = (a + b) / 2
  return media
}

const resultado = calcularMedia(3,4)
console.log(resultado)

//EXEMPLO 2

function criarProduto(nome, preco){
  const produto = {
    nome,
    preco,
    estoque: 1
  }
  return produto
}

const notebook = criarProduto("Notebook Acer Nitro 5 I7 8GB RTX2060", 6500)

console.log(notebook)
console.log(criarProduto("Notebook Legion I7 16GB RX2060TI", 7500))
console.log(criarProduto("Notebook G5 GAMING 20GB RX3060TI", 9500))

//EXEMPLO 3

function calcurarAreaRetangulo(base, altura){
  return base * altura
}
function calcurarAreaQuadrado(lado){
  return calcurarAreaRetangulo(lado, lado)
}

console.log(calcurarAreaRetangulo(4,6))
console.log(calcurarAreaQuadrado(6))

//EXEMPLO 4

function ola(){
  let texto = ".."
  return texto    //FUNCAO ACABA AQUI
  texto = "Olá Mundo"
  console.log(texto)
}

console.log(ola())

//EXEMPLO 5

function calculoIdade(idade){
  if (idade >= 18){
    return "Maior de Idade"
  }else {
    return "Menor de Idade"
  }
}

console.log(calculoIdade(29))
console.log(calculoIdade(15))