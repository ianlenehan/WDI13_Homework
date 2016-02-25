// Define a function reverseString that computes the reversal of a string. For
//  example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(word) {
  var size = word.length - 1;
  var newWord = "";

  for (i=size; i>=0; i--) {
    newWord = newWord + word[i];
  }
  return newWord;
}

var word = prompt("What word do you want to reverse?");
var newWord = reverseString(word);
console.log(newWord);
