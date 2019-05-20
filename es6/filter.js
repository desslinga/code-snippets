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
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' }
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

Let's extends our example a bit. We've added
a quantity and price property on each
product.
*/
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

/*
Let's write a filter where we only want to
keep products that are a vegetable, and
have a quantity greater than 0 (read: in
stock), and are priced at most 10.
*/
products.filter(function(product) {
  return (product.type === 'vegetable' &&
          product.quantity > 0 &&
          product.price <= 10);
});

/*
Only the celery product matched our filter.
*/

/*
So... what are the practical applications of
filter? An example: say we have some posts
and some comments. A post can have multiple
comments. Each post has a postId associated
with it, and each comment also contains the
postId of the post it belongs to.

Given some post, and a list of comments,
what if we want to get a list of all the
comments associated with that post?
*/

var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId == post.id;
  });
}

commentsForPost(post, comments);

/*
Pretty cool!

Here are some more examples. In this one, we
are given an array numbers and only want to
get numbers that are greater than 50.
*/

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
  // return numbers that are greater than 50.
  return number > 50;
});

filteredNumbers;

/*
In this next example, we are given an array
of users. We want to get users that have
admin access.
*/

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
  return user.admin;
});

filteredUsers;

/*
And in our last example, something a bit more
complicated. We're gonna create a reject function,
which works in the opposide way of filter.
It takes an array, a callback function, and only
filters out those that return false for the
callback!

We can use filter for this.
*/

function reject(array, iteratorFunction) {
  return array.filter(function(element) {
    /*
    Check the iterator function against the
    element, and then negate the result!
    */
    return !iteratorFunction(element);
  });
}

var numbers = [10, 20, 30];

var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});

lessThanFifteen;
                         
