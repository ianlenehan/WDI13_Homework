/*
MTA Lab
Objectives:

Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.
Activity

Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at
and the line and stop that user is getting off at and prints the journey
and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points.
(For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:

Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working.
You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names
(i.e. 23rd on the N and on the 6 need to be differentiated)

*/

var lineN = ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN"];
var lineL = ["8thL", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astor Place"];

var trainLines = {
      lineN: ["Times Square", "34th", "28thN", "23rd", "Union Square", "8thN"],
      lineL: ["8thL", "6th", "Union Square", "3rd", "1st"],
      line6: ["Grand Central", "33rd", "28th6", "23rd", "Union Square", "Astor Place"]
    }

var testLine = function(station) {
    var currLine = "";

        if (lineN.indexOf(station) >= 0) {
          currLine = "line N";
        } if (lineL.indexOf(station) >= 0) {
          currLine = "line L";
        } if (line6.indexOf(station) >= 0) {             //Union Square fits all lines so returns line6
          currLine = "line 6";
        }
        return currLine;
    }



var stopInfo = function(first, second, line) {            // test no. stops between two stations on same line
      var stopNum1;
      var stopNum2;
      var stops = [];

      if (line === "line N") {
            stopNum1 = lineN.indexOf(first);
            stopNum2 = lineN.indexOf(second);
            if (stopNum2 > stopNum1) {
            stops = lineN.slice(stopNum1 + 1, stopNum2 + 1);
          } else {
              for (var i = stopNum1 - 1; i >= stopNum2; i--) {
                stops.push(lineN[i]);
            }
          }
      } else if (line === "line L") {
            stopNum1 = lineL.indexOf(first);
            stopNum2 = lineL.indexOf(second);
            if (stopNum2 > stopNum1) {
                stops = lineL.slice(stopNum1 + 1, stopNum2 + 1);
            } else {
                for (var i = stopNum1 - 1; i >= stopNum2; i--) {
                stops.push(lineL[i]);
            }
          }
      } else if (line === "line 6") {
            stopNum1 = line6.indexOf(first);
            stopNum2 = line6.indexOf(second);
            if (stopNum2 > stopNum1) {
            stops = line6.slice(stopNum1 + 1, stopNum2 + 1);
          } else {
              for (var i = stopNum1 - 1; i >= stopNum2; i--) {
                stops.push(line6[i]);
            }
          }
      }
      return {numStops: Math.abs(stopNum2 - stopNum1),
              firstStopIndex: stopNum1,
              secondStopIndex: stopNum2,
              stations: stops
            }
}

var planTrip = function(origin, destination) {
      var numStations;
      var startLine = testLine(origin);
      var endLine = testLine(destination);

      if (origin === "Union Square") {              //keep on same line due to union square.
          startLine = endLine;
      }
      if (destination === "Union Square") {
          endLine = startLine;
      }

      if (startLine === endLine) {              //same line, doesnt change lines
          numStations = stopInfo(origin, destination, startLine).numStops;
          stations = stopInfo(origin, destination, startLine).stations;
          console.log("You must travel through the following stations on " + startLine + ": " + stations.join(", ") );
          console.log("You have " + numStations + " stops in total.");
      } else {
        startNumStations = stopInfo(origin, "Union Square", startLine).numStops;
        endNumStations = stopInfo("Union Square", destination, endLine).numStops;
        totalStops = startNumStations + endNumStations;
        startStations = stopInfo(origin, "Union Square", startLine).stations;
        endStations = stopInfo("Union Square", destination, endLine).stations;
        console.log("You must travel through the following stations on " + startLine + ": " + startStations.join(", ") );
        console.log("change at Union Square")
        console.log("Your journey continues on " + endLine + " through the following stations: " + endStations.join(", ") );
        console.log("You have " + totalStops + " stops in total.");
      }
}
