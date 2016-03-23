// You'll need these:
//
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Examples
//
// "cabbage" should be scored as worth 14 points:
//
// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:
//
// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14



//Code Along attempt
var Scrabble = {

  score: function ( word ) {
    var sum = 0;
    word = word.toLowerCase();
    var wordLength = word.length;

    for ( var i = 0; i < wordLength; i++ ) {
      var currentLetter = word[i];
      var currentScore = this.letterScores[currentLetter] || 0;
      sum += currentScore;
    }

    console.log( "The score for the word " + word + " is " + sum );
    return sum;
  },

  letterScores: {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'l': 1,
    'n': 1,
    'r': 1,
    's': 1,
    't': 1,
    'd': 2,
    'g': 2,
    'b': 3,
    'c': 3,
    'm': 3,
    'p': 3,
    'f': 4,
    'h': 4,
    'v': 4,
    'w': 4,
    'y': 4,
    'k': 5,
    'j': 8,
    'x': 8,
    'q': 10,
    'z': 10
  }

};

var word = prompt( "What word do you want to play?" );
Scrabble.score( word );


// Failed attempt below
// var scrabble = {
//   letterScores: [{
//     letters:
//     score:
//
//
//   }]
// }
//
//
//
//
// var wordIS = function(word) {
//   var total = 0;
//   var x;
//   for (i = 0; i < word.length; i++) {
//     if ((word[i]) === ("A" , "E" , "I" , "O" , "U" , "L" , "N" , "R" , "S" , "T")) {
//       x === 1;
//
//     } else if ((word[i]) === (("D") , ("G" )) {
//       x === 2;
//
//     } else if ((word[i]) === (("B") , "C" , "M" , "P" )) {
//       x === 3;
//
//     } else if ((word[i]) === ("F" , "H" , "V" , "W" , "Y" )) {
//       x === 4;
//
//     } else if ((word[i]) === ("K")) {
//       x === 5;
//
//     } else if ((word[i]) === ("J" , "X" )) {
//       x === 8;
//
//     } else if ((word[i]) === ("Q" , "Z" )) {
//       x === 10;
//
//     }
//       total += x;
//   }
//   return total;
// }
