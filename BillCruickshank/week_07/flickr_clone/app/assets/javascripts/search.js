var flickrQueryObject = {
  method: 'flickr.photos.search',
  api_key: '2f5ac274ecfac5a455f38745704ad084',
  text: '',
  format: 'json',
  page: 0
};

var complete = true;

var searchFlickr = function () {
  flickrQueryObject.page += 1;
  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  $.getJSON(flickrURL, flickrQueryObject).done(function(data){
    console.log(data);
    for (var i=0; i<data.photos.photo.length; i++){
      var photoURL = generatePhotoURL(data.photos.photo[i]);
      var linkURL = generateLinkURL(data.photos.photo[i]);
      displayPhoto(photoURL, linkURL);
    }
    if (data.photos.pages === flickrQueryObject.page) {
      complete = true;
      $('#results').append($('<h1>').text("that's it buddy"));
    } else {
      complete = false;
    }
  });
};

var displayPhoto = function (photoURL, linkURL) {
  var $img = $('<img>', {src: photoURL, class: "fixed-height"});
  var $anchor = $('<a>', {href: linkURL, target: "_blank"}).html($img);
  $anchor.appendTo('#results');
};

var generatePhotoURL = function (photo) {
  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_m.jpg'
  ].join('');
};

// https://www.flickr.com/photos/{user-id}/{photo-id}

var generateLinkURL = function (photo) {
  return [
    'https://www.flickr.com/photos/',
    photo.owner,
    '/',
    photo.id
  ].join('');
};

$(document).ready(function(){
  $('#search').on('submit', function(event){
    event.preventDefault();
    if ($('input#query').val() !== flickrQueryObject.text) {
      flickrQueryObject.page = 0;
      $('#results').html("");
      flickrQueryObject.text = $('input#query').val();
      searchFlickr();
    }
  });

  setInterval(function () {
    if (!complete) {
      var niceHeight = $(document).height() - $(window).scrollTop();
      if (niceHeight < $(window).height()*5) {
        searchFlickr();
      }
    }
  }, 1000);
});
