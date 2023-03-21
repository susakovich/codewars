// TODO
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/
// PREP
// P: we are given string of words, each word is lowercased
// R: we need to find highest scoring word, if two words score the same, return the one that appears earliest in string
// E: high('abad bbb cdefg'); // returns 'abad'
//    high('alpha beta gamma'); // returns 'gamma'
//    high('xyz yzx'); // returns 'xyz'
// P: we need to split input into an array of words, after that loop through it with forEach, using reduce to sum the ASCII code of each char minus 96, after that compare the score of current word with the maximum score seen so far and update it

function high(x) {
  const words = x.split(" ");
  let maxScore = 0;
  let maxWord = "";

  words.forEach((word) => {
    const score = word
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);
    if (score > maxScore) {
      maxScore = score;
      maxWord = word;
    }
  });

  return maxWord;
}
