//////////////---------------------- MTA ----------------------////////////////

var LINES = {
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var planTrip = function(fromLine, fromStation, toLine, toStation) {
  if (fromLine === toLine) {
    // Deal with case where two stops on the same line
  } else {
    // DEAL WITH CASE WHERE LINE CHANGE REQUIRED.
    // Firstly assign departureLine and arrivalLine variables from the correct line constant.
    var departureLine = LINES[fromLine];
    var arrivalLine = LINES[toLine];

    // Check that the index of the departure stop is less than that of Union Square.
    // If not, reverse the array so that we travel from left to right, so to speak, to keep array calculations simpler later on.
    if (departureLine.indexOf(fromStation) > departureLine.indexOf("Union Square")) {
      departureLine.reverse();
    }
    //Check that index of the arrival stop is greater than that of Union Square on the arrivalLine.
    //If not, reverse the array, again to keep travel from left to right.
    if (arrivalLine.indexOf(toStation) < arrivalLine.indexOf("Union Square")) {
      arrivalLine.reverse();
    }
    // Now that arrays are in the desired order, assign variables to the index of fromStation and Union Square on
    // departure line, and toStation and Union Square on the arrival line.
    var departureIndex = departureLine.indexOf(fromStation);
    var departureLineUSIndex = departureLine.indexOf("Union Square");

    var arrivalIndex = arrivalLine.indexOf(toStation);
    var arrivalLineUSIndex = arrivalLine.indexOf("Union Square");
    




  }

};

planTrip("L", "6th", "N", "34th");
