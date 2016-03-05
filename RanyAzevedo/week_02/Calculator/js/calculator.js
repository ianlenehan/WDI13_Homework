// For each operation, create an event listener for the button,
// and when it's clicked, find the value of the appropriate input and
// show the result of the calculation in the solution div.

//SQUARE

var squareNumber = document.getElementById('square-button');
var square = function(){
  var number = document.getElementById('square-input').value;
  squareNumber.innerHTML = number * number;
};
squareNumber.addEventListener('click', square);

var input = document.getElementById('square-input');
var keyLogger = function (keypress){
  if (keypress.which === 13) {
    square();
  }
};
input.addEventListener('keypress', keyLogger);

//HALF NUMBER

var halfNumber = document.getElementById('half-button');
var half = function(){
  var number = document.getElementById('half-input').value;
  halfNumber.innerHTML = number / 2;
};
halfNumber.addEventListener('click', half);

var input = document.getElementById('half-input');
var keyLogger = function (keypress){
  if (keypress.which === 13) {
    half();
  }
};
input.addEventListener('keypress', keyLogger);

//AREA CIRCLE

var areaCircle = document.getElementById('area-button');
var area = function() {
  var radius = document.getElementById('area-input').value;
  areaCircle.innerHTML = (3.14 * (radius * radius));
};
areaCircle.addEventListener('click', area);


var input = document.getElementById('area-input');
var keyLogger = function (keypress){
  if (keypress.which === 13) {
    area();
  }
};
input.addEventListener('keypress', keyLogger);


// PERCENT BUTTON


var calculate = document.getElementById('percent-button');
 var findFraction = function() {
   var fraction = document.getElementById('percent1-input').value;
   var whole = document.getElementById('percent2-input').value;
   var numstr = whole + "." + fraction;
   calculate.innerHTML = parseFloat(numstr);
 };
 calculate.addEventListener('click', findFraction);

 var input = document.getElementById('percent2-input');
 var keyLogger = function (keypress){
   if (keypress.which === 13) {
     findFraction();
   }
 };
 input.addEventListener('keypress', keyLogger);
