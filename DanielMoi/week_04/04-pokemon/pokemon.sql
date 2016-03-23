CREATE TABLE pokemon (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  generation INTEGER,
  type TEXT,
  image TEXT
);

INSERT INTO pokemon (name, generation, type, image) VALUES ("Bulbasaur", 1,  "Grass", "http://img.pokemondb.net/artwork/bulbasaur.jpg");

INSERT INTO pokemon (name, generation, type, image) VALUES ("Charmander", 1, "Fire", "http://img.pokemondb.net/artwork/bulbasaur.jpg");

INSERT INTO pokemon (name, generation, type, image) VALUES ("Aurorus", 6, "Ice", "http://img.pokemondb.net/artwork/aurorus.jpg");
