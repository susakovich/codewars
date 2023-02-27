// TODO
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// PREP
// P: only strings? lower and upper,
// R: a string where each character is repeated a number of times equal to its index in the original string, starting from 1, each character in the resulting string is capitalized and separated by a hyphen.
// E: accum("cwAt") -> "C-Ww-Aaa-Tttt"
// P: make a function, that can take a string, with lower or upper letters, if string is not empty add hyphen

function accum(str) {
  return str
    .split("")
    .map((word, idx) => word.toUpperCase() + word.toLowerCase().repeat(idx))
    .join("-");
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
console.log(accum("dado"));
