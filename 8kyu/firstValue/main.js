// TODO
/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "" between each of its letters.

You should not remove or add elements from/to the array.
*/
// PREP
// P: list of strings, what about numbers, null?
// R: return first value of string
// E: twoSort(["Dado"]) => "D***a***d***o
// P: make function, sort array, split it and join with value of ***

const sortTwo = (arr) => arr.sort()[0].split("").join("***");

console.log(sortTwo(["Dado"]));
