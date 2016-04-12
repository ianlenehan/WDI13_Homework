//
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

var routes = [
      {
        name: 'N',
        stops:['Time Square', '34th Street', '28th Street', '23rd Street', 'Union Square', '8th Street']
      },
      {
        name: 'L',
        stops: ['8th Street', '6th Street', 'Union Square', '3rd Street', '1st Street']
      },
      {
        name: '6',
        stops: ['Grand Central', '33rd Street', '28th Street', '23rd Street', 'Union Square', 'Astor Place']
      }
];

var x = 0;
var y = 0;
var w = 0;
var station = [];
var remaining = [];



var getRoute = function(startLine, startingStation){
  for (var i = 0; i < routes.length; i++){
    if (startLine === routes[i].name){
      y = i;
      for (var j = 0; j < routes[i].stops.length; j++){
        x = routes[i].stops.indexOf(startingStation);
        w = routes[i].stops.indexOf(routes[i].stops[x + 1]);
        }
      }
    }
  printRoute();
  getRemaining();
  console.log('You must travel through the following stops on line:' + ' ' +  startLine + ' : '
  + ' Start at ' + station[0] + ' continue through ' + remaining);
};


var printRoute = function(){
  for (var i = 0; i < routes[y].stops.length; i++){
    station.push(routes[y].stops[x]);
    x++
  }
};
