/* Create a new Javascript file and link to it with a script tag at the bottom.
Create a variable to store a reference to the img.
Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property. */

//console.log("hello world");

var catWalk = function() {
  var img = document.getElementsByTagName('img')[0];
  img.style.right = parseInt(img.style.right)+5 + "px";
  if (parseInt(img.style.left) > window.innerWidth) {
    img.style.right = "0px";
  }
  if (parseInt(img.style.left) <= window.innerWidth / 2) {
    clearInterval(100);
  }
};
window.setInterval(catWalk, 50);
