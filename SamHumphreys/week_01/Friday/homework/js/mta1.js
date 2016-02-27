// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// setup arrays for network and trip details
var mta = [{
    name: 'n',
    stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']},
    {name: 'l',
    stops: ['8th', '6th', 'Union Square', '3rd', '1st']},
    {name: '6',
    stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square',
          'Astor Place']}
]

//tripPlan takes the start and stop lines and stations and populates the
//trip

var trip = {
  startLine: '',
  startStation: '',
  stopLine: '',
  stopStation: '',
  tripDetails: [],
  tripPlan: function(firstLine, firstStation, endLine, endStation) {
    trip.startLine = decipher.getLine(firstLine);
    trip.startStation = decipher.getStop(trip.startLine, firstStation);
    trip.stopLine = decipher.getLine(endLine);
    trip.stopStation = decipher.getStop(trip.stopLine, endStation);
  },
  checkLines: function () {
                if (startLine === stopLine && startStation === stopStation) {
                  trip.samePlace();
                }
  },
  samePlace:  function () {
                console.log('You\'re already at your destination you numpty');
  },
  singleLine: function () {
                if (trip.startStation < trip.stopStation) {
                  for (var i = trip.startStation + 1; i <= trip.stopStation + 1; i++) {
                    trip.tripDetails.push([trip.startLine, i]);
                  }
                } else {
                  for (var i = trip.startStation-1; i >= trip.stopStation; i--) {
                    trip.tripDetails.push([trip.startLine, i]);
                  }
                }
  },
  multiLine:  function () {

  }
}

var decipher = {
  getLine:  function (input) {
              for (var i = 0; i<mta.length; i++) {
                if (mta[i].name === input) {
                  return i;
                }
              }
              return 'not a line on MTA';
            },
  getStop:  function (lineCode, stopName) {
              for (var i = 0; i<mta[lineCode].stops.length; i++) {
                if (stopName === mta[lineCode].stops[i]) {
                  return i;
                }
              }
              return 'not a stop on line ' + lineCode;
            }
}

var yourTrip = function () {
  if (trip.startLine === trip.stopLine && trip.startStation === trip.stopStation) {
    console.log('You are already at your destination, you numpty!');
  } else if (trip.startLine === trip.stopLine) {

  } else {
    return 'multi line trip'
  }
}
