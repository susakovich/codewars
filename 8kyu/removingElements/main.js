// TODO
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// arrow function, ternary way
const everyOtherElement = (arr) => arr.filter((ele, idx) => idx % 2 === 0);
console.log(everyOtherElement(["Keep", "Remove", "Keep", "Remove", "Keep"]));

function removeEverySecondElement(arr) {
  return arr.filter((ele, idx) => idx % 2 === 0);
}
console.log(
  removeEverySecondElement(["Keep", "Remove", "Keep", "Remove", "Keep"])
);
