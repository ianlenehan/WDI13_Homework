var cat = document.getElementsByTagName('img')[0];
cat.style.position = 'absolute';
cat.style.left = '0px';
console.log(typeof cat.style.left);

var delta = 30;
var sign = 1;
var count = 0;
var dancing = false;

var moveCat = function() {
  // need to use variable here, because cat.style.left will be converted to a string by JS
  var oldLeft;
  var newLeft;

  if (!dancing) {
    oldLeft = parseFloat(cat.style.left);
    newLeft = oldLeft + delta;
    cat.style.left = newLeft + 'px';
    console.log(window.innerWidth - newLeft);
  }

  if (newLeft > window.innerWidth / 2) {
    cat.src = 'img/dancing.gif';
    dancing = true;
    // clearInterval(timerID);
  }

  if (dancing) {
    count += 300;
  }

  if (count >= 300 * 50) {

    cat.src = 'img/walking.gif';
    dancing = false;
  }

  // if (!dancing) {
  if (window.innerWidth - newLeft < 0 || newLeft < 0) {
    console.log('hello');
    sign = -sign;
    cat.style.transform = 'scaleX(' + sign + ')';
    // cat.style.transform = 'rotateX(-180deg) rotateY(-180deg)';

    delta = -delta;
  }
  // }

};

// var timerID = setInterval(moveCat, 200);
