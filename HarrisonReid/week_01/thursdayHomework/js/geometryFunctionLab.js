// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
//

var square = {
   length: 4,
   width: 4
};

var rectangle = {
  length: 5,
  width: 4
};

var isSquare = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  } else {
    return false;
  }
};

var area = function(r) {
  var result = (r.length * r.width);
  return result;
};

var perimeter = function(rectangle) {
  result =  ((2 * rectangle.length) + (2 * rectangle.width));
  return result;
};


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
 sideA: 4,
 sideB: 4,
 sideC: 4
};

var obtuse1 = {
 sideA: 11,
 sideB: 6,
 sideC: 8
};

var isEquilateral = function(t) {
  if (t.sideA === t.sideB && t.sideB === t.sideC) {
    return true;
  } else {
    return false;
  }
};

var isIsosceles = function(t) {
  if (t.sideA === t.sideB || t.sideA === t.sideC || t.sideB === t.sideC) {
    return true;
  } else {
    return false;
  }
};

var area = function(t) {
  var a = t.sideA;
  var b = t.sideB;
  var c = t.sideC;
  var s = (a + b + c) / 2;

  result = Math.sqrt(s * (s-a)*(s-b)*(s-c));

  return result;
};

var isObtuse = function(t) {
  var longestSide;
  var secondSide;
  var thirdSide;

  // The below  if/else if/else determines the longest side of the triangle and saves it to the
  if (t.sideA > t.sideB && t.sideA > t.sideC) {
    longestSide = t.sideA;
    secondSide = t.sideB;
    thirdSide = t.sideC;
  } else if (t.sideB > t.sideA && t.sideB > t.sideC) {
    longestSide = t.sideB;
    secondSide = t.sideA;
    thirdSide = t.sideC;
  } else if (t.sideC > t.sideA && t.sideC > t.sideB) {
    longestSide = t.sideC;
    secondSide = t.sideA;
    thirdSide = t.sideB;
  } else {
    return false;
  }

  if ((secondSide * secondSide) + (thirdSide * thirdSide) < (longestSide * longestSide)) {
    return true;
  } else {
    return false;
  }

};
