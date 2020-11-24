const gameButtons = document.querySelectorAll('.rps-buttons button'); 
const displayResult = document.querySelector('.display-result h3'); 
const compResult = document.querySelector('.display-result p');
const choices = ['rock', 'paper', 'scissors'];


gameButtons.forEach(button => button.addEventListener('click', userChoice))


function userChoice(event){
    const userChoice = event.target.value;  
    const computerChoice = compChoice();
    displayResult.textContent = determineWinner(userChoice, computerChoice); 
    compResult.textContent = "cpu choose: " + computerChoice; 
}

function compChoice(){  
    const randomIndex = Math.floor(Math.random() * choices.length); 
    return choices[randomIndex];  
}


function determineWinner(userChoice, compChoice){
    if(userChoice === compChoice){
        return 'Draw';
    }

    let userChoiceIndex = choices.indexOf(userChoice);
    let compChoiceIndex = choices.indexOf(compChoice);

    if((userChoiceIndex - compChoiceIndex + 3) % 3 == 1) {  
        return 'You win!';
    } else {
        return 'You lose';
    }
}



