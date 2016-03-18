/*
Define a function sumArray and a function multiplyArray that sums and multiplies
(respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4])
should return 24.
*/

var test = [1, 2, 3, 4];
var add = 0;
var sumArray = function (array) {
  for (var i = 0; i < array.length; i++) {
     add += array[i];
  }
  return add;
}

var multiply = 1;
var multiplyArray = function (array) {
  for (var i = 0; i < array.length; i++) {
     multiply *= array[i];
  }
  return multiply;
}
