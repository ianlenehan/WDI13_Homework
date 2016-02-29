var serge = {
  respondTo: function (string) {
    if ( this.isQuestion(string) ) {
      console.log('Sure');
    } else if ( this.sayNothing(string) ) {
      console.log('Fine, be like that');
    } else if ( this.allCaps(string) ) {
      console.log('Woah! Chill out');
    } else {
      console.log('Whatever');
    }
  },
  isQuestion: function(string) {
    string = string.trim();
    return ( string.endsWith('?') );
  },
  allCaps: function(string) {
    string = string.trim();
    return ( string === string.toUpperCase() );
  },
  sayNothing: function(string) {
    string = string.trim();
    return ( string === '' );
  }
}
