// TODO
/*
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.
*/
// PREP
// P: array of string
// R: remove substring rotten from fruits, convert it to lowercase
// E: example in description
// P: write function which will take array of strings as paramater, if input is falsy(null or undefined) return empty array, otherwise map over each string and for each str remove rotten, convert to lowercase and return result of modified strings

const removeRottenFruits = (arr) =>
  arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];

console.log(removeRottenFruits(["apple", "rottenOrange", "peach"]));
