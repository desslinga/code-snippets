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
*/
