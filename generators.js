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
