/*

Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not

*/
////////////////////////////////////////////////////////////////////////////
// Triangle object
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

////////////////////////////////////////////////////////////////////////////
// isEquilateral function
var isEquilateral = function(obj) {
  if (obj.sideA === obj.sideB && obj.sideB === obj.sideC) {
    return true;
  }
  return false;
};
isEquilateral(triangle);

////////////////////////////////////////////////////////////////////////////
// isIsosceles function
var isIsosceles = function(obj) {
  if (obj.sideA === obj.sideB ||
    obj.sideB === obj.sideC ||
    obj.sideC === obj.sideA) {
    return true;
  }
  return false;
};
isIsosceles(triangle);


////////////////////////////////////////////////////////////////////////////
// area function
// Heron's Formula: http://www.mathopenref.com/heronsformula.html

var area = function(obj) {
  var a = obj.sideA,
    b = obj.sideB,
    c = obj.sideC,
    perimeter = a + b + c,
    p = perimeter / 2,
    area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return area.toFixed(2);
};
area(triangle);

////////////////////////////////////////////////////////////////////////////
// obtuse functions
// Obtuse triangle has an angle > 90
// http://jwilson.coe.uga.edu/emt668/emat6680.folders/brooks/6690stuff/righttriangle/pythagconv.html

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 10
};

var isObtuse = function(obj) {

  var a = obj.sideA,
    b = obj.sideB,
    c = obj.sideC;

  var longest;
  var others = [];
  if (a >= b && a >= c) {
    longest = a;
    others.push(b, c);
  } else if (b >= c && b >= c) {
    longest = b;
    others.push(a, c);
  } else {
    longest = c;
    others.push(a, b);
  }

  if (longest*longest > (others[0]*others[0] + others[1]*others[1])) {
    return true;
  }

  return false;
};
isObtuse(triangle);
