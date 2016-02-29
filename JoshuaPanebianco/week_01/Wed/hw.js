/*Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or like Wheel of Fortune
without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
 and one to hold the current guessed letters (e.g. it would start with '', '', '_'
 and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array
to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and
congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various
letters to check that your program works.
*/

var answerWord = ["h","o","t","d","o","g"];
var tryLetter = ["","","","","","",""];
var rewardAmount = 0;

var guessletter = function(letter) {
  if (letter === "h") {
    tryLetter[0] = "h";
    rewardAmount += 100;
    alert("Congrats you found a letter");
  } else if (letter === "o") {
    tryLetter[1] = "o";
    tryLetter[4] = "o";
    rewardAmount += 200;
    alert("Congrats you found a letter");
  } else if (letter === "t"){
    tryLetter[2] = "t";
    rewardAmount += 100;
    alert("Congrats you found a letter");
  } else if (letter === "d"){
    tryLetter[3] = "d";
    rewardAmount += 100;
    alert("Congrats you found a letter");
  } else if (letter === "g"){
    tryLetter[5] = "g";
    rewardAmount += 100;
    alert("Congrats you found a letter");
  }
  if (tryLetter.join("") === "hotdog") {
    alert("Congrats you won the game and received $" + rewardAmount);
  }

  // else {
  //   rewardAmount -= 100;
  //   alert("try again");
  // }
  console.log( tryLetter.join("") );
  console.log("$" + rewardAmount);
  console.log("Guess again");
  return tryLetter.join("") + " 6 letter word";

}
