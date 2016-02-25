console.log("Hello");

// have a function which accepts an argument

var raindrops = function ( num ) {
  var message = "";
  if ( num % 3 === 0 ) {
    message += "Pling";
  }
  if ( num % 5 === 0 ) {
    message += "Plang";
  }
  if ( num % 7 === 0 ) {
    message += "Plong";
  }
  if ( message.length === 0 ) {
    message += num + "";
  }

  return message;
};

console.log(raindrops(2));
