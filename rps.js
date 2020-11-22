// selectors for corresponding buttons, rock, paper, scissors and play buttons.

const gameButtons = document.querySelectorAll('.rpsButtons button'); // querySelectorAll selects whole nodes(arrays)
const displayResult = document.querySelector('.display-result h3'); //querySelector selects individual elements
const compResult = document.querySelector('.display-result p');

// listeners

for(let i = 0; i < gameButtons.length; i++){
    gameButtons[i].addEventListener('click', userChoice);  
}

//global variable for rock paper scissors game. string array

const options = ['rock', 'paper', 'scissors'];

// functions

function userChoice(event){
    const choice = event.target.dataset.choice;  // using event.target but specifically targetting the choice of the user.
    //console.log(choice);  // displays the data of the variable
    const compChoice = cpuChoice(); // 
    const result = determineWin(choice, compChoice); 
    displayResult.textContent = result; // using selector displayResult to display the result on html
    compResult.textContent = "cpu choose: " + compChoice; // concatinating the compResult and displaying using HTML textContent property.
}


function cpuChoice(){    // creating function for selecting computers choice 
    const randomIndex = Math.floor(Math.random() * options.length); // get the global variable options and use the length property to select cpu pick
    return options[randomIndex];  // returns whatever the randomIndex option was selected. rock , paper, scissor.
}


function getIndex(str){  //function that selects index string, using the global variable named options.
    for(var i = 0; i < options.length; i++){
        if(str === options[i]){
            return i;
        }
    }
}

function determineWin(user, comp){
    let a = getIndex(user);
    let b = getIndex(comp);
    if(user === comp){
        return 'draw';
    }

    if((a - b + 3) % 3 == 1) {  //stack overflow ftw
        return 'You win!';
    } else {
        return 'You lose';
    }
}



