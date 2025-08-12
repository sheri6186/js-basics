let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuesses(guess);
  });
}
function validateGuesses(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
  }
  if (numGuess === 11) {
    displayGuesses(guess);
    displayMessage(`Game Over Random number is ${randomNumber}`);
    endGame();
  } else {
    displayGuesses(guess);
    CheckGuesses(guess);
  }
}
function CheckGuesses(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is low`);
  } else if (guess > randomNumber) {
    displayMessage(`number is high`);
  }
}
function displayGuesses(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('Button');
  p.innerHTML = "<h2 id='newGame'>start new game</h2>";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  randomNumber = parseInt(Math.random() * 100);
  prevGuess = [];
  numGuess = 1;
  remaining.innerHTML = `${11 - numGuess}`;
  guessSlot.innerHTML = '';
  userInput.removeAttribute('disabled');
  startOver.removeAttribute(p);
  playGame = true;
}
