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
another Car type of Toyota, which has its
own constructor.
*/

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

/*
This is how we make Toyota inherit from the
Car prototype, but use the Toyota
constructor.
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
that we can bypass having to use the
prototype object.
*/

/*
We create a new class by declaring it with
the class keyword.
*/
class Car {
  /*
  This is the constructor function, which
  may be familiar to you, because it is
  also used in other programming languages.
  Think of it as an init function for this
  class.

  If there are any arguments we want to
  pass with the 'new' keyword, then those
  arguments will be recieved by the
  constructor.
  */
  constructor({ title }) {
    this.title = title;
  }
  /*
  Here we're adding a method to class Car,
  which can be used by any car instances.
  One thing to note is that you don't need
  to separate different class methods with
  a comma "," as how you would do for
  objects.
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


/*
Now let's see how inheritance works with ES6
classes. Let's declare our Toyota class. To
extend from the Car class, we simply declare
'extends Car' after our class declaration.

What this does is grant the Toyota class
access to Car's methods, if they're not
implemented within the Toyota class itself.
In Toyota class we don't have a drive()
method, so it will use Car's drive() method
instead.
*/

class Toyota extends Car {
  /*
  In the constructor, we recieve the options
  object argument, and then perform some
  setup.
  */
  constructor(options) {
    /*
    super() is how we call the constructor
    of the parent method, which is Car in
    this case.

    super() acts the same as
    Car.constructor(), and this applies for
    all methods in the Toyota class.
    */
    super(options);
    this.color = options.color;
  }
  honk() {
    /*
    If the Car class also had a honk method
    that we wanted to use, then we use
    super(), which would act like Car.honk()
    */
    return 'beep';
  }
}

/*
As usual, we are creating a new instance of
the Toyota class. We are declaring it with a
color of red.
*/
const toyota = new Toyota({
  color: 'red',
  title: 'Daily Driver'
});
toyota.honk(); // beep

/*
Of course, the important question to ask at
this point is: when should we use classes?
Classes are useful in projects of all scales,
because it helps keep code modular and
separated into components. Classes are used
extensively in frameworks like React, where
classes designate separate components, which
are each responsible for one purpose.

In React, we make use of inheritance because
components share multiple properties. It
also helps with reducing code reuse.

Each component in react inherits from the
Component class (which is provided by the
React library). The Component class dictates
properties that should be shared by all
Components.
*/

class MyComponent extends Component {
  doSomething() {

  }

  doSomethingElse() {

  }
}

/*
Let's go over a few more examples. Below
we have a Monster class, which is supposed
to be initialized with an options object
with a name property. It also has to be
intialized with a default health of 100.
*/

class Monster {
  constructor({ name }) {
    this.name = name;
    this.health = 100;
  }
}

/*
For our next task, we are to create a Snake
class which is a type of Monster. The Snake
should have a bite() method, which takes
another Snake instance as an argument. That
snake (which has been bitten) will have its
health decreased by 100.
*/

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(otherSnake) {
    otherSnake.health -= 10;
  }
}
