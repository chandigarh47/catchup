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

// const maxOfThree = function ( text, num3 ) {
//
//   if( text > num3 ) {
//     return  num3;
// }
// }
//
// let text1 = maxOfThree();
// console.log(text1);

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const english = function(character) {
      let arr = [ 'a','e','i','o','u' ];
// indexOf

      for ( let  i = 0; i <= arr.length; i++ ) {

          let str = arr.indexOf(character);
          if( str !== -1 ){
            return true;

          } else{
            return false;
          }

      }

}

let alphabet = english('i');
console.log(alphabet);

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


const sumArray = function() {

  let x = [1,2,3,4];

let  y = 0;
  for ( let i = 0; i < x.length; i++ ) {

   y = y + x[i];
  }

  return y;
}

let math = sumArray();
console.log(math);



const multiplyArray = function() {
  let mul = [1,2,3,4];

  let n = 1;

  for ( let i = 0; i < mul.length; i++ ) {
    n = n * mul[i];
  }
  return n;
}

let num = multiplyArray();
console.log(num);


/*Bonus
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".*/

const reverseString = function ( word ) {
      let wordOne = [ "j","a","g","t","e","s","t","e","r" ];
      let flip = wordOne.reverse();
      return flip;

}

 let word1 = reverseString( "jag tester" );
 console.log(word1);

/*Write a function findLongestWord that takes an array of words and returns the length of the longest one.*/


const findLongestWord = function( list ) {

    let length = 0;

    for ( let i = 0; i < listOfWords.length; i++ ) {
    if( list[ i ].length > length ){
        length = list[ i ].length;
  }

}
    return length;

}


let listOfWords = [ 'hello','game','home','congratulations' ];

let longestWord = findLongestWord(listOfWords);
console.log(longestWord);
