// TODO
/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
 */
// PREP
// P: array of strings
// R: string should contain the display text basd on the number of names
// E: examples above
// P: check for input array length, based on it follow instructions

function likes(names) {
  const [first, second, ...remaining] = names;
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${first} likes this`;
    case 2:
      return `${first} and ${second} like this`;
    case 3:
      return `${first}, ${second} and ${remaining[0]} like this`;
    default:
      return `${first}, ${second} and ${remaining.length} others like this`;
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
