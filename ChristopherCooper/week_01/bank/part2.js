
var triangle = {
  sideA: 3,
  sideB: 3,
  sideC: 18
}

var isEquilateral = function(){
  if (triangle.sideA === triangle.sideB === triangle.sideC){
      console.log("This triangle is an equilateral");
    } else {
      console.log("This triangle is not an equilateral");
    }
}


var isIsosceles = function(){
  counter = 0;
  if (triangle.sideA === triangle.sideB){
    counter++;
  }
  if (triangle.sideB === triangle.sideC){
    counter++;
  }
  if (triangle.sideC === triangle.sideA){
    counter++;
  }

  if (counter === 1){
    console.log("This is an isosceles triangle");
  } else {
    console.log("This is an not isosceles triangle");
  }
}


var area = function (a, b, c) {

  a = triangle.sideA;
  b = triangle.sideB;
  c = triangle.sideC;

  var p = (a+b+c)/2;
  console.log(Math.sqrt(p*((p-a)*(p-b)*(p-c))));

}

var isIsosceles = function(){
  counter = 0;
  if (triangle.sideA === triangle.sideB){
    counter++;
  }
  if (triangle.sideB === triangle.sideC){
    counter++;
  }
  if (triangle.sideC === triangle.sideA){
    counter++;
  }

  if (counter === 2){
    console.log("This is an isosceles triangle");
  } else {
    console.log("This is an not isosceles triangle");
  }
};




var isObtuse = function (a, b, c){

    a = triangle.sideA * triangle.sideA;
    b = triangle.sideB * triangle.sideB;
    c = triangle.sideC * triangle.sideC;

    if (a + b > c){
      console.log("This triangle is acute");
    } else if (a + b < c) {
      console.log("This triangle is obtuse");
    } else {
      console.log("This triangle is a right-angle");
    }
};
