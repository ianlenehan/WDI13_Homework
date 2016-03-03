var squareButton = document.getElementById('square-button');
var squareField = document.getElementById('square-input');

var halfButton = document.getElementById('half-button');
var halfField = document.getElementById('half-input');

var percentButton = document.getElementById('percent-button');
var percentField = document.getElementById('percent2-input');

var areaButton = document.getElementById('area-button');
var areaField = document.getElementById('area-input');

var solution = document.getElementById('solution');

var calcSquare = function(squareInput) {
  console.log(event.keyCode);
  squareInput = parseInt( document.getElementById('square-input').value );
  solution.innerHTML = squareInput * squareInput;
};

var calcHalf = function(halfInput) {
  halfInput = document.getElementById('half-input').value;
  solution.innerHTML = halfInput / 2;
};

var calcPercent = function(percent1, percent2) {
  percent1 = document.getElementById('percent1-input').value;
  percent2 = document.getElementById('percent2-input').value;

  solution.innerHTML = (percent1 / percent2) * 100 + " %";
};

var calcArea = function(radius) {
  radius = document.getElementById('area-input').value;
  solution.innerHTML = Math.PI*(radius*radius);
};

squareButton.addEventListener('click', calcSquare);
squareField.addEventListener('keyup', calcSquare);

halfButton.addEventListener('click', calcHalf);
halfField.addEventListener('keyup', calcHalf);

percentButton.addEventListener('click', calcPercent);
percentField.addEventListener('keyup', calcPercent);

areaButton.addEventListener('click', calcArea);
areaField.addEventListener('keyup', calcArea);
