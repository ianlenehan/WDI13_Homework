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

var isSquare = function (dimension) {
  if (dimension.length === dimension.width) {
    return true;
  } else {
    return false;
  }
};
