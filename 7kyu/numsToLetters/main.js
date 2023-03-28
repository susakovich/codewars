// TODO
/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/
// PREP
// P: given arr of nums return a string
// R: convert nums to letters, and take care of !, ? and ' '
// E: (switcher(["24", "12", "23", "22", "4", "26", "9", "8"])); // codewars
// P: declare variable that will have all requirements we mentioned already, loop over array with map and use join on the variable we declared

function switcher(x) {
  const alphabet = " zyxwvutsrqponmlkjihgfedcba!? ";
  return x.map((num) => alphabet[num]).join("");
}
console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"])); // codewars
