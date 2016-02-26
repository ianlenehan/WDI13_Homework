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
    // console.log("Index of origin = " + lines.findStop(startLine, startStation));
    // console.log("Index of Union Square = " + lines.findStop(startLine, "Union Square"));
    // console.log("Index of Union Square on " + endLine + " = " + lines.findStop(endLine, "Union Square"));
    // console.log("Index of destination = " + lines.findStop(endLine, endStation));
    firstLeg = [];
    secondLeg = [];


    if (lines.findStop(startLine, startStation) > lines.findStop(startLine, "Union Square")) {
        // Travelling backwards -- need a backwards loop!
          for (var i = lines.findStop(startLine, startStation) -1; i >= lines.findStop(startLine, "Union Square"); i--) {
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
          for (var i = lines.findStop(endLine, "Union Square")-1; i >= lines.findStop(endLine, endStation); i--) {
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
