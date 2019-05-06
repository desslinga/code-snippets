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
