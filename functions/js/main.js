console.log('connected');

/*Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

const tellFortune = function( numOfChild, partnersName, geoLocation, jobTitle) {
    return `You will be a ${ jobTitle} in ${ geoLocation }, and married to ${ partnersName } with ${ numOfChild } kids.`;
}

  let fortune = ( tellFortune (4,"Harry","Parramatta","Doctor") );
      console.log(fortune);

  let someText = tellFortune(2,"Bill","Parramatta","Engineer");
      console.log(someText);

  let some = tellFortune(1,"Jerry","Burwood","Librarian");
      console.log(some);

/*Write a function named calculateDogAge that:

takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.*/

const calculateDogAge = function( age ) {
  let dogAge = 7 * age;
      return`Your doggie is ${ age } years old in dog years!`;
}

  let text = calculateDogAge( 20 );
      console.log(text);
  let text1 = calculateDogAge( 14 );
      console.log(text1);
  let text2 = calculateDogAge( 30 );
      console.log(text2);



/*Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.*/

// const calculateSupply = function(age,amountPerDay){
//   let maxAge = 60;
//
//   console.log(`You will need ${ total } to last you until the ripe old age of ${ maxAge }`);
// }
//
// calculateSupply();


/*Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".*/

const calcCircumfrence = function( radius ) {

  let circumference =  2 * ( 3.14 * radius );
      return `The circumference is ${ circumference }`;
}

  let math = calcCircumfrence( 20 );
      console.log(math);


const calcArea = function( radius ) {
  let area = 3.14 * radius * radius;
      return `The area is ${ area } `;
}

  let math1 = calcArea( 30 );
      console.log(math1);




/*Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."*/

const celsiusToFahrenheit = function() {
  let celscius = 40;
  let convert = ( 20 * 1.8 ) + 32;
      return`${ celscius }°C is ${ convert }°F`;
}

  let calculation = celsiusToFahrenheit();
      console.log(calculation);

const fahrenheitToCelsius = function() {
  let fahrenheit = 20;
  let convert1 = ( 20 - 32 ) * ( 5 / 9 );
  return `${ fahrenheit }°F is ${ convert1 }°C.`;
}

  let calc = fahrenheitToCelsius();
  console.log(calc);
