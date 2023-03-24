// TODO
/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

*/

// PREP
// P: array of names
// R: each name with its first letter capitalized
// E: above
// P: we iterate over array, using map to create new array, after we can use charAt to find first letter and make it capitalized then with slice after first letter, make everything be lowercased

const capMe = (names) => {
  return names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
};

console.log(capMe(["jo", "nelson", "jurie"]));
console.log(capMe(["KARLY", "DANIEL", "KELSEY"]));
