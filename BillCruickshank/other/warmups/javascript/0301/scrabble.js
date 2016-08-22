// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

scrabble = {
  wordScore: function(word){
    for(var i=0, val=0; i<word.length; i++){
      val += this.letterScore(word[i]);
    }
    return val;
  },

  letterScore: function(letter){
    letter = letter.toUpperCase();
    if (!this.isLetter(letter)){
      return null;
    }
    var val = 1;
    switch (letter){
      case "Q":
      case "Z":
        val += 2;
      case "J":
      case "X":
        val += 3;
      case "K":
        val += 1;
      case "F":
      case "H":
      case "V":
      case "W":
      case "Y":
        val += 1;
      case "B":
      case "C":
      case "M":
      case "P":
        val += 1;
      case "D":
      case "G":
        val += 1;
      default:
    }
    return val;
  },

  isLetter: function isLetter(str) {
  return str.length === 1 && "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(str);
  }
}

console.log(scrabble.letterScore('Z'));
console.log(scrabble.wordScore("ZENITH"));
