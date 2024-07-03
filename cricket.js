// cricket.js

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
    resultMessage = "USER WON";
  } else if (computerChoice === "BAT") {
    resultMessage = "IT IS A TIE MATCH";
  } else {
    resultMessage = "COMPUTER WON";
  }

  alert(`${userChoiceMsg}. ${computerChoiceMsg} AND ${resultMessage}`);
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
    resultMessage = "IT IS A TIE MATCH";
  } else if (computerChoice === "BAT") {
    resultMessage = "COMPUTER WON";
  } else {
    resultMessage = "USER WON";
  }

  alert(`${userChoiceMsg}. ${computerChoiceMsg} AND ${resultMessage}`);
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
    resultMessage = "COMPUTER WON";
  } else if (computerChoice === "BAT") {
    resultMessage = "USER WON";
  } else {
    resultMessage = "IT IS A TIE MATCH";
  }

  alert(`${userChoiceMsg} AND  ${computerChoiceMsg} AND ${resultMessage}`);
}
