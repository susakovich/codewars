// TODO
/* 
Return the type of the sum of the two arguments
*/

const typeOfSum = (a, b) => {
  let sum = a + b;
  return typeof sum;
};

console.log(typeOfSum(24, 2));
console.log(typeOfSum(24, "2"));
