// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greeting(name = "Stranger") {
  return `Hello ${name} how are you doing today?`;
}

console.log(greeting());
console.log(greeting("Danijel"));
