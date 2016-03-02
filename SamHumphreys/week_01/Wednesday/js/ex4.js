// Define a function sumArray and a function multiplyArray that sums and
// multiplies (respectively) all the numbers in an array of numbers. For
// example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4])
//  should return 24.

var sumArray = function(array) {
  var sumArray = 0;
  for (i=0; i<array.length; i++) {
    var sumArray = sumArray + array[i];
  }
  return sumArray;
}

var multiplyArray = function(array) {
  multiplyArray = 1;
  for (var i = 0; i < array.length; i++) {
    var multiplyArray = multiplyArray * array[i];
  }
  return multiplyArray;
}

var array = [2, 5, 1, 20]; // sum is 28, multiple is 200
console.log(array);
console.log(sumArray(array));
console.log(multiplyArray(array));
