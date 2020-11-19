// selectors for corresponding buttons, rock, paper, scissors and play buttons.

const rockButton = document.querySelector('.rockBtn');
const paperButton = document.querySelector('.paperBtn');
const scissorsButton = document.querySelector('.scissorsBtn');
const playButton = document.querySelector('.playBtn');


// listeners

playButton.addEventListener('click', playRPS);


// functions

function compChoice(){
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let randNum = Math.floor(Math.random() * 3);
    if(randNum === rock){
        
    }

}