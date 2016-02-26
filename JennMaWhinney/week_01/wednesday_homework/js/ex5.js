/*

Part 2, Triangle

Given the following a triangle object like the one below,
write the following functions:

isIsosceles - Returns whether the triangle is isosceles or not

*/
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isIsosceles = function(shape){
if(shape.sideA === shape.sideB ||
  shape.sideB === shape.sideC ||
  shape.sideA === shape.sideC){
    return "This triangle is isosceles";
} else {
    return "This triangle is not isosceles";
}
};
