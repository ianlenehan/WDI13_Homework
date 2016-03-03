// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
//
// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
//
// Shortest intro to biochemistry EVAR:
//
// twigs are to birds nests as
// nucleotides are to DNA and RNA as
// amino acids are to proteins as
// sugar is to starch as
// oh crap lipids
// I'm not going to talk about lipids because they're crazy complex.
//
// So back to nucleotides.
//
// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
//
// There are no other nucleotides.
//
// Make sure that you validate it has nucleotides!
//
// Find how many of each nucleotides are in a string that you pass in to a function

// unfinished below
var letters = ["a", "c" , "g", "t", "u"];
var dna = function(input) {

var caseConvert = input.toLowerCase();

for (i = 0; i < input.length; i++) {
  var log = caseConvert.split(letters[i]).length-1;
if (letters[i] === a) {

}




  var count = count += log;

}
console.log(count);
};

// var dna = function(input) {
// // -1 used because in counts from 0
// var caseConvert = input.toLowerCase();
// var a = caseConvert.split("a").length-1;
// var b= caseConvert.split("c").length-1;
// var c = caseConvert.split("g").length-1;
// var d = caseConvert.split("t").length-1;
// var e = caseConvert.split("u").length-1;
//
//
// console.log("String contains "+ a + " instances of a, " + b + " instances of c, " +  c+ " instances of g, " +  d + " instaces of t, " +  e + " instaces of u, ")
//  };
