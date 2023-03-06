// TODO
/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
// PREP
// P: array of nums? what about empty list and strings?
// R: return a sum of all numbers in it
// E: [1,2,3] => 6
//    [4,5,1] => 10
//    [1,20,19] => 40
// P: make a function, use reduce to sum all numbers, simple af

function sumMix(x) {
  return x.reduce((accu, curr) => accu + Number(curr), 0);
}

console.log(`Sum of your numbers: ${sumMix(["1", 2, "3", 4, 5])}`);

const sumMixTwo = (arr) => arr.reduce((accu, curr) => +curr + accu, 0);
console.log(`Sum of your numbers: ${sumMixTwo(["1", 2, "3", 4, 5])}`);
