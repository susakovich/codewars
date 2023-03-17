// TODO
/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
 */

// PREP
// P: array of numbers, take care about letters
// R: we need to return new array in case some numbers has character codes for lower case vowels
// E: isVow([97, 105, 98, 111, 117, 121]); // returns: ['a', 'i', 98, 'o', 'u', 121]
//    isVow([110, 117, 109, 98, 101, 114, 115]); // returns: [110, 'u', 'm', 98, 'e', 114, 115]
//    isVow([]); // returns: []
// P: create a set of the char codes for lower case vowels, loop over the input array with map, for each num in the input arr check if it is in the set of vowels, if it is replace it with a string representation of the vowel using String.fromCharCode and ofc return modified array

function isVow(arr) {
  const vowels = new Set([97, 101, 105, 111, 117]); // character codes
  return arr.map((num) => {
    if (vowels.has(num)) {
      return String.fromCharCode(num);
    }
    return num;
  });
}

const nums = [97, 105, 98, 111, 117, 121]; // a, i, b, o, u, y
const converted = isVow(nums);
console.log(converted);
