// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Old way
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return `Your ${number} is Even`;
//   } else {
//     return `Your ${number} is Odd`;
//   }
// }

// Ternary operator
const evenOdd = (num) =>
  num % 2 === 0 ? `Your ${num} is even` : `Your ${num} is odd`;

console.log(evenOdd(20));
console.log(evenOdd(13));
console.log(evenOdd(28));
console.log(evenOdd(21));
