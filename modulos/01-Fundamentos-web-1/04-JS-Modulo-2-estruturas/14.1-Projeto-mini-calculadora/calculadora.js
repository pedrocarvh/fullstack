
function calculadora(operacao,a,b){
  return operacao(a,b)
}

function somar(a,b){
  let resultado = a + b
  return  console.log(a + " + " + b + " = " + resultado)  
}

function subtrair(a,b){
  let resultado = a  - b
  return  console.log(a + " - " + b + " = " + resultado)  
}

function multiplicar(a,b){
  let resultado = a * b
  return  console.log(a + " x " + b + " = " + resultado)  
}
function dividir(a,b){
  let resultado = a / b
  return  console.log(a + " / " + b + " = " + resultado)  

}

calculadora(somar,3,4)
calculadora(subtrair,8,4)
calculadora(multiplicar,3,4)
calculadora(dividir,12,4)