"use strict";

//console.log (document.querySelector('.masseage').textcontent);
//document.querySelector('.masseage').textContent='correct number!';

let secratenumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;


document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = 20;

//document.querySelector(".guess").value = 0;
console.log(document.querySelector(".guess").value);


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".masseage").textContent = "no number!";

    /// when  player wins/////
  } else if (guess === secratenumber) {
    document.querySelector(".masseage").textContent = "correct number!";
    document.querySelector(".number").textContent = secratenumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width ='30rem';

      
    /// when guess too  high///
  } else if (guess > secratenumber) {
    if (score > 1) {
      document.querySelector(".masseage").textContent = "to high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".masseage").textContent = "You lose the game!";
      document.querySelector(".score").textContent = 0;
    }
    /// when guess too low ///
  } else if (guess < secratenumber) {
    document.querySelector(".masseage").textContent = "to low!";
    score--;
    document.querySelector(".score").textContent = score;

  }
});

document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secratenumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".masseage").textContent = 'start guessing.....';
  
  document.querySelector('.score').textContent = score;
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = '';

  document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width ='30rem'; 







})






