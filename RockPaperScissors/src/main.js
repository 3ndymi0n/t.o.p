function computerPlay() {
    const moves = ["scissors", "paper", "rock"];
    const randomChoice = Math.floor(Math.random() * 3);

    return moves[randomChoice];
};

function gameRound(computerPlay, playerSelection) {
    // Conditions to be declared the winner.

    plays = {
        "scissors": "paper",
        "paper": "rock",
        "rock": "scissors"
    }

    if (computerPlay == playerSelection){
        return "Draw!";
    }else if (plays[computerPlay] == playerSelection) {
        return "Computer Wins";
    } else {
        return "Player Wins";
    }
        
};

function playerPlay() {
    const moves = ["scissors", "paper", "rock"];
    let move = prompt("Scissors, Paper, or Rock").toLowerCase();
    if (moves.includes(move) === false){
        alert(move + "Is not a valid choice")
        playerPlay();
    }
    return move;
}

function game() {
    let roundCount = 1;
    let computerWins = 0;
    let playerWins = 0;

    while((playerWins < 3) && (computerWins < 3)){
        let computerTurn = computerPlay();
        let playerTurn = playerPlay();
        let currentRound = gameRound(computerTurn, playerTurn);
        console.log(currentRound);
        if(currentRound == "Draw!") {
            console.log("Round " + roundCount + " is a draw! Player has " + playerWins + " and computer has " + computerWins + ".");
            roundCount++
        }else if(currentRound == "Computer Wins"){
            computerWins++
            console.log("Round " + roundCount + " won by Computer! Player has " + playerWins + " and computer has " + computerWins + ".");
            roundCount++
        }else if(currentRound == "Player Wins") {
            playerWins++
            console.log("Round " + roundCount + " won by Player! Player has " + playerWins + " and computer has " + computerWins + ".");
            roundCount++
        }
        
    }
}

console.log(game());
