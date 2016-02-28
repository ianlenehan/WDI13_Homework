// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amount){
  resultString = String(amount) + " dollars";
  if(amount===1000000){
    resultString += " (pinky)";
  }
  return resultString;
}

console.log(DrEvil(10));
console.log(DrEvil(1000000));

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(string1, string2){
  var start1 = string1.slice(0, 2);
  var start2 = string2.slice(0, 2);
  var end1 = string1.slice(2);
  var end2 = string2.slice(2);
  return start2+end1+" "+start1+end2;
}

console.log(mixUp("dog", "dinner"));


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function(string){
  var toStar = string[0];
  var resultString = String(toStar);
  for(var i = 1; i< string.length; i++)
    if(string[i] === toStar){
      resultString += '*';
    } else {
      resultString += string[i];
    }
  return resultString;
}

console.log(fixStart("babble"));

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(string){
  if(string.length<3){
    return string;
  } else if(string.slice(-3) === "ing"){
    return string+"ly";
  } else {
    return string+"ing";
  }
}

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


var notBad = function(string){
  notPosition = string.indexOf("not");
  if(notPosition === -1){
    return string;
  }
  badPosition = string.indexOf("bad", notPosition);
  if(badPosition === -1){
    return string;
  }

  var start = string.slice(0, notPosition);
  var end = string.slice(badPosition + 3);
  return start+"good"+end;
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
