/*

Part 1, Rectangle

Given the following is a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
*/
var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(shape){
  if(shape.length === shape.width){
    return "This is a square!";
  } else {
    return "This is a rectangle!";
  };
};
isSquare(rectangle);

/*
area - Returns the area of the rectangle
*/

var area = function(shape){
  return (shape.length * shape.width);
};

area(rectangle);

/*
perimeter - Returns the perimeter of the rectangle
*/

var perimeter = function(shape){
  return ((shape.length + shape.width) * 2);
};

perimeter(rectangle);
