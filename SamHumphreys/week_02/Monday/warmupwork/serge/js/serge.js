// Serge Responds
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// To call the function, we want to be able to do something like this - Serge.respondTo( "Some string here" )
//
// What do you need to do?
//
// Make your HTML and JS files
// Make sure you work with an object to get this working - remember to keep your functions small!
// Figure out the appropriate response


var serge = {
      respondTo: function (input) {
        if (input === '') {
          response.silence();
        } else if (input[input.length - 1] === '?') {
          response.question();
        } else if (input === input.toUpperCase()) {
          response.allCaps();
        } else {
          response.other();
        }
      }
}

var response = {
  silence: function () {
    console.log('Fine. Be that way');
  },
  allCaps: function () {
    console.log('Woah, chill out!');
  },
  question: function () {
    console.log('Sure');
  },
  other: function () {
    console.log('Whatever');
  }
}
