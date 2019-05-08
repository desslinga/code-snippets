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
