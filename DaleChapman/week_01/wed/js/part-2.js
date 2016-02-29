
/*
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
//hangman word
var correctLetters = ['c', 'a', 'k', 'e'];
var guessedLetters = ['', '', '', ''];

//picked numbers
//var picked ['','']

var guessLetter = function(letter) {
    if (letter === 'c') {
        guessedLetters[0] = 'c';
        console.log('you found a c!');
    } else if (letter === 'a') {
        guessedLetters[1] = 'a';
        console.log('you found an a!');
    } else if (letter === 'k') {
        guessedLetters[2] = 'k';
        console.log('you found a k (47)!');
    } else if (letter === 'e') {
        guessedLetters[3] = 'e';
        console.log('you found an e!');
    } else {
        console.log('sorry m9 wrong one');
    }
}


guessLetter('a');
console.log(guessedLetters.join(''))
console.log(guessLetter);
console.log('test');


var playerWin = function(guessedLetters) {
    for (var i = 0; i < guessedLetters.length; i++) {
        if (correctLetters === guessedLetters.length) {
            console.log("congrats you got cake!");
        }
    }
}
