// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function stringRepeat(n, s) {
  return s.repeat(n);
}
console.log(stringRepeat(5, "Da"));

const repeatString = (n, s) => s.repeat(n);
console.log(repeatString(10, "Dalija"));
