// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.


var mta = [{
    name: 'n',
    stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']},
    {name: 'l',
    stops: ['8th', '6th', 'Union Square', '3rd', '1st']},
    {name: '6',
    stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square',
          'Astor Place']}
]

var trip = {
  startLine: '',
  startStation: '',
  stopLine: '',
  stopStation: ''
}

//input a line letter, output the array number in mta
//eg getLine('n'); returns 0
//works
var getLine = function (input) {
  for (var i = 0; i<mta.length; i++) {
    if (mta[i].name === input) {
      return i;
    }
  }
  return 'not a line on MTA';
};

//input lineCode from getLine and station names and return line number and stop number
//eg getStop(1, '6th') will return 2
//works
var getStop = function (lineCode, stopName) {
  for (var i = 0; i<mta[lineCode].stops.length; i++) {
    if (stopName === mta[lineCode].stops[i]) {
      return i;
    }
  }
  return 'not a stop on line ' + lineCode;
}

//check if start and stop are the same


//get a line name and stop name for commencement and start line and stop line
//for destination, change them to the array codes and add them to var trip.

var tripPlan = function(firstLine, firstStation, endLine, endStation) {
  trip.startLine = getLine(firstLine);
  trip.startStation = getStop(trip.startLine, firstStation);
  trip.stopLine = getLine(endLine);
  trip.stopStation = getStop(trip.stopLine, endStation);
}
