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
