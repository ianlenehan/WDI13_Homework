//Part 1 Rectangle

var rectangle = {
  length: 8,
  red: 8
};

var isSquare = function (x) {
  // var leng = length;
  if (x.length === x.width ) {
    return "The rectangle is a square";
  }else {
    return "The rectangle is not a square";
  }
};

console.log(isSquare(rectangle));


//Part 2 Triangle

var triangle = {
  sideA: 1,
  sideB: 3,
  sideC: 3
};

var isEquilateral = function (triangleObject){
  if (triangle.sideA === triangle.sideB === triangle.sideC){
    return "the triangle is equilateral"
  }else {
    "the triangle is not equilateral";
  }
}

var isIsosceles = function (triangleObject){
  if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC){
  return "the triangle is Isosceles";
} if (triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB){
  return "the triangle is Isosceles";
} if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA){
    return "C the triangle is Isosceles";
  } else {
        return "the triangle is NOT isosceles";
    }; //end else
};//end if

console.log(isIsosceles(triangle));
console.log(triangle.sideB === triangle.sideA && triangle.sideB !== triangle.sideC);
