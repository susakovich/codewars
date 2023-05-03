// TODO
/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
function nameShuffler(str) {
  const [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}

console.log(nameShuffler("john McClane"));

// another solution
const nameShufflerTwo = (str) => str.split(" ").reverse().join(" ");
console.log(nameShufflerTwo("john McClane"));
