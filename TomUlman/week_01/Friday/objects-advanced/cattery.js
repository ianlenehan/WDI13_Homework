var catFactory = function (name, furColor, age) {
    return {
      'name': name,
      'furColor': furColor,
      'age': age,
      'bio' : function () {
        console.log(this.name + 'is' + this.age);
      },
      'meow': function () {
        console.log(this.name + ': meow');
      }
    };
  };

    var lizzieThecat = catFactory('Lizzie', 'black', 19);
    var lizzieThecat = catFactory('Bacon', 'red', 2);
    var lizzieThecat = catFactory('Whiskers', 'purple', 2);
