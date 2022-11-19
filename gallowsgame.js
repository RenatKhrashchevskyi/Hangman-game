// some information before start to write the game

//prompt
//let anyName = prompt('What is your name?');
//console.log('Hello, ' + anyName);

//confirm
// let likesCats = confirm('Do you like cats?');
// if (likesCats) {
//     console.log('You are cool cat!')
// } else {
//     console.log('So, no problem. Anyway you are good!')
// }

//alert

//alert('JavaScript is awesome!');


//The final game Hangman

// Creating an array with the words
let words = ['programm', 'monkey', 'awesome', 'pancake'];

// Choose a random word
let word = words[Math.floor(Math.random() * words.length)];

// Creating the final array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

//remain letters
let remainingLetters = word.length;

// Game Loop
while (remainingLetters > 0) {

// Showing the state of the game
  alert(answerArray.join(' '));

  // Requesting a response option
  let guess = prompt('Guess a letter or press Exit to leave the game.');
  if (guess === null) {

    // Exit the game loop
    break;
  } else if (guess.length !== 1) {
    alert('Please, enter one letter.');
  } else {

    // Updating the game status
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // End of the game loop
}

//Display the answer
alert(answerArray.join(' '));
alert('Awesome, the guessed word is ' + word);
