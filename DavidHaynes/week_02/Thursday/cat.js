var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
img.style.bottom = '0px';
img.style.zIndex = 5;

// var hand = document.getElementsByClassName('hand')[0];
// hand.style.left = '100px';
// hand.style.bottom = '0px';
// hand.style.height = '400px';
// hand.style.width = '200px';
// hand.style.zIndex = 10;



var walk = 10;

var catWalk = function () {
      var rightMax = window.innerWidth + "px";
      var middle = window.innerWidth/2 - 100 + 'px';
      var leftMax = '-300px';
      if (parseInt(img.style.left) > parseInt(rightMax)) {
            img.style.transform = 'scaleX(-1)';
            walk = -1 * walk;
            img.style.left = rightMax;
            catwalk();
      } else if (parseInt(img.style.left) < parseInt(leftMax)) {
            img.style.transform = 'scaleX(1)';
            walk = -1 * walk;
            img.style.left = leftMax;
            catwalk();
      } else if (parseInt(img.style.left)< parseInt(middle) +10 && parseInt(img.style.left) > parseInt(middle) -10) {
            img.src = 'http://www.gifbin.com/bin/20052777.gif';
            img.style.left = middle;
            var direction = walk;
            walk = 0;
            var startAgain = function() {
                  walk = direction;
                  img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
                  if (walk > 0) {
                        img.style.left = parseInt(middle) + 11 + "px";
                  } else {
                        img.style.left = parseInt(middle) - 11 + "px";
                  }
            };
            setTimeout(startAgain, 3000);
            img.style.left = parseInt(middle) + 11 + "px";
      } else  {
            var oldLeft = parseInt(img.style.left);
            var newLeft = oldLeft + walk;
            img.style.left = newLeft + "px";
      }
};

setInterval(catWalk, 25);
