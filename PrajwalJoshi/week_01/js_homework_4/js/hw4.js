console.log("###############################Geometry Function Lab#####################################");

console.log("______________Part 1, Rectangle______________");
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


var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(rec){
  if(rec.length === rec.width){
    //console.log("Its a Square");
    return "It is a Square";
  }else{
    //console.log("It's not a Square");
    return "It is not a Square";
  }
}

var areaRectangle = function (rec){
   return rec.length * rec.width;
}

var perimeterRectange = function (rec){
    return 2*(rec.length+rec.width);
}

console.log(isSquare(rectangle));
console.log(areaRectangle(rectangle));
console.log(perimeterRectange(rectangle));

console.log("______________Part 2, Triangle______________");

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

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var count = function (triangle){
    counter = 0;
  if(triangle.sideA === triangle.sideB ){
      counter++;
  }
  if(triangle.sideA === triangle.sideC ){
      counter++;
  }
  if(triangle.sideB === triangle.sideC ){
      counter++;
  }
  return counter;
};

var isEquilateral = function(triangle){
  if(count(triangle) === 3){
      return "The triangle is Equilateral"
  }else {
    return "The triangle is NOT Equilateral"
  }
};

var isIsosceles = function(triangle){
   if(count(triangle) === 1){
     return "The triangle is Isosceles";
   }else {
     return "The triangle is NOT Isosceles";
   }
};


var isObtuse = function(triangle){
  var sideA = triangle.sideA;
  var sideB = triangle.sideB;
  var sideC = triangle.sideC;
  console.log(sideB);

  if ((sideA > sideB) && (sideA > sideC)){
  var   longestside = sideA;
  var   otherside1 = sideB;
  var   otherside2 = sideC;
  }

  if ((sideB > sideC) && (sideB > SideA)){
  var   longestside = sideB;
  var   otherside1 = sideB;
  var   otherside2 = sideC;
  }

  if ((sideC > sideA) && (sideC > sideB)){
  var   longestside = sideA;
  var   otherside1 = sideB;
  var   otherside2 = sideC;
  }

  var longestsideSq = longestside * longestside;
  othersideSqSum= otherside1*otherside1 + otherside2*otherside2;
  if(longestsideSq >othersideSqSum ){
      return "The triangle is Obtuse";
  }else {
      return "The triangle is NOT Obtuse";
  }
};

var areaTriangle = function(triangle){
  var  s = 1/2 *( triangle.sideA + triangle.sideB + triangle.sideC);
   area = Math.sqrt(s * (s - triangle.sideA) * (s- triangle.sideB) *(s - triangle.sideC));
   return area;
}
console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(isObtuse(triangle));
console.log(areaTriangle(triangle));
