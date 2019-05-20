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
fruits. As with objects, when we destructure
from arrays, we're plucking off different
elements.
*/

const fruits = [
  'Apple',
  'Blueberry',
  'Pear'
];

/*
How it works is we are pulling out
elements in the order that they appear
in the array. We use square brackets
instead of curly brackets. So fruitOne
will be Apple, fruitTwo will be
Blueberry, and so on. We can try to
access as many as we want in the array.
If we try to access elements that don't
exist (out of bounds), then those variables
will return undefined.
*/

const [ fruitOne, fruitTwo ] = fruits;
fruitOne; // Apple
fruitTwo; // Blueberry

/*
If we want to get the first element,
and then an array of the remaining
(tail) elements, we can use the rest
operator to gather those remaining
elements in an array.
*/

const [ head, ...tail ] = companies;
head; // Apple
tail; // [ "Blueberry", "Pear" ]

/*
Now that we know how to destructure out
of both arrays and objects, let's see
how we can combine them. Here, we're
gonna create an array of objects, as
usual.
*/

const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

/*
Now what if we wanted to know Google's
location? In ES5, we would've written
something like:
*/

var googleLocation = companies[0].location;
googleLocation;

/*
And this still works, but let's see how
we can refactor this, because we can use
the same variable name 'location' to
access a property called 'location'.
*/

const [{ location }] = companies;
location;

/*
Much better and cleaner! This is how we
extract the location property from the
first object. It is equivalent to the
previous line. companies[0].location,
but more elegant.

Let's expand our example a little more.
Let's say google has multiple locations,
so we create an object for it, and give it
an array property 'locations' which lists
all its different locations.
*/

const Google = {
  locations: [
    'Mountain View',
    'New York',
    'London'
  ]
}

/*
Let's say we want to extract the first
location for Google.
*/

const { locations: [ locationOne ] } = Google;
locations; // ReferenceError: locations is not defined
locationOne; // [ "Mountain View" ]

/*
Let's cover a more practical example of
destructuring. Say that we have a signup
function that takes in user properties and
then creates a new user out of them. We
can accept the different properties as
separate arguments, but this can get very
confusing and hard to maintain (what if
we want to add more properties? what if
we don't remember the order that we provide
the arguments?). Developers would need to
memorize the order that we need to provide
the arguments...

function signup(
  username,
  password,
  email,
  dateOfBirth
) { // create new user}

signup(
  'myname',
  'mypassword',
  'myemail@example.com',
  '12/01/1997'
);

So this is not really good style. A better
alternative is to use a object that contains
all the properties of a user. And then in our
signup function, we can destructure the
properties in the user object to be provided.
Plus, the order that we destructure the
different properties doesn't matter!
*/

function signup({
  password,
  username,
  email,
  dateOfBirth
}) {
  // create new user
}

const newUser = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '12/01/1997'
};

/*
Now we don't really need to remember the
order that we need to pass in the arguments.
We simply ensure that each value is mapped
to the correct keys.
*/
signup(newUser);

/*
So now we've seen a use case of why we would
destructure out of objects. Let's see an
example of why we would do the same for
arrays.

The more obvious use case is accessing the
first element of an array. It is something
that is done frequently, and made more clean
when destructuring.

const [ head ] = [1, 2, 3];
head; // 1

Now let's look at other examples. Let's say
we have an array of coordinates, which are
represented by an array of two elements. We
want to create a chart out of it.
*/

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

/*
But we have a problem. Our charting library
wants to take in the points as an array of
objects like so:
*/

[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 }
];

/*
We have to somehow convert our array of
arrays into an array of objects. How would
we do this with destructuring?
*/

/*
Note that we surround the ([x, y])
destructuring with parenthesis because we
are not accepting just a simple argument.
*/
points.map(([x, y]) => {
  /*
  We're also using the return keyword to
  return our object. We can't omit the
  curly braces like so:

  points.map(([x, y]) => { x, y });

  because when using arrow functions, { }
  dictates another block. Also, we are
  using enhanced object literals to create
  and return our coordinate object.
  */
  return { x, y };
});

/*
We're gonna be covering a few more examples
of refactoring to use destructuring.

Here we have an isEngineerOld function that
is taking a profile object and then validating
its properties. We'll refactor using
destructuring and other ES6 features to make
it more legible.
*/

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineerOld(profile) {
  var title = profile.title;
  var department = profile.department;
  return (title === 'Engineer'
    && department === 'Engineering');
}

/*
We destructure the profile properties at
the function definition.
*/

function isEngineer({ title, department }) {
  return (title === 'Engineer'
    && department === 'Engineering');
}

/*
Let's do an example with array destructuring.
Let's say we have an array of classes, and each
class has properties that are presented in an
array.
*/

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

/*
For this example, we want to convert each
class array into a class object, where each
object has properties 'subject', 'time', and
'teacher'. Let's convert the arrays using
array destructuring.
*/

const classesAsObject = classes.map(([
  subject, time, teacher
]) => {
  return { subject, time, teacher };
});

classesAsObject;

/*
Now our final example. This one is hard...
we want to use array destructuring, recursion,
and the rest/spread operators to create a
function 'double' which takes an array and
returns a new array with its elements multiplied
by two. We can't use array helpers!
*/

const numbers = [1, 2, 3];

function double([head, ...tail]) {
  if (!head) return [];
  return [head * 2, ...double(tail)];
}
