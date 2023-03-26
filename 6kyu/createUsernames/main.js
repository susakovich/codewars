// TODO
/*
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.
*/

// PREP
// P: The function takes an input array of objects, where each object contains properties firstName, lastName, country, continent, age, and language.
// R: The function returns a new array of objects, where each object in the array has an additional property username. The value of username is created by concatenating the lower-cased firstName, lower-cased first letter of lastName, and the birth year calculated by subtracting age from the current year.
// E: Above
// P: Define a function that takes an array list as an argument, get the current year using new Date().getFullYear() and store it in variable, iterate using map, inside map calculate birth year by substracting age from currentYear, create username string by concatanating lower-cased, and add username property to the object using spread operator

let list1 = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];

const addUsername = (list) => {
  const currentYear = new Date().getFullYear();
  return list.map((person) => {
    const birthYear = currentYear - person.age;
    const username = `${person.firstName.toLowerCase()}${person.lastName[0].toLowerCase()}${birthYear}`;
    return { ...person, username };
  });
};

console.log(addUsername(list1));
