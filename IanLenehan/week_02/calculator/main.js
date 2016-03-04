var squareButton = document.getElementById('square-button');

var squareNumber = function () {
  var num = document.getElementById('square-input').value;
  var squareAnswer = "The square of " + num + " is " + num * num;
  alert(squareAnswer);
};

squareButton.addEventListener('click', squareNumber)

// the following is to make the above work when pressing enter
// 13 is the reference number for the enter key

var input = document.getElementById('square-input');
var keylogger = function (event) {
  if (event.which === 13) {
    squareNumber();
  }
};

input.addEventListener('keypress', keylogger);

/////////////////////////////////////////

var halfButton = document.getElementById('half-button');

var halfNumber = function () {
  var num = document.getElementById('half-input').value;
  var halfAnswer = "Half of " + num + " is " + num / 2;
  alert(halfAnswer);
};

halfButton.addEventListener('click', halfNumber)

// the following is to make the above work when pressing enter
// 13 is the reference number for the enter key

var input = document.getElementById('half-input');
var keylogger = function (event) {
  if (event.which === 13) {
    halfNumber();
  }
};

input.addEventListener('keypress', keylogger);

/////////////////////////////////////////

var fractionButton = document.getElementById('percent-button');

var fractionNumber = function () {
  var fraction = document.getElementById('percent1-input').value;
  var whole = document.getElementById('percent2-input').value;
  var fractionAnswer = fraction + " is " + (fraction/whole)*100 + "% of " + whole
  alert(fractionAnswer);
};

fractionButton.addEventListener('click', fractionNumber)

// the following is to make the above work when pressing enter
// 13 is the reference number for the enter key

var input = document.getElementById('percent2-input');
var keylogger = function (event) {
  if (event.which === 13) {
    fractionNumber();
  }
};

input.addEventListener('keypress', keylogger);

/////////////////////////////////////////

var areaButton = document.getElementById('area-button');

var area = function () {
  var radius = document.getElementById('area-input').value;
  var pi = 3.14159265359
  var areaAnswer = "The area of a circle with a radius of " + radius + " is " + Math.round((pi * (radius * radius)));
  alert(areaAnswer);
};

areaButton.addEventListener('click', area);

// the following is to make the above work when pressing enter
// 13 is the reference number for the enter key

var input = document.getElementById('area-input');
var keylogger = function (event) {
  if (event.which === 13) {
    area();
  }
};

input.addEventListener('keypress', keylogger);

/////////////////////////////////////////
