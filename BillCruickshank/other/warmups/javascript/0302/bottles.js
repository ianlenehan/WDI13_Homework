// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.


Beer = {

  sing : function(n) {
    if (n=== undefined) {
      var n = 100;
    }
    for(var i = n; i>=0; i--){
      this.printVerse(i);
    }
  },


  printVerse : function (n) {
    if (n === 0){
      console.log("No more bottles of beer on the wall, no more bottles of beer.");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    else {
      console.log(n ,"bottles of beer on the wall", n, "bottles of beer.");
      console.log("Take one down and pass it around", n-1, "bottles of beer on the wall.");
    }
  }
}

Beer.sing();
