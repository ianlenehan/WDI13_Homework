var squareButton = document.getElementById('square-button');

var square = function (){
    var squareValue = document.getElementById('square-input').value;
    return document.getElementById('solution').innerHTML = (squareValue * squareValue);
};

squareButton.addEventListener('click', square);


var halfButton = document.getElementById('half-button');

var half = function (){
    var halfValue = document.getElementById('half-input').value;
    return document.getElementById('solution').innerHTML = (halfValue / 2);
};

halfButton.addEventListener('click', half);


var percentButton = document.getElementById('percent-button');

var percent = function (){
    var fractionValue = document.getElementById('percent1-input').value;
    var wholeValue =  document.getElementById('percent2-input').value;

    return document.getElementById('solution').innerHTML =  ((fractionValue / wholeValue) * 100) + '%';
};

percentButton.addEventListener('click', percent);



radiusKey = document.getElementById('area-input');
radiusButton = document.getElementById('area-button');

var radius = function (event){
var radiusValue = document.getElementById('area-input').value;
      return document.getElementById('solution').innerHTML = (3.1415 * (radiusValue * radiusValue));
};

radiusButton.addEventListener('click', radius);
radiusKey.addEventListener('keypress', function(){
  if (event.which === 13){
    radius();
  }
});
