class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  transform() {
    if (this.wolf === false) {
      this.wolf = true;
      this.human = false;
    } else {
      this.wolf = false;
      this.human = true;
    }
    if (this.wolf === true) {
      this.hungry = true;
    } else {
      this.hungry = false;
    }
  }
  eat(victim) {
    if (this.wolf === true) {
      this.wolf = false;
      this.human = true
      this.hungry = false;
    return `Thanks for the ${victim.name}, MOM!`;
  }
    if (this.wolf === false) {
      return "Let's go swimming!";
    }
  }
}


module.exports = Werewolf;
