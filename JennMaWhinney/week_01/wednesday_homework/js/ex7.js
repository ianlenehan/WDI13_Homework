/*

Part 2, Triangle

Given the following a triangle object like the one below,
write the following functions:

area - Returns the area of the Triangle

*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var herons = function (t) {
  var s = (t.sideA+t.sideB+t.sideC)/2;
  var sa = (-t.sideA+t.sideB+t.sideC)/2;
  var sb = (t.sideA-t.sideB+t.sideC)/2;
  var sc = (t.sideA+t.sideB-t.sideC)/2;

  return Math.sqrt(s*sa*sb*sc);
}
