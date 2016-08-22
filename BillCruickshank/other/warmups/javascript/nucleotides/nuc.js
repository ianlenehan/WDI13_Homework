nucleotide = {

  bases : ['a', 'c', 'g', 't', 'u'],

  counter : {},

  counterReset : function() {
    for (var i = 0; i <this.bases.length; i++) {
      this.counter[this.bases[i]] = 0;
    }
  },

  counterString: function(){
    string = "";
    for (var i = 0; i <this.bases.length; i++) {
      string += this.bases[i]+":"+this.counter[this.bases[i]]+"\n";
    }
  return string;
  },

  count : function(string){
    this.counterReset();
    var nonNucsFound = false;
    for (var i = 0; i < string.length; i++) {
      if (this.counter[string[i]] === undefined){
        nonNucsFound = true;
      } else {
        this.counter[string[i]]++;
      }
    }
    string = this.counterString();
    if (nonNucsFound) {
      string += "There were things in here that weren't nucleotides.\n"
    }
    if (this.counter.t >0 && this.counter.u >0) {
      string += "There were things in here that weren't nucleotides.\n"
    }
    this.counterReset();
    return string;
    }
  }

console.log(nucleotide.count("aaaa"));
console.log(nucleotide.count("abbb"));
console.log(nucleotide.count("accc"));
console.log(nucleotide.count("gataca"));
