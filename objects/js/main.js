console.log('connected');

/*The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa*/

const potatoCurry = {
      Ingredients:[ "cumin","potato",
                  "cookingoil",
                  "tomatoes" ],
  serves: 5
}

for( let prop in potatoCurry )
console.log( "p." + prop + " = " + potatoCurry[prop] );






/*Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties
for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so:
 "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not.
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'*/



const library = [
  {
    title: "The Earth",
    author: "bill",
    alreadyRead: true

  },
  {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    alreadyRead: false
  },
  {
    title: "A Flower",
    author: "Harry",
    alreadyRead: true
  }


];

for ( let i = 0; i < library.length; i++) {

  let book = library[i];
  let description = `${ book.title } by ${ book.author }`;
  if( book.alreadyRead ){
    console.log(`you already Read ${ description }`);
  } else {
    console.log(`you still need to read ${ description }`);
  }
}


/*It's like IMDB, but much much smaller!

Create an object to store the following information
about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes.
Stars: Puff, Jackie, Living Sneezes."*/



const movie = {
  name: 'Robot',
  duration: 4,
  stars: ["bob","jim","katrina"]
};

const movieInformation = function(m) {
const description = `${ movie.name } lasts for ${ movie.duration } hours. stars: ${ movie.stars.join(',') }`;
console.log(description);
};
movieInformation();




/*You're starting your own credit card business.
You've come up with a new way to validate credit cards with a simple function called validateCreditCard that
returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number*/




const validateCreditCard = function( creditCard ) {
  //console.log(creditCard.length);

    let number = creditCard.split("-").join('')
    console.log('this is the number after split '+ number.length);

    if ( number.length !== 16 ) {
      return false
    }

    if ( isNaN( Number(number) ) ) {
      return false
    }

    if ( ( +number % 2 !== 0 ) ) {
      return false
    }

    console.log(number);
     let sum = 0
    for (var i = 0; i < number.length; i++) {
      sum = sum +(number[i])
      console.log(sum);
    }
    if ( sum < 16 ) {
      return false
      console.log(sum);
    }

     return true
console.log('connected');
}

let result = validateCreditCard("6666-6666-6666-6666");
console.log(result);
