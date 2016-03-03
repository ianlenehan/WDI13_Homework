/*
Create a new Javascript file and link to it with a script tag at the bottom.
For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
Bonus: respond to key presses so that the user doesn't have to click the button.
*/


var squareInput = document.getElementById('square-input');
var halfInput = document.getElementById('half-input');
var percentInput = document.getElementById('percent2-input');
var areaInput = document.getElementById('area-input');

var solution = document.getElementById('solution');

var square = function () {
  var input = document.getElementById('square-input').value;
  var output = input * input;
  solution.innerHTML = '<p>The square of '+ input + " is " + output + '<p>';
};

var half = function () {
  var input = document.getElementById('half-input').value;
  var output = input / 2;
  solution.innerHTML =  '<p>Half of '+ input + " is " + output + '<p>';
};

var fraction = function () {
  var input1 = document.getElementById('percent1-input').value;
  var input2 = document.getElementById('percent2-input').value;
  var output = input1 / input2;
  solution.innerHTML = '<p>' + input1 + " divided by " + input2 + " equals " + output + '<p>';
};

var area = function () {
  var input = document.getElementById('area-input').value;
  var output = input * input * Math.PI;
  output = Math.round(output * 100) / 100;
  solution.innerHTML = '<p>The area of a circle with radius ' + input + ' equals ' + output + '</p>';
};




squareInput.addEventListener('keyup', square);
halfInput.addEventListener('keyup', half);
percentInput.addEventListener('keyup', fraction);
areaInput.addEventListener('keyup', area);
