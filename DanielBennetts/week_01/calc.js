/*The Calculator
Part 1

    Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
    Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
    Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    Bonus: Round the result so there are only two digits after the decimal.
*/

var squareNumber = function(number) {
  var result = number * number;
  console.log("The result of squaring the " + number + " is " + result);
  return result;
}

squareNumber(3);

var halfNumber = function(number) {
  var result = number / 2;
  console.log("Half of " + number + " is " + result);
    return result;
}

halfNumber(5)

var percentOf = function(number1, number2) {
  var result = (number1 / number2) * 100;
  console.log(number2 + " is 50% of " + number1)
    return result;
}

percentOf(4,2)

var areaOfCircle = function(radius) {
  var result = Math.PI * (radius * radius);
  console.log("The area for a circle with " + radius + " is " + result)
    return result;
}

areaOfCircle(47)

var calculator = function(number) {
  var finalHalf = halfNumber(number);
  var finalSquared = squareNumber(finalHalf);
  var finalArea = areaOfCircle(finalSquared);
  var finalPercent = percentOf(finalArea, finalSquared);
}

calculator(130)
