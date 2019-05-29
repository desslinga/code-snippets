/*
Promises have been used in JavaScript development
for a long time -- but they have always been through
third party libraries. ES6 brings a native
implementation of Promises, which will be standard
accross all browsers (hopefully!)

One thing to clarify about JavaScript code is that
it runs without pausing. There is no concept of
sleep, although there ways to defer the execution
of some lines of code.

Now let's say there is a particular line of code
that submits an HTTP request. HTTP requests don't
finish executing immediately... it takes time to
complete.

const url = "http://www.json.com"; // takes 1ms
data = makeRequest(url); // takes 3s
console.log(data); // takes 1ms

So by the time the HTTP request has finished, the
console.log(data) would have already been executed.
The question is how we can retrieve data once the
asynchronous request has finished? This is what
Promises are trying to solve. We want to delay the
console.log(data) call until after we get the result
back from the asynchronous request.

A Promise can be in one of three states; either
unresolved, resolved, or rejected. Unresolved is the
default state for a Promise. It means that a Promise
has been created and we're waiting for it to finish.
A Promise that is unresolved will eventually be
resolved or rejected.

If a Promise is resolved, it means that its process
has finished and everything went well. The callback
to handle a succesfully finished Promise is 'then'

If a Promise has been rejected, then something has
finished, but something went wrong in the process.
The callback to handle a failed Promise is 'catch.'

One other thing to note is that Ajax requests are not
tightly coupled with the concept of Promises. So we
can have Ajax requests without Promises, and vice
versa.
*/

/*
We create a Promise using the 'new' keyword, then
create a Promise object with a resolver function as
an argument. The resolver function takes two
arguments: resolve, and reject.
*/
const promise = new Promise((resolve, reject) => {
  /*
  To resolve the promise, we call the resolve()
  function, and to reject a promise, we call the
  reject() function.
  */
  resolve();
});
