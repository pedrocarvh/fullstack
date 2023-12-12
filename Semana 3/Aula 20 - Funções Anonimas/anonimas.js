function somar(a,b){
  return a + b
}

let operacao = somar

console.log(operacao(4,5))


operacao = function (a,b){
  return a - b
}

console.log(operacao(4,5));

//olaMundo()


//function olaMundo(){
//  console.log("OLA MMUNDO")
//}
//const oiMundo = function (){
// //onsole.log("OI MUNDO");
//}

//oi mundo precisa ser declarando antes da funcão anonima ser iniciada

//oiMundo()