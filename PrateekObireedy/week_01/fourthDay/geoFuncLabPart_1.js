/*Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
length: 4,
width: 5
};*/

var rectangle={
  length: 4,
  width:4
}

var isSquare=function(dimensions){
  if(rectangle.length===rectangle.width){
    console.log( "Its's a square !");
  }
  else{
  console.log( "Not a Square !");
  }
};
isSquare(rectangle);

////////////////////////////////////////////////////////////////////////////////

var rectangle={
  length: 4,
  width:4
}

var area=function(dimensions){
  var ar=rectangle.length*rectangle.width;
  return ar;
}
console.log("Area of rectangle is = "+area(rectangle));

////////////////////////////////////////////////////////////////////////////////


var rectangle={
  length: 4,
  width:4
}

var perimeter=function(dimensions){
  var dim=2*(rectangle.length+rectangle.width);// P=2(l+w)
  return "The perimeter of the recatngle is "+dim;
}
console.log(perimeter(rectangle));

////////////////////////////////////////////////////////////////////////////////
