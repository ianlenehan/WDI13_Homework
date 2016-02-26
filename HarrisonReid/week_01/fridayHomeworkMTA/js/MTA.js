//////////////------------------ NO LOOP MTA -------------------////////////////

var LINES = {
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var planTrip = function(fromLine, fromStation, toLine, toStation) {
  var totalStops;
  var departureIndex;
  var arrivalIndex;
      // CHECK DEPARTURE AND ARRIVAL STATIONS AREN'T THE SAME
  if (fromStation === toStation) {
    console.log("You are already at your destination, you fool.");
    return;
  }
      // CHECK INPUTS FOR FROM LINE AND TO LINE ARE VALID.
  if (!(LINES[fromLine]) || !(LINES[toLine])) {
    console.log("Please ensure you input valid information.");
    return;
  }
      // CHECK INPUTS FOR FROM STATION AND TO STATION AND ENSURE THEY EXIST FOR GIVEN LINES
  if (!((LINES)[fromLine].includes(fromStation)) || !((LINES)[toLine].includes(toStation))) {
    console.log("It appears that some of the stations and lines don't match up. Please double check your inputs.");
    return;
  }

  if (fromLine === toLine) {
        // DEAL WITH CASE WHERE NO LINE CHANGE REQUIRED
    var lineOfTravel = LINES[fromLine];
        // Test if departure stop is before arrival stop in lineOfTravel array order, if not, reverse array.
    if (lineOfTravel.indexOf(fromStation) > lineOfTravel.indexOf(toStation)) {
      lineOfTravel.reverse();
    }
        // Get and store index of departure and arrival stations
    departureIndex = lineOfTravel.indexOf(fromStation);
    arrivalIndex = lineOfTravel.indexOf(toStation);
        // Return array of all stops excluding departure stop
    var stops = lineOfTravel.slice(departureIndex + 1, arrivalIndex + 1);
    totalStops = (stops.length + 1);
        // LOG THE JOURNEY:
    console.log("To get from " + fromStation + " station to " + toStation + " station on the " + toLine + " line, follow these instructions: ");
    console.log("Get on at " + fromStation + " station on the " + fromLine + " line. You must then travel through the following stops: " + stops.join(", ") + ".");
    console.log("Get off at " + toStation + " station.");
    console.log("Your journey consisted of " + totalStops + " stops in total, including the departure and arrival stations.");
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
    departureIndex = departureLine.indexOf(fromStation);
    var departureLineUSIndex = departureLine.indexOf("Union Square");
    arrivalIndex = arrivalLine.indexOf(toStation);
    var arrivalLineUSIndex = arrivalLine.indexOf("Union Square");
        // Assign variable containing the stops the commuter will take on departure line, including union square changeover.
    var departureLineStops = departureLine.slice(departureIndex + 1, departureLineUSIndex + 1);
        // Assign variable containing the stops the commuter will take on arrival line, excluding Union Square changover.
    var arrivalLineStops = arrivalLine.slice(arrivalLineUSIndex + 1, arrivalIndex + 1);
        // Assign variable containing total number of stops travelled through (Sum of number of stops on each line)
    totalStops = (departureLineStops.length + arrivalLineStops.length + 1);

        // LOG THE JOURNEY:
    console.log("To get from " + fromStation + " station on the " + fromLine + " line to " + toStation + " on the " + toLine + " line, follow these instructions: ");
    console.log("Get on at " + fromStation + " station on the " + fromLine + " line. You must then travel through the following stops: " + departureLineStops.join(", ") + ".");
    console.log("Change at Union Square to the " + toLine + " line.");
    console.log("Your journey continues through the following stops: " + arrivalLineStops.join(", ") + ".");
    console.log("Get off at " + toStation + " station.");
    console.log("Your journey consisted of " + totalStops + " stops in total, including the departure and arrival stations.");

  }

};

planTrip('6', 'Astor Place', 'N', 'Times Square');
