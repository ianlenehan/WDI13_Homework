var lines = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    findStop: function(line, station) {
        return lines[line].indexOf(station); // does this return -1 if the line doesn't exist??
    }
};

var planTrip = function(startLine, startStation, endLine, endStation) {
    // Check to see if we can find the station
    if (lines.findStop(startLine, startStation) === -1 || lines.findStop(endLine, endStation) === -1) {
        console.log("We don't know where you are or where you're going.. can you check you've spelt it right?");

    } else { // We CAN find the station
        // Check to see if the journey is on one line.
        if (endLine === undefined || endLine === startLine) {
            var journey = [];
            var journeyDetails;
            if (lines.findStop(startLine, startStation) === lines.findStop(startLine, endStation)) {
                // Check to see if origin === destination
                return "It looks like you're already there..";
            } else { // Journey is on one line
                // Check to determine direction of travel
                if (lines.findStop(startLine, startStation) > lines.findStop(startLine, endStation)) {
                    // Travelling backwards
                    for (var i = lines.findStop(startLine, startStation) - 1; i >= lines.findStop(startLine, endStation); i--) {
                        journey.push(lines[startLine][i]);
                    }
                    journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
                    var stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
                } else {
                    // Travelling forwards
                    for (var j = lines.findStop(startLine, startStation) + 1; j <= lines.findStop(startLine, endStation); j++) {
                        journey.push(lines[startLine][j]);
                    }
                }
                // Persist and Output journey details
                journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
                stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));

                console.log(journeyDetails);
                console.log("Total stops: " + stops);

            }
        } else {
            firstLeg = []; // will capture all stations travelled through on first leg
            secondLeg = []; // will capture all stations travelled through on second leg
            if (lines.findStop(startLine, startStation) > lines.findStop(startLine, "Union Square")) {
                // start index > end index: backwards loop
                for (var k = lines.findStop(startLine, startStation) - 1; k >= lines.findStop(startLine, "Union Square"); k--) {
                    firstLeg.push(lines[startLine][k]);
                }
            } else {
                // for all the stops BETWEEN start station and Union Square (including US), add the station name to an Array
                for (var m = lines.findStop(startLine, startStation) + 1; m <= lines.findStop(startLine, "Union Square"); m++) {
                    firstLeg.push(lines[startLine][m]);
                }
            }
            console.log("You must travel through the following stops on the " + startLine + " line: " + firstLeg.join(", ") + ".");
            console.log("Change at Union Square.");
            if (lines.findStop(endLine, "Union Square") > lines.findStop(endLine, endStation)) {
                // Travelling backwards -- need a backwards loop!
                for (var n = lines.findStop(endLine, "Union Square") - 1; n >= lines.findStop(endLine, endStation); n--) {
                    secondLeg.push(lines[endLine][n]);
                }
            } else {
                // for all the stops BETWEEN Union Square (new line) and destination, add the station name to an Array
                for (var o = lines.findStop(endLine, "Union Square") + 1; o <= lines.findStop(endLine, endStation); o++) {
                    secondLeg.push(lines[endLine][o]);
                }
            }
            console.log("Your journey continues through the following stops on the " + endLine + " line: " + secondLeg.join(", ") + ".");
            var firstLegStops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, "Union Square")));
            var secondLegStops = Math.abs((lines.findStop(endLine, "Union Square")) - (lines.findStop(endLine, endStation)));
            console.log("Total stops: " + (firstLegStops + secondLegStops));
        }

    }
}
