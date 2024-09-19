const getHumanChoice = () => {
  const humanChoice = prompt("Please enter rock or paper or scissors");
  console.log("Human Choice :", humanChoice);
  return humanChoice;
};

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  computerChoice =
    computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
  console.log("Computer Choice :", computerChoice);
  return computerChoice;
};

const validateHumanChoice = (humanChoice) => {
  if (humanChoice === null) {
    // alert("I think you didn't want to play!");
    return humanChoice;
  } else if (humanChoice === "") {
    alert("You didn't choose valid option");
    return validateHumanChoice(getHumanChoice());
  } else {
    humanChoice = humanChoice.toLowerCase();
    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      return humanChoice;
    } else {
      alert("You didn't choose valid option");
      return validateHumanChoice(getHumanChoice());
    }
  }
};

//validateHumanChoice(getHumanChoice());
const decidingWinner = (humanChoice, computerChoice) => {
  if (humanChoice === null) {
    alert("I think you didn't want to play!");
    return null;
  } else if (humanChoice === computerChoice) {
    console.log("It's tie game");
    alert("It's tie game");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log("You won the game!");
    alert("You won the game!");
    return "human";
  } else {
    console.log("Computer won the game!");
    alert("Computer won the game!");
    return "computer";
  }
};

const playGame = () => {
  const humanChoice = validateHumanChoice(getHumanChoice());
  const computerChoice = getComputerChoice();
  let winner = decidingWinner(humanChoice, computerChoice);
  return winner;
};

const playseries = () => {
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;
  while (round <= 5) {
    console.log("round:", round);
    let winner = playGame();
    if (winner === null) {
      break;
    }
    if (winner === "human") {
      humanScore++;
      round++;
    } else if (winner === "computer") {
      computerScore++;
      round++;
    } else {
      round++;
    }
  }
  return [humanScore, computerScore, round];
};

//decidingWinner(getHumanChoice(), getComputerChoice());
function init() {
  const [humanScore, computerScore, round] = playseries();
  console.log("humanScore", humanScore);
  console.log("computerScore", computerScore);
  console.log(round);
  if (humanScore > computerScore) {
    alert(`Human Score = ${humanScore}  and Computer Score = ${computerScore} 
      You won the series, after ${round - 1} rounds  `);
  } else if (computerScore > humanScore) {
    alert(`Human Score = ${humanScore}  and Computer Score = ${computerScore} 
      computer won the series,after ${round - 1} rounds `);
  } else {
    alert(`Human Score = ${humanScore}  and Computer Score = ${computerScore} 
      Series is tied,after ${round - 1} rounds `);
  }
}

init();
