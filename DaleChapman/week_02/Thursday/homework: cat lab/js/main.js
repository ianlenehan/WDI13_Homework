var kittyMove = function() {
  var oldTop = parseInt(img.style.top);
  var newTop = oldTop + 1;
  img.style.top = newTop + 'px';
};

setInterval(kittyMove, 300);

var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '-450px';
var kittyMove = function() {
  var oldleft = parseInt(img.style.left);
  var newleft = oldleft + 2;
  img.style.left = newleft + 'px';
  if(parseInt(img.style.left) > window.innerWidth){
    img.style.left = "-450px";
  }
};

setInterval(kittyMove, 20);
