// TODO
/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

// PREP
// P: array of names, orignal order, wba numbers?
// R: name of friends, they need to be exactly 4 letters
// E: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// P: filter array, match name to be exactly 4 letters and return it

function friend(friends) {
  return friends.filter((name) => name.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
