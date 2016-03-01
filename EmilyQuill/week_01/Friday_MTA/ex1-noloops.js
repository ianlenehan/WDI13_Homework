var lines = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
    findStop: function(line, station) {
        return lines[line].indexOf(station);
    }
};
var planTrip = function(startLine, startStation, endLine, endStation) {
    var origin = lines.findStop(startLine, startStation);
    var destination = lines.findStop(endLine, endStation);
    if (origin === -1 || destination === -1) { // Station not found
        console.log("We don't know where you are or where you're going.. can you check you've spelt it right?");
    } else { // Station found
        if (endLine === undefined || endLine === startLine) { // Journey is on one line
            var destinationOnSameLine = lines.findStop(startLine, endStation);
            var numberStops = Math.abs((origin) - (destinationOnSameLine));
            var journeyDetails;
            var routeStops = [];
            if (origin === destinationOnSameLine) {
                return "It looks like you're already there..";
            } else { // Origin != Destination
                if (origin > destinationOnSameLine) { // Travelling backwards
                    routeStops = lines[startLine].slice(origin-1,destinationOnSameLine).reverse();
                } else { // Travelling forwards
                    routeStops = lines[startLine].slice(origin+1,destinationOnSameLine);
                }
                journeyDetails = "You must travel through the following stops on the " + startLine + " line: " + routeStops.join(", ") + ".";
                console.log(journeyDetails);
                console.log("Total stops: " + numberStops);
            }
        } else { // Journey is across multiple lines
            var firstLeg = []; // Capture all stops on first leg
            var secondLeg = []; // Capture all stops on second leg
            var unionSquareFirstLeg = lines.findStop(startLine, "Union Square");
            var unionSquareSecondLeg = lines.findStop(endLine, "Union Square");
            if (origin > unionSquareFirstLeg) {  // Travelling backwards - reverse array
                firstLeg = lines[startLine].slice(unionSquareFirstLeg, origin).reverse();
            } else { // Travelling forwards
                firstLeg = lines[startLine].slice(origin+1, unionSquareFirstLeg+1);
            }
            if (unionSquareSecondLeg > destination) { // Travelling backwards - reverse array
                secondLeg = lines[endLine].slice(destination, unionSquareSecondLeg).reverse();
            } else {
                secondLeg = lines[endLine].slice(unionSquareSecondLeg+1,destination+1);
            }
            var firstLegDetails = "You must travel through the following stops on the " + startLine + " line: " + firstLeg.join(", ") + ".";
            var secondLegDetails = "Your journey continues through the following stops on the " + endLine + " line: " + secondLeg.join(", ") + "."
            var firstLegStops = Math.abs(origin - unionSquareFirstLeg);
            var secondLegStops = Math.abs(unionSquareSecondLeg - destination);
            console.log(firstLegDetails);
            console.log("Change at Union Square.");
            console.log(secondLegDetails);
            console.log("Total stops: " + (firstLegStops + secondLegStops));
        }
    }
};
