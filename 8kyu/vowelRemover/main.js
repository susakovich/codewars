// TODO
/* 
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
*/

function removeVowel(string) {
  return string
    .split("")
    .filter((str) => !"aeiou".includes(str))
    .join("");
}

console.log(removeVowel("hello"));
console.log(removeVowel("codewars"));
console.log(removeVowel("goodbye"));
