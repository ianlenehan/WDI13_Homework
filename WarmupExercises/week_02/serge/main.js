// Serge object.

var Serge = {

  respondTo: function(string) {
    if ( this.isQuestion(string) ) {
      console.log("Sure.");
    } else if ( this.sayNothing(string) ) {
      console.log("Fine. Be that way.");
    } else if ( this.allCaps(string) ) {
      console.log("Woah, chill out!");
    } else {
      console.log("Whatever.");
    }
  },

  isQuestion: function(string) {
    // string = string.trim();
    // if ( string.endsWith("?") ) {
    //   return true;
    // } else {
    //   return false;
    // }
    return ( string.trim().endsWith("?") );
  },

  allCaps: function(string) {
    // if ( string === string.toUpperCase() ) {
    //   return true;
    // } else {
    //   return false;
    // }
    return ( string === string.toUpperCase() );
  },

  sayNothing: function(string) {
    // string = string.trim();
    // if ( string === "" ) {
    //   return true;
    // } else {
    //   return false;
    // }
    return ( string.trim() === "" );
  },
};

Serge.respondTo("Hello?   ");
Serge.respondTo("HELLOOOOO    ");
Serge.respondTo("      ");
Serge.respondTo("Hello mate.");
