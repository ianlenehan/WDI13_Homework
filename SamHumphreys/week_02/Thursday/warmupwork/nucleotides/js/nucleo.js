var data = {
  nucleotides: ['a','c','g','t','u'],
  inputString: '',
  nucInString: [],
  countEach: [
    {name: 'a', count: 0},
    {name: 'c', count: 0},
    {name: 'g', count: 0},
    {name: 't', count: 0},
    {name: 'u', count: 0},
  ]
};

var doStuff = {
  makeLower: function () {
    data.inputString = data.inputString.toLowerCase();
  },
  checkNucs: function () {
    for (var i = 0; i < data.inputString.length; i++) {
      for (var j = 0; j<data.nucleotides.length; j++) {
        if (data.inputString[i] === data.nucleotides[j]) {
          data.nucInString.push(data.inputString[i]);
        }
      }
    }
  },
  countStuff: function () {
    for (var i = 0; i<data.nucInString.length; i++) {
      for (var j = 0; j<data.countEach.length; j++) {
        if (data.nucInString[i] === data.countEach[j].name) {
          data.countEach[j].count += 1;
        }
      }
    }
  },
  reset: function () {
    data.nucInString = [];
    for (var i = 0; i<data.countEach.length; i ++) {
      data.countEach[i].count = 0;
    }
  },
  updateHTML: function () {
    var typeA = document.getElementsByClassName('aClass')[0];
    typeA.innerHTML = '<span>' + data.countEach[0].count + '</span>';
    var typeC = document.getElementsByClassName('cClass')[0];
    typeC.innerHTML = '<span>' + data.countEach[1].count + '</span>';
    var typeG = document.getElementsByClassName('gClass')[0];
    typeG.innerHTML = '<span>' + data.countEach[2].count + '</span>';
    var typeT = document.getElementsByClassName('tClass')[0];
    typeT.innerHTML = '<span>' + data.countEach[3].count + '</span>';
    var typeU = document.getElementsByClassName('uClass')[0];
    typeU.innerHTML = '<span>' + data.countEach[4].count + '</span>';
  },
  runIt: function () {

    doStuff.reset();
   var input = document.getElementsByClassName('dnaInput')[0].value;
    data.inputString = input;
    doStuff.makeLower();
    doStuff.checkNucs();
    doStuff.countStuff();
    doStuff.updateHTML();
  }
};

var checkIt = document.getElementById('button');
checkIt.addEventListener('click', doStuff.runIt);
