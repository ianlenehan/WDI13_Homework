/*
Bonus

Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".

Write a function findLongestWord that takes an array of words and returns the length of the longest one.

Write a function filterLongWords that takes an array of words and an number i and
returns the array of words that are longer than i.

*/

var reverseString = function(string) {
  var reverse = [];
  for (var i = 0; i < string.length; i++) {
    reverse.push(string[string.length - 1 - i])
  }
reverse = reverse.join('');
  return reverse;
}

var findLongestWord = function (array) {
  var longest = 0;
  for (var i = 0; i < array.length; i++)  {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  return longest;
}

var filterLongWords = function (array, i) {
  var arrayFinal = [];
  for (var j = 0; j < array.length; j++) {
    if (array[j].length > i ) {
      arrayFinal.push(array[j]);
    }
  }
  return arrayFinal;
}
