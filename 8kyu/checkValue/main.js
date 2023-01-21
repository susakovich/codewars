// TODO
/* 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

const checkValue = (a, x) => (a.includes(x) ? true : false);

console.log(checkValue([1, 2, 3, 4], 2));
console.log(checkValue([1, 2, 3, 4], 5));
