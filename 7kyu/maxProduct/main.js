// TODO
/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
*/

const adjacentElementsProduct = (array) => {
  let maxProduct = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    const product = array[i] * array[i + 1];
    maxProduct = Math.max(maxProduct, product);
  }

  return maxProduct;
};
