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

var trainLines = {
      lineN: ["Times Square", "34th", "28thN", "23rd", "Union Square", "8thN"],
      lineL: ["8thL", "6th", "Union Square", "3rd", "1st"],
      line6: ["Grand Central", "33rd", "28th6", "23rd", "Union Square", "Astor Place"]
    }

var lines = ["lineN", "lineL", "line6"];


var testLine = function (station) {
    for (var i = 0; i < 100  ; i++) {
        if (trainLines[lines[i]].indexOf(station) >=0) {
            return lines[i];
        } else {
          return false;
        }
    }
}


var stations = function(origin, destination, line) {
  var start = trainLines[line].indexOf(origin);
  var end = trainLines[line].indexOf(destination);
  if (end > start) {
        return trainLines[line].slice(start + 1, end + 1);
  } else {
        var stops = [];
        for (var i = start - 1; i >= end; i--) {
              stops.push(trainLines[line][i]);
        } return stops;
  }
}

var numStops = function(origin, destination, line) {
    var start = trainLines[line].indexOf(origin);
    var end = trainLines[line].indexOf(destination);
    return Math.abs(end - start);
}

var planTrip = function (origin, destination) {
      startLine = testLine(origin);
      endLine = testLine(destination);
      if (starLine === false) {
            return "Please check you Origin information, it appears to be incorrect."
      } else if (endLine === false) {
            return "Please check you Destination information, it appears to be incorrect."
      }

      if (startLine === endLine) {
            var allStations = stations(origin, destination, startLine);
            var numStations = numStops(origin, destination, startLine);
            console.log("You must travel through the following stations on " + startLine + ": " + allStations.join(", ") );
            console.log("You have " + numStations + " stops in total.");
      } else {
            var startNumStations = numStops(origin, "Union Square", startLine);
            var endNumStations = numStops("Union Square", destination, endLine);
            var totalStops = startNumStations + endNumStations;
            var startStations = stations(origin, "Union Square", startLine);
            var endStations = stations("Union Square", destination, endLine);
            console.log("You must travel through the following stations on " + startLine + ": " + startStations.join(", ") );
            console.log("change at Union Square")
            console.log("Your journey continues on " + endLine + " through the following stations: " + endStations.join(", ") );
            console.log("You have " + totalStops + " stops in total.");
      }

}
