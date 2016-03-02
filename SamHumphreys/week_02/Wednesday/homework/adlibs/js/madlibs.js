var input = {
  noun: '',
  adjective: '',
  person: '',
  story: ''
};

var runIt = document.getElementById('lib-button');
var makeLib = function () {
  input.noun = document.getElementById('noun').value;
  input.adjective = document.getElementById('adjective').value;
  input.person = document.getElementById('person').value;
  input.story = input.person + ' really likes ' + input.adjective + ' ' +
                  input.noun + 's.';
  var story = document.getElementById('story');
  story.innerHTML = '<p>' + input.story + '</p>';
};

runIt.addEventListener('click', makeLib);
