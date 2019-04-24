/*
Filter is a more complicated array helper to
understand, but very useful!

Let's start with a real life issue: having a
list, but wanting to filter out some elements
that we don't need just yet...
*/

/*
Say we have a list of grocery items. We'll
represent each item as an object.
*/
var products = [
  { name : 'cucumber', type: 'vegetable' },
  { name : 'banana', type: 'fruit' },
  { name : 'celery', type: 'vegetable' },
  { name : 'orange', type: 'fruit' }
];

/*
Now say we only want to see products that are
fruits -- we don't care about other types!
How would we approach this with plain for
loops?

We would want to assign the filtered fruits
into another array. As said before, it is not
good style to mutate existing arrays, in case
it is used for other applications.
*/
var filteredProducts = [];

/*
We would loop through each product and push
an item into our filtered list if it passes
our condition: that is it a fruit.

Note that this is the same approach as
removing all products that are not fruits.
*/
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

/*
Why is it not good to use a for loop for this?
- boilerplate syntax for initiating for loops.
- can be hard to read, because we need to
access array elements via indexing.

Let's refactor it to use the filter helper!

First, how does the filter helper work? It is
similar to the map function in that it uses
an iterator function and returns a new array.

The filter helper...
1. iterates through each array element
2. calls the iterator function which takes each
array element as an argument.
3. if the iterator function returns true for
a particular element (read: it has passed the
filter), then it is added to the new array.
4. the new array of filtered elements (elements
for which the iterator function returned true).
is returned.
*/

products.filter(function(product) {
  return (product.type !== 'fruit');
  /*
  Note: do NOT try to use an if statement
  to check a condition and then return true
  or false... the function will return
  undefined, which is incorrect.

  if (product.type !== 'fruit') {
  	return true;
  }
  */
});

/*
Looks much cleaner and easier to discern!
*/
