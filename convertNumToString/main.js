// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

const numToString = (num) => (num !== String ? String(num) : num);
console.log(typeof numToString(123));
console.log(typeof numToString(999));
console.log(typeof numToString(-100));
