<<<<<<< HEAD
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

var lines = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  findStop: function(line, station) {
    return lines[line].indexOf(station);
  }
};

var planTrip = function(startLine, startStation, endLine, endStation) {

  if (endLine === undefined || endLine === startLine) {
    var journey = [];
    var journeyDetails;

    if (lines.findStop(startLine, startStation) === lines.findStop(startLine, endStation)) {
      journeyDetails = null; // you have nowhere to go -- you're already there.
    } else {
      if (lines.findStop(startLine, startStation) > lines.findStop(startLine, endStation)) {
        // start index > end index: backwards loop
        for (var i = lines.findStop(startLine, startStation) - 1; i >= lines.findStop(startLine, endStation); i--) {
          journey.push(lines[startLine][i]);
        }
        journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
        var stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
      } else {
        // start index < end index: forwards loop
        for (var i = lines.findStop(startLine, startStation) + 1; i <= lines.findStop(startLine, endStation); i++) {
          journey.push(lines[startLine][i]);
        }
        journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
        var stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
      }
    }
    if (journeyDetails === null) {
      console.log("It looks like you're already there..");
    } else {
      console.log(journeyDetails);
      console.log("Total stops: " + stops);
    }

  } else {
    firstLeg = []; // will capture all stations travelled through on first leg
    secondLeg = []; // will capture all stations travelled through on second leg

    if (lines.findStop(startLine, startStation) > lines.findStop(startLine, "Union Square")) {
      // start index > end index: backwards loop
      for (var i = lines.findStop(startLine, startStation) - 1; i >= lines.findStop(startLine, "Union Square"); i--) {
        firstLeg.push(lines[startLine][i]);
      }
    } else {
      // for all the stops BETWEEN start station and Union Square (including US), add the station name to an Array
      for (var i = lines.findStop(startLine, startStation) + 1; i <= lines.findStop(startLine, "Union Square"); i++) {
        firstLeg.push(lines[startLine][i]);
      }
    }

    console.log("You must travel through the following stops on the " + startLine + " line: " + firstLeg.join(", ") + ".");
    console.log("Change at Union Square.");

    if (lines.findStop(endLine, "Union Square") > lines.findStop(endLine, endStation)) {
      // Travelling backwards -- need a backwards loop!
      for (var i = lines.findStop(endLine, "Union Square") - 1; i >= lines.findStop(endLine, endStation); i--) {
        secondLeg.push(lines[endLine][i]);
      }
    } else {
      // for all the stops BETWEEN Union Square (new line) and destination, add the station name to an Array
      for (var i = lines.findStop(endLine, "Union Square") + 1; i <= lines.findStop(endLine, endStation); i++) {
        secondLeg.push(lines[endLine][i]);
      }
    }


    console.log("Your journey continues through the following stops on the " + endLine + " line: " + secondLeg.join(", ") + ".");

    var firstLegStops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, "Union Square")));
    var secondLegStops = Math.abs((lines.findStop(endLine, "Union Square")) - (lines.findStop(endLine, endStation)));

    console.log("Total stops: " + (firstLegStops + secondLegStops));
  }

}







//   findLine: function (station) {
//     var results = [];
//     for (var i = 0; i < lines['N'].length; i++ ) {
//       if (lines['N'][i] === station) {
//         results.push("Line N, stop " +i);
//       }
//     }
//     for (var j = 0; i < lines['L'].length; i++ ) {
//       if (lines['L'][i] === station) {
//         results.push("Line L, stop " +i);
//       }
//     }
//     for (var k = 0; i < lines['6'].length; i++ ) {
//       if (lines['6'][i] === station) {
//         results.push("Line 6, stop " +i);
//       }
//     }
//     return results;
//   }
// };
||||||| merged common ancestors
=======
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

var lines = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  findStop: function(line, station) {
    return lines[line].indexOf(station);
  }
};

var planTrip = function(startLine, startStation, endLine, endStation) {

  if (endLine === undefined || endLine === startLine) {
    var journey = [];
    var journeyDetails;

    if (lines.findStop(startLine, startStation) === lines.findStop(startLine, endStation)) {
      journeyDetails = null; // you have nowhere to go -- you're already there.
    } else {
      if (lines.findStop(startLine, startStation) > lines.findStop(startLine, endStation)) {
        // start index > end index: backwards loop
        for (var i = lines.findStop(startLine, startStation) - 1; i >= lines.findStop(startLine, endStation); i--) {
          journey.push(lines[startLine][i]);
        }
        journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
        var stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
      } else {
        // start index < end index: forwards loop
        for (var i = lines.findStop(startLine, startStation) + 1; i <= lines.findStop(startLine, endStation); i++) {
          journey.push(lines[startLine][i]);
        }
        journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
        var stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
      }
    }
    if (journeyDetails === null) {
      console.log("It looks like you're already there..");
    } else {
      console.log(journeyDetails);
      console.log("Total stops: " + stops);
    }

  } else {
    firstLeg = []; // will capture all stations travelled through on first leg
    secondLeg = []; // will capture all stations travelled through on second leg

    if (lines.findStop(startLine, startStation) > lines.findStop(startLine, "Union Square")) {
      // start index > end index: backwards loop
      for (var i = lines.findStop(startLine, startStation) - 1; i >= lines.findStop(startLine, "Union Square"); i--) {
        firstLeg.push(lines[startLine][i]);
      }
    } else {
      // for all the stops BETWEEN start station and Union Square (including US), add the station name to an Array
      for (var i = lines.findStop(startLine, startStation) + 1; i <= lines.findStop(startLine, "Union Square"); i++) {
        firstLeg.push(lines[startLine][i]);
      }
    }

    console.log("You must travel through the following stops on the " + startLine + " line: " + firstLeg.join(", ") + ".");
    console.log("Change at Union Square.");

    if (lines.findStop(endLine, "Union Square") > lines.findStop(endLine, endStation)) {
      // Travelling backwards -- need a backwards loop!
      for (var i = lines.findStop(endLine, "Union Square") - 1; i >= lines.findStop(endLine, endStation); i--) {
        secondLeg.push(lines[endLine][i]);
      }
    } else {
      // for all the stops BETWEEN Union Square (new line) and destination, add the station name to an Array
      for (var i = lines.findStop(endLine, "Union Square") + 1; i <= lines.findStop(endLine, endStation); i++) {
        secondLeg.push(lines[endLine][i]);
      }
    }


    console.log("Your journey continues through the following stops on the " + endLine + " line: " + secondLeg.join(", ") + ".");

    var firstLegStops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, "Union Square")));
    var secondLegStops = Math.abs((lines.findStop(endLine, "Union Square")) - (lines.findStop(endLine, endStation)));

    console.log("Total stops: " + (firstLegStops + secondLegStops));
  }

}







//   findLine: function (station) {
//     var results = [];
//     for (var i = 0; i < lines['N'].length; i++ ) {
//       if (lines['N'][i] === station) {
//         results.push("Line N, stop " +i);
//       }
//     }
//     for (var j = 0; i < lines['L'].length; i++ ) {
//       if (lines['L'][i] === station) {
//         results.push("Line L, stop " +i);
//       }
//     }
//     for (var k = 0; i < lines['6'].length; i++ ) {
//       if (lines['6'][i] === station) {
//         results.push("Line 6, stop " +i);
//       }
//     }
//     return results;
//   }
// };
var lines = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    findStop: function(line, station) {
        return lines[line].indexOf(station);
    }
};

var planTrip = function(startLine, startStation, endLine, endStation) {
    // Check to see if we can find the station
    if (lines.findStop(startLine, startStation) === -1 || lines.findStop(endLine, endStation) === -1) {
        console.log("We don't know where you are or where you're going.. can you check you've spelt it right?");

    } else { // Station found
        if (endLine === undefined || endLine === startLine) {
            var journey = [];
            var journeyDetails;
            if (lines.findStop(startLine, startStation) === lines.findStop(startLine, endStation)) {
                return "It looks like you're already there.."; // Origin === Destination
            } else { // Journey is on one line
                if (lines.findStop(startLine, startStation) > lines.findStop(startLine, endStation)) {
                    // Travelling backwards
                    for (var i = lines.findStop(startLine, startStation) - 1; i >= lines.findStop(startLine, endStation); i--) {
                        journey.push(lines[startLine][i]);
                    }
                    journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
                    var stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
                } else { // Travelling forwards

                    for (var j = lines.findStop(startLine, startStation) + 1; j <= lines.findStop(startLine, endStation); j++) {
                        journey.push(lines[startLine][j]);
                    }
                }
                // Persist and Output journey details
                journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
                stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
                console.log(journeyDetails);
                console.log("Total stops: " + stops);
            }
        } else {
            firstLeg = []; // will capture all stations travelled through on first leg
            secondLeg = []; // will capture all stations travelled through on second leg
            if (lines.findStop(startLine, startStation) > lines.findStop(startLine, "Union Square")) {
                // Travelling backwards (start index > end index)
                for (var k = lines.findStop(startLine, startStation) - 1; k >= lines.findStop(startLine, "Union Square"); k--) {
                    firstLeg.push(lines[startLine][k]);
                }
            } else {
                // Add each station between start and (including) Union Square to firstLeg array
                for (var m = lines.findStop(startLine, startStation) + 1; m <= lines.findStop(startLine, "Union Square"); m++) {
                    firstLeg.push(lines[startLine][m]);
                }
            }
            var firstLegDetails = "You must travel through the following stops on the " + startLine + " line: " + firstLeg.join(", ") + "."
            if (lines.findStop(endLine, "Union Square") > lines.findStop(endLine, endStation)) {
                // Travelling backwards (start index > end index)
                for (var n = lines.findStop(endLine, "Union Square") - 1; n >= lines.findStop(endLine, endStation); n--) {
                    secondLeg.push(lines[endLine][n]);
                }
            } else {
                // Add each station between Union Square (new line) and destination to secondLeg array
                for (var o = lines.findStop(endLine, "Union Square") + 1; o <= lines.findStop(endLine, endStation); o++) {
                    secondLeg.push(lines[endLine][o]);
                }
            }
            var secondLegDetails = "Your journey continues through the following stops on the " + endLine + " line: " + secondLeg.join(", ") + "."
            var firstLegStops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, "Union Square")));
            var secondLegStops = Math.abs((lines.findStop(endLine, "Union Square")) - (lines.findStop(endLine, endStation)));

            console.log(firstLegDetails);
            console.log("Change at Union Square.");
            console.log(secondLegDetails);
            console.log("Total stops: " + (firstLegStops + secondLegStops));
        }

    }
};
>>>>>>> 5b7ff604508930e676a7e7fb38a504114d0db98b
