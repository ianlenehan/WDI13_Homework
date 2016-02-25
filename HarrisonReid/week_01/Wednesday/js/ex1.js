// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


var maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};



// Replacement for maxOfThree()
var maxOfAny = function() {
  var runningLargestNumber = arguments[0];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > runningLargestNumber) {
      runningLargestNumber = arguments[i];
    }
  }
  return runningLargestNumber;
};



var isVowel = function(character) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(character.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};



var sumArray = function(array) {
  var runningTotal = 0;
  for (var i = 0; i < array.length; i++) {
    runningTotal += array[i];
  }
  return runningTotal;
};



var multiplyArray = function(array) {
  var runningTotal = array[0];
  for (var i = 1; i < array.length; i++) {
    runningTotal *= array[i];
  }
  return runningTotal;
};



var reverseString = function(input) {
  var reversed = [];
  for (var i = (input.length - 1); i >=0; i--) {
    reversed.push(input[i]);
  }
  reversed = reversed.join('');
  return reversed;
};



var findLongestWord = function(array) {
  var longestWord = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longestWord) {
      longestWord = array[i].length;
    }
  }
  return longestWord;
};



var filterLongWords = function(inputArray, minLength) {
  var longWords = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > minLength) {
      longWords.push(inputArray[i]);
    }
  }
  return longWords;
};
