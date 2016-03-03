var button = document.getElementById('lib-button');

var story = document.getElementById('story');

var madLib = function () {
    var noun = document.getElementById('noun').value;
    var adjective = document.getElementById('adjective').value;
    var person = document.getElementById('person').value;
    story.innerHTML = "<p>" + person + " " + adjective + " " + noun + " " + "</p>";
};

button.addEventListener('click', madLib);
