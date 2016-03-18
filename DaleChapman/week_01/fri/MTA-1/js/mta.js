
//mta helper notes
////
//big hint: go forward on one line go backwards on one line
////
//hint (Withdraw/deposit) bank hint.
//nline.indexof( '34th' ), ('28th');
//n, l and 6 lines have to be an array.
var mta = {
    lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
    line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

//var planTrip = function(startStation,startLine,endStation,endLine)

//checks if stop and station is valid - to return
var correctStop = function(stopNum, line) {
    if (mta[line].indexOf(stopNum) === -1) {
        return false;
    } else {
        return true;
    }
};


var correctLine = function(line) {
    if (mta[line] === undefined) {
        return false;
    } else {
        return true;
    }
};

// I need a plan trip function.
// Given the array, figure out how to get from one stop to another.

var direction = function(firstStop, lastStop, line) {
        if (mta[line].indexOf(firstStop) <= mta[line].indexOf(lastStop)) {
            return true;
        } else {
            return false;
        }
    }
    //push trip stops to new array to output info
var tripStops = function(firstStop, lastStop, line) {
    var stops = [];

    if (direction(firstStop, lastStop, line) === true) {
        for (var i = mta[line].indexOf(firstStop); i <= mta[line].indexOf(lastStop); i++) {
            stops.push(mta[line][i]);
        }
    } else {
        for (var i = mta[line].indexOf(firstStop); i >= mta[line].indexOf(lastStop); i++) {
            stops.push(mta[line][i]);
        }
    }
    return stops;
}

tripStops("34th", "28th", "lineN")


/*
Ignore below content. Just random notes im bouncing back and forth with.
*/

//if going from times squaew on the n line to 8th on the n
//its a for loop ,o,5 (some array length) incrememnt
//print out to console, the current station
/*
var planTrip = function(start,finish) {
  for (var i = 0; i < lineN.length; i++) {
    lineN[i]
  }
}
planTrip("Times Square","28th");
*/


/*
var planTrip = (start,finish) {
  for (var i = 0; i < lLine.length; i++) {
    lLine[i]
  }
}
}*/
//how to go forwards

//how to go backwards
//find out where the end station is
//find out where the start station is

//transferring
// nLine : ['','','','unionsquare'] <<find unionsquare
//g line : ['','','','unionsquare']

//planTrip functions
//going forwards on one line
//give a line to go to - figure out index

//given a start station - figure out index

//given an end station - figure out index


//going bacwards on one line
//give a line to go to
//given a start station
//given an end station
//going forwards and then backwards on one line to another.<no for loop needed
