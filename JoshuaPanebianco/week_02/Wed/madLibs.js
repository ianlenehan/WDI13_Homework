
  //<input id="noun" type="text">
  //<input id="adjective" type="text">
  //<input id="person" type="text">

  var noun = document.getElementById('noun');
  var adjective = document.getElementById('adjective');
  var person = document.getElementById('person');
  var button = document.getElementById('lib-button');
  var afterClick = function(event) {
    var result = noun.value + " " + adjective.value + " " + person.value;
    alert(result);
  }
button.addEventListener("click", afterClick);
