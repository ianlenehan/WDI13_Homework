// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make
// a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

// var button = document.getElementById("lib-button");
// var onClick = function(event) {
//     var noun = document.getElementById("noun").value;
//     var adjective= document.getElementById("adjective").value;
//     var person = document.getElementById("person").value;
//     alert(person + " really likes " + adjective + " " + noun);
// };
// button.addEventListener('click', onClick);


var noun = document.getElementById('noun');
var adjective = document.getElementById('adjective');
var name = document.getElementById('name');
var storyDiv = document.getElementById('story');
var button = document.getElementById('lib-button');

var makeMadLib = function(){
  var story = [person.value, 'really likes', adjective.value, noun.value].join(' ');
  storyDiv.innerHTML = story;
};

button.addEventListener('click', makeMadLib);
