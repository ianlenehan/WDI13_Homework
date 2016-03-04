// <!-- Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.") -->

var button = document.getElementById('lib-button'); // get button element

var makeMadLib = function() {
  var noun = document.getElementById('noun').value;
  var adjective = document.getElementById('adjective').value;
  var person = document.getElementById('person').value;
  var storyDiv = document.getElementById('story');
  storyDiv.innerText = person + " really " + adjective + " " + noun +'s.';
};

button.addEventListener('click', makeMadLib);
