// selectors for corresponding buttons, rock, paper, scissors and play buttons.

const gameButtons = document.querySelectorAll('.rpsButtons button');
const displayResult = document.querySelector('.display-result h3');
const compResult = document.querySelector('.display-result p');

// listeners

for(var i = 0; i < gameButtons.length; i++){
    gameButtons[i].addEventListener('click', userChoice);
}

//global variables

const options = ['rock', 'paper', 'scissors'];

// functions

function userChoice(event){
    const choice = event.target.dataset.choice;
    const compChoice = cpuChoice();
    const result = determineWin(choice, compChoice);
    displayResult.textContent = result;
    compResult.textContent = "cpu choose: " + compChoice;
}


function cpuChoice(){    
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function determineWin(user, comp){
    let a = getIndex(user);
    let b = getIndex(comp);
    if(user === comp){
        return 'draw';
    }
    if((a - b + 3) % 3 == 1){
        return 'You win!';
    } else {
        return 'You lose';
    }
}


function getIndex(str){
    for(var i = 0; i < options.length; i++){
        if(str === options[i]){
            return i;
        }
    }
}

