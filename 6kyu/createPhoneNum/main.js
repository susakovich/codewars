// TODO
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/
// PREP
// P: array of 10 integers (0-9)
// R: return phone number, in specified format
// E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"
// P: make function, it will take array of nums, splice them into three parts and join into one

function createPhoneNumber(arr) {
  let firstPart = arr.slice(0, 3).join("");
  let secondPart = arr.slice(3, 6).join("");
  let thirdPart = arr.slice(6).join("");
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
