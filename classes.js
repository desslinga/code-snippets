/*
If you know a bit about JavaScript, you'll
know that it uses prototypal inheritance.
Now, prototypal inheritance is hard to
explain and understand, so there's plenty
of different answers you'll find that
attempt to explain it.

First off, JavaScript classes are not the
'solution' to prototypal inheritance. When
we use classes, we are still using
prototypal inheritance under the hood.

Let's start with an example of ES5 'classes'
*/

/*
Here we've defined a Car constructor that
takes in some options to customize the
Car object.
*/

function Car(options) {
  this.title = options.title;
}

/*
We can add properties and methods to the
Car prototype using Car.prototype. Any
instances that inherit from Car.prototype
is able to access any of its properties
and methods.
*/

Car.prototype.drive = function() {
  return 'vroom';
}

/*
We create a new instance of Car using the
new keyword, inheriting from the Car
prototype.
*/
const car = new Car({ title: 'Focus '});
car.drive(); // vroom
car;

/*
With JavaScript objects, we can also create
child objects. For object Car, we can create
another Car type of Toyota, which has it's
own constructor.
*/

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

/*
This is how we make Toyota inherit from the
Car prototype, but use the Toyota constructor.
*/

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

/*
As per usual, we can also add methods or
properties to the Toyota prototype by adding
them to Toyota.prototype.
*/

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({
  color: 'red',
  title: 'Daily Driver'
});
toyota;
toyota.drive(); // vroom
toyota.honk(); // beep

/*
One of the goals of introducing classes is
not having to deal with the prototype
object anymore, because it can be confusing
to work with, and thus easy to make errors
with it.

So let's try refactoring our code into ES6
below. The idea with the class feature is
that we can bypass having to use the prototype
object.
*/

/*
We create a new class by declaring it with the
class keyword.
*/
class Car {
  /*
  This is the constructor function, which may
  be familiar to you, because it is also used
  in other programming languages. Think of it
  as an init function for this class.

  If there are any arguments we want to pass
  with the 'new' keyword, then those arguments
  will be recieved by the constructor.
  */
  constructor({ title }) {
    this.title = title;
  }
  /*
  Here we're adding a method to class Car,
  which can be used by any car instances.
  */
  drive() {
    return 'vroom'
  }
}

/*
Here we're creating a new instance of class
Car. Once again, what this does is create a
new object that inherits from the Car class.
It can use call properties, and use methods
from the Car class.
*/
const car = new Car({ title: 'Toyota' });
car; // { "title" : "Toyota" }
car.drive(); // vroom
