// TODO
/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/

// PREP
// P: array of nums, no letters etc
// R: difference between largest and smallest value
// E: example in todo
// P: sort nums and subtract the last index from the first

function betweenExtremes(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
}

console.log(betweenExtremes([23, 3, 19, 21, 16]));

// another solution using Math
function betweenExtremesTwo(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}

console.log(betweenExtremesTwo([23, 3, 19, 21, 16]));
