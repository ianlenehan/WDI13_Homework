/*DrEvil

Create a function called DrEvil. It should take a single argument, an amount,
 and return ' dollars', except it will add '(pinky)' at the end if the amount
 is 1 million. For example:*/

 var drEvil = function(number) {
   if (number === 1000000) {
    console.log(number + ' dollars (pinky)');
    return (number + ' dollars  (pinky)');
  } else {
    console.log(number + ' dollars');
    return (number + ' dollars');
 }
 }

 drEvil(500)
 drEvil(1000000)
