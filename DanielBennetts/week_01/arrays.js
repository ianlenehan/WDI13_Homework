/*Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in
Javascript. You'll have to remember
your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments
 and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1)
 and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums
and multiplies (respectively) all the numbers in an array of numbers.
 For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4])
  should return 24.*/

  var maxOfTwoNumbers = function(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  maxOfTwoNumbers(8, 10)

  var maxOfThree = function(number1, number2, number3); {
    if (number1 > number2 && number3); {
      return number1;
    } else if (number2 > number1 && number3); {
      return number2;
    } else {
      return number3;
    }
  }

maxOfThree(3, 8, 2)

var pickVowels = function(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for (i = 0; i < pickVowels.length; i++) {
    if (letter === vowels[i]) {
      return true;
    }
  }
  return false;
}

pickVowels('b')

var sumArray = function(array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
sumArray([1, 2, 3, 4, 5])


var multiplyArray = function(array) {
  var total = 1;
  for (i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
}
multiplyArray([1, 2, 3, 4, 5])
