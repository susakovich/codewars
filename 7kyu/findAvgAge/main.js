// TODO
/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
*/

// PREP
// P: we are given objects of data about devs
// R: we need average age of all developers
// E: example above should return 50
// P: first we can calculate totalAge by using reduce, after that we get average age by dividing total age with length of array

let list1 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

function getAverageAge(list) {
  let totalAge = list.reduce((accu, dev) => accu + dev.age, 0);
  let avgAge = totalAge / list.length;
  return Math.round(avgAge);
}
console.log(getAverageAge(list1));
