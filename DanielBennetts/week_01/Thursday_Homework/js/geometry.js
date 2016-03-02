/*Part 1, Rectangle

Given the following a rectangle object like the
one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

//create 3 functions and pass the object through them

var rectangle = {
    length: 10,
    width: 4,
};
// maybe create a variable to do this?
var isSquare = function(shape) {
    if (shape.length === shape.width) {
        return "This shape is a square"
    } else {
        return "This shape is not a square"
    }
}
isSquare(rectangle)

var recArea = function(shape) {
    var area = shape.length * shape.width;
    return area
}
recArea(rectangle)

var recPerim = function(shape) {
    var perimeter = 2 * (shape.length + shape.width);
    return perimeter
}
recPerim(rectangle)

/*Part 2, Triangle

Given the following a triangle object like
the one below, write the following functions:

isEquilateral - Returns whether the triangle is
equilateral or not
isIsosceles - Returns whether the triangle
is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/

var triangle = {
  sideA: 2,
  sideB: 4,
  sideC: 2,
};

var isEquilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB &&
    triangle.sideB === triangle.sideC) {
      console.log( "This triangle is equilateral" );
      return true;
    } else {
      console.log( "This triangle is not equilateral" );
      return false;
  }
}
isEquilateral(triangle)

var isIsosceles = function(triangle) {
  if (triangle.sideA === triangle.sideB &&
      triangle.sideB === triangle.sideC ) {
      console.log('This triangle is not an Isosceles')  // If this isn't an equilateral triangle, it must be isosceles
       return false;
     }
  if (triangle.sideA === triangle.sideB ||
      triangle.sideB === triangle.sideC ||
      triangle.sideC === triangle.sideA ) {
      console.log('This triangle is an Isosceles');
      return true;
     }
   }
isIsosceles(triangle)

var area = function (triangle) {
  var formula = (triangle.sideA + triangle.sideB + triangle.sideC)/2;

  var sideOne = (-triangle.sideA + triangle.sideB + triangle.sideC)/2;
  var sideTwo = (triangle.sideA - triangle.sideB + triangle.sideC)/2;
  var sideThree = (triangle.sideA+triangle.sideB-triangle.sideC)/2;

  var areaOfTriangle = Math.sqrt(formula*sideOne*sideTwo*sideThree);
    console.log(areaOfTriangle);
}
area(triangle)

var isObtruse = function (triangle) {
  if (triangle.sideA + triangle.sideB < triangle.sideC ||
      triangle.sideA + triangle.sideC < triangle.sideB ||
      triangle.sideB + triangle.sideC < triangle.sideA) {
      console.log('This is an Obtruse Triangle')
  } else {
    console.log('This is not an Obtruse Triangle')
  }
}
isObtruse(triangle)
