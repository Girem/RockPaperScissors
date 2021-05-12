//this is my Rock, Paper, Scessors game

//this function randomly generates one of 3 outputs(rock, paper, or scissors) for computer
function computerPlay(){
    let randomNum=Math.floor(Math.random()*3);

    let computerSelects =''

    if(randomNum == 0  ){
        computerSelects = "rock";
    }else if(randomNum == 1 ){
        computerSelects = "paper";
    }else if(randomNum == 2){
        computerSelects = "scessors";
    }

    return computerSelects;
}



function playRound(playerSelection, computerSelectior){
  
    if (playerSelection.toLowerCase() == computerSelectior){
        console.log("You choose " + playerSelection + " Computer choose  " + computerSelectior );
        console.log("It is a Tie");
    }else if(playerSelection.toLowerCase() == "rock" && computerSelectior == "paper" ){
        console.log("You choose " + playerSelection + " Computer choose  " + computerSelectior );
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    }else if(playerSelection.toLowerCase() == "paper" && computerSelectior == "rock" ){
        console.log("You choose " + playerSelection + " Computer choose  " + computerSelectior );
        console.log("You Win! Paper beats Rock");
        playerScore++;
    }else if(playerSelection.toLowerCase() == "rock" && computerSelectior == "scessors" ){
        console.log("You choose " + playerSelection + " Computer choose  " + computerSelectior );
        console.log("You Win! Rock beats Scessors");
        playerScore++;
    }else if(playerSelection.toLowerCase() == "scessors" && computerSelectior == "rock" ){
        console.log("You choose " + playerSelection + " Computer choose  " + computerSelectior );
        console.log("You Lose! Rock beats Scessors");
        computerScore++;
    }else if(playerSelection.toLowerCase() == "scessors" && computerSelectior == "paper" ){
        console.log("You choose " + playerSelection + " Computer choose  " + computerSelectior );
        console.log("You win! Scessors beats Paper");
        playerScore++;
    }else if(playerSelection.toLowerCase() == "paper" && computerSelectior == "scessors" ){
        console.log("You choose " + playerSelection + " Computer choose  " + computerSelectior );
        console.log("You Lose! Scessors beats Paper");
        computerScore++;
    }
}


let playerScore=0;
let computerScore = 0;

function game(){
   

    const computerSelectior = computerPlay();
    for(let turns = 1; turns <=5; turns++){
         // this gets input from player
        let playerSelection = prompt("Please enter your answer");
        playRound(playerSelection, computerSelectior)
        console.log(playerScore + '-' + computerScore);
    }
    if(playerScore>computerScore){
        console.log("You Win!!!");
    }else if(playerScore==computerScore){
        console.log("It is a tie");
    }else{
        console.log("You Loose! :( ");
    }
   
}