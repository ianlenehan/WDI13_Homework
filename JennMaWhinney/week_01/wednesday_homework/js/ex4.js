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
