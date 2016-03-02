


var madLibs = function() {
  var storyDiv = document.getElementById('story');
  var name = document.getElementById('person').value;
  var adjective = document.getElementById('adjective').value;
  var noun = document.getElementById('noun').value;
  storyDiv.innerHTML = name + ' really ' + adjective + ' ' + noun;
};
var button = document.getElementById('lib-button');
button.addEventListener('click', madLibs);
