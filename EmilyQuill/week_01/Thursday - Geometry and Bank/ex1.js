// Geometry Function Lab
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


var rectangle = {
  length: 8,
  width: 4
};

var isSquare = function(r) {
  if (r.length === r.width) {
    return true;
  } else {
    return false;
  }
};

var area = function(r) {
  return (r.length) * (r.width);
};

var perimeter = function(r) {
  return (2*r.length) + (2*r.width);
}
