// cricket.js

// Object to store & update score

let scoreStr = localStorage.getItem("score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return `FINAL SCORE 
    win:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  };
}
// Function to handle user's choice (BAT)

function handleBatChoice() {
  const userChoiceMsg = "YOU HAVE CHOSEN BAT";
  let randomNumber = Math.random() * 3;
  let computerChoice;

  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "BAT";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "BALL";
  } else {
    computerChoice = "WICKET";
  }

  const computerChoiceMsg = `COMPUTER CHOSE ${computerChoice}`;

  let resultMessage;
  if (computerChoice === "BALL") {
    score.win++;
    resultMessage = "USER WON";
  } else if (computerChoice === "BAT") {
    score.tie++;
    resultMessage = "IT IS A TIE MATCH";
  } else {
    score.lost++;
    resultMessage = "COMPUTER WON";
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText = `${userChoiceMsg}`;
  document.querySelector("#computer-move").innerText = `${computerChoiceMsg}`;
  document.querySelector("#result").innerText = `${resultMessage}`;
  document.querySelector("#score").innerText = score.displayScore();

  //console.log(score);
}

// Function to handle user's choice (BALL)

function handleBallChoice() {
  const userChoiceMsg = "YOU HAVE CHOSEN BALL";
  let randomNumber = Math.random() * 3;
  let computerChoice;

  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "BAT";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "BALL";
  } else {
    computerChoice = "WICKET";
  }

  const computerChoiceMsg = `COMPUTER CHOSE ${computerChoice}`;

  let resultMessage;
  if (computerChoice === "BALL") {
    score.tie++;
    resultMessage = "IT IS A TIE MATCH";
  } else if (computerChoice === "BAT") {
    score.lost++;
    resultMessage = "COMPUTER WON";
  } else {
    score.win++;
    resultMessage = "USER WON";
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText = `${userChoiceMsg}`;
  document.querySelector("#computer-move").innerText = `${computerChoiceMsg}`;
  document.querySelector("#result").innerText = `${resultMessage}`;
  document.querySelector("#score").innerText = score.displayScore();

  //console.log(score);
}

// Function to handle user's choice (WICKET)

function handleWicketChoice() {
  const userChoiceMsg = "YOU HAVE CHOSEN WICKET";
  let randomNumber = Math.random() * 3;
  let computerChoice;

  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "BAT";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "BALL";
  } else {
    computerChoice = "WICKET";
  }

  const computerChoiceMsg = `COMPUTER CHOSE ${computerChoice}`;

  let resultMessage;
  if (computerChoice === "BALL") {
    score.lost++;
    resultMessage = "COMPUTER WON";
  } else if (computerChoice === "BAT") {
    score.win++;
    resultMessage = "USER WON";
  } else {
    score.tie++;
    resultMessage = "IT IS A TIE MATCH";
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText = `${userChoiceMsg}`;
  document.querySelector("#computer-move").innerText = `${computerChoiceMsg}`;
  document.querySelector("#result").innerText = `${resultMessage}`;
  document.querySelector("#score").innerText = score.displayScore();

  //console.log(score);
}

function resetChoice() {
  localStorage.clear();
  //alert(`YOU RESET THE GAME`);

  document.querySelector("#user-move").innerText = "";
  document.querySelector("#computer-move").innerText = "";
  document.querySelector("#result").innerText = "";
  document.querySelector("#score").innerText = "";
  resetScore();
}
