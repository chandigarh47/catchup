console.log('connected');


/*You'll create a simple word guessing game where the user gets infinite tries to guess the word
(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.*/


const theWord = [ "F","O","X" ];
const theLetter = [ "_","_","_" ];
let reward = 0;
let multiply = 0;

let right = [];
let wrong = ['w', 'd', 'i'];


const guessLetter = function( letter ) {

      for ( let i = 0; i < theWord.length; i++ ) {
        if ( letter === theWord[i] ){
          console.log( `you found a ${ theWord[ i ] }` );
            theLetter[ i ] = theWord[ i ];
            break;
        } else {
          // console.log('try again');
        }

}

        if ( guessArray(theWord,theLetter) ) {
          console.log('congrats you won');
        } else {
          console.log('keep going');
        }

}

let test = true;
      const random = function( letter ) {

        let number = Math.floor(Math.random() * Math.floor(10) +1 );
        if(test){
          multiply += 1;

          console.log(`you are reward with ${ number }`);
          reward += number * multiply;
          console.log(multiply);
        } else{
          multiply = 0;
          reward -= number;
          console.log(multiply);
        }
        return reward;

      }

      random();

const arrays = function( letter ) {

      for ( let i = 0; i < right.length; i++) {
        if( letter === right[i] ) {
           console.log(right);
           console.log(`the letter has already guessed`);
           return;
        }
}
          for ( let i = 0; i < theWord.length; i++) {
            if ( letter === theWord[i] ) {
               right.push(letter);
           } else {
             //console.log('hello');
              for ( let i = 0; i < wrong.length; i++) {

                if( letter === wrong[i] ) {
                    console.log('the letter is already guessed');
                    return;
              }
              wrong.push( letter );
              console.log(wrong);

           }

        }

    }

  }





      const guessArray = function( array1,array2 ) {
        let game = theWord.join('');
        let game1 = theLetter.join('');

        if( game === game1 ){
          return true;
        } else {
          return false;
        }
      }


// let text = guessLetter('F');
// console.log(text);






















// const theWord = [ 'F','O','X' ];
// const theLetter = [ '_','_','_'];
//
// const guessLetter = function( letter ) {
//
//   for ( let i = 0; i < theWord.length; i++ ) {
//
//     if( letter === theWord[i] ){
//       console.log(`you found a ${ theWord[i] }`);
//       theLetter[ i ] = theWord[ i ];
//       break;
//     } else {
//
//       // console.log(`${ letter } you passed in is not in the word`);
//     }
//
//   }
//   // console.log(theLetter);
//
//
//
//   if ( checkArrays(theWord,theLetter) ) {
//     console.log( 'congrats you won' );
//   } else {
//     console.log( 'keep going' );
//   }
//
//
// }
// const checkArrays = function( array1,array2 ) {
//
//   let text = theWord.join('');
//   let text2 = theLetter.join('');
//   //text = text2;
//   if( text === text2){
//     return true;
//   } else {
//     return false;
//   }
// }

//
// let game = guessLetter('F');
// console.log( game );
