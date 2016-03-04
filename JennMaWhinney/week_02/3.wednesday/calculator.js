var squareThisNumber = document.getElementById("square-button");
var onClick = function(event) {
    var squareInput = document.getElementById("square-input").value;
    alert(squareInput * squareInput);
};
button.addEventListener('click', onClick);

var halfThisNumber = document.getElementById("half-button");
var onClick = function(event) {
    var halfInput = document.getElementById("half-input").value;
    alert(halfInput / 2);
};
button.addEventListener('click', onClick);
