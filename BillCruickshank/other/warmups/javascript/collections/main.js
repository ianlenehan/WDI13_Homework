
var collections = {
  myArrayMap: function(array, callback) {
    var returnArray = [];
    for (var i = 0; i < array.length; i++) {
      returnArray.push(callback(array[i]));
    }
    return returnArray;
  },

  functions: [
    {
      plural: "originals",
      singular: "original",
      func: function(num){
        return num;
      }
    },
    {
      plural: "squares",
      singular: "square",
      func: function(num){
        return num*num;
      }
    },
    {
      plural: "squareroots",
      singular: "squareroot",
      func: function(num){
        return Math.sqrt(num);
      }
    },
    {
      plural: "cubes",
      singular: "cube",
      func: function(num){
        return num*num*num;
      }
    },
    {
      plural: "isEvens",
      singular: "isEven",
      func: function(num){
        return (num%2)===0;
      }
    }
  ],

  rowBoxer: function(num){
    var newObject = {};
    for (var i = 0; i < collections.functions.length; i++) {
      newObject[ collections.functions[i].singular ] = collections.functions[i].func(num);
    }
    return newObject;
  },

  datafier: function(array, boxRows) {
    if(boxRows){
      var returnArray = [];
      return this.myArrayMap(array, this.rowBoxer);
    } else {
      var returnObject = {};
      for (var i = 0; i < this.functions.length; i++) {
        returnObject[ this.functions[i].plural ] = this.myArrayMap(array, this.functions[i].func);
      }
      return returnObject;
    }
  }
};

window.addEventListener('load', function () {
  var svgSelection = d3.select('body').append('svg')
    .attr("width", 800)
    .attr("height", 800);


  var circles = svgSelection.selectAll('circle')
    .data(collections.datafier([1,2,3,4,5], true))
    .enter()
    .append('circle');

  var circleAttrs = circles
    .attr('cx', function(d){return 30+ d.cube*2;})
    .attr('cy', function(d){return d.square*10;})
    .attr('r', function(d){return d.squareroot*10;})
    .style('fill', function(d){
      if (d.isEven) {
        return "red";
      } else {
        return "green";
      }
    });
});

console.log(collections.datafier([1,2,3,4]));
console.log(collections.datafier([1,2,3,4], true));
