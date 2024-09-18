/* Rock Paper Scissors */
console.log("hello World");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  computerChoice =
    computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
  console.log("Comp :", computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Please! Enter either Rock or Paper or Scissors");
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    alert("Please enter a valid option");
    getHumanChoice();
  }
  console.log("Human", humanChoice);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i <= 5; i++) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      return "This is a tie game";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      i++;
      console.log(humanScore);
      return "You won the game";
    } else {
      computerScore++;
      i++;
      console.log(computerScore);
      return "Computer won the game";
    }
  }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
