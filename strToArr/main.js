// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("I love arrays they are my favorite"));

// Ternary and arrow

const strToArr = (str) => str.split(" ");
console.log(strToArr("I love arrays they are my favorite"));
