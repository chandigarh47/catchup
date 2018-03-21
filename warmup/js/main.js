console.log('connected');

/*Write a program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.*/

const number = function ( factorNum ) {
  console.log(factorNum);

  let text1 = "";

  if ( factorNum % 3 === 0 ) {
    text1 = text1 + "Pling";
  }

  if ( factorNum % 5 === 0 ) {
    text1 = text1 + "Plang";
  }

  if ( factorNum % 7 === 0 ) {
    text1 = text1 + "Plong";
  }



  if ( ( factorNum % 3 !== 0 ) && ( factorNum % 5 !== 0 ) && ( factorNum % 7 !== 0 ) ){
  
      text1 = factorNum.toString();

  }

  return text1;
}

  let text = number ( 34 );

  console.log("this is the actual bit we want ", text);

  // console.log( text );
