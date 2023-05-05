// TODO
/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

const greet = (name) => {
  const capitalized =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${capitalized}`;
};
console.log(greet("riley"));
console.log(greet("JACK"));
