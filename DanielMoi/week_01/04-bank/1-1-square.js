/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle


*/

////////////////////////////////////////////////////////////////////////////
// rectangle object to use
var rectangle = {
  length: 4,
  width: 5
};

////////////////////////////////////////////////////////////////////////////
// isSquare function
var isSquare = function(obj) {
  if (obj.length === obj.width) {
    return true;
  }
  return false;
};

isSquare(rectangle);

////////////////////////////////////////////////////////////////////////////
// area function
var area = function(obj) {
  return obj.length * obj.width;
};
area(rectangle);


////////////////////////////////////////////////////////////////////////////
// perimeter function
var perimeter = function(obj) {
  return 2 * obj.length + 2 * obj.width;
};
perimeter(rectangle);
