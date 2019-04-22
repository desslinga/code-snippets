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

/*
Let's try a more complicated example.
*/

var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'EXPENSIVE' }
];

/*
One of the more common uses of map is extracting an
a new array out some property of an array of objects.
For the above example, we could want to get an array
of the prices of all the cars.
*/

var prices = cars.map(function(car) {
  return car.price
});

prices;

/*
The map function is frequently used in front-end
development. A lot of the time, we want to render
lists of data into visually appealing content, and
we use map to handle those transformations.
*/

/*
Here are some more examples.

Here we will create a new array of all the heights
in the original array of images.
*/
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
   return image.height;
});

heights;

/*
And in this example, we are going to create an array
of speeds -- a.k.a the distance / time calculation for
each of these objects...
*/

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
   return trip.distance / trip.time;
});

speeds;

/*
And now we're gonna generalize a 'pluck' function,
which accepts an array and a string which represents
a property name. Then we return an array containing
the each of the array element's values for that
property.
*/

function pluck(array, property) {
  return array.map(function(element){
    return element[property];
  });
}

/*
Here we use it to get the distances from each trip
(from the array above).
*/
pluck(trips, 'distance');
