// TODO
/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
 */

// PREP
// P: function that takes a string, it will only contains letters and spaces, so no worries about nums
// R: word that have more or equal to 5 chars needs to be reversed
// E: above in description
// P: first we can split words into array, using map we can iterate to check for word length, if its more then five chars split, reverse and join it, else return word less then 5 words

function spinWords(str) {
  const words = str.split(" ");
  const result = words.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
  return result.join(" ");
}

console.log(spinWords("Hey fellow warriors"));

// another way
function spinWordsTwo(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
console.log(spinWordsTwo("Hey fellow warriors"));
