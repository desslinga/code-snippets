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
When we call gen.next with 'groceries', then
we are going to replace whatever we've
returned with yield, with 'groceries'.
*/

/*
Now we're going to talk about how generators
work, and how it ties in with for loops,
iterators, and the such. For this, Let's
create a new generator 'colors'.
*/

function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
gen.next();
// { "value": "red", "done": false }
gen.next();
// { "value": "blue", "done": false }
gen.next();
// { "value": "green", "done": false }
gen.next();
// { "done": true }

/*
The last return is only { "done": true }
because is no return statement for this
generator.
*/

/*
Now here's the big reveal with generators...
They are the mechanism behind for-of loops.
Notice how we don't have to use .next()
when accessing the values here, because
it is already handled in the for-of loop.
*/

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

myColors; // ["red", "blue", "green"]

/*
Now the good thing about generators is
that we can make a custom iterator for any
data structure we want. We just have
to create a generator function for it!
*/

/*
Before continuing on, we'll be doing a
side-step into practical uses of ES6
generators. So for this example, we'll be
creating an object that represents an
engineering team.
*/

const engineeringTeamOne = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineering: 'Dave'
};

/*
Let's say we want to write a function that
would iterate over all the people working
in the engineering team. Note that we can't
simply use a for-loop here, because we don't
care about the size or department properties.
We only care about the employees. So let's
write a generator to handle this iteration
for us.

When we yield each of the team properties,
then each iteration will return the next
team member.
*/

function* EngineeringTeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineering;
}

const namesOne = [];
for (let name of EngineeringTeamIterator(engineeringTeamOne)) {
  namesOne.push(name);
}

namesOne;
// ["Jill", "Alex", "Dave"]

/*
Now we're gonna talking about delegation of
generators. Let's start with a practical
example. Extending our engineering team
example, let's say we have a testing team
which belongs to the engineering team. Our
testing team will consist of a lead, and a
tester.
*/

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeamTwo = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineering: 'Dave',
  testingTeam: testingTeam
};

engineeringTeamTwo;
/*
Now we want to modify our team iterator so
that it'll also iterate through the testing
team as well. There's two ways to do this.
We can also yield team.testingTeam.lead and
the corresponding tester. But is this approach
scalable? What if we want to iterate through
just the testing team?

We create a separate generator for the
testing team. Now how do we combine these
two generators together?
*/

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

/*
When we combine these two generators. What
we want is to be able to *delegate* the next
iteratations to the testing-team generator,
when we've finished iterating through the
main engineering team.
*/

function* TeamIterator(team) {
  /*
  We create variables where we call each of
  the generators with the corresponding team.
  */
  const engineeringTeamIterator = EngineeringTeamIterator(team);
  const testingTeamIterator = TestingTeamIterator(team.testingTeam);
  /*
  Then, in order to yield them in order, when
  we iterate through the TeamIterator
  generator, we have use the yield* keyword
  with the variables we created.

  It seems to work. But why does it work?

  yield* can be thought of as a trap door,
  that can trick a for loop to iterate
  through it's generator, and then continue
  iterating through it's values.
  */
  yield* engineeringTeamIterator;
  yield* testingTeamIterator;
}

const namesTwo = [];
for (let name of TeamIterator(engineeringTeamTwo)) {
  namesTwo.push(name);
}

namesTwo;
// ["Jill", "Alex", "Dave", "Amanda", "Bill"]
