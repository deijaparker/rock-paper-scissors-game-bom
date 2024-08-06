const choices = ['rock', 'paper', 'scissors'];

function getUserChoice() {
    const choice = prompt('Choose rock, paper, or scissors:').toLowerCase();
    if (!choices.includes(choice)) {
        alert('Invalid choice! Please select rock, paper, or scissors.');
        return getUserChoice();
    }
    return choice;
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }
    return 'Computer wins!';
}

document.getElementById('play-button').addEventListener('click', () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const resultMessage = `You chose: ${userChoice}. Computer chose: ${computerChoice}. ${determineWinner(userChoice, computerChoice)}`;
    document.getElementById('result').textContent = resultMessage;
});