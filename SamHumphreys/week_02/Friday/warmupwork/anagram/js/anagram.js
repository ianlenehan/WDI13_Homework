// Write a program that, given a word and a list of possible anagrams, selects
// the correct one(s).
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"]
//the program should return "inlets".

var data = {
  inputWord: 'monkey',
  inputWordAlphabet: [],
  choices: ['arrows', 'keynom', 'nomyek', 'Herbert'],
  choicesAlphabet: [],
  matches: [],
  message: ''
};

var doStuff = {
  fixInput: function () {
    data.inputWordAlphabet = data.inputWord.split('').sort().join('');
  },
  fixChoices: function () {
    for (var i = 0; i < data.choices.length; i ++) {
      data.choicesAlphabet.push(data.choices[i].split('').sort().join(''));
    }
  },
  checkMatches: function () {
    for (var i = 0; i < data.choicesAlphabet.length; i ++) {
      if (data.inputWordAlphabet === data.choicesAlphabet[i]) {
        data.matches.push(i);
      }
    }
  },
  giveMatches: function () {
    data.message = 'The anagrams of ' + data.inputWord + ' are ';
    for (var i = 0; i < data.matches.length; i ++) {
      data.message += data.choices[i];
    }
    console.log(data.message);
  }
};

doStuff.fixInput();
doStuff.fixChoices();
doStuff.checkMatches();
doStuff.giveMatches();


// var sortInput = function () {
//   for (var i = 0; i < data.inputWord.length; i++) {
//     data.inputWordAlphabet.push(data.inputWord[i]);
//   }
//   data.inputWordAlphabet = data.inputWordAlphabet.sort();
//   data.inputWordAlphabet = data.inputWordAlphabet.join('');
// };
//
// var sortChoices = function () {
//   for (var i = 0; i < data.choices.length; i ++) {
//     data.choices[i].split('');
//
//   }
// };
//
// var sortChoices = function () {
//
//
// };
