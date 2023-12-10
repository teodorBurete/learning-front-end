
const arr = ['ROCK','PAPPER','SCRISSORS']

let getRandomInt=()=>Math.floor(Math.random()*3)

let getComputerChoice = () =>{
    let x = getRandomInt();
    return arr[x]}
//console.log(getComputerChoice());

let playRound = (playerSelection, computerSelection) =>{
    playerSelection=playerSelection.trim().toUpperCase();
    console.log("Player selection:"+playerSelection);
    console.log("Computer selection:"+computerSelection);

    if(playerSelection==computerSelection)
        return "TIE!"  
    if((playerSelection=='ROCK'&&computerSelection=='SCRISSORS')||
        (playerSelection=='PAPPER'&&computerSelection=='ROCK') ||
        (playerSelection=='SCRISSORS'&&computerSelection=='PAPPER'))
        return "PLAYER WINS"
    else
        return "COMPUTER WINS"
}

let game = ()=>{
    let playerScore=0;
    let computerScore=0;

    while(true){
        let roundResult = playRound(prompt("ROCK, PAPPER or SCRISSORS"),getComputerChoice());
        if(roundResult=="PLAYER WINS")
            playerScore++;
        else if(roundResult=="COMPUTER WINS")
            computerScore++;

        if(playerScore==5||computerScore==5)
            break;
    }
    console.log("Game over! Final score: Computer - "+computerScore+", Player - "+playerScore);
    if(playerScore>computerScore)
        console.log("Player wins!")
    else
        console.log("Computer wins!")
}