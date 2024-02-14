function group(){
  console.log('Export nomeado não-inline(agrupado');
}

function a(){}
function b(){}
function c(){}
function d(){}

function exportDefault(){
  console.log('Export default nao-line');
}

export {group,a,b,c,d}
export default exportDefault