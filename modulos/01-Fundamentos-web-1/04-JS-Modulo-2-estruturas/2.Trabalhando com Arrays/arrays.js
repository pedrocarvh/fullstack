
// Trabalhando com Array

const array = ["drakster","spark","struk","naskyn","mitsuka","hordeiro","carrasko","senty","javally"]

console.log(array)

// PUSH  adiciona elementos no final do array
let tamanho = array.push("martinez")
console.log(array)
console.log(tamanho)

// UNSHIFT adiciona elementos no inicio do array

tamanho =  array.unshift("iris")

console.log(array)
console.log(tamanho)

// POP  remove o ultimo elemento do  array

let ultimoElemento = array.pop()
console.log(array)
console.log(ultimoElemento)

// SHIFT remove primeiro elemento

ultimoElemento = array.shift()
console.log(ultimoElemento)

// INCLUDES verifica se o elemento está no array

let inclui = array.includes("struk")
console.log(inclui)

// indexOf retorna o indice do elemento

let index = array.indexOf("struk")
console.log(index)

// CORTAR E CONCATENAR

let cortar = array.slice(0,4)
console.log(array)
console.log(cortar)
let outros = array.slice(-4)
console.log(outros)

// CONCATENAR

let concatenar = cortar.concat(outros,"Iris")
console.log(concatenar)

// SUBSTITUIR ELEMENTOS 

let elementosSubstituidos = concatenar.splice(index, 1 , "pedrinho")
console.log(concatenar)
console.log(elementosSubstituidos)

// INTERAR SOBRE OS ELEMENTOS

for (let indiceX = 0;  indiceX < concatenar.length; indiceX++){{
  const elemento = concatenar[indiceX]
  console.log(elemento + " se encontra na posicao " + indiceX)
}}

