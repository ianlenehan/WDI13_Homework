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
  savedLine: '',
  savedStop: '',
  tripDetails: [],
  tripExplaination: [],
  tripPlan: function(firstLine, firstStation, endLine, endStation) {
    trip.startLine = decipher.getLine(firstLine);
    trip.startStation = decipher.getStop(trip.startLine, firstStation);
    trip.stopLine = decipher.getLine(endLine);
    trip.stopStation = decipher.getStop(trip.stopLine, endStation);
  },
  tripMake: function () {
                if (trip.startLine === trip.stopLine && trip.startStation ===
                      trip.stopStation) {
                  trip.samePlace();
                } else if (trip.startLine === trip.stopLine) {
                  trip.singleLine();
                } else if (trip.startLine !== trip.stopLine) {
                  trip.multiLine();
                }
  },
  samePlace:  function () {
                trip.tripExplaination.push('You\'re already at your ' +
                                            'destination... *mutters under ' +
                                            'breath* you numpty');
  },
  singleLine: function () {
                if (trip.startStation < trip.stopStation) {
                  for (var i = trip.startStation + 1; i <= trip.stopStation; i++) {
                    trip.tripDetails.push([trip.startLine, i]);
                  }
                } else {
                  for (var i = trip.startStation-1; i >= trip.stopStation; i--) {
                    trip.tripDetails.push([trip.startLine, i]);
                  }
                }
                trip.tripDetails.pop();
                decipher.convertBack();
                trip.tripExplaination.push('Get off the train at ' +
                              mta[trip.stopLine].stops[trip.stopStation] +
                              ' station');
  },
  multiLine:  function () {
                runMultiLine();
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
            },
  convertBack:  function () {
                  console.log('turn the trip.tripDetails data into words');
  }
}

var runMultiLine = function () {
  //save the destination details, then run the trip to Union Square as a journey
  trip.savedLine = trip.stopLine
  trip.savedStop = trip.stopStation;
  trip.stopLine = trip.startLine;
  trip.stopStation = decipher.getStop(trip.startLine, 'Union Square');
  trip.tripMake();

  // after this it will be convert back, then get off the train at US

  trip.tripExplaination.push('Change to the ' +
                              mta[trip.savedLine].name + ' line');

  //now run the 2nd leg as a journey and add to the details.
  trip.startLine = trip.savedLine;
  trip.startStation = decipher.getStop(trip.startLine, 'Union Square');
  trip.stopLine = trip.savedLine;
  trip.stopStation = trip.savedStop;
  trip.tripMake();
  // trip.tripExplaination.push('Get off the train at ' +
  //                           mta[trip.stopLine].stops[trip.stopStation]);
}



var showIt = function() {
  console.log(trip);
  console.log(trip.tripDetails);
  console.log(trip.tripExplaination);
}
