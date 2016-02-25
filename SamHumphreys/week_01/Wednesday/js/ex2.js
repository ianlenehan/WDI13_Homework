// Define a function maxOfThree that takes three numbers as arguments and
// returns the largest of them.

var maxOfThree = function(num1, num2, num3) {
  if ( num1 > num2 && num1 > num3 ) {
    return num1;
  } else if ( num2 > num1 && num2 > num3 ) {
    return num2;
  } else if ( num3 > num1 && num3 > num2 ) {
    return num3;
  }
}
  //return Math.max(num1, num2, num3);

var num1 = parseInt(prompt("what is number 1?"));
var num2 = parseInt(prompt("what is number 2?"));
var num3 = parseInt(prompt("what is number 3?"));

var biggest = maxOfThree(num1, num2, num3);

console.log("The biggest number of", num1, num2, num3, "is", biggest);
