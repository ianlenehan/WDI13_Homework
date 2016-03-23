/*
Part 2, Triangle

Given the following a triangle object like the one below, write the
following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
sideA: 3,
sideB: 4,
sideC: 4
}; */

var triangle = {
sideA: 4,
sideB: 4,
baseC: 2
};

var longSide

var isEquilateral = function(){
if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.baseC && triangle.sideA === triangle.sideB){
  return "Triangle is  Equilateral";
} else {
  return "Triangle is not Equilateral";
}
}

var isIsosceles = function(){
if (triangle.sideA === triangle.sideB && triangle.sideB !== triangle.baseC && triangle.sideA !== triangle.baseC){
  return "Triangle is Isosceles";
}else {
  return "Triangle is not Isosceles";
}
}

var areaIsosceles = function(){
var side = triangle.sideA + triangle.sideB;
return side * triangle.baseC / 2 ;
}

var isObtuse = function(){
if(triangle.sideA !== triangle.sideB && triangle.sideB !== triangle.baseC && triangle.sideA !== triangle.baseC){
  return "Triangle is Obtuse";
} else{
  return "Triangle is not Obtuse";
}
}
