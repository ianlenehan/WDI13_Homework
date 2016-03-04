var body = document.getElementsByTagName('body')[0];

var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false,
   cover: 'https://upload.wikimedia.org/wikipedia/en/3/33/The_Design_of_Everyday_Things_(cover_1988).jpg'
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true,
  cover: 'http://d.gr-assets.com/books/1295465264l/8884400.jpg'
  }];

var ul = document.createElement('ul');

  for (var i=0; i<books.length; i++) {
    var p = document.createElement('p');
    p.innerText = books[i].title + ' by ' + books[i].author;
    if (books[i].alreadyRead === true) {
      p.className = 'alreadyRead';
    }

    var img = document.createElement('img');
    img.src=books[i].cover;
    o.appendChild(img);

    var li = document.createElement('li');
    li.appendChild(p);
    ul.appendChild(li);
  }

  body.appendChild(ul);
