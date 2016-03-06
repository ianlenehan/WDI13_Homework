// This works now to make the cat walk back and forth

var mainCat = document.getElementsByClassName('mainCat')[0];
mainCat.style.left = '1px';
var windowWidth = window.innerWidth;
var changeAmount = 1;

var catWalk = function() {
  var oldPos = parseInt(mainCat.style.left);
  newPos = oldPos + 1;
  mainCat.style.left = newPos + 'px';
  mainCat.style.transform = 'none';
  if (newPos >= windowWidth/2 ) {
    clearInterval(timerID);
    timerID = setInterval(catWalkBack, 10);
  }
}

var catWalkBack = function() {
  var oldPos = parseInt(mainCat.style.left);
  newPos = oldPos - 1;
  mainCat.style.left = newPos + 'px';
  mainCat.style.transform = 'scaleX(-1)';
  if (newPos <= 0 ) {
    clearInterval(timerID);
    timerID = setInterval(catWalk, 10);
  }
}


var timerID = setInterval(catWalk, 10);

console.log(mainCat);
console.log(windowWidth);
