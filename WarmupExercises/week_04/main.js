var Sieve = {

  createRange: function (startNumber, endNumber) {
    var numbers = [];
    for (var i = startNumber; i <= endNumber; i++) {
      numbers.push( i );
    }
    return numbers;
  },

  findPrimes: function (startNumber, endNumber) {
    var possibilities = this.createRange(startNumber, endNumber);

    var primeArray = [];

    while ( possibilities.length > 0 ) {
      var prime = possibilities.shift();

      primeArray.push( prime );

      possibilities = possibilities.filter(function (num) {
        return num % prime !== 0;
      });
    }

    console.log( primeArray );

  }

};

Sieve.findPrimes(2, 100);
