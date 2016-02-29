// thisi s a constuctor, var with a capital letter
  var Bros = function (name, instrument, vice) {
    this.name = name;
    this.instrument = instrument;
    this.vice = vice;
    this.sing = function () {
      console.log('Everyone says I love you');
    };
  };

  var groucho = new Bros('Groucho', 'guitar', 'cigars');
