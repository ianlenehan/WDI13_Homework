/* Geometry Function Lab
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following
functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
Part 2, Triangle

Given the following a triangle object like the one below, write the following
functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}; */

var rectangle = {
  length: 4,
  width: 6
};

var isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width){
    console.log("It is a rectangle");
  }
    console.log("It is NOT a square");
};

var area = function (rectangle) {
  var result = (rectangle.length * rectangle.width);
  console.log(result);
};

var perimeter = function (rectangle){
  var pari = (2 * (rectangle.length + rectangle.width));
  console.log(pari);
};

isSquare(rectangle);
area(rectangle);
perimeter(rectangle);

var triangle = {
  sideA: 15,
  sideB: 15,
  sideC: 20,
}

var isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    console.log("This is a equilateral triangle");
    return true;
  }
  console.log("This is NOT a equilateral triangle");
  return false;
}

isEquilateral( triangle );

var isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC ||
triangle.sideA === triangle.sideC) {
  console.log("This is a Isosceles triangle");
  }
  console.log("This is NOT a Isosceles triangle");
  return false;
}

isIsosceles( triangle );

var triangleArea = function (triangle) {
  var result = (triangle.length * triangle.width);
  console.log("The area of the triangle is " + result);
};

triangleArea( triangle );

var isObtuse = function (triangle) {
  if ((triangle.sideA * triangle.sideA) > triangle.sideA + triangle.sideB) {
    console.log("Yes it is obtuse");
  }
  if ((triangle.sideA * triangle.sideA) > triangle.sideC + triangle.sideB) {
    console.log("Yes it is obtuse");
  }
  if ((triangle.sideB * triangle.sideB) > triangle.sideA + triangle.sideC) {
    console.log("Yes it is obtuse");
  }
  console.log("No it is not obtuse");
}
isObtuse ( triangle );
