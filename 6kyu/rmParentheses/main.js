// TODO
/*
Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/
// PREP
// P: we are given string
// R: we need to remove everything inside the parantheses '()', no worries about other brackes
// E: removeParentheses("example(unwanted thing)example") => exampleexamples
//    removeParentheses("example(unwanted thing)example(unwanted thing)") => exampleexample
//    removeParentheses("(unwanted thing)example(unwanted thing)example(unwanted thing)") => exampleexample
// P: create an empty result variable, count with value of 0, loop over str.legth, inside loop declare new variable char that will compare values, if char === '(' add it to count, else if char === ')' remove it from count, else add char to result, and return result

function removeParentheses(str) {
  let result = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    } else {
      if (count === 0) {
        result += char;
      }
    }
  }
  return result;
}
console.log(removeParentheses("example(unwanted thing)example"));
console.log(
  removeParentheses("example(unwanted thing)example(unwanted thing)")
);

// One more solution

function removeParentheses(s) {
  let r = 0;
  let x = "";
  for (let c of s) {
    if (c == "(") r++;
    if (r == 0) x += c;
    if (c == ")") r--;
  }
  return x;
}
