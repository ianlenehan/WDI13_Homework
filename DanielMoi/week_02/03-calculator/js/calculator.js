var solution = document.getElementById('solution');

var inputSquare = document.getElementById('square-input');
var buttonSquare = document.getElementById('square-button');
var funcSquare = function(event) {
  var result = inputSquare.value * inputSquare.value;
  solution.innerHTML = result;
};
buttonSquare.addEventListener('click', funcSquare);
inputSquare.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    funcSquare();
  }
});

// Half Function
var inputHalf = document.getElementById('half-input');
var buttonHalf = document.getElementById('half-button');
var funcHalf = function(event) {
  var result = inputHalf.value / 2;
  solution.innerHTML = result;
};
buttonHalf.addEventListener('click', funcHalf);
inputHalf.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    funcHalf();
  }
});


// Percent Function
var inputNumerator = document.getElementById('percent1-input');
var inputDenominator = document.getElementById('percent2-input');
var buttonPercent = document.getElementById('percent-button');
var funcPercent = function(event) {
  var result = inputNumerator.value / inputDenominator.value;
  solution.innerHTML = (result * 100).toFixed(2) + '%';
};
buttonPercent.addEventListener('click', funcPercent);
inputDenominator.addEventListener('keypress', function(event){
  if (event.keyCode === 13) {
    funcPercent();
  }
});

// Area Function
var inputRadius = document.getElementById('area-input');
var buttonRadius = document.getElementById('area-button');
var funcArea = function(event) {
  var result = Math.PI * inputRadius.value * inputRadius.value;
  solution.innerHTML = result.toFixed(2);
};
buttonRadius.addEventListener('click', funcArea);
inputRadius.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    funcArea();
  }
});


// Sandbox
var arrInputs = document.getElementsByTagName('input');
console.log(arrInputs);
