let score = 0;
const scoreBoard = document.getElementById('score');
const computerBoard = document.querySelector('#computer_board');
const rockBtn = document.querySelector('#rock_btn');
const paperBtn = document.querySelector('#paper_btn');
const scissorsBtn = document.querySelector('#scissors_btn');
let computerAnswer = ComputerChoice();

// ROCK BUTTON EVENT LISTENER SECTION
rockBtn.addEventListener('click', () => {
    computerAnswer = ComputerChoice();
    if(computerAnswer === 'Rock'){
        score += 0; // Draw
        computerBoard.textContent = `Computer : ${computerAnswer}, the match is a draw`;
    }
    else if(computerAnswer === 'Paper'){
        score -= 1; // Lose
        computerBoard.textContent = `Computer : ${computerAnswer}, you Lose`;
    }
    else {
        score += 1; // Win
        computerBoard.textContent = `Computer : ${computerAnswer}, you Win`;
    }
    scoreBoard.textContent = `Score : ${score}`;
});

// PAPER BUTTON EVENT LISTENER SECTION
paperBtn.addEventListener('click', () => {
    computerAnswer = ComputerChoice();
    if(computerAnswer == 'Rock'){
        score += 1; // Win
        computerBoard.textContent = `Computer : ${computerAnswer}, you Win`;
    }
    else if(computerAnswer == 'Paper'){
        score += 0; // Draw
        computerBoard.textContent = `Computer : ${computerAnswer}, the match is a Draw`;
    }
    else {
        score -= 1; // Lose
        computerBoard.textContent = `Computer : ${computerAnswer}, you Lose`;
    }
    scoreBoard.textContent = `Score : ${score}`;
});

// SCISSORS BUTTON EVENT LISTENER SECTION
scissorsBtn.addEventListener('click', () => {
    computerAnswer = ComputerChoice();
    if(computerAnswer == 'Rock'){
        score -= 1; // Lose
        computerBoard.textContent = `Computer : ${computerAnswer}, you Lose`;
    }
    else if(computerAnswer == 'Paper'){
        score += 1; // Win
        computerBoard.textContent = `Computer : ${computerAnswer}, you Win`;
    }
    else {
        score += 0; // Draw
        computerBoard.textContent = `Computer : ${computerAnswer}, the match is a Draw`;
    }
    scoreBoard.textContent = `Score : ${score}`;
});

//  GENERATE COMPUTER CHOICE FUNCTION
function ComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if(computerChoice === 1){
        return 'Rock'
    }
    else if(computerChoice === 2){
        return 'Paper';
    }
    else if(computerChoice === 3){
        return 'Scissors';
    }
}