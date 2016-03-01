var nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

var planTrip = [];

var sameLineForward = function (startStation, startLine, endStation, endLine) {

  for (var i = nLine.indexOf(startStation); i <= nLine.indexOf(endStation); i++) {
    var currentStation = nLine[i];
    console.log( currentStation );
    planTrip.push(sameLineForward[i])
  }
}

sameLineForward( "Times Square", nLine, "23rd", nLine );

var sameLineBackward = function (startStation, startLine, endStation, endLine) {

  for (var i = planTrip.indexOf; i <= nLine.indexOf(endStation); i++) {
    var currentStation = nLine[i];
    console.log( currentStation );
  }
}
sameLineBackward( "23rd", nLine, "Times Square", nLine );
