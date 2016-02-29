// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilaeral = function (tri) {
  if ((tri.sideA === tri.sideB) && (tri.sideB === tri.sideC)) {
    return true;
  } else {
    return false;
  }
};

var isIsosceles = function (tri) {
  if ((tri.sideA === tri.sideB) || (tri.sideB === tri.sideC) || (tri.sideA === tri.sideC)) {
    return true;
  } else {
    return false;
  }
};

var area = function (tri) {
  var p = (tri.sideA + tri.sideB + tri.sideC) / 2;
  var area = Math.sqrt(p * (p - tri.sideA) * (p - tri.sideB) * (p - tri.sideC));
  return area;
};

var isObtuse = function (tri) {
  var a2 = tri.sideA * tri.SideA;
  var b2 = tri.sideB * tri.sideB;
  var c2 = tri.sideC * tri.sideC;
  if (((a2 + b2) < c2) || ((a2 + c2) < b2) || ((b2 + c2) < a2)) {
    return true;
  } else {
    return false;
  }
};
