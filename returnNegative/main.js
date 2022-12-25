// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Old way
// const returnNegative = (num) => {
//   if (num > 0) {
//     return -num;
//   } else {
//     return num;
//   }
// };

// Ternary
const returnNegative = (num) => (num ? -num : num);

console.log(returnNegative(1));
console.log(returnNegative(-5));
console.log(returnNegative(0));
console.log(returnNegative(0.12));
