'use strict';

// DOM - Document Object Model
// - Is a structured representation of an HTML document
// - Allows the JavaScript to access and manipulate the HTML
// - included elements of the document and their attributes.

// - DOM Methods and Properties of Web APIs that can
// - be used to manipulate the DOM and interact with the JavaScript.
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

/* Handling Click Events */

// Function for the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Declaring the variable for the score and high score
let score = 20;
let highscore = 0;

// Display a message
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

// Display the score
const displayScore = (score) => {
  document.querySelector('.score').textContent = score;
};

// Display the background color
const changeBackground = (color) => {
  document.querySelector('body').style.backgroundColor = color;
};

// Display using the check button and Event click listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    changeBackground('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You Lose!');
      displayScore(0);
    }
  }
});

// When player clicks on the reset button (again)
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  changeBackground('#222');
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  guess = Number((document.querySelector('.guess').value = ''));
});

// Pressing the enter key will trigger the check button
window.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    document.querySelector('.check').click();
  }
});
