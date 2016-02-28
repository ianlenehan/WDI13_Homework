//planTrip('N', 'Times Square', '6', '33rd');
// This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th,
// 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

//slice  reverse  indexOf

var lines = {
lineN: ['34th', '28thN', '23rdN', 'Union Square','8thN'],
lineL: ['8thL','6th','Union Square', '3rd','1st'],
line6: ['Grand Central', '33rd', '28th6', '23rd6', 'Union Square', 'Astor Place']
}


var goStops = [];
var backStops = [];

//Trip in one Line

//1

var goForwards = function(firstLine, initialStop, finalStop){
  goStops = [];
  var goForwards = lines[firstLine];
  var initialIndex = goForwards.indexOf(initialStop);
  var finalIndex = goForwards.indexOf(finalStop);
  for (var i = initialIndex; i <= finalIndex; i++) {
    goStops.push(goForwards[i]);
  }
  var message = "You must travel trough the following stops on the " ;
  console.log(message + firstLine + ": " + goStops);
  return goStops;
};

//2

var goBackwards = function (firstLine, initialStop, finalStop) {
  backStops = [];
  var goBackwards = lines[firstLine];
  var initialIndex = goBackwards.indexOf(initialStop);
  var finalIndex = goBackwards.indexOf(finalStop);
  for (var i = initialIndex; i >= finalIndex ; i--) {
      backStops.push(goBackwards[i]);
  }
  var message = "You must travel trough the following stops on the  " ;
  console.log(message + firstLine + ": " + backStops);
  return backStops;
};

//  Two Lines

var planTrip = function(firstLine, initialStop, secondLine, finalStop) {
  goStops = [];
  backStops = [];
    var planTrip = lines[firstLine];
    var initialIndex = planTrip.indexOf(initialStop);
    var finalIndex = planTrip.indexOf(finalStop);
    var unionIdenx1 = planTrip.indexOf('Union Square');

//Same Lines

  if ( firstLine === secondLine ){
    if ( initialIndex < finalIndex) {
     goForwards(firstLine, initialStop, finalStop);
    } else {
     goBackwards(firstLine, initialStop, finalStop);
  }
  var totalAmountOfStops = goStops.length + backStops.length;
  console.log("Total amount of stops: ", totalAmountOfStops);
  return "Trip Finished";

 }
// Diferents Lines

// 1st - go from initialStop to 'Union Square';

  if (initialIndex < unionIdenx1) {
    goForwards(firstLine, initialStop, "Union Square");
  } else {
    goBackwards(firstLine, initialStop, "Union Square");
  }
  console.log('Change at Union Square.');


// 2nd -  go from 'Union Square' to finalStop;

  if (finalIndex < unionIdenx1) {
    goForwards(secondLine, "Union Square", finalStop);
  } else {
    goBackwards(secondLine, "Union Square", finalStop);
  }
  var totalAmountOfStops = goStops.length + backStops.length;
  console.log("Total amount of stops: ", totalAmountOfStops);
  return "Trip Finished";
};
