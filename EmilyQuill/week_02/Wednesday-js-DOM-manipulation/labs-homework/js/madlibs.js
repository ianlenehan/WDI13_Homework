
var libButton = document.getElementById('lib-button');
var makeMadLib = function () {
  var noun = document.getElementById('noun').value;
  var adjective = document.getElementById('adjective').value;
  var person = document.getElementById('person').value;

  var story = document.getElementById('story');
  story.innerHTML = person + " really likes " + adjective + " " + noun;
};

libButton.addEventListener('click', makeMadLib);
