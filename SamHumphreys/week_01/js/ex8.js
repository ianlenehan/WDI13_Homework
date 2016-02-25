// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries
//  to guess the word (like Hangman without the hangman, or like Wheel of
//     Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word
// (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
// (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters
//  array to reflect that.
// When it's done iterating, it should log the current guessed letters
// ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to
//  be guessed, and if not, it should congratulate the user for winning
//   the game.
// Pretend you don't know the word, and call guessLetter multiple times
//  with various letters to check that your program works.

var uberArray = [["f","o","x","x"],   //answer word
                ['_','_','_','_'],    //correct guesses
                []];              //incorrect guesses

var guessLetter = function() {
  letter = prompt("What letter do you want to guess?");

  if (uberArray[1].indexOf(letter) !== -1 ||
                uberArray[2].indexOf(letter) !== -1) {
    console.log("You've already picked that letter");
    return uberArray;
  }

  for (i=0; i<uberArray[0].length; i++) {
    if (letter === uberArray[0][i]) {
      uberArray[1][i] = letter;
      console.log("That was a correct guess!");
    } else if (uberArray[0].indexOf(letter) === -1) {
      uberArray[2].push(letter);
      console.log("That was an incorrect guess");
      return uberArray;
    }
  }
  return uberArray;
}

function status() {
  console.log("Your correct guesses are", uberArray[1]);
  console.log("Your incorrect guesses are", uberArray[2]);
}

var isFinished = function(a, b) {
  if (a === b) return true;
  if (a ==  null || b == null) return false;
  if (a.length != b.length) return false;

  for (i=0; i<a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  alert("Yay, you won!");
  console.log("yay, you won!");
  return true;
}

function playToDone() {
  console.log("Let's play hangman!");
  status();

  do {
    var uberArray = guessLetter();
    status();
    var finished = isFinished(uberArray[0],uberArray[1]);
  } while (finished === false);
}
