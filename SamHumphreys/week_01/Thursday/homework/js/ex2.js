// Part 2, Triangle

// Given the following a triangle object like the one below, write the following
//  functions:

var triangle = {
  sideA: 6,
  sideB: 10,
  sideC: 8
};

// isEquilateral - Returns whether the triangle is equilateral or not

var isEquilateral = function(input) {
  if (input.sideA === input.sideB && input.sideB === input.sideC) {
    return true;
  } else {
    return false;
  }
}

// isIsosceles - Returns whether the triangle is isosceles or not

var isIsosceles = function(input) {
  if (input.sideA === input.sideB || input.sideA === input.sideC ||
          input.sideB === input.sideC) {
    return true;
  } else {
    return false;
  }
}

// area - Returns the area of the Triangle
// var herons = function (a, b, c) {
//   var s = (a+b+c)/2;
//   //when can any of these three be negative?
//   //hint: when is a triangle 'okay'?
//   var sa = (-a+b+c)/2;
//   var sb = (a-b+c)/2;
//   var sc = (a+b-c)/2;
//
//   return Math.sqrt(s*sa*sb*sc);
// }

var areaOfTriangle = function(input) {
  var a = input.sideA;
  var b = input.sideB;
  var c = input.sideC;

  var s = (a+b+c)/2;
  var sa = (-a+b+c)/2;
  var sb = (a-b+c)/2;
  var sc = (a+b-c)/2;
  return Math.sqrt(s*sa*sb*sc);
}

// isObtuse - Returns whether the triangle is obtuse or not

var isObtuse = function(input) {
  var aSquared = input.sideA * input.sideA;
  var bSquared = input.sideB * input.sideB;
  var cSquared = input.sideC * input.sideC;

  if (aSquared > (bSquared + cSquared)) {
    return true;
  }
  if (bSquared > (aSquared + cSquared)) {
    return true;
  }
  if (cSquared > (aSquared + bSquared)) {
    return true;
  }
  return false;
}
