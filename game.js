// Create a function that returns Rock, paper or scissors
function getComputerChoice(){
//  Create a variable that can hold a number between 1-3.
    let randomChoice;
// Randomly generate a whole number thats either 0, 1 or 2.
    randomChoice = Math.floor(Math.random() * 3);
// Make a switch statement that returns either rock papers or scissors depending on the random number.
    switch(randomChoice){
        case 0 : 
            return 'Rock';
        case 1 :
            return 'Paper';
        case 2 :
            return 'Scissors';
    }

}

//Both choices are hard coded here for the time being. had a version that prompted the user but the exercise didnt want that yet.


//Create a function that let the human play the computer and declares the victor and why Eg: "You lose! Rock beats Scissors!" It has to be case-insensitive.
function playRound(playerSelection,computerSelection = getComputerChoice()){
//Make both choices all lowercase.
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
//Compare the two choices and determine a winner.
// Return a string with the winner and the reasoning behind it.
    if(playerSelection === computerSelection){
        return "Tie!";
    }else if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'paper':
                return 'You Lose! Paper beats Rock!';
            case 'scissors':
                return 'You Win! Rock beats Scissors!'
            }  
    }else if(playerSelection === 'paper'){
        switch(computerSelection){
            case 'scissors':
                return 'You Lose! Scissors beat Paper!';
            case 'rock':
                return 'You Win! Paper beats Rock!';
        }
    }else if(playerSelection === 'scissors'){
        switch(computerSelection){
            case 'rock':
                return 'You Lose! Rock beats Scissors!';
            case 'paper':
                return 'You Win! Scissors beat Paper';
        }
    }else{
        return 'Something went wrong. You werent meant to see this.'
    }
    }

