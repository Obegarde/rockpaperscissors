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

    //Make a playGame function that plays 5 games and keeps tracks of who wins.
    function playGame(){
    // Make two variables to hold the number of wins of each player
        let playerScore = 0;
        let computerScore = 0;
    //Make a loop that runs for 5 rounds
    for(let i = 1; i < 6; i++){
    //make a variable to hold this rounds winner.
        let roundWinner;
    //Prompt the player for a choice
        let playerChoice = prompt("What do you choose ?", "Rock, Paper or Scissors ?");
    //then plays a round
       roundWinner = playRound(playerChoice);
    //tallies the score
        if(roundWinner[4] ==='W'){
            playerScore += 1;
        }else if(roundWinner[4] === 'L'){
            computerScore += 1;
        }
    //Depending on what playRound() returns it should write the winner
        console.log(roundWinner);
        console.log(`Round: ${i}\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    //Then restarts until 5 rounds have been played
    }
    //announce the final winner
        if(playerScore === computerScore){
            console.log(`With a score of ${playerScore} to ${computerScore} you have tied. That Should not be possible!`)
        }else if(playerScore > computerScore){
            console.log(`You Won with a final score of ${playerScore} versus ${computerScore}`)
        }else if(playerScore < computerScore){
            console.log(`You lost with a final score of ${playerScore} versus ${computerScore}`)
        }
    
    }
