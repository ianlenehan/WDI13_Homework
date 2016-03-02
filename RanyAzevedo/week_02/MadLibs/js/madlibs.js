var makeMadLibs = document.getElementById('lib-button');
var madlibs = function() {
  var noun = document.getElementById('noun').value;
  var adjective = document.getElementById('adjective').value;
  var name = document.getElementById('person').value;

  makeMadLibs.innerHTML = name + " really likes " + noun + " " + adjective;
};

makeMadLibs.addEventListener('click', madlibs);
