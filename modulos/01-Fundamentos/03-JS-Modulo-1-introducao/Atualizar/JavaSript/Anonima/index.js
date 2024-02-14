alert(speedUp(60,10))  // ESSA VAI FUNCIONAR PQQ A FUNÇÃO FOI DECLARADA DE FORMA TRADICIONAL
alert(doubleSpeed(50))  // ERRO PQ A FUNÇÃO ANONIMA NAO FOI INICIALIZADA ANTES DA FUNÇÃO SER CHAMADA

let doubleSpeed = function(velocity){
  return velocity * 2;
}
function speedUp(velocity, acelaration){
  return velocity + acelaration
}
