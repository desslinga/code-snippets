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
