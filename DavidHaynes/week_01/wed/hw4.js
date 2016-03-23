/*
Bonus: Make it more like Wheel of Fortune:

Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user
if they found a letter (multiplying the reward if multiple letters found),
otherwise subtract from their reward.

When they guess the word, log their final reward amount.

Bonus: Make it like Hangman:

Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
If they guess a letter twice, do nothing.

Keep track of the state of the hangman as a number (starting at 0),
and subtract or add to that number every time they make a wrong guess.

Once the number reaches 6 (a reasonable number of body parts for a hangman),
inform the user that they lost and show a hangman on the log.
*/

var answer = ['f', 'o','o', 't'];
var guess = ["","","",""];
var cash = 0;
var guesses = [];
var hangman = 0;

var testWin = function() {
  var win = []
  for (var x = 0; x < answer.length; x++) {
    if (guess[x] === answer[x]) {
      win.push(true);
    }
  }
  if (win.length === answer.length) {
    return true;
  } else {
    return false;
  }
}

var $win = function () {
  var win = Math.random()
  return win * 100
}

var $lost = function() {
  var lost = 20;
  return lost;
}

var guessLetter = function(letter) {
        var wrong = 0;
        var prize = Math.round($win())

        if (guesses.includes(letter) === true) {
          return "You have already guessed that letter, please try again."
        }

        guesses.push(letter.toLowerCase);

        for (var i = 0; i < answer.length; i++) {
          if (letter.toLowerCase() === answer[i]) {
              guess[i] = letter.toLowerCase();
              console.log(guess);
              console.log('Congratulations, you got a new letter!')
              console.log("You won $" + prize );
              cash = cash + prize;
          } else {
              wrong = wrong + 1;
            }
          }

        if (testWin() === true) {
            return "Congratulations, you won! Your total cash prize is $" + cash ;
        } else if (wrong = answer.length) {
            var lost = $lost();
            hangman = hangman + 1;
            if (hangman >=6) {
              return "You Lose!";
            } else {
              return "That was an incorrect guess, and resulted in a loss of $ " + lost + ". You have " + (6 - hangman) + " attempts left."
            }
        } else {
            console.log(guess);
            console.log('Keep Guessing!');
        }
      }
