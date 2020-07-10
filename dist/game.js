var score = document.getElementById("score");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var result = document.getElementById("result");
var exp = document.getElementById("exp");
var userscore = document.getElementById("userscore");
var compscore = document.getElementById("compscore");
var userScore = 0;
var compScore = 0;
rock.addEventListener("click", function() {
  game("r");
});
paper.addEventListener("click", function() {
  game("p");
});
scissors.addEventListener("click", function() {
  game("s");
});

function compChoice() {
  var choices = ["r", "p", "s"];
  return choices[(Math.floor(Math.random() * 3))];
}

function game(userChoice) {
  var cChoice = compChoice();
  switch (userChoice + cChoice) {
    case "rs":
    case "sp":
    case "pr": {
      userScore++;
      win(userChoice, cChoice, userScore);
      break;
    }
    case "sr":
    case "ps":
    case "rp": {
      compScore++;
      lost(userChoice, cChoice, compScore);
      break;
    }
    s
  case "rr":
  case "ss":
  case "pp": {
    draw(userChoice, cChoice);
    break;
  }
  }
}

function convertToWord(str) {
  if (str == "r") {
    return "Rock";
  }
  if (str == "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}


function win(uc, cc, sc) {
  result.innerHTML = "You won!"
  exp.innerHTML = "You chose " + convertToWord(uc) + " and , the computer chose " + convertToWord(cc) + ".";
  userscore.innerHTML = sc;
}

function lost(uc, cc, sc) {
  result.innerHTML = "You lost!"
  exp.innerHTML = "You chose " + convertToWord(uc) + " and , the computer chose " + convertToWord(cc) + ".";
  compscore.innerHTML = sc;
}

function draw(uc, cc) {
  result.innerHTML = "It's a draw!"
  exp.innerHTML = "You chose " + convertToWord(uc) + " and , the computer also chose " + convertToWord(cc) + ".";
}
