// TODO
/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s) {
  const numbers = "1234567890";
  let res = "";
  let sum = 0;
  for (let i = 0; i <= s.length; i += 1) {
    if (numbers.includes(s[i])) {
      res += s[i];
    } else {
      if (res !== "") {
        sum = sum + parseInt(res);
        res = "";
      }
    }
  }
  return sum;
}

console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);
