// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.

serge = {
  respondTo : function(string) {
    if (string.endsWith("?")) {
      return "Sure.";
    } else if (string.trim() === "") {
      return "Fine, be that way!";
    } else if (string === string.toUpperCase()) {
      return "Woah, chill out!";
    } else  {
      return "Whatever.";
    }
  }
}

console.log(serge.respondTo("???"));
console.log(serge.respondTo("MERDE"));
console.log(serge.respondTo("      \n\n\n\n    "));
console.log(serge.respondTo("Blah"));
