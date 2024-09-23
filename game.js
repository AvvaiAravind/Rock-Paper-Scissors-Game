const playerSection = document.querySelector(".player-section");
playerSection.addEventListener("click", (event) => {
  init(event);
});

let round = 0;
let Uscore = 0;
let Cscore = 0;

function init(event) {
  const [Uscore, Cscore, round] = playseries(event);
  const h3 = document.querySelector("h3");
  if (round === 5) {
    if (Uscore > Cscore) {
      h3.textContent = `You won the Series! after ${round} round`;
    } else if (Cscore > Uscore) {
      h3.textContent = `computer won the Series! after ${round} round`;
    } else {
      h3.textContent = `Series tied! after ${round} round`;
    }
  }
}

function playseries(event) {
  const userScore = document.querySelector("#user-score");
  const computerScore = document.querySelector("#computer-score");
  const roundCount = document.querySelector("#round-count");

  if (round <= 4) {
    console.log("round:", round);

    let winner = startGame(event);
    if (winner === "human") {
      Uscore++;
      round++;
      userScore.textContent = `${Uscore}`;
      roundCount.textContent = `${round}`;
    } else if (winner === "computer") {
      Cscore++;
      round++;
      computerScore.textContent = `${Cscore}`;
      roundCount.textContent = `${round}`;
    } else {
      round++;
      roundCount.textContent = `${round}`;
    }
  }
  return [Uscore, Cscore, round];
}

function startGame(event) {
  const humanChoice = getHumanChoice(event);
  const computerChoice = getComputerChoice();
  const Winner = decidingWinner(humanChoice, computerChoice);
  return Winner;
}

function getHumanChoice(event) {
  let target = event.target;
  let humanChoice = "";

  const userChoice = document.querySelector("#user-choice");

  switch (target.id) {
    case "rock":
      console.log("you chosed rock");
      humanChoice = "rock";
      userChoice.textContent = ` ${humanChoice}`;
      return humanChoice;
    case "paper":
      console.log("you chosed paper");
      humanChoice = "paper";
      userChoice.textContent = ` ${humanChoice}`;
      return humanChoice;
    case "scissors":
      console.log("you chosed scissors");
      humanChoice = "scissors";
      userChoice.textContent = ` ${humanChoice}`;
      return humanChoice;
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";
  const computerDChoice = document.querySelector("#computer-dchoice");

  if (randomNumber === 0) {
    console.log("commputer chosed rock");
    const cRock = document.querySelector("#C-rock");
    displayHoverEffect(cRock);
    computerChoice = "rock";
    computerDChoice.textContent = ` ${computerChoice}`;
    return computerChoice;
  } else if (randomNumber === 1) {
    console.log("commputer chosed paper");
    const cPaper = document.querySelector("#C-paper");
    displayHoverEffect(cPaper);
    computerChoice = "paper";
    computerDChoice.textContent = ` ${computerChoice}`;
    return computerChoice;
  } else {
    console.log("commputer chosed scissors");
    const cScissors = document.querySelector("#C-scissors");
    displayHoverEffect(cScissors);
    computerChoice = "scissors";
    computerDChoice.textContent = ` ${computerChoice}`;

    return computerChoice;
  }
}

function displayHoverEffect(Choice) {
  Choice.classList.add("add-hover");
  setTimeout(() => {
    Choice.classList.remove("add-hover");
  }, 250);
}

function decidingWinner(humanChoice, computerChoice) {
  const h3 = document.querySelector("h3");

  if (humanChoice === computerChoice) {
    h3.textContent = "It's a tie game";
    console.log("It's a tie game");
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    h3.textContent = "You won the game!";
    console.log("You won the game!");
    return "human";
  } else {
    h3.textContent = "Computer won the game!";
    console.log("Computer won the game!");
    return "computer";
  }
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetfunc);

function resetfunc() {
  round = 0;
  Uscore = 0;
  Cscore = 0;
  const roundCount = document.querySelector("#round-count");
  roundCount.textContent = 0;
  const h3 = document.querySelector("h3");
  h3.textContent = "";
  const userChoice = document.querySelector("#user-choice");
  userChoice.textContent = "";
  const computerDChoice = document.querySelector("#computer-dchoice");
  computerDChoice.textContent = "";
  const userScore = document.querySelector("#user-score");
  userScore.textContent = 0;
  const computerScore = document.querySelector("#computer-score");
  computerScore.textContent = 0;
}
