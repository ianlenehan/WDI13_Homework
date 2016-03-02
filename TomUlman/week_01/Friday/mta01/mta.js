//
//                              (   (     (
//                               )   )   )
//                                (     )
//                                  ___
//                                 (   )
//                                 /   \
//                                | (_) |
//                              o_|     |_o
//                             /    _^_    \
//                          _  |   (_O_)   |  _
//                          \_[]\_________/[]_/
//                          []---------------[]
//                           \\|||||||||||||//
//                             \\|||||||||//
//                           ([][]\|||||/[][])
//=============================================================================
//================================= MTA =======================================
//================================ 2016 =======================================
//============================= By Tom Ulman ==================================
//============================= GA 13 Sydney ==================================
//=============================================================================
//=================== Feat: Original ASCII Steam Train ========================
//=============================================================================



  var trainLines = {
   "N" : ["Times Square", "34th", "28th", "23rd", "Union Station", "8th"],
   "L" : ["8th", "6th", "Union Station", "3rd", "1st"],
   "6" : ["Grand Central", "33rd", "28th", "23rd", "Union Station", "Astor Place"]
  };

  var trainSystem = function(startingLine, startingStation, endLine, endStation) {
      // ASSIGNS LINE TO INPUT
    var line1 = trainLines[startingLine];
    var line2 = trainLines[endLine];
      // ASSIGNS STATION INDEX TO INPUT
    var stop1 = line1.indexOf(startingStation);
    var stop2 = line2.indexOf(endStation);
    var union1 = line1.indexOf("uS");
    var union2 = line2.indexOf("uS");
    var newArray1 = null;
    var newArray2 = null;
    var allStops = null;

      // FAILSAFE TO MAKE SURE DATA IS ENTERED CORRECTLY
     if (!((trainLines)[startingLine].includes(startingStation)) ||
     !((trainLines)[endLine].includes(endStation))) {
      alert("You have entered incorrect data, the stations and lines don't match");
     return;
    }

      // TRAVELLING TO AND FROM THE SAME STATION
     if ((line1 === line2) && (stop1 === stop2)) {
       alert("You are hereby fordidden to ride the rail network due to your stupidity");
       allStops = ("0");

      // TRAVELLING ALONG THE SAME LINE
    } else if (line1 === line2) {
       if (stop1 < stop2){
       allStops = (stop2 - stop1);
       newArray1 = line1.slice(stop1, stop2);

    } else if (stop1 > stop2) {
      line1.reverse();
      stop1 = line1.indexOf(startingStation);
      stop2 = line2.indexOf(endStation);
      allStops = (stop2 - stop1);
      newArray2 = line2.slice(stop2, stop1);
    }

    console.log("You are starting from ", startingLine, " Line, ", startingStation, " Station.");
    console.log(" you must travel through ", newArray1, " to reach your final destination at " + endStation);

    } else if (line1 !== line2)  {
      // TRAVELLING FROM THE STARTING LINE
    if (stop1 > union1) {
       line1.reverse();
       stop1 = line1.indexOf(startingStation);
       union1 = line1.indexOf("uS");
       newArray1 = line1.slice(stop1 + 1, union1);
    } else if (stop1 < union1) {
       newArray1 = line1.slice(stop1 + 1, union1);
    }
      // AFTER CHANGING LINES
    if (stop2 < union2) {
       line2.reverse();
       stop2 = line2.indexOf(endStation);
       union2 = line2.indexOf("uS");
       newArray2 = line2.slice(union2 + 1, stop2);
    } else if (stop2 > union2){
       newArray2 = line2.slice(union2 + 1, stop2);
    }

    allStops = ((union1 - stop1) + (stop2 - union2) - 1 );

    console.log("You are starting from ", startingLine, " Line, ", startingStation, " Station.");
    console.log(" you must travel through ", newArray1, " to reach Union Station." );
    console.log("Change at Union Station to ", endLine, " Line.");
    console.log("From Union Station you will travel through ", newArray2, " on the ", endLine, " Line.");
    console.log("You will then arrive at your final destination at ", endStation );

    }

    console.log("The trip will take you " + allStops + " stops in total from your starting station");

};
