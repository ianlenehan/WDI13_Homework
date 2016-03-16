var shuffle = function (array) {
  var arrayWithNoise = array.map( function (a) {
    return [a, Math.random()];
  }); // attaches noise to all the elements.
  var shuffledWithNoise = arrayWithNoise.sort( function(aPair, bPair) {
    return bPair[1] - aPair[1];
  }); // uses the noise to sort the array. Its shuffled now, but still has the noise.
  var shuffled = shuffledWithNoise.map(function (aPair) {
    return aPair[0];
  }); // strips the noise off the array.
  return shuffled;
}

console.log(shuffle(['a', 'b', 'c']));
