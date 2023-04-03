// TODO
/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/

function sumEvenNumbers(input) {
  return input.reduce((sum, number) => {
    if (Number.isInteger(number) && number % 2 === 0) {
      return sum + number;
    } else {
      return sum;
    }
  }, 0);
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));

// one more solution using filter with reduce

const sumEvenNums = (input) =>
  input.filter((num) => num % 2 === 0).reduce((accu, curr) => accu + curr, 0);

console.log(sumEvenNums([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));
