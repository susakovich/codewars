// TODO
/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

const problem = (x) => (typeof x === "string" ? "Error" : x * 50 + 6);
