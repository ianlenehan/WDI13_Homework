// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var pageNode = document.getElementsByTagName('body')[0];
pageNode.style.fontFamily = "Arial, sans-serif";

var nickname = document.getElementById('nickname');
nickname.innerHTML = 'don';
