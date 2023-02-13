// TODO
/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

const capitals = (word) =>
  word
    .split("") // split word into an array

    .map((letter, idx) => (letter === letter.toUpperCase() ? idx : false))
    // return a new array that gives the index of the capital letter

    .filter((num) => Number.isInteger(num));
// filter through each item in the new array and return
// a newer array of just the index values
console.log(capitals("CodEWaRs"));
