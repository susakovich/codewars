// TODO
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

const reverseWords = (str) => {
  // split the string into an array of words
  const words = str.split(" ");

  // map over the array of words and reverse each one
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  // join the array of reversed words back into a string
  return reversedWords.join(" ");
};

console.log(reverseWords("This is an example!"));

// one more solution, more like one liner

function reverseWordsTwo(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverseWordsTwo("This is an example!"));
