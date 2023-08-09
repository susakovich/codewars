// TODO
/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth) {
  const surfaceArea = 2 * (width * height + height * depth + depth * width);
  const volume = width * height * depth;

  return [surfaceArea, volume];
}
