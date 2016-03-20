var heading = document.getElementsByTagName('h1')[0];
var mouseLogger = function (event) {
  console.log("x:", event.clientX, "y:", event.clientY);
}

heading.addEventListener('mousemove', mouseLogger)


//MadLibs
var noun = document.getElementById('noun');
var storyDiv = document.getElementById('story');
var adj = document.getElementById('adjective');
var person = document.getElementById('person');
var button = document.getElementById('lib-button');

var makeMadLib = function () {
  var story = [person.value, "really likes", adj.value, noun.value].join(' ');

  storyDiv.innerHTML = story;
};

button.addEventListener('click', makeMadLib)
