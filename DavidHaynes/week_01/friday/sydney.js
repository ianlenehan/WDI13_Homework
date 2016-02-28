var trainLines = {
      eastern: ["Bondi Junction", "Edgecliff", "Kings Cross", "Martin Place", "Town Hall", "Central", "Redfern", "Sydenham", "Tempe", "Wolli Creek", "Arncliffe", "Banksia", "Rockdale", "Kogarah", "Carlton", "Allawah", "Hurstville", "Penshurst", "Mortdale", "Oatley", "Como", "Jannali", "Kirrawee", "Gymea", "Miranda", "Caringbah", "Woolooware", "Cronulla"],
      northern: ["Emu Plain", "Penrith", "Kingswood", "Werrington", "St Marys", "Mount Druitt", "Rooty Hill", "Doonside", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Clyde", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "Macdonaldtown", "Redfern", "Central", "Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood", "Roseville", "Lindfield", "Killara", "Gordon", "Pymble", "Turramurra", "Warrawee", "Wahroonga", "Waitara", "Asquith", "Mount Colah", "Mount Kuring-gai", "Berowra"],
      cityCircle: ["Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Granville", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "Macdonaldtown", "Redfern", "Central", "Town Hall", "Wynyard","Circular Quay", "St James", "Museum", ],
      airport: ["Town Hall", "Wynyard", "Circular Quay", "St James", "Museum", "Green Square", "Mascot", "Domestic Airport", "International Airport", "Wolli Creek", "Turella", "Bardwell Park", "Bexley North", "Kingsgrove", "Beverley Hills", "Narwee", "Riverwood", "Padstow", "Revesby", "Panania", "East Hills", "Holdsworthy", "Glenfield", "Macquarie Fields", "Ingleburn", "Minto", "Leumeah", "Campbelltown"],
      liverpool: ["Liverpool", "Warwick Farm", "Cabramatta", "Carramar", "Villawood", "Leightonfield", "Chester Hill", "Sefton", "Birrong", "Yagoona", "Bankstown", "Punchbowl", "Wiley Park", "Lakemba", "Belmore", "Campsie", "Canterbury", "Hurlstone Park", "Dulwich Hill", "Marrickville", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Museum", "St James", "Circular Quay", "Wynyard", "Town Hall"],
      hornsby: ["Berowra", "Normanhurst", "Thornleight", "Pennant Hills", "Beecroft", "Cheltenham", "Epping", "Macquarie University", "Macquarie Park", "North Ryde", "Chatswood", "Artarmon", "St Leonards", "Wollstonecraft", "Waverton", "North Sydney", "Milsons Point", "Wynyard", "Town Hall", "Central", "Redfern", "Burwood", "Strathfield", "North Strathfield", "Concord West", "Rhodes", "Meadowbank", "West Ryde", "Denistone", "Earlwood"],
      tram: ["Lilyfield", "Rozelle Bay", "Jubille Park", "Glebe", "Wentworth Park", "Fish Market", "John St Square", "Star City", "Pyrmont Bay", "Convention", "Exhibition Centre", "Paddys Market", "Capitol Square", "Central"],
      carlingford: ["Carlingford", "Telopea", "Dundas", "Rydalmere", "Camellia", "Rosehill", "Clyde"],
      campbelltown: ["Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Harris Park", "Parramatta", "Westmead", "Wentworthville", "Pendle Hill", "Toongabbie", "Seven Hills", "Blacktown"]
    }

var lines = ["eastern", "northern", "cityCircle", "airport", "liverpool", "hornsby", "tram", "carlingford", "campbelltown"];


var maxStations = function () {
  var arrayLength = [];
  var longestArray = 0;
  for (var i = 0; i < lines.length; i++) {
      arrayLength.push(trainLines[lines[i]].length);
  }
  for (var x = 0; x < arrayLength.length; x++) {
      if (arrayLength[x] > longestArray) {
        longestArray = arrayLength[x];
      }
  } return longestArray;
}

var testLineSgl = function (station) {                  // find all potential lines that this station is on
  var linesFit = [];                                    // This formula works!!
  var maxTest = maxStations();
  for (var i = 0; i < lines.length; i++) {
      for (var x = 0; x < maxTest; x++) {
            if (trainLines[lines[i]][x] === station) {
                  linesFit.push(lines[i]);
            }
      }
  } return linesFit;
}

var testLineDbl = function (station1, station2) {          // find which specific lines have both stations
        var linesBoth = [];                               // This formula works!!
        for (var i = 0; i < lines.length; i++) {
            for (var x = 0; x < trainLines[lines[i]].length; x++) {
                  for (var y = 0; y < trainLines[lines[i]].length; y++) {
                          if (trainLines[lines[i]][x] === station1 && trainLines[lines[i]][y] === station2) {
                              linesBoth.push(lines[i]);
                          }
                  }
            }
        } return linesBoth;
}


var stations = function(origin, destination, line) {
  var start = trainLines[line].indexOf(origin);
  var end = trainLines[line].indexOf(destination);
  var stops = [];
  if (end > start) {
        return trainLines[line].slice(start + 1, end + 1);
  } else {
        var stops = [];
        for (var i = start - 1; i >= end; i--) {
              stops.push(trainLines[line][i]);
        } return stops;
  }
}


// when getting two stations, need to find what are the junctions on those two lines
// what is the total station numbers
// decide which is the least

var junctions = function (origin, destination) {            // This tests which junctions are available between the lines
       var startLine = testLineSgl(origin);        //what lines is origin station on
       var endLine = testLineSgl (destination);    // what lines is the destination station on
       var potentialJunctions = [];           //empty array, to add matches as elements of the array
       for (var i = 0; i < startLine.length; i++) {           //cycle through elements of startLine array
            for (var j = 0; j < endLine.length; j++) {        // cycle through elements of endLine array;
                  for (var y = 0; y < trainLines[startLine[i]].length; y++)  {    // cycle through elements of trainLines arrays
                        for (var z = 0; z < trainLines[endLine[j]].length; z++) {     //cyclethrough elements of trainLines arrays
                            if (trainLines[startLine[i]][y] === trainLines[endLine[j]][z]) {    //find matches of junction stations
                                potentialJunctions.push(trainLines[endLine[j]][z]);           //put matches in potentialJunctions array
                            }
                        }
                  }
            }
        } return potentialJunctions;
  }

var numStationsSglLine = function (origin, destination, line) {
        var start = trainLines[line].indexOf(origin);
        var end = trainLines[line].indexOf(destination);
        return Math.abs(start - end);
}


var numStationsMultiLine = function (origin, destination, junction) {
        var lineA = testLineDbl(origin, junction);
        var lineB = testLineDbl(destination, junction);
        var totalLeg = [];
        for (var i = 0; i < lineA.length; i++) {
                for (var j = 0; j < lineB.length; j++) {
                      var totalLeg = numStationsSglLine(origin, junction, lineA[i]) + numStationsSglLine(destination, junction, lineB[j]);
                }
        } return totalLeg;
}
// check line of origin, then destination.
// check which junctions the two lines connect with
// check the total stations between the two routes
// select the shortest route
// return the shortest route

var tripPlan = function (origin, destination) {
      var testDistance = [];
      var startLine;
      var endLine;
      var possibleJunctions = junctions(origin, destination);
      var numStations = [];
      var selectedRoute = maxStations();
      var chosenJunction = "";
      for (var x = 0; x < possibleJunctions.length; x++) {
          numStations.push(numStationsMultiLine(origin, destination, possibleJunctions[x]));
      }
      for (var y = 0; y < numStations.length; y++) {
          if (numStations[y] < selectedRoute) {
              selectedRoute = numStations[y];
              chosenJunction = possibleJunctions[y];
              startLine = testLineDbl(origin, chosenJunction);
              endLine = testLineDbl (chosenJunction, destination);
          }
      }
      if (startLine === endLine) {
            var allStations = stations(origin, destination, startLine);
            var numStations = numStationsSglLine(origin, destination, startLine);
            console.log("You must travel through the following stations on " + startLine + ": " + allStations.join(", ") );
            console.log("You have " + numStations + " stops in total.");
      } else {
            var startNumStations = numStationsSglLine(origin, chosenJunction, startLine);
            var endNumStations = numStationsSglLine(chosenJunction, destination, endLine);
            var totalStops = startNumStations + endNumStations;
            var startStations = stations(origin, chosenJunction, startLine);
            var endStations = stations(chosenJunction, destination, endLine);
            console.log("You must travel through the following stations on the " + startLine + " line: " + startStations.join(", ") );
            console.log("change at " + chosenJunction);
            console.log("Your journey continues on the " + endLine + " line, through the following stations: " + endStations.join(", ") );
            console.log("You have " + totalStops + " stops in total.");
      }
};
