// Returning all odds
// [1, 2, 3, 4, 5, 7]

const numbers = [1, 2, 3, 4, 5, 7]

let odd_numbers = numbers.filter( number => {
  return !(number%2) == 0
})

console.log(odd_numbers)