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

function* numbersGenerator() {
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

const numbersGen = numbersGenerator();
numbersGen.next(); // { "done": false }
numbersGen.next(); // { "done": true }

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

function* colorsGenerator() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const colorsGen = colorsGenerator();
colorsGen.next();
// { "value": "red", "done": false }
colorsGen.next();
// { "value": "blue", "done": false }
colorsGen.next();
// { "value": "green", "done": false }
colorsGen.next();
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
for (let color of colorsGenerator()) {
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
  engineer: 'Dave'
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
  yield team.engineer;
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

const testingTeamOne = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeamTwo = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeamOne
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

function* TeamIteratorOne(team) {
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
for (let name of TeamIteratorOne(engineeringTeamTwo)) {
  namesTwo.push(name);
}

namesTwo;
// ["Jill", "Alex", "Dave", "Amanda", "Bill"]

/*
This is all fine and well, but there are some
improvements to be made. First, the team
objects and their iterators are completely
separated from each other (two different
elements!) Furthermore, when we want to
actually iterate through some team, we have
to call the iterator function, and then
pass the appropriate team object into it.

Fortunately, we have another ES6 feature: the
symbol iterator. The role of the symbol
iterator, in summary, is to tell an object
how to respond to a for loop -- if one is
being used against it.
*/

const testingTeamTwo = {
  lead: 'Amanda',
  tester: 'Bill',
  /*
  This is just a key-value pair, but it is
  used specially for generators. Note also
  that we use yield with this.lead and
  this.tester, because this function resides
  in the testing team object.
  */
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeamThree = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeamTwo
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

engineeringTeamThree;

/*
To use generator delegation with the symbol
iterator, we simply use yield* on that
object method team.testingTeam. We no longer
have to call the iterator with the testing
team object. We simply call team.testingTeam,
and behaviour delegation will work as wanted.

Once again, yield* will act like a trap door
for any for loop that comes across it. In
this case, the for loop, when it encounters
yield* used on the symbol iterator function,
it will go through that function as it
continues iterating.
*/

const namesThree = [];

/*
Now we can use the for loop directly on the
engineering team object. And it works because
the symbol iterator that is in the engineering
object, will tell the for loop how it should
iterate through it.
*/

for (let name of engineeringTeamThree) {
  namesThree.push(name);
}

namesThree;
// ["Jill", "Alex", "Dave", "Amanda", "Bill"]

/*
We might be wondering now... what are the
practical uses of generators? That's what
we're gonna cover next. We're gonna figure out
how we can use generators with recursion!

Recall that trees are a popular data structure,
consisting of nodes, which can contain multiple
node children. And so on. Where do we see trees
in web development? There are many examples,
particularly forum posts. On Reddit for example,
comments can have replies, and those replies
have more replies. We can think of that structure
as a tree, where each reply is a node which can
contain more children of its own.

Let's try to create a comment tree object with
its own symbol iterator, so that we can easily
iterate through its contents using a for loop.
*/

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  /*
  Now let's think about how we can use the symbol
  generator to iterate through each comment in a
  comment tree. Note that this time, it's a bit
  more complicated because we can't simply use
  yield on each comment on the surface level. We
  have to assume that there can be an arbitrary
  amount of comments, each having an arbitrary
  amount of children, and arbitrary depth as well.
  */
  *[Symbol.iterator]() {
    yield this.content;
    /*
    Now we have to use yield* on each of the
    child nodes. Now there's gotcha -- array
    helpers like forEach and map. It's because
    of the way generators are implemented in
    JavaScript.

    We have to use a regular for loop and then
    use yield* on each child so that the
    iteration can continue on with each child
    node.
    */
    for (let child of this.children) {
      yield* child;
    }
  }
}

/*
Here, we're creating a comment tree structure.
*/

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

tree;

/*
{"content": "Great post!",
 "children": [
   {"content": "good comment",
    "children":[]},
   {"content":"bad comment",
    "children":[]},
   {"content":"meh",
    "children":[]}]}
*/

const values = [];
for (let value of tree) {
  values.push(value);
}

values;

/*
[
  "Great post!",
  "good comment",
  "bad comment",
  "meh"
]
*/
