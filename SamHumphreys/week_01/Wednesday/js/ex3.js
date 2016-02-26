// Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.

var vowels = ['a','e','i','o','u'];

var character = function(letter) {
  var isVowel = vowels.indexOf(letter);

  if (isVowel === -1) {
    console.log(letter, "is not a vowel");
  } else if (isVowel !== -1) {
    console.log(letter, "is a vowel");
  }
}

var letterToTest = prompt("Enter a letter to test");
character(letterToTest);
