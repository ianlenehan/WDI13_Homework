primes = {
  drawCircle : function (object) { //draw
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

  origin : {  //draw
    x : 300,
    y : 300
  },

  dilation : 10,  //draw

  floretCenter : function (n){  //draw
    var radius = Math.sqrt(n);
    var angle = n * 4 * Math.PI /( 3+ Math.sqrt(5));
    return [radius * Math.cos(angle) * this.dilation + this.origin.x,
            radius * Math.sin(angle) * this.dilation + this.origin.y];
  },

  florets : [],

  setColorFlorets : function (color) { // dump it later
    for (var i = 0; i < this.florets.length; i++) {
      this.florets[i].color = color;
    }
  },

  drawFlorets : function (max) {
    if (max === undefined) {
      max = this.florets.length;
    }
    for (var i = 0; i < max; i++) {
      this.drawCircle(this.florets[i]);
    }
  },

  drawFloretsRange : function (min, max) {
    for (var i = Math.ceil(min); i < max; i++) {
      this.drawCircle(this.florets[i]);
    }
  },

  index : 0,

  timeScaledToRange : function (time) {
    return time/1000;
  },

  drawFloretsSlow : function (time) {
    if (!flowerPrimes.start) {
      flowerPrimes.start = time;
      flowerPrimes.last_rel_time = 0;
    }
    rel_range = flowerPrimes.timeScaledToRange(time - flowerPrimes.start);
    if (rel_range > flowerPrimes.florets.length -1){
      cancelAnimationFrame(id);
    }
    flowerPrimes.drawFloretsRange(flowerPrimes.last_rel_range, rel_range);
    flowerPrimes.last_rel_range = rel_range;
    var id = requestAnimationFrame(flowerPrimes.drawFloretsSlow);
  }
};

primes.makeFlorets = function (max) {
  for(var i= 0; i <= max; i++) {
    var coords = this.floretCenter(i);
    this.florets.push({
      index : i,
      x : coords[0],
      y : coords[1],
      color : 'rebeccapurple'
    });
  }
  this.florets[0].r = 0;
};


var fib = function(n) {
  numbers = [1,1];
  while(numbers[0] < n){
    numbers.unshift(numbers[0] + numbers[1]);
  }
  console.log(numbers);
};

$(document).ready( function () {
  canvas = document.getElementsByTagName("canvas")[0];
  context = canvas.getContext('2d');
  // flowerPrimes.makeFlorets(6765);
  // flowerPrimes.drawFlorets();
  // flowerPrimes.setColorFlorets('red');
  // var id =  requestAnimationFrame(flowerPrimes.drawFloretsSlow);
});
