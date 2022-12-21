// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(args) {
  let smallest = args[0];

  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallest) smallest = args[i];
  }

  return smallest;
}

console.log(findSmallestInt([242, 52, 51, 2, 5, -23]));
