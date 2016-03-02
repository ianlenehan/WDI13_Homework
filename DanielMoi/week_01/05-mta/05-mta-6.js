// must go through Union swquare
// Do one line first
// just 2 parts
// if already on right line, no need to change
// can go backwards



var lines = {
  N: ['Times Square', '34th', '28th', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var arrStopsA = [];
var arrStopsB = [];
var arrStopsTotal = [];


var planTrip = function(startLine, startStation, endLine, endStation) {
  // 0. Check arguments
  if (lines[startLine] === undefined) {
    console.log('Please recheck spelling of the start line (choose from: N, L, 6).');
    return;
  }
  if (lines[startLine].indexOf(startStation) === -1) {
    console.log('Please recheck spelling of the start station (choose from: ' + lines[startLine].join(', ') + ').');
    return;
  }
  if (lines[endLine] === undefined) {
    console.log('Please recheck spelling of the end line (choose from: N, L, 6).');
    return;
  }

  if (lines[endLine].indexOf(endStation) === -1) {
    console.log('Please recheck spelling of the end station (choose from: ' + lines[endLine].join(', ') + ').');
    return;
  }
  if (startLine === endLine && startStation === endStation) {
    console.log('Um.... you\'re travelling nowhere. Maybe the MTA is not for you...');
    return;
  }

  // 0.1 Set up variables
  var i;

  var legA = lines[startLine];
  var legB = lines[endLine];

  var startIndex = legA.indexOf(startStation);
  var unionIndexA = legA.indexOf('Union Square');
  var unionIndexB = legB.indexOf('Union Square');
  var endIndex = legB.indexOf(endStation);





  // 1. Start journey
  console.log('These are your instructions for getting from ' + startStation + ' on the ' + startLine + ' line to ' + endStation + ' on the ' + endLine + ' line.');
  console.log('Get on this station: ' + startStation);


  // 2. Same line
  if (legA === legB) {

    // 2.1. Travelling forwards

    if (endIndex > startIndex) {
      for (i = startIndex + 1; i <= endIndex; i++) {
        arrStopsTotal.push(legA[i]);
      }
    }
    // 2.2. travelling backwards
    else {
      for (i = startIndex - 1; i >= endIndex; i--) {
        arrStopsTotal.push(legA[i]);
      }
    }

    console.log('Travel through these stops on the ' + startLine + ' line: ' + arrStopsTotal.join(', '));
    console.log(arrStopsA.length + arrStopsTotal.length + ' stops in total');

  }

  // 3. Different Lines
  else {

    // 3.1. leg A of journey

    // 3.1.1. travelling forwards
    if (unionIndexA > startIndex) {
      for (i = startIndex + 1; i <= unionIndexA; i++) {
        arrStopsA.push(legA[i]);
      }
    }
    // 3.1.2. travelling backwards
    else {
      for (i = startIndex - 1; i >= unionIndexA; i--) {
        arrStopsA.push(legA[i]);
      }
    }
    console.log('Travel through these stops on the ' + startLine + ' line: ' + arrStopsA.join(', '));

    console.log('Change at Union Square');

    // 3.2. Leg B of journey

    // 3.2.1. travelling forwards
    if (endIndex > unionIndexB) {
      for (i = unionIndexB + 1; i <= endIndex; i++) {
        arrStopsB.push(legB[i]);
      }
    }
    // 3.2.2. travelling backwards
    else {
      for (i = unionIndexB - 1; i >= endIndex; i--) {
        arrStopsB.push(legB[i]);
      }
    }
    console.log('Travel through these stops on the ' + endLine + ' line: ' + arrStopsB.join(', '));

    // Log instructions to console
    console.log('Your destination: ' + endStation);
    console.log(arrStopsA.length + arrStopsB.length + ' stops in total');


  }

};


// 1 line, forwards
planTrip('N', 'Times Square', 'N', 'Union Square');

// 1 line, backwards
// planTrip('N', 'Union Square', 'N', 'Times Square');

// 2 lines, forwards, backwards
// planTrip('N', 'Times Square', 'L', '8th');

// 2 lines, forwards, forwards
// planTrip('6', 'Grand Central', 'L', '3rd');

// 2 lines, backwards, backwards
// planTrip('N', '8th', 'L', '8th');

// 2 lines, backwards, forwards
// planTrip('L', '1st', '6', 'Astor Place');

// misspelledd start line
// planTrip('l', '1st', '6', 'Astor Place');

// misseplled start station
// planTrip('L', 's1st', '6', 'Astor Place');

// misslpeld end line
// planTrip('L', '1st', '06', 'Astor Place');

// misslpeld end station
// planTrip('L', '1st', '6', 'sAstor Place');

// same start and end station
// planTrip('L', '1st', 'L', '1st');
