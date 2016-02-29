/*
Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result. It should also log a
 string like "The area for a circle with radius 2 is 12.566370614359172."
*/
var areaOfCircle = function(radius){
  var area = Math.PI * (radius * radius);
  console.log("The area for a circle with radius " + radius + " is " + area.toFixed(0));
  return area;
}

areaOfCircle(2);

// Calculate the area of a circle with the result of #2 as the radius.
var areaOfCircle = function (radius){
  var area = Math.PI * (radius * radius);
  console.log("The area for a circle with radius " + radius + " is " + area.toFixed(0));
}
areaOfCircle(2);
