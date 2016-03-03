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
  if (leftMargin === (window.screen.width - 296)/2 - 100 ) {
    savedDelta = delta;
    delta = 0;
    img.src = 'https://media.giphy.com/media/Qks6qkUTEmt6E/giphy.gif';
  }
  leftMargin += delta;
  img.style.left = leftMargin+'px';
};

var dancingCat = function () {
  console.log('dancing Cat');
  img.src = 'https://media.giphy.com/media/Qks6qkUTEmt6E/giphy.gif';
};

var normalCat = function () {
  console.log('normalCat');
  img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
};

window.setInterval(walk, walkRefresh);
