/*
The next to helpers are called 'Every'
and 'Some.' We're gonna cover them
together because in a lot of ways they
are pretty similar.

These two helpers are different from
the ones we've covered before, which
basically condense our original array
to get some sub-array, or singular
result.

Let's start with an example. We will
have an array of computers, which all
have a RAM (in gb) property.
*/

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

/*
Now say we want to install a program
that requires 16gb of ram. Now, if
we only wanted to find which computers
can install the program, we can simply
use the filter helper.

But what if we want to know if I have
SOME computers that can install the
program, or that if EVERY computer
can install the program?
*/

/*
Here we have some default values.
Let's implement this in a for-loop.
*/
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    /*
    If one computer doesn't have 16 gb
    of ram, than we know that not all
    computers can run our program.
    */
  	allComputersCanRunProgram = false;
  } else {
    /*
    If one computer has at least 16 gb
    of ram, then we know that some (at
    least one) computer can run the
    program.
    */
  	onlySomeComputersCanRunProgram = true;
  }
}

/*
If this looks confusing and a lot of
setup, then you're not wrong. It really
is a lot of setup which can be simplified
by using the every or some helper.
*/

/*
Let's talk about the every helper first.
What does it do? It takes an array and
an iterator function. It then loops
through each element. Each element
returns some boolean value from the
iterator function. It takes the boolean
result and then chains && to the next
result, and then so on.

(Due to lazy evaluation, once the result
turns the chain into a falsy value, it
returns false for the every function).

If the chain is still truthy at the end,
then it returns true for the every
function.

Basically: every returns true if every
element in the array returns true for the
given iterator function.
*/

computers.every(function(computer) {
	return computer.ram > 16;
});

/*
Now let's talk about the some helper.

It works similarly to the every
function, except, instead of chaining
the result of the && operand, we chain
the result of the || (or) operand for
each result of the iterator function
on each element.

Basically: some returns true if at
least one element in the array returns
true for the given iterator function.
*/

computers.some(function(computer) {
	return computer.ram > 16;
});

/*
Let's recap what we mentioned
earlier, about how the every and some
helpers are a bit different than other
helpers we've discussed previously.

We mentioned that the other helpers
basically condense our original array
into a sub-array, or a single result.

Let's talk about the syntax on
the every and some helpers again,
just to make it clear.

Say we want to find all the names
in the below array with at least
4 letters.
*/

var names = [
	"Alexandria",
  "Matthew",
  "Joe"
];

/*
Not every name has at least 4
letters...
*/
names.every(function(name) {
	return name.length >= 4;
});

/*
... But some names have at least
4 letters.
*/
names.some(function(name) {
	return name.length >= 4;
});
