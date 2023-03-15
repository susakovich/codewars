// TODO
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
// PREP
// P: takes string or numbers input
// R: duplicates
// E: in example above
// P: make all input to be lowerCased, split it than sort, after we need to join and check for match(regex)
function duplicatesCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

function countDuplicates(str) {
  const lowerStr = str.toLowerCase();
  const uniqueChars = [...new Set(lowerStr)];
  const charCounts = uniqueChars.map((char) => lowerStr.split(char).length - 1);
  return charCounts.filter((count) => count > 1).length;
}

function duplicateCount(str) {
  const count = {};
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    count[char] = (count[char] || 0) + 1;
  }
  let duplicates = 0;
  for (const char in count) {
    if (count[char] > 1) {
      duplicates++;
    }
  }
  return duplicates;
}
