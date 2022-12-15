// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let total = 0;
  // setup loop to go through array of given length
  for (i = 0; i < arr.length; i++) {
    // if arr[i] is greater than zero
    if (arr[i] > 0) {
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}

console.log(
  `Your total sum of given array would be ${positiveSum([1, 2, 3, 4, 5, -5])}`
);
