// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.


var mta = {
  enLine: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  elLine: ['8th', '6th', 'Union Square', '3rd', '1st'],
  sixLine: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

//change the line input from a letter to my line names
var getLine = function (input) {
  if (input === "n" || input === "N") {
    return "enLine";
  } else if (input === "l" || input === "L") {
    return "elLine";
  } else if (input === "6" || input === 6) {
    return "sixLine";
  } else {
    console.log("not a valid line");
  }
};

//var planTrip('N', 'Times Square', '6', '33rd');
