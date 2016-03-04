//This works!!!//
var background = document.body.style.backgroundImage= "url('princess.jpg)";
var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
img.style.top = '450px';
img.style.right = parseInt(window.innerWidth);
//
var catWalkRight = function() {
    var oldLeft = parseInt(img.style.left);
    var newLeft = oldLeft + 1;

    img.style.left = newLeft +'px';

    if (parseInt(img.style.left) < (window.innerWidth)) {
        clearInterval(img.style.left);
    } else {
      img.style.left = 0;
    }
};

window.setInterval(catWalkRight, 50);
var timerID = setInterval(catWalkRight, 5);


//catback...This doesn't work :-(//

// var img = document.getElementsByTagName('img')[0];
// img.style.right = parseInt(window.innerWidth);
// img.style.left = '0px';
//
// var catWalkLeft = function() {
//
//     var oldRight = img.style.right;
//     var newRight = (oldRight - 1);
//
//     img.style.right = newRight +'px';
//
//     if (parseInt(img.style.right) > '0px') {
//       console.log('walking!');
//         clearInterval(img.style.right);
//     }
// };
//
// window.setInterval(catWalkLeft, 50);
