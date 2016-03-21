flowerPrimes = {
  drawCircle : function (object) {
    console.log('walrus3');
    var x = object.x || 0;
    var y = object.y || 0;
    var r = object.r || 10;
    var color = object.color || "white";
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, true);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 0;
  },

  origin : {
    x : 300,
    y : 300
  },

  xyCenter : function (n){
    var radius = Math.sqrt(n);
    var angle = Math
  }

};

$(document).ready( function () {
  console.log('walrus');
  canvas = document.getElementsByTagName("canvas")[0];
  context = canvas.getContext('2d');
  console.log('walrus2');
  flowerPrimes.drawCircle({
    x : 300,
    y : 300,
    r : 10,
    color : "rebeccapurple"
  });
});
