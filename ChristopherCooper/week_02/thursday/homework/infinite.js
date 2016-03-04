var cat = document.getElementsByTagName('img')[0];
var getScreenWidth = window.outerWidth;

cat.style.left = '0px'

var catwalk = function(){
    var oldLeft = parseInt(cat.style.left);
    var newLeft = oldLeft + 10;
    cat.style.left = newLeft + 'px';
    if (oldLeft >= getScreenWidth){
      cat.style.left = '-300px';
    }
  };

var timerID = setInterval(catwalk, 50);
