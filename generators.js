/*
Here, we're going to be talking about
generators. We'll introduce this topic by
going over for-of loops. Now this may sound
like for loops, but they're different! Let's
recap what a for-of loop does.
*/

const colors = ['red', 'green', 'blue'];

/*
The syntax is different than for loops. We
designate each element being iterated over to
a variable (in this case 'color'), so we
don't have to access them by indexing as we
would in for loops.
*/

for (let color of colors) {
  console.log(color);
}

const numbers = [1, 2, 3, 4];

let total = 0;
for (let number of numbers) {
  total += number;
}
total; // 10;

/*
It will become apparent soon enough that
for-of loops are actually closely related to
generators. So we'll explore generators a bit
and see how it all ties together.
*/
