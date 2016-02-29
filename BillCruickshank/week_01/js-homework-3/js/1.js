// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function (a, b){
  return (a>b)?a:b;
}

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var maxOfThree = function(a, b, c){
  return maxOfTwoNumbers(a, maxOfTwoNumbers(b, c));
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var isVowel = function(letter){
  var vowels = ['y', 'a', 'e','i','o','u'];
  var i = vowels.indexOf(letter);
  if (i===0){
    return undefined;
  } else {
    return (i !== -1);
  }
}

console.log(isVowel('y'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = function(array){
  return array.reduce(function(a,b){ return a + b }, 0);
}
var multiplyArray = function(array){
  return array.reduce(function(a,b){ return a * b }, 1);
}

console.log(sumArray([1,2,3,4,5,6]));
console.log(multiplyArray([1,2,3,4,5,6]));

// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function (string) {
  result = [];
  for (var i = 0; i < string.length; i++){
    result.unshift(string[i]);
  }
  return result.join("");
}

console.log(reverseString("walrus mannequin"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var findLongestWord = function(array){
  return (array.map(function(a){return a.length})).reduce(maxOfTwoNumbers, -Infinity);
}

console.log(findLongestWord(["walrus", "mannequin"]));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function (array, i){
  var long = function (word){
    return word.length > i;
  }

  return array.filter(long);
}

console.log(filterLongWords(["walrus", "mannequin"], 6));
