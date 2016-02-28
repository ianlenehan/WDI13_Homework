/*
Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript. You'll have to remember your pre-work,
or do some googling to figure this out.

Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
and multiplyArray([1,2,3,4]) should return 24.
*/

var maxOfTwoNumbers = function (num1, num2) {
    var result;
    if (num1 > num2) {
      result = num1;
    } else if (num1 === num2) {
      result = "tie";
    } else {
      result = num2;
    }
    console.log(result);
    return result;
}

var maxOfThree = function(num1, num2, num3) {
    var result;
    if (num1 > num2 && num1 > num3) {
      result = num1;
    } else if (num2 > num1 && num2 > num3) {
      result = num2;
    } else if (num1 === num2 && num1 === num3) {
      result = "tie"
    } else {
      result = num3;
    }
    return result;
}

var ifVowell = function(x) {
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
    return true;
  } else if (x === "A" || x === "E" || x === "I" || x === "O" || x === "U") {
    return true;
  }  else {
    return false;
  }
}

var sumArray = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
  }
  return sum;
}


var multiplyArray = function (array) {
  var multi = 1;
  for (var i = 0; i < array.length; i++) {
    multi = multi * array[i];
  }
  return multi;
}
