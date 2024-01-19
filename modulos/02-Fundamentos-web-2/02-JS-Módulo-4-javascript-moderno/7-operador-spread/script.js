const teamTKM = ['Victus', ' Sely', 'Optmus', 'Drak', 'Poshman', 'Mitsuka']

console.log(teamTKM);
console.log(...teamTKM);
console.log(...teamTKM[0]);

const tkmCopy = teamTKM

tkmCopy.pop
tkmCopy.pop
tkmCopy.push('Veligan')

console.log({ teamTKM, tkmCopy });

const tkmClone = [...tkmCopy]

tkmClone.push('Drakslister')

console.log({ teamTKM, tkmCopy, tkmClone });

const tkmObj = { ...teamTKM }
const tkmObjClone = { ...tkmObj }

tkmObjClone.test = "Teste"

console.log({ tkmObj, tkmObjClone });

