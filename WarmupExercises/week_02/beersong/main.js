// We need a beer object.

// Looking at these strings, I want to try and break it down...

// 21 bottles of beer on the wall, 21 bottles of beer.
// Take one down and pass it around, 20 bottles of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, No more bottles of beer on the wall.

// We have a quantity, and an action. And we have a reduced quantity as well.

// Because of that, we need a bunch of functions...
//
// One that will sort out the quantity
//  i.e. the "No more bottles of beer", "1 bottle of beer", or "99 bottles of beer"
// One that will sort out the action
//  i.e. the "Take one down and pass it around", "Take it down and pass it around", or "Go to the store and buy some more";
// One that will reduce or refill the beer amounts - 99 to 98 or 0 to 99
// One that will sing an individual verse
// One that will sing the whole song

var Beer = {
  formatQuantity: function ( num ) {
    if ( num === 0 ) {
      return "no more bottles of beer";
    } else if ( num === 1 ) {
      return "1 bottle of beer";
    } else {
      return num + " bottles of beer";
    }
  },

  formatAction: function ( num ) {
    if ( num === 0 ) {
      return "Go to the store and buy some more";
    } else if ( num === 1 ) {
      return "Take it down and pass it around";
    } else {
      return "Take one down and pass it around";
    }
  },

  decrementOrRefill: function ( num ) {
    if ( num === 0 ) {
      return 99;
    }
    return num - 1;
  },

  verse: function ( num ) {
    var quantity = this.formatQuantity( num );
    var action = this.formatAction( num );
    var alteredNum = this.decrementOrRefill( num );
    var remainder = this.formatQuantity( alteredNum );

    var firstLine = quantity + " on the wall, " + quantity + ".\n";
    var secondLine = action + ", " + remainder + " on the wall.\n";

    return firstLine + secondLine;
  },

  sing: function ( numStart, numFinish ) {
    numStart = numStart || 99;
    numFinish = numFinish || 0;

    for ( var i = numStart; i >= numFinish; i--  ) {
      console.log( this.verse( i ) );
    }
  }
};

Beer.sing();
Beer.sing(45);
Beer.sing(34, 12);
