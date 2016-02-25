// Geometry Function Lab
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var rectangle = {
  length: 4,
  width: 4
};
var isSquare = function (rec) {
  if (rec.length === rec.width) {
    return true;
  } else {
    return false;
  }
};
var area = function (rec) {
  var area = rec.length * rec.width;
  return area;
};
var perimeter = function (rec) {
  var perimeter = 2 * (rec.length + rec.width);
  return perimeter;
};
