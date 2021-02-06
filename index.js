
let userChosen;
let computerChosen;

var result = results();
const displayResult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');

const possibleChoices = document.querySelectorAll('.choices');
console.log(possibleChoices);

possibleChoices.forEach((possibleChoice) => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id;
  generateComputerChoice();
  results();
  userChoice.innerHTML = userChosen;
  computerChoice.innerHTML = computerChosen;
  displayResult.innerHTML = result;
}));


// get user choice

const choices = ['rock', 'paper', 'scissor'];

// get a random computer choice
function generateComputerChoice() { 
  const randomNumber = Math.round(Math.random() * (2));
  computerChosen = choices[randomNumber];
  return computerChosen;
}

function results() {
  if (computerChosen === userChosen) {
    result = 'This is tie';
  } else if (computerChosen === 'rock' && userChosen === 'paper') {
    result = 'You lost!';
  } else if (computerChosen === 'rock' && userChosen === 'scissor') {
    result = 'You won!';
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    result = 'You lost!';
  } else if (computerChosen === 'paper' && userChosen === 'scissor') {
    result = 'You won!';
  } else if (computerChosen === 'scissor' && userChosen === 'rock') {
    result = 'You win!';
  } else if (computerChosen === 'scissor' && userChosen === 'paper') {
    result = 'You lost!';
  }
}