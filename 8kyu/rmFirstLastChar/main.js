// TODO
/*
You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
// PREP
// P: string is given, must be more then two numbers, anything else is NULL
// R: return new string, seperated by spaces instead commas, and only first - last char
// E: "1,2,3"      =>  "2"
//    "1,2,3,4"    =>  "2 3"
//    "1,2,3,4,5"  =>  "2 3 4"
// P: make function, split with comma, get first and last index, join them with space

// const firstLastNum = (arr) =>
//   arr
//     .split(",")
//     .slice(1, -1)
//     .filter((num) => (num.length <= 2 ? num : null));

// console.log(firstLastNum([1, 2, 3, 4, 5]));

const rmFirstLastChar = (arr) => arr.split(`,`).slice(1, -1).join(` `) || null;

console.log(rmFirstLastChar([1, 2, 3, 4, 5]));
