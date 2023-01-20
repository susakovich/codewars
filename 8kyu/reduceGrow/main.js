// TODO
/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

const grow = (x) => x.reduce((accu, curr) => accu * curr);

console.log(grow([1, 2, 3, 4]));
