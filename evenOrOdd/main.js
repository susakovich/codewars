// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `Your ${number} is Even`;
  } else {
    return `Your ${number} is Odd`;
  }
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(103));
console.log(evenOrOdd(51));
console.log(evenOrOdd(90));
console.log(evenOrOdd(1232));
