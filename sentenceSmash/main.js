// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  let str = words.toString().replaceAll(",", " ");
  return str;
}

console.log(smash(["hello", "world", "this", "is", "great"]));

// Using only join, much simpler
const arrToStr = (arr) => arr.join(" ");

console.log(arrToStr(["hello", "world", "this", "is", "great"]));
