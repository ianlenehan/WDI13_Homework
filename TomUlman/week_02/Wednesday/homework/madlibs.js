console.log("hi");


// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")




var button = document.getElementById('lib-button');

var makeMadLib = function(noun, adjective, name) {
  noun = document.getElementById('noun').value;
  adjective = document.getElementById('adjective').value;
  name = document.getElementById('person').value;

  alert(name + " loves " + adjective + " " + noun);
};

button.addEventListener('click', makeMadLib);
