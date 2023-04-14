// TODO
/*
Given a aing of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.
*/

const olympicRing = (str) => {
  const out =
    [...str]
      .map((el) => ("qeopadgbQROPAD".includes(el) ? 1 : el === "B" ? 2 : 0))
      .reduce((a, b) => a + b, 0) / 2;
  return out < 2
    ? "Not even a medal!"
    : out < 3
    ? "Bronze!"
    : out < 4
    ? "Silver!"
    : "Gold!";
};
