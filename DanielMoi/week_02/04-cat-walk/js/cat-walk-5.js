var cat = document.createElement('img');
cat.src = 'img/walking.gif';
document.body.appendChild(cat);
cat.style.position = 'absolute';
cat.style.left = '0px';
console.log(typeof cat.style.left);

var delta = 30;
var sign = 1;

var moveCat = function() {
  var oldLeft = parseFloat(cat.style.left);
  var newLeft = oldLeft + delta;
  cat.style.left = newLeft + 'px';
  console.log(window.innerWidth - newLeft);

  if (window.innerWidth - newLeft < 0 || newLeft < 0) {
    console.log('hello');
    sign = -sign;
    cat.style.transform = 'scaleX(' + sign + ')';

    delta = -delta;
  }

};

var timerID = setInterval(moveCat, 300);
