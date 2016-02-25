// !!NO METHODS FOR THIS ===> only for the bank

// Part 1, Rectangle
//
// Given the following a rectangle object like the one below,
//  write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
//

var rectangle = {
  length: 4,
   width: 5
  };


var isSquare = function(r) {
  if (r.length === r.width){
      console.log ("is square");
    return (r + " is a square.");
  } else {
      console.log ("is not ");
    return (r + " is not a square.");
    }
};
//isSquare(rectangle);

var area = function(area) {
  console.log(area.length * area.width);
  return (area.length * area.width);
};
//area(rectangle);

var perimeter = function(r) {
  console.log(2 * (r.length * r.width));
  return (2 * (r.length * r.width));
};
//perimeter(rectangle);

//=======================================================================

// Part 2, Triangle
//
// Given the following a triangle object like the one below,
// write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
//

var triangle = {
  sideA: 11,
  sideB: 6,
  sideC: 8
 };

var isEquilateral = function(t) {
   var a = t.sideA;
   var b = t.sideB;
   var c = t.sideC;
   if ((a === b) && (a === c)) {
     return true;
   } else {
     return false;
   }
}
 //isEquilateral(triangle);


var isIsosceles = function(t) {
  var a = ((t.sideA === t.sideB) || (t.sideA === t.sideC));
  var b = ((t.sideB === t.sideA) || (t.sideB === t.sideC));
  if ( (a) || (b) ) {
    return true;
  } else {
    return false;
  }
 }
 //isIsosceles(triangle);


 var herons = function (a, b, c) {
  var s = (a+b+c)/2;
  var sa = (-a+b+c)/2;
  var sb = (a-b+c)/2;
  var sc = (a+b-c)/2;

  return Math.sqrt(s*sa*sb*sc);
}

 var areaTri = function(t) {
   var a = t.sideA;
   var b = t.sideB;
   var c = t.sideC;
 return herons(a,b,c);
 };
 //areaTri(triangle);

// ((c * c) / 2) < ((a * a) + (b * b)) < (c * c));
 var isObtuse = function(s) {
   var a = s.sideA;
   var b = s.sideB;
   var c = s.sideC;
   var longest = null;
   var shortA = null;
   var shortB = null;

   if (( a > b) && (a > c)) {
     longest = a;
     a = shortA;
     b = shortB;
   } else if (( b > a) && (b > c)) {
     longest = b;
     a = shortA;
     b = shortB;
   } else if (( c > a) && (c > b)) {
     longest === c;
     a = shortA;
     b = shortB;
   } else {
     return s + " cannot be obtuse";
   }

  if (((shortA * shortA) + (shortB * shortB)) < (longest * longest)) {
     return s + " is obtuse";
   } else {
     return s + " is not obtuse";
   }
}
