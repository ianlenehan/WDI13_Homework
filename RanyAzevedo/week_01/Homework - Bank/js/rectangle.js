/*

Geometry Function Lab
Part 1, Rectangle

Given the following a rectangle object like the one below,
write the following functions:

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

var isSquare = function(){
  if(rectangle.length === rectangle.width){
    return "square";
  } else{
    return " not square";
  }
};

var area = function(){
  return rectangle.length * rectangle.width;
};

var perimeter = function(){
  return 2 * rectangle.length + 2 * rectangle.width
  };


  /*
  Part 2, Triangle

Given the following a triangle object like the one below, write the
following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}; */

var triangle = {
  sideA: 4,
  sideB: 4,
  baseC: 2
};

var longSide

var isEquilateral = function(){
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.baseC && triangle.sideA === triangle.sideB){
    return "Triangle is  Equilateral";
  } else {
    return "Triangle is not Equilateral";
  }
}

var isIsosceles = function(){
  if (triangle.sideA === triangle.sideB && triangle.sideB !== triangle.baseC && triangle.sideA !== triangle.baseC){
    return "Triangle is Isosceles";
  }else {
    return "Triangle is not Isosceles";
  }
}

var areaIsosceles = function(){
  var side = triangle.sideA + triangle.sideB;
  return side * triangle.baseC / 2 ;
}

var isObtuse = function(){
  if(triangle.sideA !== triangle.sideB && triangle.sideB !== triangle.baseC && triangle.sideA !== triangle.baseC){
    return "Triangle is Obtuse";
  } else{
    return "Triangle is not Obtuse";
  }
}
