var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/*
why move away from this ? it is prone to errors.
a lot of elements you have to remember:
... the for loop syntax.
... having to access elements with index.
*/

colors.forEach(function(color) {
  console.log(color);
});

/*
What's happening here? Each array has a
built in element forEach, which takes in
an anonymous function.

the forEach helper takes each element and
passes it to the iterator function (which
is the anonymous function given), and executes
that function on each element in the array.

Why is this better?
... less code to write.
... less complex syntax.
*/

/*
Now we're gonna write a function
to take the sum of an array of numbers!
*/

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Create a variable to hold the sum
var sum = 0;

/* The iterator function doesn't have to be
an anonymous function: it can be passed
a regular function
*/

function adder(number) {
  sum += number;
}

// Loop over the array, increment sum variable
/*
If using a named function, you pass the
reference to it (by name). Do not call it!
*/
numbers.forEach(adder);
// Print sum variable
sum;
