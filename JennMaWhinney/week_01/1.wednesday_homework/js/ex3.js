/*MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space)
slicing out and swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'*/

var splitString = function(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    console.log('The original string is: "' + stringToSplit + '"');
    console.log('The separator is: "' + separator + '"');
    console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
  }
var mixUp = function (x, y) {
  return (x + " " + y);
  var str1 = x;
  var str2 = y;
    var cut = function (x, y) {

    }
}
mixUp("pea", "pod");
