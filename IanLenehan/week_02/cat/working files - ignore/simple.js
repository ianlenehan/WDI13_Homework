var mainCat = document.getElementsByClassName('mainCat')[0];
var centreCat = document.getElementsByClassName('centreCat')[0];
mainCat.style.left = '1px';
var windowWidth = window.innerWidth;
var counter = 0;
var newTimer = 0;

var catWalk = function() {
  mainCat.style.opacity = 1;
  centreCat.style.opacity = 0;
  var oldPos = parseInt(mainCat.style.left);
  newPos = oldPos + 1;
  mainCat.style.left = newPos + 'px';
  mainCat.style.transform = 'none';
  if (newPos >= windowWidth ) {
  clearInterval(timerID);
  timerID = setInterval(catWalkBack, 5);
  } else if ((newPos >= windowWidth / 2) && counter < 1) {
    clearInterval(timerID);
    catSwap();
  }
};

var catSwap = function() {
  counter++;
  mainCat.style.opacity = 0;
  centreCat.style.opacity = 1;
  setTimeout(function() {
    setInterval(catWalk, 5);
  }, 2000)
};


var catWalkBack = function() {
  var oldPos = parseInt(mainCat.style.left);
  newPos = oldPos - 1;
  mainCat.style.left = newPos + 'px';
  mainCat.style.transform = 'scaleX(-1)';
  if (newPos <= 0 ) {
    clearInterval(timerID);
    timerID = setInterval(catWalk, 5);
  }
}

var timerID = setInterval(catWalk, 5);
