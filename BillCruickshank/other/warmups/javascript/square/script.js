squareysquares = {
  sumOfSquares : function(n){
    return n*(n+1)*(2*n+1)/6; //https://en.wikipedia.org/wiki/Square_pyramidal_number
  },
  squareOfSums : function(n){
    var sum = n*(n+1)/2; //arithmetic sum
    return sum * sum;
  },
  diffOfSquareOfSumsAndSumOfSquares(n){
    return this.squareOfSums(n) - this.sumOfSquares(n);
  }
}

$(document).ready(function (){
  $('#calculate').on('click', function(){
    var val = parseInt($('#number').val().trim());
    $('#number').val('');
    if (!val) {
      alert("Please input a nonnegative whole number (˚ㄥ_˚)");
      $('#output').html("");
      return(false);
    }
    $('#output').html("The difference between <br>"+
    "(1 + 2 + &hellip; +"+val+")<sup>2</sup> = "+squareysquares.squareOfSums(val)+"<br>"+
    "and<br>"+
    "1<sup>2</sup> + 2<sup>2</sup> + &hellip; +"+val+"<sup>2</sup> = "+squareysquares.sumOfSquares(val)+" <br>"+
    "is "+ squareysquares.diffOfSquareOfSumsAndSumOfSquares(val));
    // $('#output').append('<p>').html("The difference between")
    // $('#output').append('<p>').html("(1 + 2 + &hellip; +"+val+")<sup>2</sup> = "+squareysquares.squareOfSums(val))
    // $('#output').append('<p>').html("and")
    // $('#output').append('<p>').html("1<sup>2</sup> + 2<sup>2</sup> + &hellip; +"+val+"<sup>2</sup> = "+squareysquares.sumOfSquares(val))
    //   .append('<p>').html("is "+ squareysquares.diffOfSquareOfSumsAndSumOfSquares(val));
  });
});
