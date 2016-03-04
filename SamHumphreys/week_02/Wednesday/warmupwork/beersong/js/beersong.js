// 99 Bottles of Beer
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

var Beer = {
  start: 99,
  finish: 0,
  message1: '',
  message2: '',
  song: function(first,last) {
    Beer.start = first;
    Beer.finish = last;
    if (typeof Beer.start === 'undefined') {
      Beer.start = 99;
    }
    if (typeof Beer.finish === 'undefined') {
      Beer.finish = 0;
    }
    Beer.write();
  },
  write: function() {
    while (Beer.start > 1) {
      Beer.message1 = Beer.start + ' bottles of beer on the wall, ' + Beer.start + ' bottles of beer.';
      Beer.start -= 1;
      Beer.message2 = 'Take one down, pass it around, ' + Beer.start + ' bottles of beer on the wall';
      Beer.display();
    }
    if (this.start ===1) {
      Beer.message1 = Beer.start + ' bottle of beer on the wall, ' + Beer.start + ' bottle of beer.';
      Beer.start -= 1;
      Beer.message2 = 'Take one down, pass it around, ' + Beer.start + ' bottles of beer on the wall';
      Beer.display();
    }
    if (Beer.start === 0) {
      Beer.start = 'No more';
      Beer.message1 = Beer.start + ' bottles of beer on the wall, ' + Beer.start + ' bottles of beer.';
      this.message2 = 'Go to the store, buy some more, 99 bottles of beer on the wall.';
      this.display();
    }
  },
  display: function () {
    console.log(Beer.message1);
    console.log(Beer.message2);
    console.log('');
  }
}
