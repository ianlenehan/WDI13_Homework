//////////////------------------ THE MTA -------------------///////////////////

// Returns the index of the given station on the given line
var stationIndex = function(line, stationName) {
  for (var i = 0; i < LINES[line].length; i++) {
    if (LINES[line][i].stop === stationName) {
      return i;
    }
  }
};

// Returns the 'interchange' stops between the two provided lines.
var findInterchanges = function(fromLine, toLine) {
  var possibleInterchanges = [];
  for (var i = 0; i < LINES[fromLine].length; i++) {
    if (LINES[fromLine][i].changeTo.includes(toLine)) {
      possibleInterchanges.push(LINES[fromLine][i].stop);
    }
  }
  return possibleInterchanges;
};

// Checks through each route in the provided 'possibleRoutes' array, and returns the route with the least stops.
var checkShortestRoute = function(possibleRoutes) {
  var shortestRouteIndex = "";
  var shortestNumberOfStops;
  for (var i = 0; i < possibleRoutes.length; i++) {
    var counter = 0;
    for (j = 0; j < possibleRoutes[i].length; j++) {
      counter += possibleRoutes[i][j].trip.length;
    }
    if (i === 0) {
      shortestNumberOfStops = counter;
      shortestRouteIndex = 0;
    } else {
      if (counter < shortestNumberOfStops) {
        shortestRouteIndex = i;
      }
    }
  }
  return possibleRoutes[shortestRouteIndex];
};

// Builds and returns a trip object, containing a 'line' indentifier.
// Each 'trip oject' consists of a 'line', and 'trip', an array of stops.
var buildTripObject = function(line, startStation, endStation) {
  var tripLineArray = LINES[line];
  // Reverse array of stops if required, keeping direction of travel left to right through array of stops.
  if (stationIndex(line, startStation) > stationIndex(line, endStation)) {
    tripLineArray.reverse();
  }
  tripLineArray = tripLineArray.slice(stationIndex(line, startStation), stationIndex(line, endStation) + 1);
  tripObject = {
    "line": line,
    "trip": tripLineArray
  };
  return tripObject;
};

// findPossibleRoutes returns an array of possible routes, with each 'route' an array of 'trip objects'
var findPossibleRoutes = function(fromLine, fromStation, toLine, toStation) {
  var possibleRoutes = []; // Builds array of possible routes, each route consisting of n tripObjects
  if (fromLine === toLine) { //  Check if stations on same line, if so push only possible route to  possibleRoutes
    possibleRoutes.push([buildTripObject(fromLine, fromStation, toStation)]);
  } else { // Otherwise, check for all intersections between the two lines and push route through each intersection to possibleRoutes
    var possibleInterchanges = findInterchanges(fromLine, toLine);
    for (var i = 0; i < possibleInterchanges.length; i++) {
      var route = [];
      route.push(buildTripObject(fromLine, fromStation, possibleInterchanges[i]));
      route.push(buildTripObject(toLine, possibleInterchanges[i], toStation));
      possibleRoutes.push(route);
    }
  }
  return possibleRoutes;
};

// Checks the validity of the input data.
var isInputValid = function(fromLine, fromStation, toLine, toStation) {
  if (!(LINES[fromLine]) || !(LINES[toLine])) {  // Check that fromLine and toLine actually exist.
    console.log("One of the line name's you've entered is invalid, please ensure you input valid information.");
    return false;
  } else if ((stationIndex(fromLine, fromStation) === undefined) || (stationIndex(toLine, toStation) === undefined)) { // Check stations exist for given lines.
    console.log("It appears that some of the stations and lines don't match up. Please double check your inputs.");
    return false;
  } else if (fromStation === toStation && fromLine === toLine) {  // Check departure and arrival stations are unique.
    console.log("You are already at your destination, you fool.");
    return false;
  } else {
    return true;
  }
};

// Takes an array of 'trip objects', each corresponding to a leg of the overall journey
var printTripSummary = function(tripObjects) {
  var totalStops = - (tripObjects.length - 1); // Sets the initial totalStops counter to account for interchange stations, otherwise counted twice
  console.log("To get from " + tripObjects[0].trip[0].stop + " station on the " + tripObjects[0].line + " line to " + tripObjects[tripObjects.length - 1].trip[1].stop + " station on the " + tripObjects[tripObjects.length - 1].line + " line, follow these instructions: ");
  console.log("Get on at " + tripObjects[0].trip[0].stop + " station on the " + tripObjects[0].line + " line.");
  for (var i = 0; i < tripObjects.length; i++) {
    totalStops += tripObjects[i].trip.length; // Adds the trip leg to the total number of stops
    interveningStopObjects = tripObjects[i].trip.slice(1, (tripObjects[i].trip.length -1));
    var interveningStopArray = [];
    // Build an array of the intervening 'travel through' stops
    for (var j = 0; j < interveningStopObjects.length; j++) {
      interveningStopArray.push(interveningStopObjects[j].stop);
    }
    // Print the 'travel through' statement if at least one station to travel through.
    if (interveningStopArray.length > 0) {
      console.log("You must then travel through the following stops: " + interveningStopArray.join(", ") + ".");
    }
    // Print the 'get off at' statement at the end of each trip leg
    console.log("Get off at " + tripObjects[i].trip[tripObjects[i].trip.length -1 ].stop + " station.");
    // Print the 'change lines' statement if there is still a stage of the journey left
    if (tripObjects.length > 1 && i !== tripObjects.length - 1) {
      console.log("Change to the " + tripObjects[i+1].line + " line.");
    }
  }
  // Print 'end of journey statement'
  console.log("You have now reached your destination. Your journey consisted of " + totalStops + " stops in total, including the departure and arrival stations.");
  console.log(" ");
};

// Runs the trip planner
var planTrip = function(fromLine, fromStation, toLine, toStation) {
  if (!(isInputValid(fromLine, fromStation, toLine, toStation))) {
    return;
  }
  var shortestRoute = checkShortestRoute(findPossibleRoutes(fromLine, fromStation, toLine, toStation));
  printTripSummary(shortestRoute);
};

///////// --------SETUP A: ONLY UNION SQUARE AS INTERCHANGE ------/////////////

var LINES = {
  'L': [{ stop: '8th', changeTo: []
      },{ stop: '6th', changeTo: []
      },{ stop: 'Union Square', changeTo: ['N', '6']
      },{ stop: '3rd', changeTo: []
      },{ stop: '1st', changeTo: []
  }],

 'N':  [{ stop: 'Times Square', changeTo: []
      },{ stop: '34th', changeTo: []
      },{ stop: '28th', changeTo: []
      },{ stop: '23rd', changeTo: []
      },{ stop: 'Union Square', changeTo: ['L', '6']
      },{ stop: '8th', changeTo: []
  }],

  '6': [{ stop: 'Grand Central', changeTo: []
      },{ stop: '33rd', changeTo: []
      },{ stop: '28th', changeTo: []
      },{ stop: '23rd', changeTo: []
      },{ stop: 'Union Square', changeTo: ['L', 'N']
      },{ stop: 'Astor Place', changeTo: []
   }]
};

//////////////-------------- SETUP A TEST TRIPS ------------------//////////////

console.log(" ---------- NEW TRIP ---------");
planTrip('6', 'Astor Place', 'N', 'Times Square');
console.log(" ---------- NEW TRIP ---------");
planTrip('6', '33rd', 'L', '1st');
console.log(" ---------- NEW TRIP ---------");
planTrip('N', '8th', 'L', '8th');
console.log(" ---- NEW TRIP: STATIONS SAME LINE ----");
planTrip('N', 'Times Square', 'N', '8th');
console.log(" ---- NEW TRIP: ALREADY AT DESTINATION ----");
planTrip('N', '34th', 'N', '34th');
console.log(" ---- NEW TRIP: INVALID LINE NAME ----");
planTrip('A', 'Times Square', 'N', '8th');
console.log(" ---- NEW TRIP: INVALID STATION NAME ----");
planTrip('N', 'Town Hall', 'N', '8th');




////////// ---------SETUP B: MULTIPLE INTERCHANGE STATIONS --------/////////////

/*

This setup adds a fourth line, line 7 (another actual line) which adds two
further intersection points at Grand Central and Times Square. My code is able
to handle requests along all four lines as long as ONLY ONE chageover is required
(Still working on multiple changeovers...). It will detect the available
interchange station automatically. It's also set up to find the shortest route
where multiple possible routes are available, but it haven't really run into this
situation as unable to handle more than one changeover. Feel free to try it out
by commenting out the LINES object and test trips above, and uncommenting the
ones below:

*/

// var LINES = {
//   'L': [{ stop: '8th', changeTo: []
//       },{ stop: '6th', changeTo: []
//       },{ stop: 'Union Square', changeTo: ['N', '6']
//       },{ stop: '3rd', changeTo: []
//       },{ stop: '1st', changeTo: []
//   }],
//
//  'N':  [{ stop: 'Times Square', changeTo: []
//       },{ stop: '34th', changeTo: []
//       },{ stop: '28th', changeTo: []
//       },{ stop: '23rd', changeTo: []
//       },{ stop: 'Union Square', changeTo: ['L', '6']
//       },{ stop: '8th', changeTo: []
//   }],
//
//   '6': [{ stop: 'Grand Central', changeTo: []
//       },{ stop: '33rd', changeTo: []
//       },{ stop: '28th', changeTo: []
//       },{ stop: '23rd', changeTo: []
//       },{ stop: 'Union Square', changeTo: ['L', 'N']
//       },{ stop: 'Astor Place', changeTo: []
//    }],
//
//    '7': [{ stop: 'Vernon Blvd', changeTo: []
//        },{ stop: 'Grand Central', changeTo: ['6']
//        },{ stop: 'Times Square', changeTo: ['N']
//        },{ stop: 'Hudson Yards', changeTo: []
//     }]
// };


//////////////------------- SETUP B TEST TRIPS -------------------//////////////


// console.log(" ---------- NEW TRIP ---------");
// planTrip('7', 'Hudson Yards', '6', 'Astor Place');
// console.log(" ---------- NEW TRIP ---------");
// planTrip('L', '1st', '6', '33rd');
// console.log(" ---------- NEW TRIP ---------");
// planTrip('7', 'Grand Central', 'N', '23rd');
// console.log(" ---- NEW TRIP: STATIONS SAME LINE ----");
// planTrip('7', 'Hudson Yards', '7', 'Grand Central');
// console.log(" ---- NEW TRIP: ALREADY AT DESTINATION ----");
// planTrip('N', '34th', 'N', '34th');
// console.log(" ---- NEW TRIP: INVALID LINE NAME ----");
// planTrip('A', 'Times Square', '8', '8th');
// console.log(" ---- NEW TRIP: INVALID STATION NAME ----");
// planTrip('N', 'Town Hall', 'N', 'Bondi Junction');
