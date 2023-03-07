// TODO
/*
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
*/
// PREP
// P: cat object
// R: replace speak method
// E: 'Mr Whiskers meows.'
// P: extend class, add constructor for name, do super(name) to inherit from Animal class

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return "Gigilili";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.speak = function () {
      console.log(`${this.name} meows.`);
    };
  }
}
let paca = new Cat("Paca");
paca.speak();
