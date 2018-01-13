interface CharacterInterface {
  greet(name? : string) : void;
}
class Character implements CharacterInterface {
  fullname : string;
  constructor(firstname : string, lastname : string) {
    this.fullname = firstname + " " + lastname;
  }
  greet(name? : string) {
    if(name)
    {
      return "Hi! " + name + "! my name is " + this.fullname;
    }
    else
    {
      return "Hi! my name is " + this.fullname;
    }
  }
}
var spark = new Character("Jacob","Keyes");
var msg = spark.greet();
console.log(msg);
//alert(msg); // "Hi! my name is Jacob Keyes"
var msg1 = spark.greet("Dr. Halsey");
console.log(msg1);
//alert(msg1); // "Hi! Dr. Halsey! my name is Jacob Keyes"
