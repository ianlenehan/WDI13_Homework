/*

isObtuse - Returns whether the triangle is obtuse or not

*/

var triangle = {
  sideA: 3,
  sideB: 22,
  sideC: 7,
};

var obtuse = function(shape){
if(((shape.sideA * shape.sideB) * 2) - ((shape.sideB * shape.sideC) * 2) >
((shape.sideA * shape.sideC) * 2)) {
  return "This triangle is obtuse";
} else{ return "This triangle is not obtuse";}
};
