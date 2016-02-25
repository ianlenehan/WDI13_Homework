// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(a){
  var square = a*a;
  console.log("The square of "+a+" is "+square);
  return square;
}

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(a){
  var half = a*0.5;
  console.log("Half of "+a+" is "+half+".");
  return half;
}

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(a, b){
  var percent = 100*a/b;
  console.log(String(a)+" is "+percent+"% of "+b+".");
  return percent;
}

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function(radius, precision){

  if(precision !== 0){
    precision = precision || 2;
  }
//  precision = (precision === undefined)?2:precision;

  var area = (Math.PI*radius*radius).toFixed(precision);
  console.log("The area of a circle with radius "+radius+" is "+area+".");
  return area;
}

// Bonus: Round the result so there are only two digits after the decimal.



// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var thisCalculation = function(a){
  var step1 = halfNumber(a);
  var step2 = squareNumber(step1);
  var area = areaOfCircle(step2);
  var percent = percentOf(area, step2);
}

console.log(thisCalculation(7));

// does IEEE754 suck?

var martianError = function(){
  var epsilon = 1;
  while(((1-epsilon) !== 1) && ((1+epsilon) !== 1)){
    epsilon *= 0.5;
  }
  epsilon *= 2; // little bit more error for the hell of it (more or less).

  var maxDistanceFromEarthToMars = 410000000000;
  var distanceError = epsilon * maxDistanceFromEarthToMars;

  console.log("If you represent the distance to mars with"
            + "IEEE754 on this machine, you are out by "
            + distanceError + " metres, "
            + distanceError*1000+ " millimetres.");

  var thinPaperThickness = 70*0.000001;
  var thickPaperThickness = 180*0.000001;

  if(distanceError > thickPaperThickness){
    console.log("This is more than the thickness of thick paper.");
  } else if(distanceError < thinPaperThickness){
    console.log("This is less than the thickness of thin paper.");
  } else {
    console.log("This is about the thickness of a piece of paper.")
  }

  var averageDiameterOfHumanHair = 0.000100;
  var errorInHairWidths = distanceError / averageDiameterOfHumanHair;

  if (errorInHairWidths < 1) {
    console.log("Its less than the average diameter of a human hair.")
  } else {
    console.log("Its about " + errorInHairWidths.toFixed(0) + " human hair diameters.");
  }
}

martianError();
