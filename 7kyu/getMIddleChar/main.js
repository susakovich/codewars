// TODO
/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/
// TODO ONE
/*
The function takes a word as input and assigns its length to a variable length.
The middle index is calculated as Math.floor(length / 2), which gives the index of the middle character(s) in the word.
If the word's length is even (i.e., length % 2 === 0), then the function returns the substring of the word starting from the character before the middle index and ending with the middle index. This returns the middle two characters of the word.
If the word's length is odd, then the function returns the character at the middle index of the word.*/
function getMiddle(word) {
  const length = word.length;
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return word.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return word.charAt(middleIndex);
  }
}

// TODO TWO
/*
The arrow function takes a word as input and returns either the middle character or characters of the word.
The ternary operator checks if the word's length is even (i.e., word.length % 2 === 0). If it is, the function uses the slice() method to return a substring of the word starting from the character before the middle index and ending with the middle index, which gives the middle two characters of the word.
If the word's length is odd, the function uses the charAt() method to return the character at the middle index of the word (i.e., Math.floor(word.length / 2)).
*/
const getMiddleTwo = (word) =>
  word.length % 2 === 0
    ? word.slice(word.length / 2 - 1, word.length / 2 + 1)
    : word.charAt(Math.floor(word.length / 2));
