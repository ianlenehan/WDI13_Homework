var catDiv = document.getElementsByClassName('catDiv')[0];
var mainCat = document.getElementById('mainCat');
var bird = document.getElementById('bird');
var sylvester = document.getElementById('sylvester');
sylvester.style.opacity = 0;
sylvester.style.top = '90px';
mainCat.style.left = '-300px';
bird.style.left = '-30px';
var windowWidth = window.innerWidth;
var catDiv = document.getElementsByClassName('catDiv')[0];
var h1 = document.getElementsByTagName('h1')[0];
h1.style.opacity = 0;
var startButton = document.getElementById('start');
var body = document.getElementsByTagName('body')[0];
startButton.style.opacity = 0;

////////////////////

var catWalk = function() {
  var oldPos = parseInt(mainCat.style.left);
  newPos = oldPos + 1;
  mainCat.style.left = newPos + 'px';
  mainCat.style.transform = 'none';
  if (newPos >= windowWidth + 350) {
    clearInterval(timerID);
    timerID = setInterval(catWalkBack, 2);
  }
};

var catWalkBack = function() {
  mainCat.style.width = '200px';
  var oldPos = parseInt(mainCat.style.left);
  newPos = oldPos - 1;
  mainCat.style.left = newPos + 'px';
  mainCat.style.transform = 'scaleX(-1)';
  if (newPos <= -250) {
    clearInterval(timerID);
    timerID = setInterval(catWalkDown, 3);
  }
};

var catWalkDown = function() {
  mainCat.style.top = '-200px'
  mainCat.style.left = '300px'
  var oldPos = parseInt(mainCat.style.top);
  newPos = oldPos + 1;
  mainCat.style.top = newPos + 'px';
  mainCat.style.transform = 'rotate(180deg)';
  // if (newPos >= 1000) {
  //   clearInterval(timerID);
  //   timerID = setInterval(revealSylvester, 200);
  // }
};

////////////////////

var birdFly = function() {
  var oldPos = parseInt(bird.style.left);
  newPos = oldPos + 1;
  bird.style.left = newPos + 'px';
  bird.style.transform = 'none';
  if (newPos >= windowWidth + 250) {
    clearInterval(birdTimerID);
    birdTimerID = setInterval(birdFlyBack, 5);
  }
};

var birdFlyBack = function() {
  bird.style.width = '100px';
  catDiv.style.marginTop = '300px';
  var oldPos = parseInt(bird.style.left);
  newPos = oldPos - 1;
  bird.style.left = newPos + 'px';
  bird.style.transform = 'scaleX(-1)';
  if (newPos <= -250) {
    clearInterval(birdTimerID);
    bird.style.top = '-100px';
    birdTimerID = setInterval(birdFlyDown, 3);
  }
};

var birdFlyDown = function() {

  bird.style.left = '300px'
  var birdOldPos = parseInt(bird.style.top);
  birdNewPos = birdOldPos + 1;
  bird.style.left = birdNewPos + 'px';
  bird.style.transform = 'rotate(180deg)';
};


////////////////////


var revealSylvester = function() {
  sylvester.style.opacity = parseFloat(sylvester.style.opacity) + 0.05;
  if (sylvester.style.opacity >= 0.8) {
    clearInterval(timerID);
    sylvester.style.animation = 'fade-in-and-out 2s infinite linear';
    timerID = setInterval(sylvesterMove, 5);
  }
};

var sylvesterMove = function() {
  var oldPos = parseInt(sylvester.style.top);
  newPos = oldPos - 1;
  sylvester.style.top = newPos + 'px';
  sylvester.style.transform = 'none';
  if (newPos <= -500) {
    clearInterval(timerID);
    timerID = setInterval(revealh1, 2)
  }
};

var revealh1 = function() {
  h1.style.opacity = parseFloat(h1.style.opacity) + 0.01;
  if (h1.style.opacity >= 1) {
    clearInterval(timerID);
  }
};

// var startShow = function(event) {
//   startButton.style.opacity = 0;
  var timerID = setInterval(catWalk, 3);
  var birdTimerID = setInterval(birdFly, 3);
// };
//
// startButton.addEventListener('click', console.log(1));
