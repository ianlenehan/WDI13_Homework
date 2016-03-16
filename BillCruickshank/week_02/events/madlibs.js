var heading = document.getElementsByTagName('h1')[0];
var mouseLogger = function(event) {
  console.log(event.x, event.y);
}
heading.addEventListener("mousemove", mouseLogger)


var button = document.getElementById("lib-button");
var story = document.getElementById("story");
var noun = document.getElementById("noun");
var adjective = document.getElementById("adjective");
var person = document.getElementById("person");

var makeMadLib = function() {
  story.innerText += [noun.value, adjective.value, person.value].join(" ");
}

button.addEventListener('click', makeMadLib);
