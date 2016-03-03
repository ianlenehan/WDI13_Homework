var runMaths = {
  squareIt:  function () {
    var input =document.getElementById('square-input').value;
    var answer = parseInt(input);
    answer = answer * answer;
    var pageNode = document.getElementById('solution');
    pageNode.innerHTML = '<p>' + input + ' squared is ' + answer + '</p>';
  },
  halveIt: function () {
    var input = document.getElementById('half-input').value;
    var answer = parseInt(input);
    answer = answer / 2;
    var pageNode = document.getElementById('solution');
    pageNode.innerHTML = '<p>Half of ' + input + ' is ' + answer + '</p>';
  },
  fractionIt: function () {
    var quotient = document.getElementById('percent1-input').value;
    var divisor = document.getElementById('percent2.input').value;
    quotient = parseInt(quotient);
    divisor = parseInt(divisor);
    var answer = (quotient / divisor) * 100;
    var pageNode = document.getElementById('solution');
    pageNode.innerHTML = '<p>' + quotient + ' is ' + answer + ' of ' + divisor + '</p>';
  },
  areaCircleIt: function () {
    var radius = document.getElementById('area-input').value;
    radius = parseInt(radius);
    var area = radius * 2 * Math.PI;
    var pageNode = document.getElementById('solution');
    pageNode.innerHTML = '<p>The area of a circle with radius ' + radius + ' is ' + area + '</p>';
  }
};

var square = document.getElementById('square-button');
var halve = document.getElementById('half-button');
var fraction = document.getElementById('percent-button');
var areaCircle = document.getElementById('area-button');

square.addEventListener('click', runMaths.squareIt);
halve.addEventListener('click', runMaths.halveIt);
fraction.addEventListener('click', runMaths.fractionIt);
areaCircle.addEventListener('click', runMaths.areaCircleIt);

//bonus stuff next...

var squareEnter = document.getElementById('square-input');
var halveEnter = document.getElementById('half-input');
var fraction1Enter = document.getElementById('percent1-input');
var fraction2Enter = document.getElementById('percent2-input');
var circleEnter = document.getElementById('area-input');

squareEnter.addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    runMaths.squareIt();
  }
});

halveEnter.addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    runMaths.halveIt();
  }
});

fraction1Enter.addEventListener('keypress', function(event) {
  if (fraction1Enter.value === '' || fraction2Enter.value === '') {
    return;
  } else {
    if (event.keyCode == 13) {
      runMaths.fractionIt();
    }
  }
});

fraction2Enter.addEventListener('keypress', function(event) {
  if (fraction1Enter.value === '' || fraction2Enter.value === '') {
    return;
  } else {
    if (event.keyCode == 13) {
      runMaths.fractionIt();
    }
  }
});

circleEnter.addEventListener('keypress', function(event) {
  if (event.keyCode == 13) {
    runMaths.areaCircleIt();
  }
});
