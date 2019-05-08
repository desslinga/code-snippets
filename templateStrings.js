/*
Recall that in ES6, we can classify all the
new features into two groups: syntactic sugar,
and new functionality. Here we're gonna be
talking about template strings, which is
definitely syntactic sugar.

Once again, let's start with an example.
*/

function getMessage() {
  const year = new Date().getFullYear();
  /*
  Note here that we are using the + operator
  to concatenate the year onto our message.

  return "The year is " + year;

  We can refactor this to be cleaner by using
  template strings. We use back ticks, and
  ${variable} to insert variables in our
  message string.
  */

  return `The year is ${year}`;

  /*
  What we put between ${} is not restricted
  to just variables. We can put any valid
  JavaScript there, but we just ensure that
  it resolves to some value.

  return `The year is ${newDate().getFullYear()}`;
  */
}

getMessage();

/*
Let's explore an example of when we would
use template strings. In Instagram, someone
figured out a way to programmatically post
pictures on the platform using a PHP script.

Here is a snippet of it in PHP:
$data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

Let's turn it into equivalent JavaScript!
*/

const device_id = 4;
const guid = 20;
const username = "hello";

const data = '{"device_id":"' + device_id + '","guid":"' + guid +  '","username":"' + username + '","}';
data;

/*
Now let's refactor this using template
strings.
*/

const dataTemplate = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}","}`;
dataTemplate;

/*
One thing to be aware of: you don't need
a template string when the it contains
only one variable...

`${some_variable}`
*/
