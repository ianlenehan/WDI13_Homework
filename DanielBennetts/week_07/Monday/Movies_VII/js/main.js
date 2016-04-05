// var request = new XMLHttpRequest();
//
// var movieId = function() {
//
//   request.onreadystatechange = function() {
//     if (request.readyState !== 4 ) {
//       return;
//     }
//      // IF info["Search"].length === 1
//     var poster = document.getElementById('poster')
//     var info = JSON.parse( request.responseText );
//     if ( info["Search"].length === 1 ) {
//     poster.src = info["Search"][0].Poster
//
//     var title = document.getElementById('title')
//     title.innerHTML = info["Search"][0].Title
//
//     var plot = document.getElementById('plot')
//     plot.innerHTML = info["Search"][0].Plot
//   } else {
//
//     for (var i = 0; i < info['Search'].length; i++) {
//       var x = document.createElement("h2");
//       x.innerHTML = info["Search"][i].Title
//       document.getElementById('results').appendChild(x);// Create a div for this movie's info and append to container
//       // Put the result of the code above into a h2 tag and append it to that div you just created above
//
//       var y = document.createElement("p");
//       y.innerHTML = info["Search"][i].Plot
//       document.getElementById('results').appendChild(y);
//
//       var z = document.createElement("img");
//       z.src = info["Search"][i].Poster
//       document.getElementById('results').appendChild(z);
//     }
// }
//
//
//
// };
//
// var title = document.getElementById('movie-title').value
//
// request.open('GET', 'http://www.omdbapi.com/?s=' + title)
// request.send();
//
// };

$(document).ready(function(){

  $('#movie-lookup').on('submit', function (event) {

    event.preventDefault();

    var movieTitle = $('#movie-title').val();
    var movieURL = 'http://omdbapi.com/?t=' + movieTitle;

    $.ajax(movieURL).done(function (data) {
      var $image = $('<img>').attr('src', data.Poster);
      $('#result').html($image);
      });
    });


    // // var request = new XMLHttpRequest();
    // // request.onreadystatechange = function() {
    // //   if (request.readyState !== 4) { return };
    // //
    // //   var movieInfo = JSON.parse( request.responseText );
    //
    //   var moviePoster = movieInfo.Poster;
    //   var $image = $('<img>').attr('src', moviePoster);
    //   $('#result').html($image);
    //
    // };
    // request.open('GET', movieURL)
    // request.send();
  });
});
