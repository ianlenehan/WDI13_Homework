anagram = {
  isAnagram : function ( string1, string2 ) {
    if (string1.length !== string2.length) {
      return false;
    }
    length = string1.length;
    array1 = string1.split('');
    array2 = string2.split('');
    for (var i = 0; i < length; i++) {
      letter = array1.pop();
      j = array2.indexOf(letter);
      if (j === -1) {
        return false;
      }
      else {
        array2.splice(j, 1);
      }
    }
    return true;
  },

  filterList(word, arrayOfWords) {
    return arrayOfWords.filter(function (w) {
                                 return anagram.isAnagram(word, w);
                               });
  }
}



console.log(anagram.isAnagram("fish", "fowl"));
console.log(anagram.isAnagram("fish", "hsif"));
console.log(anagram.filterList("listen", ["enlists", "google", "inlets", "banana"] ));
