// Geometry Function Lab
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var isSquare = function (s){
  return s.length === s.width;
}

var area = function (s){
  return s.length*s.width;
}

var perimeter = function (s){
  return (s.length + s.width)*2;
}

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

// hard to know what to do about triangle validity, but...
// the below, whilst hackey is probably vaguely idiomatic.

var tri = {sideA:3, sideB:4, sideC: 5};

var makeTri = function(a, b, c){
  return {
    sideA: a,
    sideB: b,
    sideC: c
  }
}

var isValidTriangle = function(t){
  var a = t.sideA;
  var b = t.sideB;
  var c = t.sideC;
  var s = (a+b+c)/2;
  var sa = (-a+b+c)/2;
  var sb = (a-b+c)/2;
  var sc = (a+b-c)/2;

  var flag = s>=0 && sa>=0 && sb>=0 && sc>=0;
  if(!flag){
    return [];
  } else {
    return [s, sa, sb, sc];
  }
}

var isEquilateral =  function (t){
  if (isValidTriangle(t)){
    return (t.sideA >= 0) && (t.sideA === t.sideB) && (t.sideB === t.sideC);
  } else {
    false;
  }
}

var isIsosceles =  function (t){
  if (isValidTriangle(t)){
    return (t.sideA === t.sideB)
        || (t.sideB === t.sideC)
        || (t.sideC === t.sideA);
  } else {
    return false;
  }
}

var area = function (t){
  heronData = (isValidTriangle(t));
  if (heronData.length !== 0) {
    return Math.sqrt(heronData.reduce(function(a,b){return a*b;}));
  } else {
    return undefined;
  }
}

var isObtuse = function(t) {
  if(isValidTriangle(t)){
    var a = t.sideA;
    var b = t.sideB;
    var c = t.sideC;

    return (a*a + b*b - c*c) < 0
    || (a*a - b*b + c*c) < 0
    || (-a*a + b*b + c*c) < 0
  } else {
    return false;
  }
}

var printTri = function (t){
  console.log("tri:", t.sideA, t.sideB, t.sideC);
  console.log("equilateral:", isEquilateral(t));
  console.log("isosceles:", isIsosceles(t));
  console.log("area:", area(t));
  console.log("isObtuse:",isObtuse(t));
}


for (var i = 0; i < 7; i++) {
  for (var j = 0; j < 7; j++) {
    for (var k = 0; k < 7; k++) {
      printTri(makeTri(i, j, k));
    }
  }
}
