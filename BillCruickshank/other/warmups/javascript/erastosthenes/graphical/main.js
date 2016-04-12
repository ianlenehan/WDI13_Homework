sieve = {
  primes : function(max) { // assume max >= 2
    var boolArray = [false, false];
    for (var i = 2; i < max; i++) {
      boolArray.push(true);
    }
    var primes = [];
    var prime = 2;
    var found = true;
    var small = true;
    while(found && small){
      if (found) {
        primes.push(prime);
        if (small) {
          for(i = prime; i< boolArray.length; i += prime){
            boolArray[i] = false;
          }
        }
      }
      found = false;
      for (i = prime + 1; i < boolArray.length; i++) {
        if (boolArray[i]) {
          prime = i;
          small = prime <= Math.sqrt(max);
          found = true;
          break;
        }
      }
    }
    for (i= prime; i< boolArray.length; i++){
      if (boolArray[i]){
        primes.push(i);
      }
    }
    return primes;
  }
};

console.log(sieve.primes(100));
$(document).ready( function () {
  console.log('walrus');
  var max;
  $('.inputter').on('click', function (){
    max = $('.max').val();
    primes = sieve.primes(max);
    $('p').text(primes.join(", "));
  });
});
