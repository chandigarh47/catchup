console.log('connected');

/*Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."*/


let numOfChild = 4;
let partnersName = "Harry";
let geoLocation = "seven Hills";
let jobTitle = "Engineer";

console.log( `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnersName } with ${ numOfChild } kids.` );

/*Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.*/

let currentYear = 2018;
let birthYear = 1992;
let year = currentYear - birthYear;
let year2 = ( currentYear - birthYear ) - 1
console.log( `hey are either ${ year } or ${ year2 }", substituting the values.` );

/*Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".*/

let currentAge = 26;
let maxAge = 60;
let amount = 26 * 60;
let item = "pizza";
console.log( `You will need ${ amount } ${ item } to last you until the ripe old age of ${ maxAge }` );


/*Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".*/


let radius = 20;
let circumference = 2 * 3.14 * radius;

console.log( `The circumference is ${ circumference }` );

let area = 3.14 * radius * radius;
console.log( `The area is ${ area }` );


/*It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."*/

let temp = 20;
let celcius = ( 20 * 1.8 ) + 32;
console.log( `${ temp }°C is ${ celcius }°F".` );

let temp1 = 40;
let fahrenheit = ( 20 - 32 ) * ( 5 / 9 );
console.log( `${ temp1 }°F is ${ fahrenheit }°C.` );
