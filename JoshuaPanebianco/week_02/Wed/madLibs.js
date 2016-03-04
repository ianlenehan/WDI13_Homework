
  //<input id="noun" type="text">
  //<input id="adjective" type="text">
  //<input id="person" type="text">

var body = document.getElementsByTagName('body')[0];

var mouseLogger = function(event) {
  console.log("x:", event.clientX, "y:", event.clientY);
};

body.addEventListener("mousemove" mouseLogger);


  var noun = document.getElementById('noun');
  var adjective = document.getElementById('adjective');
  var person = document.getElementById('person');
  var button = document.getElementById('lib-button');
  var afterClick = function(event) {
    var result = noun.value + " really likes " + adjective.value + " " + person.value;
    alert(result);
  }
  button.addEventListener("click", afterClick);
