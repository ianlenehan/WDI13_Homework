/*Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};*/

var triangle={
  sideA: 3,
  sideB: 4,
  sideC: 4
}

var isEquilateral=function(dimensions){
  if(triangle.sideA===triangle.sideB && triangle.sideA===triangle.sideC && triangle.sideB===triangle.sideC){
    console.log("The triangle is equalateral !");
  }
  else{
    console.log("The triangle is not equalteral !");
  }
}
isEquilateral(triangle);

////////////////////////////////////////////////////////////////////////////////


var triangle={
  sideA: 3,
  sideB: 4,
  sideC: 4
}

var isIsosceles=function(dimensions){
  if(triangle.sideA===triangle.sideB || triangle.sideA===triangle.sideC || triangle.sideB===triangle.sideC){
    return "The triangle is Isosceles !";
  }
}
console.log(isIsosceles(triangle));


////////////////////////////////////////////////////////////////////////////////

var area=function(dimensions){

  var per=(triangle.sideA+triangle.sideB+triangle.sideC)/2;
  var ar= Math.sqrt(per*((per-triangle.sideA)*(per-triangle.sideB)*(per-triangle.sideC)));
  return "The area of the triangle is "+ar;
}
console.log(area(triangle));


////////////////////////////////////////////////////////////////////////////////
//a2>b2+c2
var isObtuse=function(dimensions){
  var a2= triangle.sideA*triangle.sideA;
  var b2= triangle.sideB*triangle.sideB;
  var c2= triangle.sideC*triangle.sideC;
  if (a2>b2+c2>90){
    console.log("it's an Obtuse Triangle !");
  }
  else{
    console.log("not an obtuse triangle !");
  }
}
isObtuse(triangle);

////////////////////////////////////////////////////////////////////////////////
