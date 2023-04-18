// TODO
/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/

function cubeChecker(volume, side) {
  // Check for invalid inputs
  if (volume <= 0 || side <= 0) {
    return false;
  }

  // Calculate the side length of a cube using the volume formula
  const cubeSide = Math.cbrt(volume);

  // Check if the calculated side length matches the given side length
  if (cubeSide === side) {
    return true;
  } else {
    return false;
  }
}
console.log(cubeChecker(64, 4)); // true, because volume = 64 and side = 4, which is a cube
console.log(cubeChecker(125, 6)); // false, because volume = 125 and side = 6, which is not a cube
console.log(cubeChecker(27, 3)); // true, because volume = 27 and side = 3, which is a cube
console.log(cubeChecker(-8, 2)); // false, because volume = -8, which is invalid
console.log(cubeChecker(64, -4)); // false, because side = -4, which is invalid

// One more solution using Math.pow

let cubeCheckerTwo = (volume, side) => Math.pow(side, 3) === volume && side > 0;
console.log(cubeCheckerTwo(64, 4)); // true, because volume = 64 and side = 4, which is a cube
console.log(cubeCheckerTwo(125, 6)); // false, because volume = 125 and side = 6, which is not a cube
console.log(cubeCheckerTwo(27, 3)); // true, because volume = 27 and side = 3, which is a cube
console.log(cubeCheckerTwo(-8, 2)); // false, because volume = -8, which is invalid
console.log(cubeCheckerTwo(64, -4)); // false, because side = -4, which is invalid
