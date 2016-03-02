var squareNumber = function(number) {
  var result = number * number;
  console.log("The result of squaring the " + number + " is " + result);
  return result;
};

var halfNumber = function(number) {
  var result = number / 2;
  console.log("Half of " + number + " is " + result);
    return result;
};

var percentOf = function(number1, number2) {
  var result = (number1 / number2) * 100;
  console.log(number2 + " is 50% of " + number1);
    return result;
};

var areaOfCircle = function(radius) {
  var result = Math.PI * (radius * radius);
  console.log("The area for a circle with " + radius + " is " + result);
    return result;
};

var squareButton = document.getElementById('square-button');
  squareButton.addEventListener('click', function(){
    var number = document.getElementById('square-input').value;
    document.getElementById('solution').innerHTML = squareNumber(number);
  });

var halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', function () {
  var number = document.getElementById('half-input').value;
  document.getElementById('solution').innerHTML = halfNumber(number);
});

var percentButton = document.getElementById('percent-button');
  percentButton.addEventListener('click', function() {
    var number1 = document.getElementById('percent1-input').value;
    var number2 = document.getElementById('percent2-input').value;
    document.getElementById('solution').innerHTML = percentOf(number1, number2);
  });

var areaButton = document.getElementById('area-button');
    areaButton.addEventListener('click', function() {
      var radius = document.getElementById('area-input').value;
      document.getElementById('solution').innerHTML = areaOfCircle(radius);
    });
