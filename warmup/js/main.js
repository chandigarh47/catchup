console.log('connected');

/*Write a program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.*/

const number = function( factorNum ) {
  if( factorNum % 3 ) {
    console.log( 'pling' );
  }
  if( factorNum % 5 ) {
    console.log( 'Plang' );
  }
  if( factorNum % 7 ) {
    console.log( 'Plong' );
  }
  
  // if( num !% 3 ) && ( num !% 5 ) && ( num !% 7 ){
  //
  // }

}

let text = number( 3 );
console.log( text );

let text1 = number( 5 );
console.log( text1 );

let text2 = number( 7 );
console.log( text2 );
