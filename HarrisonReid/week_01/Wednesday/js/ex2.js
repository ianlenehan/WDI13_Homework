// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var WORDSCOLLECTION = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Botswana","Brazil"
		,"Brunei","Bulgaria","Burundi","Cambodia","Cameroon","Chad","Chile","China","Colombia","Congo"
		,"Croatia","Cuba","Cyprus","Denmark","Djibouti","Dominica","Ecuador","Egypt"
		,"Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Qatar","Reunion","Romania","Russia","Rwanda","Samoa","Senegal","Serbia","Seychelles"
		,"Singapore","Slovakia","Slovenia","Spain","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Tunisia"
		,"Turkey","Turkmenistan","Uganda","Ukraine","Uruguay","Uzbekistan","Venezuela","Vietnam"
		,"Yemen","Zambia","Zimbabwe"];

var playHangman = function() {

  var guessLetter = function(guess) {
    var chosenLetter = guess || prompt("Pick a letter!");
    while (guessedLetters.includes(chosenLetter) === true) {
      chosenLetter = prompt("You already guessed that letter, pick again!");
    }
    guessedLetters.push(chosenLetter);
    return chosenLetter;
  };

  var updateWordGuessProgress = function(guess) {
    for (var i = 0; i < selectedWordArray.length; i++) {
      if (selectedWordArray[i].toLowerCase() === guess.toLowerCase()) {
        wordGuessProgress[i] = guess.toLowerCase();
      }
    }
  };

  var checkIfCorrectGuess = function(guess) {
    if (selectedWordArray.includes(guess)) {
      return true;
    } else {
      incorrectGuesses ++;
      return false;
    }
  };

  var checkIfWinner = function() {
    if (wordGuessProgress.includes("_") === false) {
      console.log("Congratulations, you won the game, and won $" + totalWinnings + "!");
      return true;
    } else {
      return false;
    }
  };

  var addWinnings = function(guess) {
    winAmount = (Math.floor(Math.random() * 101) + 1)
    for (var i = 0; i < selectedWordArray.length; i++) {
      if (selectedWordArray[i].toLowerCase() === guess.toLowerCase()) {
        totalWinnings += winAmount;
      }
    }
  }

  var deductLosings = function(arguments) {
    totalWinnings -= (Math.floor(Math.random() * 101) + 1);
  };

  var logGuessResults = function(result) {
    if (result === "correct") {
      console.log("Congratulations, you guessed a letter!");
      console.log(wordGuessProgress);
      console.log("The running total of your winnings is: $" + totalWinnings);
    } else if (result === "incorrect") {
      console.log("Sorry, no " + guess + "'s in this word. Try again!")
      console.log(wordGuessProgress);
      console.log("The running total of your winnings is: $" + totalWinnings);
    }
  };

  var guessesRemaining = function() {
    if (incorrectGuesses < 9) {
      return true;
    } else {
      console.log("Sorry, you guessed incorrectly too many times. You lose.");
      return false;
    }
  };

  //////////// RUN IT ALL //////////////

  var selectedWord = WORDSCOLLECTION[Math.floor(Math.random() * WORDSCOLLECTION.length)];
  var selectedWordArray = selectedWord.split('');
  var wordGuessProgress = Array(selectedWord.length).fill("_");
  var guessedLetters = [];
  var totalWinnings = 0;
  var incorrectGuesses = 0;

  console.log("The game is world hagman - See if you can guess the country! You only get 8 wrong letters.");
  console.log(wordGuessProgress);

  while (checkIfWinner() === false && guessesRemaining()) {
    guess = guessLetter();
    if (checkIfCorrectGuess(guess)) {
      addWinnings(guess);
      updateWordGuessProgress(guess);
      logGuessResults("correct")
    } else {
      deductLosings(guess);
      logGuessResults("incorrect");
    }
  }

};
