/*
Write a function filterLongWords that takes an array of words and
an number i and returns the array of words that are longer than i.
*/

var arr = ['summer', 'gelato', 'waves', 'sand', 'sunshine'];

var filterLongWords = function (arr, i) {
  var newArr = [];
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].length > i) {
        newArr.push( arr[j] );
      }
    }
    return newArr;
}
