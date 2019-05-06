/*
This is the last array helper that we
are going to cover, and it's the
hardest one out of all of them! We are
going to learn about the reduce helper.
It's hard to wrap your head around, but
we can technically re-implement all
the other helpers with the reduce
helper.

Let's start with an example which we'll
refactor after.
*/

var numbers = [10, 20, 30];
var sum = 0;

/*
This is a familiar example, where we
want to take the sum of all the numbers
into a variable.
*/

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

/*
Now let's rewrite it using the reduce
helper!
*/

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

/*
If you've worked with Haskell before,
this looks a lot like foldr, an accumulator
function with an initial value.

It starts with the initial value (0).
Note that the iterator function is given
two arguments: sum, and number.

In the first iteration, sum will be the
initial value: 0. Then we calculate
a new value using sum and number, and
return the value. This new value is
then used as sum in the next loop... and
so on. The end result is finally returned.
*/

/*
Now let's try a more complicated example.
We'll be working with an array of primary
colors.
*/

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

/*
From this array, we want to get all the
values for the 'color' property into
another array, so that we end up with:
['red', 'yellow', 'blue'].

Usually we would use the map helper for
this, but let's see how we can do it
with the reduce helper.
*/

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);

/*
Here, since we want to return a new
array (instead of mutating, like map), our
initial value is an empty array. Then
in our accumulator function, we add
the color object's color value to the
accumulated array.
*/

/*
Let's explore some more practical uses
of the reduce helper. This time, we'll
look at some interview questions we can
practice with using reduce.

A common one is the balanced parenthesis
problem. In this problem, we are given
a string of parenthetis, and we have to
determine if they are balanced.
*/

function isParenthesisBalanced(string) {
  var balance = string.split("").reduce(function(previous, current) {
    if (previous < 0) return previous;
    else {
      if (current === "(") return ++previous;
      if (current === ")") return --previous;
      return previous;
    }
  }, 0);
  return balance === 0;
}

/*
Here we use the stack approach where
we increment a counter by 1 if we
see a "(" and decrement otherwise.
We also have to account for the case
where we are trying to decrement
a negative counter (putting a ")"
when there were no previous "(" to
balance it). For that case, the string
is automatically not balanced.
*/

isParenthesisBalanced(")(");
isParenthesisBalanced("((()))");
