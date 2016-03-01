/*
Write a function findLongestWord that takes an array of words and returns the
length of the longest one.
*/

var test = ['summer', 'gelato', 'waves', 'sand', 'sunshine'];

var findLongestWord = function (arr) {
var longest = '';
 for (var i = 0; i < arr.length; i++) {
   if (arr[i].length > longest.length) {
     longest = arr[i];
   }
 }
 return longest;
}
