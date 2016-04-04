var LETTERS = "abcdefghijklmnopqrstuvwxyz";
var REVERSED_LETTERS = LETTERS.split('').reverse().join('');

console.log( "Letters: \n", LETTERS );
console.log( "Reversed Letters: \n", REVERSED_LETTERS );

var encode = function ( text ) {
  text = text.toLowerCase();
  var encodedText = "";
  for ( var i = 0; i < text.length; i++ ) {
    var indexOfChar = LETTERS.indexOf( text[i] );
    var reverseChar = REVERSED_LETTERS.charAt( indexOfChar );
    encodedText += reverseChar;
  }
  console.log( encodedText );
  return encodedText;
}

var decode = function ( text ) {  //Not actually necessary - thanks Bill.
  text = text.toLowerCase();
  var decodedText = "";
  for ( var i = 0; i < text.length; i++ ) {
    var indexOfChar = REVERSED_LETTERS.indexOf( text[i] );
    var reverseChar = LETTERS.charAt( indexOfChar );
    decodedText += reverseChar;
  }
  console.log( decodedText );
  return decodedText;
}

var encodedHello = encode( "hello" );
var decodedHello = decode( encodedHello );
