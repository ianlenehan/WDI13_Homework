var request = new XMLHttpRequest();
var imdbID;

request.onreadystatechange = function() {
  if (request.readyState !== 4) {
    return
  }

  // removes previous list if it exists.
  if (document.getElementsByClassName('list').length !== 0) {
    toDelete = document.getElementsByClassName('list')[0];
    toDelete.parentNode.removeChild(toDelete);
  }

  // creates a new ul object with class name 'list' and appends it to the container
  var container = document.getElementsByClassName('container')[0];
  var list = document.createElement('ul');
  list.className = 'list';
  container.appendChild(list);


  response = JSON.parse(request.responseText);
  results = response.Search;

  for (var i = 0; i<results.length; i++) {
    thisMovie = results[i]
    var listItem = document.createElement('li');
    listItem.className = thisMovie.Poster;
    listItem.innerHTML = '<p>' + thisMovie.Title + '</p>';
    listItem.addEventListener('click', function() {
      Poster = this.className;
      showPicture();
    });

    var list = document.getElementsByClassName('list')[0];
    list.appendChild(listItem);
  };
};

var button = document.getElementsByClassName('button')[0];

button.addEventListener('click', function() {
  clearImages();
  movie = document.getElementsByClassName('movieInput')[0].value;
  request.open('GET', 'http://omdbapi.com/?s=' + movie);
  request.send();
});

var clearImages = function() {
  if (document.getElementsByClassName('Poster').length !== 0) {
    image = document.getElementsByClassName('Poster')[0];
    image.parentNode.removeChild(image);
  }
};

var showPicture = function() {
  clearImages();
  var container = document.getElementsByClassName('container')[0];
  var image = document.createElement('p');
  image.className = 'Poster'
  image.innerHTML = '<img src="' + Poster + '">';
  container.appendChild(image);
};
