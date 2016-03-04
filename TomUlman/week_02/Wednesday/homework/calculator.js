// Create a new Javascript file and link to it with a script tag at the bottom.
// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button.




var solution = document.getElementById('solution');
//===================================================//

var buttonA = document.getElementById('square-button');
var squareNumber = function(input) {
input = document.getElementById('square-input').value;
var squared = (input * input);
solution.innerText=squared;
};

// bonus
// input = document.getElementById('square-input').value;
// input.addEventListener('key-up', squareNumber);
 buttonA.addEventListener('click', squareNumber);

// //===================================================//
var buttonB = document.getElementById('half-button');

var halfNumber = function(input) {
input = document.getElementById('half-input').value;
var halved = (input / 2);
solution.innerText=halved;
};

 buttonB.addEventListener('click', halfNumber);
// //===================================================//
var buttonC = document.getElementById('percent-button');

var percentage = function(input, input2) {
input = document.getElementById('percent1-input').value;
input2 = document.getElementById('percent2-input').value;
var percent = (input / input2 * 100);
solution.innerText=percent;
};

buttonC.addEventListener('click', percentage);
// //===================================================//
var buttonD = document.getElementById('area-button');

var areaCircle = function(input) {
input = document.getElementById('area-input').value;
var area = (Math.PI * (input * input));
solution.innerText=area;
};

buttonD.addEventListener('click', areaCircle);
//
//
//
//
// // var makeMadLib = function(noun, adjective, name) {
// //   noun = document.getElementById('noun').value;
// //   adjective = document.getElementById('adjective').value;
// //   name = document.getElementById('person').value;
// //
// //   alert(name + " loves " + adjective + " " + noun);
// // };
// //
// // button.addEventListener('click', makeMadLib);
