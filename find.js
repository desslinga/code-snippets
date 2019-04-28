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
