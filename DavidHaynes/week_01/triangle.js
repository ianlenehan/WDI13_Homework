/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

var triangle = {
  A: 5,
  B: 5,
  C: 5
};

var testTriangle = function(x) {
  if ((x.A + x.B) > x.C && (x.A + x.C) > x.B && (x.B + x.C) > x.A ) {
    return true;
  } else {
    return false;
  }
}

var isEquilateral = function (x) {
  if ( x.A === x.B && x.B === x.C) {
    return true;
  } else {
    return false;
  }
}

var isIsosceles = function (x) {
  if ( x.A === x.B || x.A === x.C || x.B === x.C) {
    return true;
  } else {
    return false;
  }
}

var area = function (x) {
  var s = (x.A + x.B + x.C) / 2;
  return Math.sqrt(s * (s - x.A) * (s - x.B) * (s - x.C));
}

var longSide = function(x) {
  var short1;
  var short2;
  var long;
  if (x.A > x.B && x.A > x.C){
    long = x.A; short1 = x.B; short2 = x.C;
  } else if (x.B > x.A && x.B > x.C) {
    long = x.B; short1 = x.A; short2 = x.C;
  } else if (x.C > x.A && x.C > x.B) {
    long = x.C; short1 = x.A; short2 = x.B;
  } else {
    return false;
  } return [ long, short1, short2 ];
}

var isObtuse = function (x) {
  var rightAngle;
  var sides = longSide(x);
  var long = sides[0];
  var short1 = sides[1];
  var short2 = sides[2];

  rightAngle = Math.sqrt(short1 * short1 + short2 * short2);
  if (long > rightAngle) {
    return true;
  } else {
    return false;
  }
}
