let guessNumber = 0;
let score = 20;
let Highscore = 0;
("use strict");
let setGuessNumber = function () {
  guessNumber = Math.floor(Math.random() * 20);
  let numberBox = document.querySelector(".prize");
  numberBox.textContent = guessNumber;
  return guessNumber;
};

let inputCheck = function () {
  let userNumber = document.getElementById("answerBox").value;
  answer = Number(userNumber);
  
  if (answer > guessNumber) {
    document.querySelector(".scoreHeading").textContent = "Too High!";
    score--;
    document.querySelector(".score").innerHTML = `score : ${score}`;
  } else if (answer < guessNumber) {
    document.querySelector(".scoreHeading").textContent = "Too Low!";
    score--
    document.querySelector(".score").innerHTML = `score : ${score}`;
  } else if (answer === guessNumber) {
    document.querySelector('.prize').style.display = 'block';
    document.querySelector('.prize').style.display = 'hidden';

    console.log(score)
    document.querySelector(".scoreHeading").textContent = "Congrats, You won!";
    if (Highscore < score) {
        console.log(score)
      Highscore = score;
    
      document.querySelector(
        ".highScore"
      ).innerHTML = `Highscore  : ${Highscore}`;
    }
  }
 
};

let playAgain = function(){
    document.querySelector(".score").innerHTML = `score : 20`;
    document.getElementById("answerBox").value = ''
    document.querySelector('.prize').style.display = 'block';
    document.querySelector('.prize1').style.display = 'none';
    setGuessNumber();
}
setGuessNumber();


