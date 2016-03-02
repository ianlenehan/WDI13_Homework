/*
Bonus: Make it more like Wheel of Fortune:
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if
they found a letter (multiplying the reward if multiple letters found),
otherwise subtract from their reward.
When they guess the word, log their final reward amount.
*/


var arrLetters = ['s', 'a', 'm','a'];
var arrGuesses = ['_', '_', '_', '_'];

var guessLetter = function (guess) {
  var correctGuess = false;
  var reward = 0;
  for (var i = 0; i < arrLetters.length; i++) {
    if (guess === arrLetters[i]) {
      arrGuesses[i] = guess;
      correctGuess = true;

    if ()

    }
  }
  if (correctGuess) {
    console.log("Congratulations, you guessed a letter!");
    console.log("The current guessed letters are " + arrGuesses);
  } else {
    console.log("The guessed letter is incorrect, better luck next time.")
  }

  var winner = true;
  for (var i = 0; i < arrLetters.length; i++) {
    if (arrGuesses[i] !== arrLetters[i]) {
      winner = false;
    }
  }
  if (winner) {
    console.log("Congratulations, you won!");
  }
};
