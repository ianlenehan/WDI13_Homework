/*
Write a function called halfNumber that will take one argument (a number),
divide it by 2, and return the result. It should also log a string like
"Half of 5 is 2.5.".
*/

var halfNumber = function(a){
  var b = (a / 2);
  return b;
}

var answer = halfNumber(5);
  console.log("Half of " + 5 + " is " + answer);

//Square the result of #1 and store that result.

var squareResult = function(halfNumber){
  var square = (halfNumber * halfNumber);
   console.log(square);
}

squareResult(2.5);
