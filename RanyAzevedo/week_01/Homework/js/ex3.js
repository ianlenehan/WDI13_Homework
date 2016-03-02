/*
Write a function called percentOf that will take two numbers, figure out what
percent the first number represents of the second number, and return the result.
 It should also log a string like "2 is 50% of 4."
*/

var percentOf = function(a,b){
  var percent = a / b * 100;
  return percent;
}

var answer = percentOf(2,4);
console.log(2 + " is " + answer + "% of " + 4);
