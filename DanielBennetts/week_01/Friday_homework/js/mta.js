// I need a plan trip function
     //Given that you have an array of stations
     //Figure out how to get from one step to another

// If i wanted to go from Times Square on the N Line to the 8th on the N Line
     // It’s a for loop, start, 0, end, 5 (someArray.length), increment.
      // print out to the console the current station

// go forward on one line
// go backwards on one line
/*how to go backwards
find out where the start station is
find out where the end station is

6 line =

var planTrip = function () {

};

What is the actual task
I need to figure out how to go from station to another on any line - planTrip

Going forwards on one line
given a line to go on
given a start station - figure out the index
given an end station - figure out the index

// could be a for loop ( a loop that needs a start and an end.)
nLine[0]

Going forwards on one line
given a line to go on
given a start station
given an end station

Could be an object with a set of arrays inside*/


var mtaLines = {
  nLine: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lLine: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};

var journeyA = [];
var journeyB = [];
var journeySum = [];

var planTrip = function(startLine, startStation, endLine, endStation) {

//Seeing if i can get one line to work both forwards and backwards.
if (startLine === endLine) {
    for (var i = mtaLines.nLine.indexOf(startStation); i <= mtaLines.nLine.indexOf(endStation); i++) {
      journeyA.push(mtaLines.nLine[i]);
      console.log(mtaLines.nLine[i]);
    }
    if (endLine === startLine) {
      for (var i = mtaLines.nLine.indexOf(endStation); i >= mtaLines.nLine.indexOf(startStation); i--) {
        journeyB.push(mtaLines.nLine[i]);
        console.log(mtaLines.nLine[i]);
      }
    }
}
};
