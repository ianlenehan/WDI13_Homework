var Nucleotide = {
  countIndividualNucleotide: function( string, char ){
    var nucleotideCounter = 0;

    for ( var i = 0; i < string.length; i++ ) {
      if ( string[i] === char ) {
        nucleotideCounter++;
      }
    }
    // console.log(nucleotideCounter);
    return nucleotideCounter;
  },

  returnNucleotideCounts: function( string ) {
    string = string.toUpperCase();
    var nucleotideCounts = {
      "A": this.countIndividualNucleotide( string, "A" ),
      "C": this.countIndividualNucleotide( string, "C" ),
      "G": this.countIndividualNucleotide( string, "G" ),
      "T": this.countIndividualNucleotide( string, "T" ),
      "U": this.countIndividualNucleotide( string, "U" )
    }
    return nucleotideCounts;
  }
};

Nucleotide.returnNucleotideCounts("AGSTUasfgRTE");
