var button = document.getElementById('lib-button');

var onClick = function(event){

  var noun = document.getElementById('noun').value;
  var adjective = document.getElementById('adjective').value;
  var name = document.getElementById('person').value;

  return console.log(name + ' ate the ' + adjective  + " dog's " + noun);
}

button.addEventListener('click', onClick);
