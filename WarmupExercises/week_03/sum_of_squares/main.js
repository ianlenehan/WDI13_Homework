var Squares = {

  sumOfSquares: function (num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
      sum += i * i;
      // sum += Math.pow(i, 2);
    }
    return sum;
  },

  squareOfSums: function (num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
      sum += i;
    }
    return sum * sum;
  },

  differenceOfSquares: function (num) {
    return this.squareOfSums(num) - this.sumOfSquares(num);
  }

};
