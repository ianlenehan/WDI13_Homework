// Write a function findLongestWord that takes an array of words and returns
// the length of the longest one.

var findLongestWord = function (myArray){
  var longestWord = 0;

  for (i=0; i<myArray.length; i++) {
    if (myArray[i].length > longestWord) {
      longestWord = myArray[i].length;
    }
  }
  return longestWord;
}

var myArray = ['trees', 'aeroplanes', 'BBQs', 'backflips'];
console.log(myArray);
console.log(findLongestWord(myArray));
