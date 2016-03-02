/////////////////////////////
///What triangle is this?///
///////////////////////////

//object
var triangle = {
  sideA: 2,
  sideB: 2,
  sideC: 3
};


//function to decide if equilateral

var isEquilateral = function (sideA,sideB,sideC) {
   if (sideA === sideB && sideB === sideC) {
      console.log('dis be an equilateral triangle bruv');
   }  else {
      console.log('dis is not equilateral bruv');
   }
};
isEquilateral(triangle.sideA,triangle.sideB,triangle.sideC);

//function to decide if isosceles
var isIsosceles = function (sideA,sideB,sideC) {
   if (sideA === sideB && sideB !== sideC) {
      console.log('dis be a isosceles Triangle bruvv');
    } if (true) {

    } (sideA === sideB && sideB !== sideC) {
          console.log('dis be a isosceles Triangle bruvv');
       }
 else {
      console.log('dis is not isosceles bruv');
   }
};
isIsosceles(triangle.sideA,triangle.sideB,triangle.sideC);


//function to decide if obtuse
/*
var isObtuse = function (sideA,sideB,sideC) {
   if (sideA === sideB && sideB !== sideC) {
      console.log('dis be an obtuse Triangle mahn');
   }
   if (sideB === sideC && sideC !== sideA) {
      console.log('dis be an obtuse Triangle mahn');
   }  else {
      console.log('this is not an obtuse situational bruv');
   }
}
isObtuse(triangle.sideA,triangle.sideB,triangle.sideC)

//function to figure out the total area of triangle

var area = function(sideA, sideB,sideC) {
    var a = ( sideA * sideB * sideC );
    console.log('The total area is ' + a);
};
area(triangle.sideA,triangle.sideB,triangle.sideC);


*/
//
//for testing, not to be used in final code

/*var isIsosceles = function (triangle.length){
   var len = arguments.length;
   for (var i = 1; i< len; i++){
      if (arguments[i] == null || arguments[i] != arguments[i-1])
         return false;
   }
   return true;
}*/
