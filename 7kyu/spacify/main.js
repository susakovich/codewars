// TODO
/*
 Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
 */

// PREP
// P: takes a string, what about empty ones?
// R: return string with spaces between each letter
// E: spacify("hello world") should return "h e l l o w o r l d"
//    spacify("12345") should return "1 2 3 4 5"
//    spacify("") should return an empty string ""
// P:

// harder way
function spacify(str) {
  return str
    .split("")
    .map((char, index) => {
      return index === str.length - 1 ? char : char + " ";
    })
    .join("");
}
// simpler way
function spacify2(str) {
  return str.split("").join(" ");
}

console.log(spacify("hello world"));
console.log(spacify("12345"));
console.log(spacify(""));

console.log(spacify2("hello world"));
console.log(spacify2("12345"));
console.log(spacify2(""));
