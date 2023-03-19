// TODO
/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// PREP
// P: function that will replace all voewls in given string, and other function to turn numbers back into vowels
// R: two functions, encode and decode, one that represent input string to be encoded, and the other one represents encoded string to be decoded
// E: console.log(encode("hello")); // Output: h2ll4
//    console.log(decode("h3 th2r2")); // Output: hi there
// P: in first encode function, create object of voewls and numbers, in other function do the reverse, use regex and match it

const encode = (string) => {
  const vowels = { a: "1", e: "2", i: "3", o: "4", u: "5" };
  return string.replace(/[aeiou]/g, (match) => vowels[match]);
};

const decode = (string) => {
  const vowels = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  return string.replace(/[1-5]/g, (match) => vowels[match]);
};

console.log(encode("hello")); // Output: h2ll4
console.log(decode("h3 th2r2")); // Output: hi there
