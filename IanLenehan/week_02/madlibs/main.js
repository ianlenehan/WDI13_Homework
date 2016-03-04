var button = document.getElementById('lib-button');

var makeMadLib = function (noun, adj, person) {
  var noun = document.getElementById('noun').value;
  var adj = document.getElementById('adjective').value;
  var person = document.getElementById('person').value;
  var story = person + " has an obsession with " + adj + " " + noun;
  alert(story);
};

button.addEventListener('click', makeMadLib)
