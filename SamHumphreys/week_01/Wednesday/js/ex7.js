// Write a function filterLongWords that takes an array of words and an
//  number i and returns the array of words that are longer than i.

var filterLongWords = function(array) {
  var newArray = [];
  for (i=0; i<array.length; i++) {
    if (array[i].length > cutOffLength) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}



var array = ['pencils', 'catamaran', 'tree', 'submarine'];

var cutOffLength = parseInt(prompt("what is the cut of number of letters?"));

console.log("These are the words longer than " + cutOffLength + ": " +
              filterLongWords(array));
