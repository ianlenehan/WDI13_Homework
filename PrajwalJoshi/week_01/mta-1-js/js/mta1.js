



var Mta = {
      lines: {
        "N":['TIME SQUARE', '34TH', '28TH', '23RD', 'UNION SQUARE', '8TH'],
        "L":['8TH', '6TH', 'UNION SQUARE', '3RD', '1ST'],
        "6":['GRAND CENTRAL', '33RD', '28TH', '23RD', 'UNION SQUARE', 'ASTOR PLACE']
      },
      central:"UNION SQUARE",

      spellCheck:function(name, type){
        var contains =0;
        if(type ==="station"){
        for (var line in this.lines) {
          if (this.lines.hasOwnProperty(line)) {
              if(this.lines[line].indexOf(name) != -1){
                contains++;
                }
              }
            }
          }
          if(type === 'line'){
              var line = Object.keys(this.lines);
              //console.log(line);
              for (var i = 0; i < line.length; i++) {
              if(line[i] === name){
                contains++;
              }
            }
          }
          if(contains !== 0){
            return true;
          }
     },
      toSameLine:function(startStation,stopStation,line){
        var commute = [];
        for (var i = 0; i < this.lines[line].length; i++) {
          var add =this.lines[line][i];
           commute.push(add);
          if(stopStation === add){
          return commute;
          }
        }
      },
      toCentralInterchange:function(strtLine,strtStation){
        var commute = [];
        var strtLineArr = this.lines[strtLine];
        var strtStationIndx = strtLineArr.indexOf(strtStation);
        var centralIndx = strtLineArr.indexOf(this.central);
        if(strtStationIndx > centralIndx){
          strtLineArr = strtLineArr.reverse();
          strtStationIndx = strtLineArr.indexOf(strtStation);
        }
           for (var i = strtStationIndx; i < strtLineArr.length; i++) {
                commute.push(strtLineArr[i]);
                if(strtLineArr[i] === this.central){
                  return commute;
                }
           }
      },
      fromCentralInterchange:function(stopLine,stopStation){
        var commute = [];
        var stopLineArr = this.lines[stopLine];
        var stopStationIndx = stopLineArr.indexOf(stopStation);
        var centralIndx = stopLineArr.indexOf(this.central);
        if(stopStationIndx < centralIndx){
          stopLineArr = stopLineArr.reverse();
          stopStationIndx = stopLineArr.indexOf(stopStation);
          centralIndx = stopLineArr.indexOf(this.central);
        }
           for (var i = centralIndx; i < stopLineArr.length; i++) {
                commute.push(stopLineArr[i]);
                if(stopLineArr[i] === stopStation){
                  return commute;
                }
           }
      },
      planTrip: function(strtLine, strtStation, stopLine, stopStation) {
        strtLine = strtLine.toUpperCase();
        strtStation=strtStation.toUpperCase();
        stopLine=stopLine.toUpperCase();
        stopStation=stopStation.toUpperCase();
        if((this.spellCheck(strtStation,'station') === true)
          && (this.spellCheck(stopStation,'station') === true)
          && (this.spellCheck(strtLine,'line') === true)
          && (this.spellCheck(stopLine,'line') === true)){



        if(strtLine === stopLine  && strtStation !== stopStation){
          console.log("Get on the train from  "+strtStation+" station in the "+strtLine+"th line.");
          console.log("you most travel through the following stops:");
          console.log(this.toSameLine(strtStation,stopStation,strtLine).join(' ==> '));
        }else if((strtLine === stopLine) && (strtStation === stopStation)){
          console.log("Destination Should be different to start place.");
        }else{
          console.log("Get on the train from  "+strtStation+" station in the "+strtLine+"th line.");
          console.log("you most travel through the following stops:");
          console.log(this.toCentralInterchange(strtLine,strtStation).join(' ==> '));
          console.log('Change at '+this.central+' to a '+stopLine+'th line train.');
          console.log(this.fromCentralInterchange(stopLine,stopStation).join(' ==> '));
        }

    }else{
      console.log("Invalid Information.");
    }
}}

console.log("--------Trip 1(Same Line)-------");
Mta.planTrip('N', 'Time Square', 'N', '28th');
console.log("------------Trip 2-------------");
Mta.planTrip('N', 'Time Square', '6', '23rd');
console.log("------------Trip 3-------------");
Mta.planTrip('L', '3rd', 'N', '23rd');
console.log("------------Trip 4-------------");
Mta.planTrip('6', 'Grand Central', 'N', '23rd');
console.log("------------Trip 5-------------");
Mta.planTrip('6', '33rd', 'N', '34th');
console.log("-------Trip 6(Same Dest)--------");
Mta.planTrip('6', '33rd', '6', '33rd');
