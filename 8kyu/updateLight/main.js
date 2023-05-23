// TODO
/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/
function updateLight(current) {
  let next; // Variable to store the next state of the traffic light

  switch (current) {
    case "green":
      next = "yellow";
      break;
    case "yellow":
      next = "red";
      break;
    case "red":
      next = "green";
      break;
    default:
      // Handle invalid state or other cases
      next = "unknown";
      break;
  }

  return next;
}
