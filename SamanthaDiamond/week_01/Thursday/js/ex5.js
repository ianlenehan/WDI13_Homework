/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isIsosceles = function (t) {
  if (t.sideA === t.sideB || t.sideA === t.sideC || t.sideB === t.sideC) {
    return true;
  } else {
    return false;
  }
};
