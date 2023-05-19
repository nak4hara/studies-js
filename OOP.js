//create a new object using constructor
function Dog(name, color) {
    this.name = name;
    this.color = color;
}

let labrador = new Dog('Bob', 'yellow')
//design of Dog constructor to accept parameters
//gives a new instance of Dog name and color properties to Dite and gray

console.log(labrador)

let instanceDog = labrador instanceof Dog;
//true if it was created with constructor, false if not
console.log(instanceDog)

//if there is a property that is the same to all, use prototype

Dog.prototype.numLegs = 4;
//so now labrador have numLegs property

console.log(labrador.constructor === Dog)
//can find out what kind of object it is

Dog.prototype = {
    eat: function(){
        console.log('nham nham nham')
    },
    describe: function(){
        console.log(`My name is ${this.name}`)
    }
} //properties are added all at once

//whenever a prototype is manually set to a new object, remember to define the constructor property
/*
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
*/

function Animal() { }
let animal = Object.create(Animal.prototype)
//creates a new object and set obj as the new obj prototype
console.log(animal instanceof Animal)


// fix constructor
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
//do manually so the constructor it is not Animal

let duck = new Bird();

//add function to prototype:

Bird.prototype.fly = function () {
    return 'pru pru';
};
console.log(duck.fly())

//UNRELATED OBJECTS
let flyMixin = function(obj) {
    obj.fly = function() {
        console.log('Flying, woosh!')
    }
};

 let bird = {
    name: 'José',
    numLegs: 2
 }
 let plane = {
    model: '888',
    numPassanger: 322
 }
//add fly method to both of instances but they are not related to one category.

 flyMixin(bird);
 flyMixin(plane);

//turn public property into private, change the scope
//only gethatchedEggCount have access to hatchedEgg
    function Bird() {
        let hatchedEgg = 10;
    
        this.getHatchedEggCount = function() { 
        return hatchedEgg;
        };
    }
    let ducky = new Bird();
    ducky.getHatchedEggCount();

/*
(function () {
  console.log("Chirp, chirp!");
})();

This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.
*/