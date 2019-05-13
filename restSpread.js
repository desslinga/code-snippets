/*
In this section, we'll be exploring the rest
operator, which is an operator that will
help us write less code. Now, for this part
we'll be revisiting the reduce helper. Let's
get started by writing a function that takes
a sum of an array.
*/

function addNumbersArray(numbers) {
	return numbers.reduce((sum, number) =>
  	 sum + number, 0);
}

addNumbersArray([1, 2, 3, 4, 5]);

/*
Let's think... what if we wanted to pass in
the numbers to be summed as arguments not
in an array, but as comma-separated values?
Like so: addNumbers(1, 2, 3, 4, 5);

We would have a variable number of
arguments, because we don't know how many
we'll be using. How would we make this
possible?

The purpose of the rest operator is to
capture a comma-separated list of arguments,
and make them easier to handle. We don't
need a pre-defined number of arguments
either, which adds flexibility.
*/

/*
How does it work? We use ...arguments, to
dictate that we're passing in an unknown
amount of arguments.
*/

function addNumbersCommaSeparated(...numbers) {
return numbers.reduce((sum, number) =>
  	 sum + number, 0);
}

addNumbersCommaSeparated(2, 4, 6, 8, 10);

/*
Closely related to the rest operator is the
spread operator. We can think of the rest
operator as gathering variables, and the
spread operator as flattening or spreading
them out.

Let's see how this works with an example.
Say we are displaying a palette of colours.
This palette will have default colours and
some custom ones that are generated by users.
*/

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

/*
Let's say we want to join these colors
together. The traditional way would be to
use the array concat helper, which
definitely works.
*/

defaultColors.concat(userFavoriteColors);

/*
But let's use the spread operator to achieve
the same effect.
*/

[...defaultColors, ...userFavoriteColors ];

/*
What's happening here? First, we created a
new array. Inside it, we referenced an
existing arrays with '...' which takes
its elements and adds them to our new array
in order. Note that the result is not a
nested array, but some sort of flattened
array.

We can add as many arrays to be flattened,
and add single elements as usual. And we can
specify the order too!
*/

[
  'blue',
  ...fallColors,
  ...defaultColors,
  ...userFavoriteColors
];

/*
Let's cover another example. Let's say we
have a function whose job is to validate a
given shopping list. The number of items in
the shopping list is not known, so we use
the spread operator.
*/

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    /*
    We add milk onto the top of the list
    if milk isn't on the list.
    */
    return ['milk', ...items];
  }
  return items;
}

validateShoppingList('orange', 'bread', 'egg');

/*
Let's look at a more practical example of the
rest and spread operators. Let's say we want
to create a JavaScript library consisting of
mathematical functions.
*/

const MathLibrary = {
  /*
  We may initially want to implement the
  product function with just two operands.

  calculateProduct(a, b) {
  	return a * b
  }

  ...but that's misleading. Some users may
  complain that this function should be
  called 'multiply' instead. How do we
  implement this change? Some users may
  already be relying on the calculateProduct
  function, so we can't just rename it. What
  we can do instead is create another
  function 'multiply' and then change
  calculateProduct so that it defers the
  multiplying logic to 'multiply'.
  */

  multiply(a, b) {
  	return a * b
  },

  /*
  This way, we have backwards compatibility,
  while minimizing the code we write, because
  we don't have to write all the arguments
  again!
  */
	calculateProduct(...numbers) {
    return this.multiply(...numbers);
  }
}

MathLibrary.calculateProduct(2, 3);

/*
Let's go over some more examples to get some
practice with the rest and spread operators.
In the example below, we are going to
implement a 'product' function that should
take as many numbers as the users want to
provide, and then calculate the product of
all of them. We use the spread operator to
recieve all the arguments, and then the
reduce helper.
*/

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}

product(2, 3, 4);

/*
Here, we're going to create a function 'join'
which takes in two arrays and concatenates
them. We know that we can use the 'concat'
array helper for this, but let's try to do
the same thing using the spread operator.
*/

function join(array1, array2) {
	/*
  Here is the implementation using concat.

  return array.concat(array2)

  But here's how it should work using the
  spread operator...
  */
  return [...array1, ...array2];
}

join([1, 2, 3], [2, 4, 6]);

/*
In this last example, we're implementing an
'unshift' function which takes an array, and
then some comma separated arguments, like
so:

([1, 2, 3, ...], a, b, c, ...)

and then creates a new array where the comma
separated elements are placed in the
beginning of the array, followed by the
elements in the actual given array.

Just to recap, the rest operator takes comma
separated values and then puts them in an
array! So when you want to access them as
comma separated values again, we have to use
the spread operator.
*/

function unshift(array, ...rest) {
  return [...rest, ...array];
}

unshift([4, 5, 6], 1, 2, 3);
