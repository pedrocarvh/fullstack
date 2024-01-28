/* function mediaFinal() {
  console.log(arguments);
  var args = [].slice.call(arguments, 0)

  var soma = 0;

  for (var i = 0; i < args.length; i++) {
    soma += args[i]
  }
  return soma
}
console.log(mediaFinal(1, 2, 3));
console.log(mediaFinal(134, 23432, 32323, 34));
console.log(mediaFinal(1, 2, 3, 5, 6, 77, 774, 234, 234));

*/

/*

function average(numbers) {
  let sum = 0

  numbers.forEach(number => {
    sum += num
  })

  const avg = sum / numbers.length

  return avg

}*/ 

/*

function average(numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  const avg = sum / numbers.length
  return avg
}
  
}*/ 

function average(...numbers) {
  const sum = numbers.reduce((accum,num) => accum + num,0)

  return sum / numbers.length

}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7));
console.log(average(2, 5, 7, 1, -2));
console.log(average(2, 5, 7, 1, -2));
console.log(average(10, 10, 10, 10, 10, 9));
console.log(average(25, 75));



