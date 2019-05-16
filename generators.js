/*
Here, we're going to be talking about
generators. We'll introduce this topic by
going over for-of loops. Now this may sound
like for loops, but they're different! Let's
recap what a for-of loop does.
*/

const colors = ['red', 'green', 'blue'];

/*
The syntax is different than for loops. We
designate each element being iterated over to
a variable (in this case 'color'), so we
don't have to access them by indexing as we
would in for loops.
*/

for (let color of colors) {
  console.log(color);
}

const numbers = [1, 2, 3, 4];

let total = 0;
for (let number of numbers) {
  total += number;
}
total; // 10;

/*
It will become apparent soon enough that
for-of loops are actually closely related to
generators. So we'll explore generators a bit
and see how it all ties together.

Generators are not easy to learn, so we'll
learn about it from the ground up: what it is,
what it does, how we use it, and so on. First,
let's define what it is.

A generator is a function that can be entered
and exited multiple times. Usually, a function
is called and then exited... and then it is
done with.
*/

/*
Let's talk syntax. To turn a function into a
generator, we add an asterisk '*' right after
the function keyword. We can also put the
asterisk right before the function name.

function* myGenerator() { ... }
function *myGenerator() { ... }
*/

function* numbers() {
  /*
  The yield keyword is special and particular
  for generators.
  */
  yield;
}

/*
This is what happens when we call numbers()
and then use .next() multiple times. This is
strange, but we'll make it clear later on.
*/

const gen = numbers();
gen.next(); // { "done": false }
gen.next(); // { "done": true }

/*
We're gonna explain generators with an analogy
of sorts. Let's take the example of grocery
shopping. When we enter a grocery store, we
have some amount of money and (usually) no
groceries in hand. And when we exit a grocery
store, we (usually) have less money, but with
groceries in hand. Notice the distinct
difference between entering and exiting a
grocery store.

Let's model this analogy with generators.
*/

function* shopping() {
  // outside the grocery store

  // walking down the sidewalk (to store).

  // enter grocery store with cash.

  const stuffFromStore = yield 'cash';
  /*
  First call to .next() stops and returns
  here.
  */

  /*
  When we've yielded a value, it's like
  exiting the generator and returned.
  On the next call to .next(); we
  continue from where we left off. In
  this case, it will be the next line,
  where we're picking up stuff from the
  laundry. Then we'll break from the
  function again.
  */

  const cleanClothes = yield 'laundry';
  /*
  Second call to .next() stops and returns
  here.
  */

  // exiting laundry.

  // walking home.
  return [stuffFromStore, cleanClothes];
  /*
  Third call to .next() stops and returns
  here.
  */
}

// inside the grocery store

/*
Note that calling the generator function
with shopping() doesn't actually do anything.
It is only called when we invoke it with
shopping.next()
*/

const gen = shopping();
// exiting my house.
gen.next();
// { "value": "cash", "done": false }
// walked into the store...
// walked up and down aisles...
// purchase groceries
gen.next('groceries');
// { "value": "groceries", "done": false }
// exiting store (with groceries).
// walking to the laundry.
gen.next('clean clothes');
// { "value": ["croceries", "laundry"], "done": true }
// exiting laundry.
// walking home.
/*
When we call gen.next with 'groceries',
then we are going to replace whatever
we've returned with yield, with 'groceries'.
*/
