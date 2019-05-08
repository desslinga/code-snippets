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
shorter syntax for functions... it has
other interesting features as well.

For one, if within the body of the arrow
function, it simply consists of a return
keyword and an expression, then we can
omit the curly braces, and the return
keyword as well. This is called implicit
return.

const subtract = (a, b) => {
	return a - b;
}
*/

const subtract = (a, b) => a - b;

subtract(9, 8);

/*
This is much shorter, and legible!
*/
