let userScore = 0;
let compScore = 0;
let choices =  document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreNum =document.querySelector("#user-score");
let comScoreNum = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("It's a Draw Game");
  msg.innerText = "It was a Draw ! Play again";
  msg.style.backgroundColor = "pink";
}

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScoreNum.innerText = userScore;
    msg.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    comScoreNum.innerText = compScore;
    msg.innerText = `you lose ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  };
};

const playGame = (userChoice) => {
    console.log(`user choice =`, userChoice);
    const compChoice = genCompChoice();
    console.log(`comp choice = `, compChoice);

    if(compChoice === userChoice){
      drawGame();
    }else {
      let userWin = true;
      if(userChoice === "rock"){
        // paper, scissors
        userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
        //rock, scissors
        userWin = compChoice === "scissor" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
});