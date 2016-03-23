var img = document.getElementsByClassName('cat')[0];
var hat = document.getElementsByClassName('hat')[0];
var body = document.getElementsByTagName('body')[0];


img.style.left = '0px';
img.style.top = '450px';
var whereToDance = 600;
var delta = 1;
var walkRefresh = 1;
var savedDelta = 0;
var leftEdge = 0;
var rightEdge = window.screen.width - 296;
var axisDirection = 1;
var axisToSwap = '';


var walk = function () {
  var leftMargin = parseInt(img.style.left);
  if (leftMargin < leftEdge || leftMargin > rightEdge) {
    delta = -delta;
    if (delta > 0) {
      img.style.transform = 'scaleX(1)';
    } else {
      img.style.transform = 'scaleX(-1)';
    }
  }
  if (delta > 0 && leftMargin === whereToDance - 5){
    changeCat();
  }
  if (delta < 0 && leftMargin === whereToDance + 5) {
    changeCat();
  }
  leftMargin += delta;
  img.style.left = leftMargin+'px';
};

var changeCat = function () {
  var sound = document.createElement('audio');
  sound.src = 'https://upload.wikimedia.org/wikipedia/en/f/fc/StayinAlive.ogg';
  sound.class = 'stayAlive';
  var playMe = document.getElementsByClassName('stayAlive')[0];
  playMe.play();
  body.style.backgroundImage = 'url("images/catlick.gif")';
  body.style.backgroundSize = 'cover';
  savedDelta = delta;
  delta = 0;
  hat.style.opacity = 1;

  img.style.left = whereToDance + 'px';
  img.src = 'images/dancing.gif';
  window.setTimeout(changeBack, 3000);
};

var changeBack = function () {
  body.style.backgroundImage = '';
  hat.style.opacity = 0;

  img.src = 'images/cat-walk.gif';
  delta = savedDelta;
  if (savedDelta > 0) {
    img.style.left = (whereToDance + 6) +'px';
  }
  if (savedDelta < 0) {
    img.style.left = (whereToDance - 6) + 'px';
  }
};

var flipHat = function () {
  var randomise = function () {
    var random = Math.round(Math.random());
    if (random === 1) {
      axisDirection = -axisDirection;
      axisToSwap = 'scaleX';
    } else {
      axisToSwap = 'scaleY';
    }
  };
  randomise();
  hat.style.transform = axisToSwap + '(' + axisDirection + ')';
};


//hat styling
hat.style.opacity = 0;
hat.style.zIndex = '-2';
hat.style.left = '465px';

window.setInterval(walk, walkRefresh);
window.setInterval(flipHat, 150);
