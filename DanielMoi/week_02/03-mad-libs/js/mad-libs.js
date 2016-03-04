console.log(noun);

var button = document.getElementById('lib-button');
var story = document.getElementById('story');

var printStuff = function(event) {
  var noun = document.getElementById('noun').value;
  var person = document.getElementById('person').value;
  var adjective = document.getElementById('adjective').value;
  var story = document.getElementById('story');
  story.innerHTML = person + ' loves to play chess with ' + adjective.toLowerCase() + ' ' + noun.toLowerCase() + 's.';
};

button.addEventListener('click', printStuff);
