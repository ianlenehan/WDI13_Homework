// Write a program which prints out the lyrics to that beloved classic, that field-trip favorite: 99 Bottles of Beer on the Wall.
//
// Requirements
//
// The program should be called with Beer.song
// The program should output text to the console
// Each verse should be separated by a single blank line.
// Extensions
//
// Make the type of beer customizable
// Allow the following function calls to work:
// Beer.song() - That should do the whole song
// Beer.song(45) - This should do from 45 down
// Beer.song(34, 12) - This should print from 34 to 12
// Data

//=========================incomplete instructor solution =============================

var beer = {
  verse: function(amount){




  }
  song : function(startAmount, endAmount) {

    startAmount = startAmount || 99;
    endAmount = endAmount || 0;

    for ( var i = startAmount; i >= endAmount; i--){

      var firstLine = i + " bottles of beer on the wall, " + i + " bottles of beer.\n";
      var amountAfter = 1 === 0 ? 99 : i - 1;
      // if (i === 0)
      // amountAfter = 99;
      //else
      //amount after = i -1
      var secondLine = "Take one down and pass it around, " + amountAfter + " bottles of beer on the wall";

      console.log( firstLine + secondLine);
    }
  }
};

beer.song(34,12);





//========================= instructor solution =============================


Beer = {
  song: function(input, input2) {
    var x = input;
    var remainderX = 0;
    var s = input -- ;
  for (var i = 0; i < input; i++) {
      x = input;
      remainderX = x - 1;
      console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. " +
      "Take one down and pass it around, " + remainderX + " bottles of beer on the wall.");
      input --;
        }
      }
    };



//
// Here's a sampling of the lyrics...
//
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
//
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
//
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// Then, at the end...
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
