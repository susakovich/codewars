// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Ternary
const reverseStr = (str) => str.split("").reverse().join("");

console.log(reverseString("Hello World"));
console.log(reverseStr("world"));
