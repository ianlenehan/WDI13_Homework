// api key = eb118c92-f424-4bc2-9384-d29b786cf077

$(document).ready(function() {

  $('#news-search').on('submit', function(event) {
    event.preventDefault();

    var searchSubject = $('#search-subject').val();
    var searchURL = 'http://content.guardianapis.com/search?q=' + searchSubject + '&api-key=test';

    $.ajax(searchURL).done(function(data) {
      createResults();
      var dataBack = data.response.results;
      for (var i = 0; i<dataBack.length; i++) {
        var newsItem = $('li');
        // console.log(dataBack[i].apiUrl, dataBack[i].webTitle);
        // newsItem.attr('data', dataBack[i].apiUrl);
        // newsItem.html(dataBack[i].webTitle);
        $('.results').append(newsItem);
      };
    });
  });
});

var clearResults = function () {
  if ($('.results').length === 0) {
    return
  } else {
    $('.results')[0].remove();
    clearResults();
  }
};

var createResults = function() {
  clearResults();
  var $results = $('<ul>').attr('class', 'results');
  $('body').append($results);
}
