// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 6,
  sideB: 6,
  sideC: 1356
};

// Herons calculation: returns the area of a triangle. Credit: Bob!
var herons = function (a, b, c) {
  var s = (a+b+c)/2;
  //when can any of these three be negative?
  //hint: when is a triangle 'okay'?
  var sa = (-a+b+c)/2;
  var sb = (a-b+c)/2;
  var sc = (a+b-c)/2;

  return Math.sqrt(s*sa*sb*sc);
}

var isEquilateral = function(t) {
  var a = t.sideA;
  var b = t.sideB;
  var c = t.sideC;
  if (a === b && b == c) {
    return true;
  } else {
    return false;
  }
};

var isIsosceles = function(t) {
  var a = t.sideA;
  var b = t.sideB;
  var c = t.sideC;
  if (a === b || b === c || a === c) {
    return true;
  } else {
    return false;
  }
};

var area = function(t) {
  var a = t.sideA;
  var b = t.sideB;
  var c = t.sideC;
  return herons(a,b,c);
};

var isObtuse = function(t) {
  var shortest;
  var short;
  var longest;

  if (isEquilateral(t)) {
          return false;
  } else if (t.sideA > t.sideB && t.sideA > t.sideC) {
          longest = t.sideA;
          shorter1 = t.sideB;
          shorter2 = t.sideC;
  } else if (t.sideB > t.sideA && t.sideB > t.sideC) {
          longest  = t.sideB;
          shorter1 = t.sideA;
          shorter2 = t.sideC;
  } else if (t.sideC > t.sideA && t.sideC > t.sideB) {
          longest = t.sideC;
          shorter1 = t.sideA;
          shorter2 = t.sideB;
  } else {
        return false;
  }


      if (  (  (shorter1 * shorter1) + (shorter2 * shorter2) ) < (longest*longest) ) {
        return true;
      } else {
        return false;
      }

};
