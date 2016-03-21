var objectFactory = function(id, src, topStart, leftStart) {

  var node = document.createElement('img');
  document.body.appendChild(node);
  console.log('hello');
  node.id = id;
  node.src = src;
  node.style.position = 'absolute';
  node.style.top = topStart;
  node.style.left = leftStart;

  var delta = 30;
  var sign = 1;

  var moveMe = function() {
    console.log('moving');
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
  // var timerID = setInterval(moveMe, 200);

};

var mario = objectFactory('mario', 'img/mario.gif', '160px', '0px');
var cat = objectFactory('cat', 'img/walking.gif', '0px', '100px');
