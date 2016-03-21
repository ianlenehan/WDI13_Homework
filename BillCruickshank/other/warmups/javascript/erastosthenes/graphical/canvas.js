flowerPrimes = {
  drawCircle : function (object) {
    var x = (object.x !== undefined) ? object.x : 0;
    var y = (object.y !== undefined) ? object.y : 0;
    var r = (object.r !== undefined) ? object.r : this.dilation*0.5;
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

  dilation : 5,

  xyCenter : function (n){
    var radius = Math.sqrt(n);
    var angle = n * 4 * Math.PI /( 3+ Math.sqrt(5));
    return [radius * Math.cos(angle) * this.dilation + this.origin.x,
            radius * Math.sin(angle) * this.dilation + this.origin.y];
  },

  florets : [],

  makeFlorets : function (max) {
    for(var i= 0; i <= max; i++) {
      var coords = this.xyCenter(i);
      this.florets.push({
        index : i,
        x : coords[0],
        y : coords[1],
        color : 'rebeccapurple'
      });
    }
    this.florets[0].r = 0;
  },

  drawFlorets : function () {
    for (var i = 0; i < this.florets.length; i++) {
      this.drawCircle(this.florets[i]);
    }
  }
};

$(document).ready( function () {
  canvas = document.getElementsByTagName("canvas")[0];
  context = canvas.getContext('2d');
  flowerPrimes.makeFlorets(2000);
  flowerPrimes.drawFlorets();
});
