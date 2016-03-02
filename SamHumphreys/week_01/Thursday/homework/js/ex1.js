// Part 1, Rectangle
//
// Given the following a rectangle object like the one below,
// write the following functions:


var rectangle = {
  length: 4,
  width: 4
};

// isSquare - Returns whether the rectangle is a square or not

var isSquare = function (input) {
  if (input.length === input.width){
    return true;
  } else {
    return false;
  }
}

// area - Returns the area of the rectangle

var areaOfRectangle = function(input) {
  area = input.length * input.width;
  return area;
}

// perimeter - Returns the perimeter of the rectangle

var perimOfRectangle = function(input) {
  perimeter = (input.length + input.width) * 2;
  return perimeter;
}
