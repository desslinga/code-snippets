/*
Here we're gonna be talking about variable
declarations: let and const. First, let's
talk about some background on the inspiration
behind ES6 improvements.

It can be said that all new ES6 features
were implemented for one of two reasons.

The first: features that allow us to write
less code (read: syntactic sugar).

The second: features that actually bring
new functionality. This is what the new
const and let features fall into.
*/

var color = 'red';
color;

/*
In ES5, we used var to declare variables.
But in ES6, we won't ever be using them
anymore! Let's introduce const and let.

const is the variable keyword we use to
declare a constant (a value that will not
change). Conversely, let is the variable
keyword to declare a variable (a value
that is expected to change later).
*/

/*
Let's do an example, of an employee
working at some company.
*/

// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

/*
The above is how we would declare our
variables with ES5. Let's approach this
with ES6. For each variable, we will ask,
do we expect this value to change over
time?
*/

const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

/*
We expect the name to never change, but
the title and hourly wage to possibly
change in the future.

With let, we can reassign the value of
that variable.
*/

title = 'Senior Software Engineer';
hourlyWage = 45;

/*
But with const, we are given an error if
we try to reassign that constant.

name = 'Janet'
// TypeError: Assignment to constant variable.
*/

/*
Once again, with ES6 and introducing
let and const, we will never expect to
use var again. Now let's talk about the
rationale about it.

Let's look at some practical example.
Here is a function that counts the number
of vowels in a given string.
*/

function count(targetString) {
	var characters = ['a', 'e', 'i', 'o', 'u'];
  var number = 0;
  for (var i = 0; i < targetString.length; i++) {
  	if (characters.includes(targetString[i])) {
    	number++;
    }
  }
  return number;
}

count('hellothere');

/*
Now let's refactor it. First, we'll be
targetting the variable declarations.
Just by changing the var declarations to
let and const, the code becomes much easier
to understand... because we know which
values are going to change.
*/

function countRefactored(targetString) {
	const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;
  return targetString.split('').reduce(function(previous, letter) {
  	if (characters.includes(letter)) ++previous;
  }, 0);
}

countRefactored('hellothere');
