var img = document.getElementsByTagName('img')[0];

img.style.left = '0px';
var delta = 1;
var walkRefresh = 2;
var savedDelta = 0;
var leftEdge = 0;
var rightEdge = window.screen.width - 296;

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
  if (delta > 0 && leftMargin === 490){
    changeCat();
  }
  if (delta < 0 && leftMargin === 494) {
    changeCat();
  }
  leftMargin += delta;
  img.style.left = leftMargin+'px';
};

var changeCat = function () {
  savedDelta = delta;
  delta = 0;
  img.style.left = (window.screen.width - 296) / 2 + 'px';
  img.src = 'images/dancing.gif';
  window.setTimeout(changeBack, 10000);
};

var changeBack = function () {
  img.src = 'images/cat-walk.gif';
  delta = savedDelta;
  if (savedDelta > 0) {
    img.style.left = '500px';
  }
  if (savedDelta < 0) {
    img.style.left = '485px';
  }
};

//timing
window.setInterval(walk, walkRefresh);
