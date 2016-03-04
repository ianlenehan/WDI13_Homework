
document.body.style.backgroundImage = 'url(images/usain.jpg)';
document.body.style.backgroundSize = 'cover';
// var joel = getElementsByClassName('joel')[0];
// joel.style.opacity = 0.0;

var img = document.getElementsByTagName('img')[0];
img.style.height = '150px';
img.style.width = '150px';
img.style.left = '-0px';
img.style.bottom = '180px';

var runRight = 8;
var runDown = -2;

var audioRace = new Audio('audio/join.mp3');
// var audioCeremony = new Audio('audio/throner.mp3');
// var audioMedal = new Audio('audio/thronemiddle.mp3');

var ceremony;
var medal;
var win;

var deg = 5;
var height = parseInt(img.style.height);
var width = parseInt(img.style.width);
var left = 700;

var walkUp = 3;
var walkLeft = 1;
var sizeDown = 1;

var race = function () {
          img.src = 'images/cat-walk.gif';
          timerID = window.setInterval(catRun, 120);
};

var catRun = function () {
          document.body.style.backgroundImage = 'url(images/usain.gif)';
          audioRace.play();
          var oldLeft = parseInt(img.style.left);
          var newLeft = oldLeft + runRight;
          img.style.left = newLeft + "px";
          var oldHeight = parseInt(img.style.bottom);
          var newHeight = oldHeight + runDown;
          img.style.bottom = newHeight + "px";
          if (parseInt(img.style.left) > 700) {
                    document.body.style.backgroundImage = 'url(images/usain2.jpg)';
                    window.clearInterval(timerID);
                    img.src='images/cat-stand.png';
                    win = window.setInterval(catWin, 50);
          }
};

var catWin = function () {
          img.style.transform = 'rotate('+ deg + 'deg)';
          deg -=5;
          img.style.height = height + 'px';
          img.style.width = width + 'px';
          height += 15;
          width += 15;
          img.style.left = left + 'px';
          left -= 10;
          img.style.bottom = '0px';
          if (height > 1000) {
                    window.clearInterval(win);
                    img.src='images/cat-walk.gif';
                    img.style.height = '200px';
                    img.style.width = '200px';
                    img.style.left =  '700px';
                    img.style.bottom = '20px';
                    img.style.transform = "scaleX(-1)";
                    document.body.style.backgroundImage = 'url(images/swars2.gif)';
                    ceremony = window.setInterval(catCeremony, 441);
          }
};

// var startCeremony = function () {
//           img.style.height = '200px';
//           img.style.width = '200px';
//           img.style.left =  '700px';
//           img.style.bottom = '20px';
//           img.style.transform = "scaleX(-1)";
//           document.body.style.backgroundImage = 'url(images/swars1.png)';
//           ceremony = window.setInterval(catCeremony, 500);
// };
// var swars = function () {
//           document.body.style.backgroundImage = 'url(images/swars1.jpg)';
// };

var catCeremony = function () {
          //window.setTimeout(swars, 1900);
          document.body.style.backgroundImage = 'url(images/swars1.png)';
          var cerStartLeft = parseInt(img.style.left);
          var cerEndLeft = cerStartLeft - walkLeft;
          img.style.left = cerEndLeft + "px";
          var cerStartHeight = parseInt(img.style.bottom);
          var cerEndHeight = cerStartHeight + walkUp;
          img.style.bottom = cerEndHeight + "px";
          var widthStart = parseInt(img.style.width);
          var widthEnd = widthStart - sizeDown;
          img.style.width = widthEnd + "px";
          var heightStart = parseInt(img.style.height);
          var heightEnd = heightStart - sizeDown;
          img.style.height = heightEnd + "px";
          if (parseInt(img.style.bottom) > 350) {
                    img.src = 'images/cat-stand.png';
                    window.clearInterval(ceremony);
                    medal = setInterval(catMedal,500);
          }
};

var catMedal = function () {
          // audioMedal.play();
          document.body.style.backgroundImage = 'url(images/medal.jpg)';
          var joel = document.createElement('img');
          joel.setAttribute('src','images/joel2.png');
          document.body.appendChild(joel);
          joel.style.position = 'absolute';
          joel.style.zIndex = 5;
          joel.style.left = '375px';
          joel.style.top = '150px';
          joel.style.height = '500px';
          joel.style.width = '500px';
          img.style.zIndex = 10;
          img.style.transform = "scaleX(1)";
          img.style.height = '700px';
          img.style.width = '700px';
          img.style.left = '-40px';
          img.style.bottom = '-300px';
};


window.setTimeout(race, 1000);
