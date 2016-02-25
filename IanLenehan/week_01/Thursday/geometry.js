/*
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

var isSquare = function (shape) {
  if (shape.length === shape.width) {
    console.log("Your shape is a square!");
    return true;
  } else {
    console.log("Your shape is not a square.");
    return false;
  }
};

isSquare(rectangle);

/*
Part 2, Triangle

Given the following a triangle object like the one below,
write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
Raw
*/

var triangle = {
  sideA: 5,
  sideB: 6,
  sideC: 5
};

var isEquilateral = function(t) {
  if (t.sideA === t.sideB && t.sideA === t.sideC) {
      console.log("Your triangle is equilateral!");
      return true;
    } else {
      console.log("Your triangle is not equilateral.");
      return false;
    }
  };

isEquilateral(triangle);

var isIsosceles = function (t) {
  if (t.sideA === t.sideB || t.sideA === t.sideC || t.sideB === t.sideC) {
      console.log("Your triangle is isosceles!");
      return true;
    } else {
      console.log("Your triangle is not isosceles.");
      return false;
    }
}

isIsosceles(triangle);
// I am writing this function to pass into isObtuse

var longestSide = function(t) {
  var longest = '';
  var angle2 = '';
  var angle3 = '';
  if (t.sideA > t.sideB) {
    longest = t.sideA;
    angle2 = t.sideB;
  } else {
    longest = t.sideB;
    angle2 = t.sideA;
  } if (longest > t.sideC) {
    angle3 = t.sideC;
  } else {
    angle3 = longest;
    longest = t.sideC;
  } var angles = [angle2, angle3, longest]
    return angles;
}

var isObtuse = function (t) {
  var angles = longestSide(t);
  var a = angles[0];
  var b = angles[1];
  var c = angles[2];
  // the following is the phythagorean theorem
  console.log("Is " + (a * a) + " + " + (b * b) + " < " + (c * c) + "?");
  if ( (a * a) + (b * b) < (c * c) ) {
    console.log("No. Therefore this is an obtuse triangle.");
  } else {
    console.log("Yes. Therefore this is not an obtuse triangle.");
  }
}

isObtuse(triangle);
