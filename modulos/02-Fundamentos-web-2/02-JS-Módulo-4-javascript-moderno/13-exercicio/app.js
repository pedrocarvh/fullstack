var media = (...numbers) => {
  const sum = numbers.reduce((accum, number) => accum + number, 0)
  return sum / numbers.length
}

console.log(media(1, 2, 3, 4, 5));
