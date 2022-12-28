// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (num) => (num % 2 === 0 ? num * 8 : num * 9);

console.log(simpleMultiplication(10));
console.log(simpleMultiplication(9));
