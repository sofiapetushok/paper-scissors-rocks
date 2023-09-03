const choices = ['paper', 'scissors', 'rock'];
let cPoints = 0;
let uPoints = 0;
let roundScore = document.querySelector('.score');
let message = document.querySelector('.message');
function getComputerChoice() {
    let randInd = Math.floor(Math.random() * choices.length);
    return choices[randInd];
} 
function playRound(playerSelection, computerSelection) { 
    
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    let computerChoce = document.querySelector('#computer-choice');
    computerChoce.innerHTML = `
            <div class="card">
                <div class="card-content">
                    <div class="center-align">
                        <img src="./img/${computerSelection}_dark.jpg" alt="${computerSelection}" class="responsive-img">
                    </div>
                </div>
            </div> `;
    message.classList.remove("win", "lose", "tie");
    switch (true) {
        case computerSelection === playerSelection: 
            message.textContent = "It's a tie! Give it one more try!";
            message.classList.add("tie");
            message.classList.add("show");

            document.getElementById('user-score').textContent = uPoints;
            document.getElementById('comp-score').textContent = cPoints;
            break;

        case (computerSelection === 'rock' && playerSelection === 'scissors') ||
             (computerSelection === 'scissors' && playerSelection === 'paper') ||
             (computerSelection === 'paper' && playerSelection === 'rock'):
            cPoints ++;
            message.classList.add("lose");
            message.classList.add("show");
            if (computerSelection === 'scissors') {
                message.textContent = `Computer won this round! The ${computerSelection} beat ${playerSelection}.`;
            } else {
                message.textContent = `Computer won this round! The ${computerSelection} beats ${playerSelection}.`;
            }
            document.getElementById('user-score').textContent = uPoints;
            document.getElementById('comp-score').textContent = cPoints;
            break;

        default:
            uPoints ++;
            message.classList.add("win");
            message.classList.add("show");
            message.textContent = `You win! The ${playerSelection} beat ${computerSelection}.`;
            
            document.getElementById('user-score').textContent = uPoints;
            document.getElementById('comp-score').textContent = cPoints;
            break;
    }
 
    checkWinner(); 
    return {cPoints, uPoints};
}
// playRound();

function game(playerSelection, rounds) {
   
    const result = playRound(playerSelection);
    cPoints = result.cPoints;
    uPoints = result.uPoints;
    
    console.log(`Computer: ${cPoints}, You: ${uPoints}.`); 
    
}

function checkWinner() {
    let finalMessage = document.querySelector('.final-message');
    let finalScreen = document.querySelector('.final-screen');
    if (cPoints === 5 || uPoints === 5) {
        if (cPoints === uPoints) {
            finalMessage.textContent = "The friendship won!";
            finalScreen.classList.add('tie');
        } else if (cPoints < uPoints) {
            finalMessage.textContent = "Congratulations!!! You won the battle!";
            finalScreen.classList.add('win');
        } else {
            finalMessage.textContent = "You lost... We are all gonna die!";
            finalScreen.classList.add('lose');
        }
        document.querySelector('.final-score').textContent = `YOU: ${uPoints} - COMPUTER: ${cPoints}`;
        
       
        finalScreen.classList.add('show');
    } 
}