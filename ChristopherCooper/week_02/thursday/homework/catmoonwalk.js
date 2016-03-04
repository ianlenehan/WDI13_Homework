var cat = document.getElementsByTagName('img')[0];
var getScreenWidth = window.innerWidth;

cat.style.left = '0px'

var catwalk = function(){
    var oldLeft = parseInt(cat.style.left);
    var newLeft = oldLeft + 10;
    cat.style.left = newLeft + 'px';
    if (oldLeft >= getScreenWidth){
      clearInterval(timerID);
      timerID = setInterval(moonwalk, 50);
    }
}

var moonwalk = function (){
  var oldRight = parseInt(cat.style.left);
  var newRight = oldRight - 10;
  cat.style.left = newRight + 'px';
  if (oldRight <= 0){
    clearInterval(timerID);
    timerID = setInterval(catwalk, 50);
  }
};

var timerID = setInterval(catwalk, 50);
