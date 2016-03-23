// Set up Crazy Cat
var pixelCat = document.createElement('img');
pixelCat.src = 'img/pixelCat.gif';
document.body.appendChild(pixelCat);
pixelCat.style.display = 'none';
pixelCat.position = 'absolute';
pixelCat.style.left = window.innerWidth / 4 + 'px';
pixelCat.style.top = window.innerHeight / 4 + 'px';

// Set up Guitar Cat
var guitar = document.createElement('img');
guitar.src = 'img/guitar5.gif';
document.body.appendChild(guitar);
guitar.style.top = '500px';
guitar.style.left = '0px';
var degrees = 10;
guitar.style.display = 'none';

// Set up Mario
var mario = document.createElement('img');
mario.src = 'img/mario2.gif';
mario.style.position = 'absolute';
mario.style.top = '160px';
document.body.appendChild(mario);
mario.style.display = 'none';

// Set up Homework Cat
var cat = document.createElement('img');
cat.src = 'img/walking.gif';
cat.style.position = 'absolute';
cat.style.left = '100px';
cat.style.right = '296px';
document.body.appendChild(cat);

// Setup Dancing Cat
var dancer = document.createElement('img');
dancer.src = 'img/dancing2.gif';
document.body.appendChild(dancer);
dancer.style.top = '300px';
dancer.style.right = '0px';
dancer.style.display = 'none';

// Variables and counters
var delta = 30;
var sign = 1;
var forward = true;
var marioLeft;
var dancing = false;
var once = false;
var elapsed = 0;

var catOldLeft;
var catNewLeft;

var deltaGuitar = 40;
var deltaDancer = 80;

// Homework Cat + Mario
var moveCat = function() {
  if (dancing === false) {
    catOldLeft = parseFloat(cat.style.left);
    catNewLeft = catOldLeft + delta;
    cat.style.left = catNewLeft + 'px';
  }

  if (catNewLeft > window.innerWidth / 2 && once === false) {
    once = true;
    if (dancing === false) {
      cat.src = 'img/dancing2.gif';
      dancing = true;
    }
  }

  if (forward) {
    marioLeft = catNewLeft - 100;
    mario.style.left = marioLeft + 'px';
  }
  if (!forward) {
    marioLeft = catNewLeft + 206;
    mario.style.left = marioLeft + 'px';
  }

  if (dancing === true) {
    elapsed += 300;
  }

  if (elapsed >= 5000) {
    cat.src = 'img/walking.gif';
    dancing = false;
  }

  if (dancing === false) {
    if (window.innerWidth - catNewLeft < 0 || catNewLeft < 0) {
      // console.log('hello');
      sign = -sign;
      cat.style.transform = 'scaleX(' + sign + ')';
      mario.style.transform = 'scaleX(' + sign + ')';
      forward = !forward;
      delta = -delta;
    }
  }
};
var timerID = setInterval(moveCat, 300);


// Move Dancing Cat
var moveDancer = function() {
  var oldRight = parseFloat(dancer.style.right);
  var newRight = oldRight + deltaDancer;
  dancer.style.right = newRight + 'px';

  if (window.innerWidth - newRight < 0 || newRight < 0) {
    deltaDancer = -deltaDancer;
  }
};
var dancerID = setInterval(moveDancer, 300);


// Guitar Cat
var moveGuitar = function() {
  var oldLeft = parseFloat(guitar.style.left);
  var newLeft = oldLeft + deltaGuitar;
  guitar.style.left = newLeft + 'px';
  degrees += 10;
  guitar.style.transform = 'rotate(' + degrees + 'deg)';

  if (window.innerWidth - newLeft < 0 || newLeft < 0) {

    deltaGuitar = -deltaGuitar;
  }
};
var guitarID = setInterval(moveGuitar, 100);


// Background Change
var changeBackground = function() {
  var randomNumber = function(min, max) {
    return min + Math.random() * (max - min);
  };
  var getColor = function() {
    var h = randomNumber(1, 360);
    var s = randomNumber(0, 100);
    var l = randomNumber(0, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  };
  document.body.style.backgroundColor = getColor();
  document.body.style.transition = 'all 3s linear';
};
var backgroundID = setInterval(changeBackground, 3000);


// Crazy Cat
var crazyPixel = function () {
  degrees +=30;
  pixelCat.style.transform = 'rotate(-' + degrees + 'deg)';
};

var growPixel = function() {
  if (pixelCat.width < 1200) {
  pixelCat.width += 10;
}

};
var pixelID = setInterval(crazyPixel, 100);


// Make things appear (from display: none)
var mario2 = document.createElement('img');
mario.src = 'img/mario2.gif';

var marioShow = setTimeout(function() {
  mario.style.display = 'block';
}, 15000);
var dancerShow = setTimeout(function() {
  dancer.style.display = 'block';
}, 20000);

var guitarShow = setTimeout(function() {
  guitar.style.display = 'block';
}, 27000);

var pixelShow = setTimeout(function() {
  pixelCat.style.display = 'block';
}, 30000);

var pixelGrow = setTimeout(function() {
  pixelCat.style.display = 'block';
  var startGrowing = setInterval(growPixel, 300);
}, 30000);



// Music
var enya = new Audio('audio/enya.mp3');
enya.play();

// Mercy Button
var stopAll = function() {
  clearInterval(backgroundID);
  clearInterval(timerID);
  clearInterval(dancerID);
  clearInterval(guitarID);
  clearInterval(pixelID);
};
var mercy = document.getElementById('mercy');
mercy.addEventListener('click', stopAll);


// Double Mercy button
var clearScreen = function() {
  document.body.innerHTML = '';
  clearInterval(backgroundID);
  document.body.style.backgroundColor = 'white';
  enya.pause();
};
var mercy2 = document.getElementById('mercy2');
mercy2.addEventListener('click', clearScreen);
