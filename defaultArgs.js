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
