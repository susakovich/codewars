// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOperations(operation, num1, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operation, please choose between '+, -, * or / '";
  }
}

console.log(basicOperations("+", 4, 7));
console.log(basicOperations("-", 15, 18));
console.log(basicOperations("*", 5, 5));
console.log(basicOperations("/", 49, 7));
console.log(basicOperations("?", 49, 7));
