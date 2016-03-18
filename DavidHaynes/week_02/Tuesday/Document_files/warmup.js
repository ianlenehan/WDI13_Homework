/*
DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

Each symbol represents a nucleotide,
which is a fancy name for the particular molecules that happen to make up a large part of DNA.

Shortest intro to biochemistry EVAR:

twigs are to birds nests as
nucleotides are to DNA and RNA as
amino acids are to proteins as
sugar is to starch as
oh crap lipids
I'm not going to talk about lipids because they're crazy complex.

So back to nucleotides.

There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

There are no other nucleotides.

Make sure that you validate it has nucleotides!

Find how many of each nucleotides are in a string that you pass in to a function
*/

var DNA = ['A', 'C', 'G', 'T'];
var RNA = ['A', 'C', 'G', 'L'];

var nucleotides = ['A','C','G','T','L'];

var nucCount = [];
var nucCountSetup = function () {
    for (var z = 0; z < nucleotides.length; z++) {
        nucCount.push(0);
    }
};

// [a,a,a,c,g,g,g,t,t,t,t,a]
var testNUC = function(string) {
    for (var x = 0; x < string.length; x++) {
        for (var y = 0; y < nucleotides.length; y++) {
            if (nucleotides[y] === string[x]) {
                nucCount[y] +=1;
            }
        }
    }
};

var testString = function(string) {
    nucCountSetup();
    testNUC(string);
    console.log('Nucleotides ' + nucleotides + ": " + nucCount);

};
