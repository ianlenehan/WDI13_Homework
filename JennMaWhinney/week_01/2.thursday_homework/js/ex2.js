/*

Part 2, Triangle

Given the following a triangle object like the one below,
write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not

*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(shape){
  if(shape.sideA === shape.sideB && shape.sideB === shape.sideC){
      return "This triangle is equilateral";
  } else {
      return "This triangle is not equilateral";
  };
};
isEquilateral(triangle);

/*
isIsosceles - Returns whether the triangle is isosceles or not

*/

var isIsosceles = function(shape){
if(shape.sideA === shape.sideB ||
  shape.sideB === shape.sideC ||
  shape.sideB === shape.sideC){
    return "This triangle is isosceles";
} else {
    return "This triangle is not isosceles";
}
};
isIsosceles(triangle);

/*
area - Returns the area of the Triangle
*/

var herons = function (t) {                /*area of triangle calculated using Heron's formula*/
  var s = (t.sideA+t.sideB+t.sideC)/2;
  var sa = (-t.sideA+t.sideB+t.sideC)/2;
  var sb = (t.sideA-t.sideB+t.sideC)/2;
  var sc = (t.sideA+t.sideB-t.sideC)/2;

  return Math.sqrt(s*sa*sb*sc);
}
herons(triangle);

/*

isObtuse - Returns whether the triangle is obtuse or not

*/

var obtuse = function(shape){
if(((shape.sideA * shape.sideB) * 2) - ((shape.sideB * shape.sideC) * 2) >
((shape.sideA * shape.sideC) * 2)) {
  return "This triangle is obtuse";
} else{ return "This triangle is not obtuse";}
};
obtuse(triangle);
