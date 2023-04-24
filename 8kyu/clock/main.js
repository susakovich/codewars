// TODO
/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

const past = (h, m, s) => {
  // Validate input constraints
  if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
    throw new Error(
      "Invalid input. Hours, minutes, and seconds must be within valid range."
    );
  }

  // Convert hours, minutes, and seconds to milliseconds
  const hoursInMilliseconds = h * 60 * 60 * 1000;
  const minutesInMilliseconds = m * 60 * 1000;
  const secondsInMilliseconds = s * 1000;

  // Calculate total time since midnight in milliseconds
  const totalTimeInMilliseconds =
    hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;

  return totalTimeInMilliseconds;
};

// one more solution, much less code

function pastTwo(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
