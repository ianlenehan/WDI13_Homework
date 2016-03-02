// serge object

var Serge = {

respondTo: function(string) {
  if (this.isQuestion(string)) {
    console.log('Sure.');
  }
},

isQuestion: function(string) {
  string = string.trim();
  if ( string.endsWith("?")) {
    return true;
  } else {
    return false;
  }
},



};
Serge.respondTo('Hello?  ');
