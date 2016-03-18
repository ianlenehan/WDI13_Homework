var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = 'Arial, sans-serif';

var nickname = document.getElementById('nickname');
nickname.innerHTML ='Emily';

var favourites = document.getElementById('favorites');
favourites.innerHTML ='Sushi';

var hometown = document.getElementById('hometown');
hometown.innerHTML ='London';

var list = document.getElementsByTagName('li');

for (var i=0; i<list.length; i++) {
  list[i].className = "listitem";
}

// One way
body.innerHTML += "<img src='https://fillmurray.com/100/100'>";

// Another way
var bill = document.createElement('img');
bill.src="http://fillmurray.com/100/100";
body.appendChild(bill);
