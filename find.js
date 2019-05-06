/*
Here we're gonna talk about the 'find' array
helper function. It iterates through the
array, looking for a particular element. As
soon as that element is found, then that
element will be returned!

Let's start with an example using for loops.
*/

var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

/*
Here we have a list of users, and we are
looping through each element. We check to
see if each element matches our criteria,
and once we've found it, we return the
element and break out of the loop.
*/
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

user;

/*
Let's see how we can improve this with
the 'find' helper.

First, was does it do? It takes and array,
and an iterator function. This iterator
function must either return true or false
(much like the filter function). It
iterates over the array, and executes the
iterator function with the element. The
first element on which the iterator function
returns true, is returned! The looping ends
once we've found this matching element.
*/

users.find(function(user) {
  /*
  As with the case of the filter function,
  don't try to use conditional statements!

  if (user.name === 'Alex') {
  	return true;
  }

  Simply return the result of a boolean
  expression.
  */
  return user.name === 'Alex';
});

/*
There's a small drawback with the find
function. It only returns the first element
in the array for which the iterator returns
true. If there were multiple elements
matching the condition, only the first one
would be returned!

For a case where we want all elements
matching some condition, then the filter
function should be used instead.
*/

/*
Let's try a new example with Car objects.
*/
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

/*
What if we want to find the Car with the
with the model 'Focus'? Let's approach
this using the find helper.
*/
cars.find(function(car) {
  return car.model === 'Focus';
});

/*
Looking good! Let's do another example
with the posts and comments scenario we
discussed a while ago.
*/

var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

/*
We have a single comment here, unlike
the previous scenario where we had
multiple.
*/
var comment = {
  postId: 1,
  content: 'Great Post'
};

/*
Now we want to write a function that
takes a list of posts, a single comment,
then finds the post for which the
comment belongs to.
*/
function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

/*
In what situation would we use the
find helper in a practical sense? We
can have a list of blog posts in
a forum that a user and click on
(and then be redirected to a page of
that blog post).

The url for the list of posts would
be forum.com/posts, and for some
post with id 45, it would be
forum.com/posts/45.

So if we want to fetch the whole blog
post for the one with some particular
id, then we extract the id from the
url, and then use the find helper
with that id to find the post and
display it's content.
*/

/*
Let's go through more examples:

In this example, we are given an
array of users that have an admin
property which is either true or
false (for whether or not they're
an admin). We want to use the find
helper to look for the user that
is an admin.
*/

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
	return user.admin;
});

admin;

/*
This is a simple example in which
we have a list of accounts and we
want to find one with a balance of
12.
*/
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
	return account.balance === 12;
});

account;

/*
This is a more challenging example, but
very useful! Here, we have to write our
own helper function, where we are given
an array, and some criteria. The criteria
is an object with key-value pairs that
we are looking for in our target object.
Then we use the criteria on the array
using the find helper function, to
return the matching element.
*/

function findWhere(array, criteria) {
  var key = Object.keys(criteria)[0];
  return array.find(function(element) {
		return element[key] === criteria[key];
  });
}

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 35 }
];

findWhere(ladders, { height: 20 });
