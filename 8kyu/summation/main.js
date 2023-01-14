// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(8));

// forEach and arrow function
const sumOfNums = (nums) => {
  let sum = 0;

  sum.forEach((e) => {
    sum += e;
  });
  return sum;
};

console.log(summation(8));
