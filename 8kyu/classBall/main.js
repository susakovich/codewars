// TODO
/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

// Test the Ball class
const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType); // Output: "regular"
console.log(ball2.ballType); // Output: "super"
