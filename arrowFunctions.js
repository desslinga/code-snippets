/*
This next example we'll talk about is a very
popular feature of ES6: arrow functions. These
are essentially another way to write functions
in JavaScript, that are less verbose.
*/

const addFunction = function(a, b) {
	return a + b;
}

addFunction(1, 2);

/*
Now let's rewrite this as a fat arrow
function, which omits the 'function' keyword,
and instead adds an '=>' arrow after the
arguments.
*/

const add = (a, b) => {
	return a + b;
}

add(1, 2);

/*
Now, fat arrow functions not only provides
shorter syntax for functions... it has other
interesting features as well.

For one, if within the body of the arrow
function, it simply consists of a return
keyword and an expression, then we can omit the
curly braces, and the return keyword as well.
This is called implicit return.

const subtract = (a, b) => {
	return a - b;
}
*/

const subtract = (a, b) => a - b;

subtract(9, 8);

/*
This is much shorter, and legible!

Let's do some more examples. Here's a
function that returns a given number doubled.
Another feature of arrow functions is that if
we have a single argument, we can omit the
parenthesis around it (but only if we have a
single argument!)

If we have 0 arguments, or at least 2
arguments, we have to place parenthesis around
them.

const fnc = () => ...
const fnc = (arg1, arg2) => ...
*/

const double = number => 2 * number;

double(8);

/*
Let's try to write a function that is given
an array of numbers, then returns another
array of those given numbers doubled. Let's
see how we can make use of arrow functions
here.
*/

const numbers = [1, 2, 3];

/*
This is much shorter than using the function
keyword!
*/
numbers.map(number => number * 2);

/*
When should we use arrow functions? Are there
any situations when we should not use them?
Let's do an example.

Here with a team object that has a list of
members, a team name, and a summary function
which returns a list of messages for each
member in the team.
*/

const team = {
	members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    /*
    When using regular function expressions
    here, we lose the reference to 'this'
    inside the map callback, because the
    callback is being called elsewhere (in
    the 'map' source code). To bind the
    value of 'this' to team, we can use
    arrow functions.

    Arrow functions uses lexical environment
    to determine the value of this. This
    means that the value of 'this' refers
    to the value of 'this' in the immediate
    surrounding scope. In this case, 'this'
    is team.
    */
  	return this.members.map(member =>
       `${member} is on team ${this.teamName}`);
  }
};

team.teamSummary();

/*
There are cases where we can't use arrow
functions. For the getName() function, we
get an error if we try to turn the function
into an arrow function!

This is because the arrow function attempts
to bind 'this' to the immediate surrounding
scope. But 'this' in the immediate surrounding
scope is undefined!
*/
const profile = {
  name: 'Alex',
  /*
  The following returns an error:

  getName: () => this.name
  */
  getName: function(){
  	return this.name;
  }
};

profile.getName();
