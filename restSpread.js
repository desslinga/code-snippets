/*
In this section, we'll be exploring the rest
operator, which is an operator that will
help us write less code. Now, for this part
we'll be revisiting the reduce helper. Let's
get started by writing a function that takes
a sum of an array.
*/

function addNumbersArray(numbers) {
	return numbers.reduce((sum, number) =>
  	 sum + number, 0);
}

addNumbersArray([1, 2, 3, 4, 5]);

/*
Let's think... what if we wanted to pass in
the numbers to be summed as arguments not
in an array, but as comma-separated values?
Like so: addNumbers(1, 2, 3, 4, 5);

We would have a variable number of 
arguments, because we don't know how many
we'll be using. How would we make this
possible?

The purpose of the rest operator is to
capture a comma-separated list of arguments,
and make them easier to handle. We don't
need a pre-defined number of arguments
either, which adds flexibility.
*/

/*
How does it work? We use ...arguments, to
dictate that we're passing in an unknown
amount of arguments.
*/

function addNumbersCommaSeparated(...numbers) {
return numbers.reduce((sum, number) =>
  	 sum + number, 0);
}

addNumbersCommaSeparated(2, 4, 6, 8, 10);
