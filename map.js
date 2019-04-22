/*
The map array helper is one of most used array
helpers around! You will use this one a lot for
sure...
*/

/*
Our first function will take an array of integers
and return a new array that doubles their values.
*/

var numbers = [1, 2, 3];

/*
How we do it with for loops:
1. create a new array to store doubled integers.
2. create a for loop to iterate through each integer,
multiply it by two, and then push it to the new array.
*/

var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers;

/*
This does achieve the desired effect, but there's
a better way to do this... 

Also, why did we put the double integers in a new
array? Because usually, when we want to get new values
using an existing array, we don't want to mutate it.

Anyways, how do we refactor this using the map
function?
*/

var doubled = numbers.map(function(number) {
  return number * 2;
});

/*
Syntax is much more simple! What's happening here.
Each element is passed to the anonymous function.
The return value of the anonymous function for a
particular element is pushed to a new array, and this
is done for each element, in order.
*/

doubled;
