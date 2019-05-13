/*
This next ES6 feature is another useful one
that'll definitely help make our code be
more legible. The feature is called
destructuring, and it is going to be used
for sure in future projects. Let's start by
writing some ES5 code, then refactoring it
to equivalent ES6.

For this example, we have an expense object
with a type and amount property.
*/

var expense = {
  type: 'Business',
  amount: '$45 USD'
};

/*
When we want to use an object's property
repeatedly, we usually assign it to a
variable, to reduce the amount of duplicate
code we have to write.

But here, we actually still have some
duplication with 'var', 'type', 'amount',
and 'expense' repeated twice.
*/

// var type = expense.type;
// var amount = expense.amount;

/*
Let's refactor this code into ES6 then. Note
that using { type } or { amount } does NOT
mean we're creating an object! What the
curly braces for { type } = expense do is
create a new const variable called 'type'
and then assign it the value expense.type.
The same thing is happening with
{ amount } = expense.
*/

// const { type } = expense;
// const { amount } = expense;

/*
We can also combine them using commas.
*/
const { type, amount } = expense;
type;
amount;

/*
There we go! Now there are some common
questions about destructuring that we're
gonna address.

1. Does the variable name in the curly
braces have to match the property name in
the object we're referencing?

Yes it must match! It won't work otherwise,
we'll get undefined instead.

2. What happens when we destructure a
property that doesn't exist?

As above, we'll get undefined when accessing
that new variable.
*/

/*
What more can we do with destructuring?
Let's take a look with an example. Here,
we are writing a function that accepts a
single object (savedFile) as an argument.
*/

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary(
  { name, extension, size },
  { color }
) {
  /*
  With the following approach, not that
  we're accessing the file object
  repeatedly: file.name, file.extension,
  file.size...

  return `The file ${file.name}.${file.extension}
    is of size ${file.size}`;

  To solve this, we can destructure the
  properties of file in the parameters
  of the function definition. Then we can
  simply reference those properties by
  name.

  If we are passing in multiple objects,
  then we perform destructuring multiple
  times.
  */
  return `The file ${name}.${extension}
    is of size ${size}, and color ${color}`;
}

fileSummary(savedFile, { color: 'red' });

/*
We can also destructure out of arrays!
Let's say we have an array of different
tech companies. As with objects, when we
destructure from arrays, we're plucking
off different elements.
*/

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

/*
How it works is we are pulling out
elements in the order that they appear
in the array. We use square brackets
instead of curly brackets. So name1 will
be Google, name2 will be Facebook, and
so on. We can try to access as many as we
want in the array. If we try to access
elements that don't exist (out of bounds),
then those variables will return undefined.
*/

const [ name1, name2 ] = companies;
name1; // Google
name2; // Facebook

/*
If we want to get the first element,
and then an array of the remaining
(tail) elements, we can use the rest
operator to gather those remaining
elements in an array.
*/

const [ head, ...tail ] = companies;
head; // Google
tail; // [ Facebook, Uber ]
