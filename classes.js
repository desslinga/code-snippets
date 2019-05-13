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
One of the goals of introducing classes is
not having to deal with the prototype
object anymore, because it can be confusing
to work with, and thus easy to make errors
with it.
*/
