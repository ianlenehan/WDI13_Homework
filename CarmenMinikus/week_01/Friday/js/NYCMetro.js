//MTA Lab
console.log("MTA LAB. Please type: planTrip('starting stop, starting stop Line, \
end stop, ending stop Line')");

var trainLine = {
NLine: ["34", "28", "23", "UnionSquare", "8"],
LLine: ["8","6","UnionSquare","3","1"],
sixLine: ["GrandCentral","33","28","23","UnionSquare","AstorPlace"]
};

var startingStopNum = 0;
var endingStopNum =0;
var stoppingThrough =[ ];

var planTrip = function(start, startLine, end, endLine){

  stoppingThrough = [ ];
  var startingStopNum = (trainLine[startLine]).indexOf(start);
  var endingStopNum = (trainLine[endLine]).indexOf(end);

  if (startLine === endLine){
    var stopsAway = Math.abs(endingStopNum - startingStopNum);
    console.log("sta. "+ end +" is " + stopsAway + " stops away from " + start)

    if (startingStopNum < endingStopNum) {
      for (var i=startingStopNum +1 ; i <= endingStopNum; i++){
        stoppingThrough.push(trainLine[startLine][i]);
      }//end for loop
      console.log("you will be stopping through the following stations: " + stoppingThrough)
    } else{ //(startingStopNum > endingStopNum)
      for (var i=startingStopNum -1; i >= endingStopNum; i--){
        stoppingThrough.push(trainLine[endLine][i]);
      }//end for loop
      console.log("you will be stopping through the following stations!: " + stoppingThrough)
    }
  }//end if startLine===endLine
  else {
    var unionSquareLocation = (trainLine[startLine]).indexOf("UnionSquare");
    var startToUnionSquare = Math.abs(unionSquareLocation - startingStopNum);
    var unionSquareToEnd = Math.abs(unionSquareLocation - endingStopNum)
    var totalStops = startToUnionSquare + unionSquareToEnd + 1;
    console.log ("There are " + totalStops + " stops from " + start + " sta. to " + end + " sta.");
    console.log("Please change trains at Union Square");
    //from start to Union Square
    if (startingStopNum < unionSquareLocation)  {
      for (i=startingStopNum; i <= unionSquareLocation; i++){
        stoppingThrough.push(trainLine[startLine][i]);
      }//end for
    } //end if
    if (startingStopNum > unionSquareLocation) {
       for (i =startingStopNum; i >= unionSquareLocation ; i-- ){
         stoppingThrough.push(trainLine[startLine][i]);
       }//end for
       consol.log("start" + stoppingThrough)
    }//end if

unionSquareLocation = (trainLine[endLine]).indexOf("UnionSquare");
    //from Union Square to end
    if (unionSquareLocation < endingStopNum){
      for (i=unionSquareLocation +1; i <= endingStopNum; i++){
        stoppingThrough.push(trainLine[endLine][i]);
      };//end for
    }; //end if
    if (unionSquareLocation > endingStopNum) {
       for (i =unionSquareLocation -1; i >= endingStopNum ; i-- ){
         stoppingThrough.push(trainLine[endLine][i]);

       };//end for
       console.log("end" + stoppingThrough)
    };//end if

    console.log("you will be stopping through the following stations: " + stoppingThrough)

  }
}//end plan trip
