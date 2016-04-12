var solution = document.getElementById("solution");

var squareButton = document.getElementById("square-button");
var squareIt = function() {
  var squareInput = document.getElementById("square-input").value;
  squareInput = parseFloat(squareInput);
  solution.innerHTML = squareInput * squareInput;
}
squareButton.addEventListener('click', squareIt );

var halfButton = document.getElementById("half-button");
var halfIt = function() {
  var halfInput = document.getElementById("half-input").value;
  halfInput = parseFloat(halfInput);
  solution.innerText = halfInput * 0.5;
}
halfButton.addEventListener('click', halfIt );


var percentButton = document.getElementById("percent-button");
var percentIt = function() {
  console.log("fish");
  var percent1Input = document.getElementById("percent1-input").value;
  var percent2Input = document.getElementById("percent2-input").value;
  percent1Input = parseFloat(percent1Input);
  percent2Input = parseFloat(percent2Input);
  solution.innerText = 100 * percent1Input/percent2Input;
}
percentButton.addEventListener('click', percentIt );

var areaButton = document.getElementById("area-button");
var areaCircle = function (){
  var radius = document.getElementById("area-input").value;
  solution.innerText = radius * radius * Math.PI;
}
areaButton.addEventListener('click', areaCircle);
