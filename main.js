let rockButton = document.getElementById("r");
let paperButton = document.getElementById("p");
let scissorsButton = document.getElementById("s");
let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");
let result = document.getElementById("result");
computerScore = 0;
playerScore = 0;

function getComputerChoice() {
  let choices = ["r", "p", "s"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function convert(sign) {
  if (sign === "r") return "rock";
  else if (sign === "p") return "paper";
  else return "scissors";
}

function win(player, computer) {
  let userChoice = document.getElementById(player);
  playerScore++;
  playerScoreSpan.innerHTML = playerScore;
  result.innerHTML = `Player: ${convert(player)} | Computer: ${convert(computer)} - You win!`;
  userChoice.classList.add("green");
  setTimeout(() => userChoice.classList.remove("green"), 300)
}

function lose(player, computer) {
  let userChoice = document.getElementById(player);
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  result.innerHTML = `Player: ${convert(player)} | Computer: ${convert(computer)} - You lost!`;
  userChoice.classList.add("red");
  setTimeout(() => userChoice.classList.remove("red"), 300)
}

function draw(player, computer) {
  let userChoice = document.getElementById(player);
  result.innerHTML = `Player: ${convert(player)} | Computer: ${convert(computer)} - Draw!`;
  userChoice.classList.add("gray");
  setTimeout(() => userChoice.classList.remove("gray"), 300)
}

function game(playerChoice) {
  let computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "rr":
    case "pp":
    case "ss":
      draw(playerChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(playerChoice, computerChoice);
      break;
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, computerChoice);
      break;
  }
}

game("z");

function main() {
  rockButton.addEventListener("click", () => game("r"));
  paperButton.addEventListener("click", () => game("p"));
  scissorsButton.addEventListener("click", () => game("s"));
}

main();

let reset = document.querySelector(".reset").addEventListener("click", function () {
  computerScoreSpan.innerHTML = 0;
  playerScoreSpan.innerHTML = 0;
  document.querySelector(".reset").classList.add("blink");
  setTimeout(() => document.querySelector(".reset").classList.remove("blink"), 300)
})