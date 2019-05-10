/*
Here we're gonna be talking about default
function arguments, which falls into the
category of syntactic sugar. And it is very
helpful! Let's start with an example, of an
Ajax request function...

Now, the method parameter for an Ajax request
is commonly 'GET'. In fact, most of the
requests we'll make will be GET requests. How
do we make this easier for ourselves?

We make 'GET' the default argument for the
method parameter. This means that when the
method parameter is not provided, it defaults
to take the value of 'GET'.
*/

function makeAjaxRequest(url, method = 'GET') {
  /*
  The traditional way to provide default
  arguments is checking if it was provided,
  then setting it, if it was not.

  if (!method) {
  	method = 'GET';
  }
  */

	// logic to make the request.
  return [url, method];
}

/*
If an argument for the parameter was
provided, then it will override the default
value and work as expected.
*/

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

/*
If we want to provide no value for some
parameter, and not have it overriden by
some default value, then we pass in 'null'
as the argument.
*/

makeAjaxRequest('google.com', null);

/*
Let's do a more complicated example, where
we have a function that returns a new User.
A User has an id property, which the function
must generate itself, and randomly. How do
we do this?

We create a function that returns a randomly
generate number.
*/

function generateId() {
	return Math.random() * 999999;
}

/*
We pass in the random number generator as
the default parameter. This is the User
constructor.
*/

function User(id = generateId()) {
	this.id = id;
}

/*
This function creates an Admin User, given
an already existing user.
*/

function createAdminUser(user) {
	user.admin = true;
  return user;
}

/*
Because we are making use of default
arguments for generating IDs, our code
for creating Users is much cleaner.
*/
createAdminUser(new User());

/*
Now, if we have some specific user ID in
mind, we can specify it and override the
randomly generated one.
*/
new User(1);
