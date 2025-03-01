let computerResult = '';
let result = '';

const score = (JSON.parse(localStorage.getItem("score"))) || 
{ wins: 0,
  losses: 0,
  ties: 0};
  const debug = {  
    wins: score.wins || 0,  
    losses: score.losses || 0,  
    ties: score.ties || 0 
  }

  if (score.ties === undefined) {
    score.ties = 0;
    localStorage.setItem("score", JSON.stringify(score));
  }

 let present = document.querySelector('.js-showcase');
 function update() {
  present.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
 localStorage.setItem('score',JSON.stringify(score));
 }

 update();

function function1() {

const computerMove = Math.random();
if (computerMove >= 0 && computerMove < 1/3) {
computerResult = 'rock';
} else if (computerMove >= 1/3 && computerMove < 2/3) {computerResult = 'paper';
} else if (computerMove >= 2/3 && computerMove < 1) {
computerResult = 'scissors';
}

}

function resPonse() {
  
  if (computerResult === 'rock') {
 result = 'Tie';
 score.ties += 1;
} else if (computerResult === 'paper') {
 result = 'You lose';
 score.losses += 1;

} else if (computerResult === 'scissors') {
 result = 'You win'
 score.wins += 1;}
  
  present.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  update();
}


function resPonse1() {


  if (computerResult === 'rock') {
 result = 'You win';
 score.wins += 1;
} else if (computerResult === 'paper') {result = 'Tie'
score.ties += 1;
} else if (computerResult === 'scissors') {result = 'You lose'
score.losses += 1;
present.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

update();
 
}
  function resPonse2() {


    if (computerResult === 'rock') {
   result = 'You lose';
   score.losses += 1;
  } else if (computerResult === 'paper') {result = 'You win'
  score.wins += 1;
  } else if (computerResult === 'scissors') {result = 'Tie'
  score.ties += 1;
  present.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
   
  update();

}

function function2() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  attach.innerHTML = '';
  secondAttach.innerHTML = '';
  updatedScore.innerHTML = 0;
  updatedScoreMatch.innerHTML = 0;
  update();
}

function function3() {
  let attach = document.querySelector(".js-response");
  attach.innerHTML = '<img src="rock-emoji.png">'

  let secondAttach = document.querySelector(".js-response-one");

  if(computerResult === 'rock') {
    secondAttach.innerHTML = '<img src="rock-emoji.png">' 
  } else if(computerResult === 'paper') {
    secondAttach.innerHTML = '<img src="paper-emoji.png">' 
  } else if(computerResult === 'scissors') {
    secondAttach.innerHTML = '<img src="scissors-emoji.png">' 
  }
}

function function4() {
  let attach = document.querySelector(".js-response");
  attach.innerHTML = '<img src="paper-emoji.png">'

  let secondAttach = document.querySelector(".js-response-one");

  if(computerResult === 'rock') {
    secondAttach.innerHTML = '<img src="rock-emoji.png">' 
  } else if(computerResult === 'paper') {
    secondAttach.innerHTML = '<img src="paper-emoji.png">' 
  } else if(computerResult === 'scissors') {
    secondAttach.innerHTML = '<img src="scissors-emoji.png">' 
  } 
}

let attach = document.querySelector(".js-response");
let secondAttach = document.querySelector(".js-response-one");

function function5() {
  attach.innerHTML = '<img src="scissors-emoji.png">'

  if(computerResult === 'rock') {
    secondAttach.innerHTML = '<img src="rock-emoji.png">' 
  } else if(computerResult === 'paper') {
    secondAttach.innerHTML = '<img src="paper-emoji.png">' 
  } else if(computerResult === 'scissors') {
    secondAttach.innerHTML = '<img src="scissors-emoji.png">' 
  }
}

function function6() {
  attach.innerHTML = '';
  secondAttach.innerHTML = '';
}
let scoreResponse = '';
let updatedScore = document.querySelector(".js-score-response")
let scoreResponseMatch = '';
let updatedScoreMatch = document.querySelector(".js-score-response-one")

function function7() {
 if(result === 'You win') {
  updatedScore.innerHTML = score.wins
 } 
}

function function8() {
  if(result === 'You lose') {
   updatedScoreMatch.innerHTML = score.losses
  } 
 }
