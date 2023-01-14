// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Old way
// function rmFirstLastLetter(str) {
//   if (str.length >= 2) {
//     return str.slice(1, -1);
//   } else {
//     return str;
//   }
// }

// console.log(rmFirstLastLetter("Papa Americano"));
// console.log(rmFirstLastLetter("Susake"));
// console.log(rmFirstLastLetter("9"));
// console.log(rmFirstLastLetter("oho"));

// Ternary
const rmFirstLast = (str) => (str.length >= 2 ? str.slice(1, -1) : str);

console.log(rmFirstLast("Papa Americano"));
console.log(rmFirstLast("Susake"));
console.log(rmFirstLast("9"));
console.log(rmFirstLast("oho"));
