//find the area of a triangle

var triangle = {
  sideA: 3,
  sideB: 3,
  sideC: 4
};

var area = function (x){
  var perimeter = ((triangle.sideA + triangle.sideB + triangle.sideC)/2);
  return Math.sqrt(perimeter * (perimeter - triangle.sideA)*
  (perimeter - triangle.sideB)*(perimeter - triangle.sideC))
};

console.log(area(triangle));
