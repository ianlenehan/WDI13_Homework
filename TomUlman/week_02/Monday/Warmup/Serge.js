// Serge Responds
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him
// without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// To call the function, we want to be able to do something
//like this - Serge.respondTo( "Some string here" )
//
// What do you need to do?
//
// Make your HTML and JS files
// Make sure you work with an object to get this
// working - remember to keep your functions small!
// Figure out the appropriate response
// If you are flying through, do something cool with
// the CSS or work more on the homework from last night

var Serge = {
respondTo:  function(speech) {

var shout = speech.toUpperCase();

    if ((speech === false) || (speech.trim() === "")) {
    console.log("Serge says 'Fine. Be that way!'");

  } else if (speech === shout) {
    console.log("Serge says 'Woah, Chill out!'");


  } else if (speech.endsWith("?")) {
    console.log("Serge says 'Sure'");

    } else {
    console.log("Serge says 'Whatever'");
  }
 }
};
