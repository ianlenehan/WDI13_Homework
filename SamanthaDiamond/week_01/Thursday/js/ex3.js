/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following
functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

var rectangle = {
  length: 4,
  width: 4
};

var perimeter = function (dimension) {
  return 2 * (dimension.length + dimension.width);
};
