// TODO
/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

function otherAngle(a, b) {
  const totalAngle = 180;
  const c = totalAngle - a - b;
  return c;
}
