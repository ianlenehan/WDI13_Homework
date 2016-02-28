/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(x) {
  var square;
  if ( x.length === x.width) {
    square = true;
  } else {
    square = false;
  }
  return square;
}

var area = function (x) {
  return x.length * x.width;
}

var perimeter = function (x) {
  return 2 * x.length + 2 * x.width;
}
