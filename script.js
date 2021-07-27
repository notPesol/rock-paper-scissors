let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const wordUserChoice = convertToWord(userChoice);
    const userChoice_div = document.getElementById(wordUserChoice);
    result_p.innerHTML = `${wordUserChoice}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    scoreBoard_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow');
        scoreBoard_div.classList.remove('green-glow');
    }, 500);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const wordUserChoice = convertToWord(userChoice);
    const userChoice_div = document.getElementById(wordUserChoice);
    result_p.innerHTML = `${wordUserChoice}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}. You lose...`;
    userChoice_div.classList.add('red-glow');
    scoreBoard_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow');
        scoreBoard_div.classList.remove('red-glow');
    }, 500);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const wordUserChoice = convertToWord(userChoice);
    const userChoice_div = document.getElementById(wordUserChoice);
    result_p.innerHTML = `${wordUserChoice}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It draw...`;
    userChoice_div.classList.add('gray-glow');
    scoreBoard_div.classList.add('gray-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('gray-glow');
        scoreBoard_div.classList.remove('gray-glow');
    }, 500);
}

function convertToWord(letter) {
    if (letter === 'r') return 'rock';
    if (letter === 'p') return 'paper';
    return 'scissors';
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case 'pr':
        case 'rs':
        case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            lose(userChoice, compChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game('r');
    });

    paper_div.addEventListener('click', () => {
        game('p');
    });

    scissors_div.addEventListener('click', () => {
        game('s');
    });
}

main();