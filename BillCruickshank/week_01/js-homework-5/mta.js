// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

mta = {

  lines : { }, //Was [ ]

  makeLine : function(name) {
    var args = (arguments.length === 1?[arguments[0]]:Array.apply(null, arguments));
    this.lines[name] = {

      name : name,
      stations : args.slice(1),

      tripPlanner : function(name1, name2) {
        var i1 = this.stations.indexOf(name1);
        var i2 = this.stations.indexOf(name2);
        if ((i1 === -1) || (i2 === -1)){
          console.log("At least one station isn't on this line.");
          return false;
        }

        var step = Math.sign( i2 - i1 );
        if (step === 0) {
          console.log("You're going nowhere fast.")
          return false;
        }

        var length = step*(i2-i1);

        console.log("Your journey on line", this.name, "will be", length, "stops.");
        console.log("You are starting at", name1);
        console.log("Your intermediate stops are:");
        for (var i = i1 + step; i !== i2; i += step) {
          console.log("  ", this.stations[i]);
        }
        console.log("When you arrive at", name2);
        console.log("you should get off the train.");

        return length;
      }
    }
  },
 /*
  findLine : function(name) { //legacy of lines =[]
    console.log("XXXXXXXXXXXXXXXXXX");
    return this.lines[name];
  },
*/
  validStationLine : function(station, line) {
// noisily returns false for failure, or returns true.
    l = this.lines[line];
    if (l) {;
      if (l.stations.indexOf(station) !== -1) {
        return true;
      }
      else{
        console.log("I recognise line", line, "but I can't find", station, "on that line.")
        console.log("I can't help you, sorry.")
        return false;
      }
    } else {
      console.log("Sorry, but, I don't know what you mean by", line+".");
      console.log("I expected the name of a line. I can't help you.");
      return false;
    }
  },

  tripPlanner : function (name1, line1, name2, line2) {
    var printChangeLine = function (line1, line2) {
      console.log("Go from line", line1, "to line", line2+".");
    }

    if (!(this.validStationLine(name1, line1) && this.validStationLine(name2, line2))) {
      return false;
    }

    if (line1 === line2){
      debugger
      console.log("You don't have to change trains");
      var line = this.lines[name1];
      var length = line.tripPlanner(name1, name2);
      if (!length) {
        console.log("Well, good luck anyway.");
      }
    } else if ((name1 === "Union Square") || (name2 === "Union Square")) {
      console.log("I don't think you quite get how 'Union Square' works, but that's okay.")

      if (name1 === "Union Square") {
        printChangeLine(line1, line2);
        this.lines[line2].tripPlanner("Union Square", name2);
      } else {
        this.lines[line1].tripPlanner(name1, "Union Square");
        printChangeLine(line1, line2);
      }
    } else {
      console.log("During this journey you will have to change trains. It probably won't be too traumatic.");
      var line1 = this.lines[line1];
      var line2 = this.lines[line2];
      length1 = line1.tripPlanner( name1, "Union Square");
      console.log("You will need to change trains here,");
      printChangeLine(line1.name, line2.name);
      length2 = line2.tripPlanner( "Union Square", name2);
      console.log("That'll be", length1 + length2, "stops total.");
      console.log("Have fun!");
    }
  }
}

mta.makeLine("N", "Times Square", "34th", "28th", "23rd", "Union Square", "8th");
mta.makeLine("L", "8th", "6th", "Union Square", "3rd", "1st");
mta.makeLine("6", "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place");
l = mta.lines["N"];
l.tripPlanner("Times Square", "23rd");
console.log("--");
l.tripPlanner("23rd", "Times Square");
console.log("--");
l.tripPlanner("Times Square", "8th");
console.log("--");
l.tripPlanner("8th", "Times Square");

var test = function (n1, l1, n2, l2) {
  console.log("--");
  console.log(n1,l1,n2,l2);
  console.log("-")
  mta.tripPlanner(n1,l1,n2,l2);
  console.log("--");
}

test("Times Square", "N", "8th", "L");
test("Times Square", "N", "Times Square", "N");
test("Times Square", "N", "Union Square", "L");
test("Union Square", "L", "Times Square", "N");
test("Union Square", "N", "Union Square", "L");
test("Onion Square", "N", "Union Square", "L");
test("Onion Square", "Cool and the Gang", "Union Square", "L");
