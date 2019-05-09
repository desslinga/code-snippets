/*
Here, we're going to be talking about Enhanced
Object Literals, which is a feature that falls
under syntactic sugar.

First let's talk about how we declare objects
right now. Here we have a function that creates
a bookshop object based on some given inventory.
*/

function createBookShop(inventory) {
	return {
    /*
    Something to notice here. We are writing
    inventory twice because it is the property
    key and value. inventory: inventory.

    Now, we can shorten this with ES6. If the
    key and value have the same name, we only
    have to write it once.
    */
  	inventory,
    /*
    Here we take the sum of the prices of all
    the books in our inventory. We can use
    the reduce helper for this!

    We also have another improvement, in how
    we write these object methods. We can
    omit the function keyword.

    Instead of:
    inventoryValue: function() { ... }
	
  	We have:
    inventoryValue() { ... }
    */
    inventoryValue() {
      return this.inventory.reduce((total, book) =>
      	total + book.price, 0);
    },
    /*
    Here, we take an argument title, and
    return the price for the book with that
    title. We can use the find helper for this!

    We also write this without the function
    keyword.
    */
    priceForTitle(title) {
      /*
      Find the book with the title, and then
      return the price property.
      */
    	return this.inventory.find((book) =>
        book.title === title).price;
    }
  }
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');
