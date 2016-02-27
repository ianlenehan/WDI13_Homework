
var lines = {
  'L line': ["8th", "6th", "Union Square", "3rd", "1st"],
  'N line': ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  '6 line': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}

// determine if the line exists

var lineExists = function (line) {
  if (!(line in lines)) {
  //  console.log(line + ' exists!');
    return false;
  } else {
    return true;
  }
}

// determine if the line and station exist

var stationExists = function (station, line) {
  var lineTrue = lineExists(line);
  if (lineTrue === false) {
    console.log(line + " does not exist!");
    return false;
  } else {

  var matches = 0;
  for (var i = 0; i < lines[line].length; i++) {
      if (lines[line][i] === station) {
        //console.log("exists");
        matches = 1;
        return true;
      }
  }
if (matches < 1) {
  //console.log(station + " doesn't " + line);
  return false;
}
}
}



// lineExists("Q Line");

//first test is to create an array of the stations traveled for each leg
//cycle through the specific array to find the stops between the indexes
//and add them to the array

var planTripBeta = function(fromStop, line, toStop) {
  var fromIndex = lines[line].indexOf(fromStop);
  var toIndex = lines[line].indexOf(toStop);
  var journey = [];
  var message = '';
  if(fromIndex > toIndex) {
    // if the first station is further on the track than the next stations
    // reverse the array
    for (var i = toIndex + 1; i < fromIndex; i++) {
      journey.push(lines[line][i]);
      journey = journey.reverse();
    }
  } else {
    for (var i = fromIndex + 1; i < toIndex; i++) {
      journey.push(lines[line][i])

    }
  }
  //console.log(journey);
  return journey.join( " station and " );

}

// calculate the distance between each stop for each leg of the journey

var tripDistance = function (fromStop, line, toStop) {
  var fromIndex = lines[line].indexOf(fromStop);
  var toIndex = lines[line].indexOf(toStop);
  if(fromIndex > toIndex) {
    var distance = fromIndex - toIndex;
  } else {
    distance = toIndex - fromIndex;
  }
  //console.log(distance);
  return distance;
}

// tripDistance("34th", "N line", "8th");


var planTrip = function(fromStop, fromLine, toStop, toLine) {

  var fromStopExists = stationExists(fromStop, fromLine);
  var toStopExists = stationExists(toStop, toLine);

// first check if both stops exist

if (fromStopExists === false) {
    console.log(fromStop + " does not exist on the " + fromLine + "!");
    return false;
  } else if (toStopExists === false) {
    console.log(toStop + " does not exist on the " + toLine + "!");
    return false;
  } else {

    var fromIndex = lines[fromLine].indexOf(fromStop);
    var toIndex = lines[toLine].indexOf(toStop);
    var distance1 = '';
    var distance2 = '';
    var journey1 = [];
    var journey2 = [];
    var message = '';

    if (fromLine !== toLine) {
      journey1 = planTripBeta(fromStop, fromLine, "Union Square");
      distance1 = tripDistance(fromStop, fromLine, "Union Square");
      journey2 = planTripBeta("Union Square", toLine, toStop);
      distance2 = tripDistance("Union Square", toLine, toStop);
      var message = ("Starting at " + fromStop + " station on the " + fromLine + ", travel " +
      distance1 + " stops, through " + journey1 + " station to Union Square station, where you will change to the "
      + toLine + ". You will travel " + distance2 + " more stops, through " + journey2 +
       " station into " + toStop) + " station.";
      //console.log(journey1, distance1, journey2, distance2);
    } else {
      journey1 = planTripBeta(fromStop, fromLine, toStop);
      distance1 = tripDistance(fromStop, fromLine, toStop);
      if (fromStop !== toStop) {
      message = ("Starting at " + fromStop + " station on the " + fromLine + ", travel " +
      distance1 + " stops to " + toStop) + " station.";
    } else {
      message = ("Pay attention!");
    }
    }
    console.log(message);
    //console.log(message);
    return message;

  }

}



planTrip("34th", "N line", "28th", "6 line");
planTrip("8th", "N line", "8th", "L line");
planTrip("23rd", "N line", "Times Square", "N line");

planTrip("Times Square", "N line", "Grand Central", "6 line"); //longest possible journey in one direction
planTrip("Grand Central", "6 line", "Times Square", "N line"); //longest possible journey in other direction

planTrip("Grand Piano", "6 line", "Times Square", "N line"); //with a station that doesn't exist
planTrip("Grand Central", "6 line", "NY Times", "N line"); //with another station that doesn't exist
planTrip("Grand Central", "Q line", "Times Square", "N line"); //with a line that doesn't exist

planTrip("Grand Central", "6 line", "Grand Central", "6 line"); //Same to and from station.
