

var rectangle = {
  l: 6,
  w: 4
};

var isSquare = function (){
    if (rectangle.l === rectangle.w){
      console.log("The following item is a square");
    }  else {
      console.log("The following item is a rectangle");
    }
};


var area = function(){
  console.log(rectangle.l * rectangle.w);
}


var perimeter = function(){
  console.log(rectangle.l + rectangle.w);
}
