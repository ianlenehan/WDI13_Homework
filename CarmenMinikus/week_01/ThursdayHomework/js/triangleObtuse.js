//Obtuse Triangle, when one angle is greater then 90 degrees

var ActTriangle = {
  sideA: 5,
  sideB: 8,
  sideC: 9
};


var obtuseTriangle = {
  sideA: 5,
  sideB: 8,
  sideC: 4
};



var ifObtuseTriangle = function (x){
  if ((obtuseTriangle.sideA > obtuseTriangle.sideB) && (obtuseTriangle.sideA > obtuseTriangle.sideC )) {
    if ( (Math.pow(obtuseTriangle.sideA,2)) > (Math.pow(obtuseTriangle.sideB,2)) + (Math.pow(obtuseTriangle.sideC,2)) ){
      return "The Triangle is obtuse";
    };
  };
  if ((obtuseTriangle.sideB > obtuseTriangle.sideC) && (obtuseTriangle.sideB > obtuseTriangle.sideA )) {
    if ( (Math.pow(obtuseTriangle.sideB,2)) > (Math.pow(obtuseTriangle.sideA,2)) + (Math.pow(obtuseTriangle.sideC,2)) ){
      return "The Triangle is obtuse";
    };
  };
  if ((obtuseTriangle.sideC > obtuseTriangle.sideA) && (obtuseTriangle.sideC > obtuseTriangle.sideB )) {
    if ( (Math.pow(obtuseTriangle.sideC,2)) > (Math.pow(obtuseTriangle.sideA,2)) + (Math.pow(obtuseTriangle.sideB,2)) ){
      return "The Triangle is obtuse";
    };
  }
  else {
    return "the triangle is NOT obtuse";
  };
};


console.log(ifObtuseTriangle(obtuseTriangle));
