// TODO
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
// PREP
// P: string of words
// R: we need to return the length of shortest word(s)
// E: findShort("We are going to the gym!") => 2 ( We )
// P: make new constant that will hold words splited, after that map it and get length, put in Math.min

function findShort(s) {
  const words = s.split(" ");
  const wordLenghts = words.map((word) => word.length);
  const shortestWord = Math.min(...wordLenghts);

  return shortestWord;
}

console.log(findShort("We are going to the gym!"));

// Another way

function findShortest(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
console.log(findShortest("We are going to the gym!"));
