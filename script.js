'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number✔';

document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 11;

document.querySelector('.guess').value = 9;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '❌no number';
    displayMessage('❌no number');
  }
  //when the guess is correct
  else if (guess === number) {
    // document.querySelector('.message').textContent = '🟢correct number';
    displayMessage('🟢correct number');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'its too high' : 'its too low';
      displayMessage(guess > number ? 'its too high' : 'its too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lose the game💣';
      displayMessage('you lose the game💣');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//when the guess is too high
// if (guess > number) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'its too high';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'you lose the game💣';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// //when the guess is too low
// else if (guess < number) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'its too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'you lose the game💣';
//     document.querySelector('.score').textContent = 0;
//   }
// }
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.width = '#15rem';
});
