window.addEventListener('load', function () {

  var input = document.getElementById("input");
  var button = document.getElementById("button");
  var links = document.getElementById("links");
  var poster = document.getElementById("poster");

  var info;

  button.onclick = function() {

    var request = new XMLHttpRequest();
    var queryString = 'http://omdbapi.com?s='+input.value;
    request.open('GET', queryString);

    request.onreadystatechange = function () {
      if (request.readyState != 4) {
        return;
      }
      info = JSON.parse(request.responseText);

      if(info === 'undefined' || info.Response === "False"){
        poster.innerHTML = "";
        links.innerHTML = "<p>Sorry, I didn't get any results for that.</p>";
      } else if (info.Search.length == 1){
        links.innerHTML = "";
        poster.innerHTML = '<img src="'+info.Search[0].Poster+'">';
      } else {

        var htmlToInsertList = "<ul>";
        for(var i=0; i < info.Search.length; i++){
          htmlToInsertList += "<li id="+i+">"+info.Search[i].Title+"</li>";
        }
        htmlToInsertList += "</ul>";

        links.innerHTML = htmlToInsertList;

        titles = document.getElementsByTagName('li');

        for (i=0; i < info.Search.length; i++){
          titles[i].onclick = function () {
            var index = parseInt(this.id);
            var htmlToInsertImg = "<img src='"+info.Search[index].Poster+"'>";
            poster.innerHTML = htmlToInsertImg;
          };
        }
      }
    };
    request.send();
  };
});
