/*

Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

*/
console.log("Let's play Hangman. Call the function guessLetter ");
var wordLetters = ["F","A","L","A","F","E","L"];
var guessLetters = ['_','_','_','_','_','_','_'];
var incorrectLetters= [];
var correctLetters = [];
var guessesRemaining = 6;

var gameWon = function(wordArray, guessArray) {
    var gameWonResult = true;
        for (var i = 0; i < wordArray.length; i++) {
            if (wordArray[i] !== guessArray[i]) {
              gameWonResult = false;
            };
        };
    return gameWonResult;
};

var repeatingYourself = function (letterGuessed) {
    var repeat = false;

    for (var m = 0; m <=6; m++) {
        if (letterGuessed === incorrectLetters[m]) {
            repeat = true;
        };
    };

    for (var k = 0; k<=6; k++) {
        if (letterGuessed === correctLetters[k]) {
            repeat = true;
        };
        return repeat;
    };
};

var guessLetter = function(guessedLetter) {
  if (repeatingYourself(guessedLetter) === false && guessesRemaining !== 0) {
    guessesRemaining = guessesRemaining - 1;
      console.log("\n\n\nYou chose the letter " + guessedLetter + ".. let's see if that's in here.." )
      var letterFound = false;
      for (var j = 0; j < wordLetters.length; j++) {
        if (guessedLetter === wordLetters[j]) {
          guessLetters[j] = guessedLetter;
          letterFound = true;
        } else { // no action, letter doesn't match
        }
      }

      if (letterFound) {
        console.log("You found a letter, nice one!");
        correctLetters.push(guessedLetter);
      } else {
        incorrectLetters.push(guessedLetter);
        console.log("Looks like you didn't find one this time ");
      }

      console.log("Your word: " + guessLetters);
      console.log("Incorrect letters guessed: " + incorrectLetters);
      console.log("Correct letters guessed: " + correctLetters);

      if (gameWon(wordLetters, guessLetters)) {
            if (guessesRemaining >=0) {
              console.log("\n *** You've found all the letters, you win! ***");
            }
      } else {
            if (guessesRemaining  <1) {
            console.log("You're out of guesses..You lose    \n    _______   \n    |/    |    \n    |    (_)    \n    |    \\|/    \n    |     |    \n    |    / \\    \n    | \n  __|___")
            } else {
              console.log("You haven't found all the letters yet. Guesses remaining: " + guessesRemaining);
            }
      }
  } else if (guessesRemaining === 0) {
    console.log("\n\n\nYou're out of guesses..    \n    _______   \n    |/    |    \n    |    (_)    \n    |    \\|/    \n    |     |    \n    |    / \\    \n    | \n  __|___")
  } else { // Letter previously chosen, do nothing
    console.log("\n\n\nYou chose the letter " + guessedLetter)
    console.log("You've chosen that letter before...")
  }
};

// guessLetter("F");
// guessLetter("F");
// guessLetter("P");
// guessLetter("P");
// guessLetter("L");
// guessLetter("A");
// guessLetter("Y");
// guessLetter("E");
