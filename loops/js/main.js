console.log('connected');


/*The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").*/



for ( let i = 0; i < 20; i++ ) {
  console.log( i );

if( i % 2 === 0 ){
  console.log(` ${ i } is even `);

}   else{
  console.log(` ${ i } is odd `);
  }

}





/*Multiplication Tables
Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/


for ( let  m = 0; m <= 10; m++ ){

for ( let  n = 0; n <= 10; n++) {
  console.log ( `${ m } * ${ n } = ${ m * n }` );
}
}

/*Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.*/



const maxOfTwoNumbers = function( num1, num2 ) {

  if( num1 > num2 ) {
    return num1;
  } else {

    return num2;
  }
}

let text = maxOfTwoNumbers( 28,7 );
console.log(text);

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function ( num1, num2, num3 ) {

  if( num1 > num2 ) {
    return num1;

  } else if ( num2 > num3 ) {
    return num2;

  } if ( num3 > num1 ) {
    return num3;
  }
}

let text1 = maxOfThree(34,2,10);
console.log(text1);

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const english = function(character) {
      let arr = [ 'a','e','i','o','u' ];

      for ( let  i = 0; i < arr.length; i++ ) {

          if( character === arr[i] ) {
            console.log(arr[i]);
            return true;
          } else {
            return false;
          }
      }

}

let alphabet = english('e');
console.log(alphabet);

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


const sumArray = function() {
  let sum = ['2','3','6','8'];

  for ( let i = 0; i < sum.length; i++ ) {

   sum1 = sum + sum[i];
  }

  return sum1;
}

sumArray();



const multiplyArray = function() {
  let mul = ['1','2','3','4'];

  for ( let i = 0; i < mul.length; i++ ) {
    mul[i]
  }
}


/*Bonus
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".*/

const reverseString = function( word ) {
  let word1 = [ "jag tester" ];
      word1.reverse();
      return word1;

}

reverseString("jag testar");

/*Write a function findLongestWord that takes an array of words and returns the length of the longest one.*/


const findLongestWord = function( ) {
      let find = [ 'hello','game','home','congratulations' ];

      for ( let i = 0; i < find.length; i++ ) {

      console.log( find.length );
  }

}
findLongestWord();
