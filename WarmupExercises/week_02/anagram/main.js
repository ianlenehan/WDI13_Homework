var Anagram = {

  sortAlphabetically: function(word) {
    return word.split("").sort().join("");
  },

  theEqualizer: function(setWord, getWord) {
    setWord = setWord.toLowerCase();
    getWord = getWord.toLowerCase();

    if ( setWord !== getWord ) {
      if (this.sortAlphabetically(setWord) === this.sortAlphabetically(getWord)){
        return true;
      }
      return false;
    }
    return false;
  },

  areAnagram: function(word, potentialAnagrams) {
    var anagram = [];

    for ( var i = 0; i < potentialAnagrams.length; i++ ) {
      var currentWord = potentialAnagrams[i];
      if (this.theEqualizer(word, currentWord)) {
        anagram.push(currentWord);
      }
    }
    return anagram;
  }

};

console.log(Anagram.areAnagram('listen', ['tensil', 'agdtf', 'enlist', 'listen']));
