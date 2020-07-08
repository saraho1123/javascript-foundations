class Unicorn {
  constructor(name, color = "white") {
    this.name = name
    this.color = color
  }

  isWhite() {
    return this.color == "white";
    // if (this.color == "white") {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  says(sparklyPhrase) {
    return `**;* ${sparklyPhrase} *;**`;
  }
}



module.exports = Unicorn;


// properties inside constructor
// functions outside constructor
// () in the test means method (needs a function)
// . w/out () in the test means a property (goes in the constructor)
// methods ... what the Class can do
// constructor ... describes what each instance of the class can do (cookie cutter)
// if IF statement is returning true/false, just return the condition (boolean logic!!)
// to help find typos, try looking right to left!!
