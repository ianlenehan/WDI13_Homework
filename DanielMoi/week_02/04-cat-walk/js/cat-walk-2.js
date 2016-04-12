var objectFactory = function(id, src) {

  var node = document.createElement('img');
  node.src = src;
  node.style.position = 'absolute';
  node.style.left = '0px';

  var delta = 30;
  var sign = 1;

  var moveMe = function() {
    var oldLeft = parseFloat(node.style.left);
    var newLeft = oldLeft + delta;
    node.style.left = newLeft + 'px';

    if (window.innerWidth - newLeft < 0 || newLeft < 0) {
      console.log('hello');
      sign = -sign;
      node.style.transform = 'scaleX(' + sign + ')';
      // cat.style.transform = 'rotateX(-180deg) rotateY(-180deg)';

      delta = -delta;
    }
  };

};

var cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '0px';

var mario = document.getElementById('mario');
console.log(typeof cat.style.left);

var delta = 30;
var sign = 1;
var elapsed = 0;
var dancing = false;

var moveMe = function() {
  console.log('HELLO');
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
    elapsed += 300;
  }

  if (elapsed >= 300 * 20) {
    cat.src = 'img/walking.gif';
    dancing = false;
  }

  if (!dancing) {
    if (window.innerWidth - newLeft < 0 || newLeft < 0) {
      console.log('hello');
      sign = -sign;
      cat.style.transform = 'scaleX(' + sign + ')';
      // cat.style.transform = 'rotateX(-180deg) rotateY(-180deg)';

      delta = -delta;
    }
  }

};

var timerID = setInterval(moveMe, 200);
