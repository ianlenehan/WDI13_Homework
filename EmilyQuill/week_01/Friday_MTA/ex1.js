var lines = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    findStop: function(line, station) {
        return lines[line].indexOf(station);
    }
};

var planTrip = function(startLine, startStation, endLine, endStation) {
    // Check to see if we can find the station
    if (lines.findStop(startLine, startStation) === -1 || lines.findStop(endLine, endStation) === -1) {
        console.log("We don't know where you are or where you're going.. can you check you've spelt it right?");

    } else { // Station found
        if (endLine === undefined || endLine === startLine) {
            var journey = [];
            var journeyDetails;
            if (lines.findStop(startLine, startStation) === lines.findStop(startLine, endStation)) {
                return "It looks like you're already there.."; // Origin === Destination
            } else { // Journey is on one line
                if (lines.findStop(startLine, startStation) > lines.findStop(startLine, endStation)) {
                    // Travelling backwards
                    for (var i = lines.findStop(startLine, startStation) - 1; i >= lines.findStop(startLine, endStation); i--) {
                        journey.push(lines[startLine][i]);
                    }
                    journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + journey.join(", ") + ".";
                    var stops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, endStation)));
                } else { // Travelling forwards

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
                // Travelling backwards (start index > end index)
                for (var k = lines.findStop(startLine, startStation) - 1; k >= lines.findStop(startLine, "Union Square"); k--) {
                    firstLeg.push(lines[startLine][k]);
                }
            } else {
                // Add each station between start and (including) Union Square to firstLeg array
                for (var m = lines.findStop(startLine, startStation) + 1; m <= lines.findStop(startLine, "Union Square"); m++) {
                    firstLeg.push(lines[startLine][m]);
                }
            }
            var firstLegDetails = "You must travel through the following stops on the " + startLine + " line: " + firstLeg.join(", ") + "."
            if (lines.findStop(endLine, "Union Square") > lines.findStop(endLine, endStation)) {
                // Travelling backwards (start index > end index)
                for (var n = lines.findStop(endLine, "Union Square") - 1; n >= lines.findStop(endLine, endStation); n--) {
                    secondLeg.push(lines[endLine][n]);
                }
            } else {
                // Add each station between Union Square (new line) and destination to secondLeg array
                for (var o = lines.findStop(endLine, "Union Square") + 1; o <= lines.findStop(endLine, endStation); o++) {
                    secondLeg.push(lines[endLine][o]);
                }
            }
            var secondLegDetails = "Your journey continues through the following stops on the " + endLine + " line: " + secondLeg.join(", ") + "."
            var firstLegStops = Math.abs((lines.findStop(startLine, startStation)) - (lines.findStop(startLine, "Union Square")));
            var secondLegStops = Math.abs((lines.findStop(endLine, "Union Square")) - (lines.findStop(endLine, endStation)));

            console.log(firstLegDetails);
            console.log("Change at Union Square.");
            console.log(secondLegDetails);
            console.log("Total stops: " + (firstLegStops + secondLegStops));
        }

    }
};
