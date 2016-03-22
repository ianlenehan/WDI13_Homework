var cat = {
  delta: 30,
  sign: 1,
  left: 0,
  src: 'img/walking.gif',
  id: 'cat',
  timerID: 0,
  create: function() {
    var node = document.createElement('img');
    document.body.appendChild(node);
    node.id = 'cat';
    node.src = 'img/walking.gif';
    node.style.position = 'absolute';
    node.style.left = '100px';
  },
  move: function() {
    var obj = document.getElementById('cat');

    var oldLeft = parseFloat(obj.style.left);

    var newLeft = oldLeft + cat.delta;
    console.log(newLeft);

    obj.style.left = newLeft + 'px';

    if (window.innerWidth - newLeft < 0 || newLeft < 0) {
      cat.sign = -cat.sign;
      obj.style.transform = 'scaleX(' + cat.sign + ')';
      cat.delta = -cat.delta;
    }
    cat.timerID = setInterval(cat.move, 200);

  },
};
cat.create();
cat.move();
