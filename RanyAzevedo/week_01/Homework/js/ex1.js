/*
Write a function called squareNumber that will take one argument (a number),
square that number, and return the result. It should also log a string like
 "The result of squaring the number 3 is 9."
*/

var squareNumber = function(a){
  var b = (a * a);
  return b;
}

var answer = squareNumber(3);
console.log("The result of squaring the number " + 3 + " is " + answer );

/* Write a function that will take one argument (a number) and perform the
following operations, using the functions you wrote earlier1:
Take half of the number and store the result.
 */

var halfStore = function(squareNumber){
  var c = (squareNumber / 2);
  console.log(c);
  return c;
}
halfStore(3);
