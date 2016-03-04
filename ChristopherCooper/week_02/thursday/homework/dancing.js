var cat = document.getElementsByTagName('img')[1];
var nyan = document.getElementsByTagName('img')[0];
var getWindow = window.innerWidth;
var halfWindow = getWindow / 2;
var fifthWindow = getWindow / 9;
var counter;
cat.style.left = '0px';
nyan.style.display = 'none';

var move = function() {
    var moveLeft = parseInt(cat.style.left);
    var newMoveLeft = moveLeft + 10;
    cat.style.left = newMoveLeft + 'px';
    var getImgWidth = cat.width;
    var testWindow = ((halfWindow + fifthWindow) - getImgWidth);
    if (moveLeft >= testWindow) {
        if (counter !== 1) {
            clearInterval(intervalID);
            intervalID = setTimeout(displayForTen, 1000);
        } else {
            clearInterval(intervalID);
            nyan.style.display = "none";
            cat.style.display = "block";
            intervalID = setInterval(move, 100);
        }
    }
};

var tenSecs = setTimeout(displayForTen, 1000);

var displayForTen = function() {
    cat.style.display = "none";
    nyan.style.display = "block";
    intervalID = setInterval(move, 10000)
    counter = 1;
};


var intervalID = setInterval(move, 100);
